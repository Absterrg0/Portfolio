'use client';
import { useRouter } from 'next/navigation';
import { FocusCards } from './ui/focusCard';
export default function Project() {
  const router = useRouter();

  // Updated projectCards with URLs
  const projectCards = [
    { title: 'ToDo List', src: '/project1.jpg', url: 'https://todo-abstergo.vercel.app/' },
    { title: 'Blog', src: '/project2.jpg', url: 'https://blog-web-abstergo.vercel.app/' },
    { title: 'Crypto Wallet', src: '/project3.jpg', url: 'https://wallet-abstergo.vercel.app/' },
    { title: '', src: '/comingSoon.jpg', url: '#' },
    { title: '', src: '/comingSoon.jpg', url: '#' },
    { title: '', src: '/comingSoon.jpg', url: '#' },
  ];

  // Handle card click to redirect
  const handleCardClick = (url: string) => {
    router.push(url);
  };

  return (
    <section id='projects'>
       <div className="bg-black text-white min-h-screen p-8">
      <div className="text-4xl font-bold mb-8 text-center">Projects</div>
      <FocusCards cards={projectCards.slice(0, 6)} onCardClick={handleCardClick} />
    </div>

    </section>

  );
}
