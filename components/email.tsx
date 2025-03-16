"use client"

import type React from "react"

import { useState } from "react"
import { Send } from "lucide-react"
import { toast } from "sonner"

export default function EmailComponent() {
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setIsLoading(true)

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          "Content-Type": "application/json",
        },
      })

      const data = await response.json()

      if (response.ok) {
        toast.success("Message sent successfully")
        // Reset the form
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        })
      } else {
        throw new Error(data.error || "Failed to send message")
      }
    } catch (error) {
        toast.error("Failed to send message")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <section className="mb-32">
      <h2 className="text-4xl font-bold mb-16 text-center bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">
        Get In Touch
      </h2>

      <div className="p-8 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-[0_0_30px_rgba(59,130,246,0.1)]">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="name" className="block text-cyan-300 font-medium">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-gray-100 
                           focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-transparent
                           transition-all duration-200"
                placeholder="John Doe"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="block text-cyan-300 font-medium">
                Your Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-gray-100 
                           focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-transparent
                           transition-all duration-200"
                placeholder="john@example.com"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="subject" className="block text-cyan-300 font-medium">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-gray-100 
                         focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-transparent
                         transition-all duration-200"
              placeholder="Project Inquiry"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="message" className="block text-cyan-300 font-medium">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={6}
              className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-gray-100 
                         focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-transparent
                         resize-none transition-all duration-200"
              placeholder="Tell me about your project or inquiry..."
            />
          </div>

          <div className="flex justify-end">
            <button
              type="submit"
              disabled={isLoading}
              className="px-8 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-medium
                         flex items-center gap-2 hover:shadow-[0_0_20px_rgba(59,130,246,0.5)] 
                         transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isLoading ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  <span>Sending...</span>
                </>
              ) : (
                <>
                  <Send className="w-5 h-5" />
                  <span>Send Message</span>
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}

