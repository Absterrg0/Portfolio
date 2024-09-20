'use client';
import { useRouter } from 'next/navigation';
import { FocusCards } from './ui/focusCard';
import { motion } from 'framer-motion';

export default function Project() {
  const router = useRouter();

  // Updated projectCards with URLs
  const projectCards = [
    { title: 'ToDo List', src: '/project1.jpg', url: 'https://todo-abstergo.vercel.app/' },
    { title: 'Blog', src: '/project2.jpg', url: 'https://blog-web-abstergo.vercel.app/' },
    { title: 'Crypto Wallet', src: '/project3.jpg', url: 'https://wallet-abstergo.vercel.app/' },
    { title: 'Forums', src: '/project4.png', url: 'https://forums-abstergo.vercel.app/' },
    { title: 'Chat App', src: '/project5.png', url: 'https://github.com/Absterrg0/chatApp' },
    { title: 'OpenSource Repositories', src: '/project6.png', url: 'https://repoflow-abstergo.vercel.app/' },
  ];
  // Handle card click to redirect
  const handleCardClick = (url: string) => {
    router.push(url);
  };

  return (
    <section id='projects'>
      <div className="bg-black text-white min-h-screen p-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }} // Start with opacity 0 and move slightly down
          animate={{ opacity: 1, y: 0 }}  // Animate to full opacity and original position
          transition={{ duration: 0.9, ease: "easeOut" }} // Customize the timing of the animation
        >
          <div className="text-4xl font-bold mb-8 text-center">Projects</div>
          <FocusCards cards={projectCards.slice(0, 6)} onCardClick={handleCardClick} />
        </motion.div>
      </div>
    </section>
  );
}
