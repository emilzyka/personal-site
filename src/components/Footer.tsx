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
      <p className='text-center mb-5 text-gray-500 italic'>Built with</p>
      <div className='flex justify-center gap-6'>
        {tech.map(({ id, icon }) => (
          <div
            key={id}
            className='flex flex-col items-center justify-center p-4
            shadow-sm dark:shadow-gray-50 shadow-gray-900 rounded-xl duration-300 ease-in-out hover:scale-110'>
            {icon}
          </div>
        ))}
      </div>
      <section className='min-h-fit flex flex-col justify-center items-center py-4 text-center ml-10 '>
        <div className='flex justify-center w-full gap-4'>
          <p className='text-base font-light text-gray-500'>2023 Emile Zyka</p>
          <p className='font-light text-base italic text-gray-500'>
            Photos: MNM ZAMEER
          </p>
        </div>
        <a
          href={'https://github.com/emilzyka/personal-site'}
          target='_blank'
          rel='noopener noreferrer'
          className='text-4xl cursor-pointer text-gray-500 duration-150 hover:scale-110 hover:text-rose-600 mr-10'>
          <BiCode />
        </a>
      </section>
    </div>
  );
}

export default Footer;
