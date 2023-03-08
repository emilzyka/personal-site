import React from 'react';
import { SiTailwindcss, SiTypescript } from 'react-icons/si';
import { IoLogoReact } from 'react-icons/io5';
import { BiCode } from 'react-icons/bi';

function Footer() {
  const tech = [
    {
      id: 1,
      icon: <IoLogoReact className='w-10 h-10 text-cyan-300' />,
    },
    {
      id: 2,
      icon: <SiTypescript className='w-10 h-10 text-blue-500 ' />,
    },
    {
      id: 3,
      icon: <SiTailwindcss className='w-10 h-10 text-cyan-600' />,
    },
  ];
  return (
    <div>
      <p className='text-center mb-5 text-gray-500 italic'>
        Built by myself, with:
      </p>
      <div className='flex justify-center gap-6 mb-3'>
        {tech.map(({ id, icon }) => (
          <div
            key={id}
            className='flex flex-col items-center justify-center p-4
           rounded-xl duration-300 ease-in-out hover:scale-110'>
            {icon}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Footer;
