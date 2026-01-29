import React from 'react'
import { FaShareFromSquare } from 'react-icons/fa6'

const about = () => {
  return (
    <div className='bg-black mx-auto text-white pb-1'>
     
        <div className='relative w-full border-b border-white h-80 overflow-hidden'>
              <img 
                className='w-full h-full object-cover brightness-30' 
                src="https://images.squarespace-cdn.com/content/v1/5bb24b7ebfba3e46d18e7c5a/1553280656948-M4R826WI1V7SWWDSF7AL/spiderman.jpg?format=1500w" 
                alt="" 
              />
              
             
              <div className='absolute inset-0 flex items-center justify-start px-8 md:px-20'>
                <div className='flex flex-col gap-2 max-w-3xl'>
                  <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold text-white'>About us</h1>
                  <p className='text-sm md:text-base font-bold'>
                    At AboutUs, we are a dynamic and innovative company committed to 
                    providing comprehensive information and valuable insights on a wide 
                    range of topics.
                  </p>
                </div>
              </div>
        </div>
             

        <div className="px-8 md:px-20">
          <p className='mt-12 text-3xl md:text-4xl lg:text-5xl font-bold'>
            Crafting Unforgettable Experiences
          </p>

          <div className='flex flex-col lg:flex-row gap-8 lg:gap-12 mt-10'>
            <div className='flex-1'>
              <p className='text-sm md:text-base leading-relaxed'>
                At Gameverse, we believe that gaming is not just a pastime—it's a way of life. We are 
                driven by a shared passion for gaming and a deep appreciation for the immersive worlds, 
                thrilling challenges, and unforgettable experiences that games offer. Our mission is to 
                create a vibrant and inclusive community where gamers of all backgrounds can come 
                together to celebrate their love for games.
              </p>
            </div>

            <div className='flex-1'>
              <p className='text-sm md:text-base leading-relaxed'>
                Our platform offers a vast selection of games across various genres, platforms, and 
                styles. From action-packed adventures and immersive role-playing games to mind-
                bending puzzles and competitive multiplayer battles, we strive to cater to diverse gaming 
                interests and preferences. With our carefully curated collection of games, you can 
                discover new titles, revisit classics, and embark on endless gaming adventures.
              </p>
            </div>
          </div>
        </div>

        <div className='bg-black text-white py-20'>
      <div className='px-8 md:px-20 max-w-7xl mx-auto'>
        
      
        <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-16'>
          Creating Gaming Magic The Ultimate Destination for Gamers
        </h1>

       
        <div className='flex flex-col lg:flex-row gap-8 lg:gap-12 mb-20'>
        
          <div className='flex-1'>
            <h2 className='text-2xl md:text-3xl font-bold mb-6'>
              Gaming Potential with Our Expertise
            </h2>
            <div className='space-y-4 text-sm md:text-base leading-relaxed'>
              <p>
                We understand the importance of staying up-to-date with the latest trends and 
                technological advancements in the gaming industry. That's why we constantly update our 
                library to ensure that you have access to the hottest releases and cutting-edge games. 
                Our team of passionate gamers scours the gaming landscape to bring you the most 
                exciting and innovative titles, ensuring that you're always at the forefront of the gaming 
                world. But Gameverse is more than just a platform for games. It's a community where 
                gamers can connect, share experiences, and forge lasting friendships. We provide 
                forums, chat rooms, and social features that enable you to interact with fellow gamers, 
                exchange tips and strategies, and participate in exciting gaming events and 
                competitions.
              </p>
              <p>
                Whether you're seeking a friendly multiplayer match or seeking advice from seasoned 
                gamers, Gameverse is the place to be. At Gameverse, we value your gaming journey and 
                strive to enhance it through exceptional customer service.
              </p>
            </div>
          </div>

        
          <div className='flex-1'>
            <img 
              className='w-full h-auto rounded-lg object-cover' 
              src="https://images.unsplash.com/photo-1593305841991-05c297ba4575?w=800" 
              alt="Gaming Setup" 
            />
          </div>
        </div>

       
        <div className='flex flex-col lg:flex-row-reverse gap-8 lg:gap-12 mb-20'>
       
          <div className='flex-1'>
            <h2 className='text-2xl md:text-3xl font-bold mb-6'>
              Your Gaming Journey with Us
            </h2>
            <div className='space-y-4 text-sm md:text-base leading-relaxed'>
              <p>
                Our knowledgeable support team is always ready to assist you, whether you have 
                questions about games, technical issues, or recommendations for your next gaming 
                adventure. We are committed to providing a seamless and enjoyable gaming experience, 
                ensuring that you can focus on what matters most gaming to your heart's content. Join us 
                at Gameverse and embark on an extraordinary gaming journey. Immerse yourself in 
                captivating worlds, conquer epic
              </p>
              <p>
                With our state-of-the-art gaming setups, cutting-edge technology, and a diverse 
                collection of games, we offer an unparalleled gaming experience. From classic titles that 
                bring back nostalgic memories to the latest releases that push the boundaries of 
                innovation, our gaming hub caters to a wide range of gaming interests and preferences.
              </p>
            </div>
          </div>

     
          <div className='flex-1'>
            <img 
              className='w-full h-auto rounded-lg object-cover' 
              src="https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800" 
              alt="Gaming Setup Desk" 
            />
          </div>
        </div>

       
        <div className='text-center mb-12'>
          <h2 className='text-3xl md:text-4xl font-bold mb-4'>
            About our services
          </h2>
          <p className='text-sm md:text-base max-w-3xl mx-auto'>
            Our mission is to empower individuals with knowledge and facilitate meaningful connections 
            through our platform. We understand the importance of reliable and up-to-date 
            information in today's fast-paced world.
          </p>
        </div>

       
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
          
          
          <div className='border border-white rounded-lg p-6 hover:bg-gray-900 transition-colors'>
            <div className='flex items-start justify-between mb-4'>
              <h3 className='text-xl font-bold'>Fast delivery</h3>
              <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M13 10V3L4 14h7v7l9-11h-7z' />
              </svg>
            </div>
            <p className='text-sm leading-relaxed'>
              The specific delivery time will vary depending on the shipping address and the selected delivery option. 
              Customers can track their order online to see the...
            </p>
          </div>

          
          <div className='border border-white rounded-lg p-6 hover:bg-gray-900 transition-colors'>
            <div className='flex items-start justify-between mb-4'>
              <h3 className='text-xl font-bold'>Many offers</h3>
              <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z' />
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M15 12a3 3 0 11-6 0 3 3 0 016 0z' />
              </svg>
            </div>
            <p className='text-sm leading-relaxed'>
              CMS also offers a variety of training and technical assistance to help providers and state agencies meet 
              their responsibilities under Medicare, Medicaid, and...
            </p>
          </div>

       
          <div className='border border-white rounded-lg p-6 hover:bg-gray-900 transition-colors'>
            <div className='flex items-start justify-between mb-4'>
              <h3 className='text-xl font-bold'>24/7 support</h3>
              <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z' />
              </svg>
            </div>
            <p className='text-sm leading-relaxed'>
              CMS Service support is available 24 hours a day, 7 days a week. You can reach them by phone, email, or 
              chat. Here are the contact information for CMS...
            </p>
          </div>

        </div>

      </div>
    </div>
    </div>
  )
}

export default about