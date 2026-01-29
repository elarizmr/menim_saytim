"use client";

import React from 'react';
import { FaCircleArrowRight } from 'react-icons/fa6';
import PlayStationTicker from './playstation';

const AboutPage = () => {
  const goToPage = (url: string) => {
    window.location.href = url;
  };

  const cards = [
    {
      img: "https://game-workdo.myshopify.com/cdn/shop/articles/4.png?v=1675061251",
      title: "Exposition Arcade Gamer...",
      text: "Many arcade games have short levels, simple and intuitive control schemes, and rapidly increasing...",
      link: "/blog/arcade" // Правильный путь для Next.js
    },
    {
      img: "https://game-workdo.myshopify.com/cdn/shop/articles/3.png?v=1675061187",
      title: "Playing Through the...",
      text: "Arising alongside video game development in the 1980s, the term gameplay was used solely within...",
      link: "/blog/through-the-game"
    },
    {
      img: "https://game-workdo.myshopify.com/cdn/shop/articles/2.png?v=1675061147",
      title: "The Game Boy Zone...",
      text: "The Game Boy was designed by Nintendo's chief engineer Gunpei Yokoi and its Nintendo R&D1 team...",
      link: "/blog/fifagame"
    },
    {
      img: "https://game-workdo.myshopify.com/cdn/shop/articles/1.png?v=1675061091",
      title: "Gumballs and Games...",
      text: "The right side of the device offers a port that allows a user to connect to system via a link...",
      link: "/blog/mortalcombat"
    }
  ];

  React.useEffect(() => {
    document.body.style.backgroundColor = 'black';
    document.documentElement.style.backgroundColor = 'black';
    
    return () => {
      document.body.style.backgroundColor = '';
      document.documentElement.style.backgroundColor = '';
    };
  }, []);

  return (
    <div className='bg-black'>
      <div className='bg-black p-24 text-white'>
        <div className='max-w-7xl mx-auto'>
          <h1 className='text-[50px] font-bold mb-8'>News</h1>
          <div className='flex gap-10 flex-wrap mt-5'>
            {cards.map((card, index) => (
              <div key={index} className='w-72 h-auto border border-white bg-white text-black text-left rounded-lg shadow-md overflow-hidden'>
                <img className='rounded-t-lg' src={card.img} alt={card.title} />
                <div className='p-4'>
                  <h1 className='mt-2 text-lg font-bold'>{card.title}</h1>
                  <p className='mt-1 text-sm'>{card.text}</p>
                  <button
                    onClick={() => goToPage(card.link)}
                    className='hover:scale-105 transition-transform flex items-center gap-2 mt-3 rounded-xl bg-red-500 text-[14px] text-white py-1 px-3'
                  >
                    Read More <FaCircleArrowRight />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <PlayStationTicker />
    </div>
  );
};

export default AboutPage;