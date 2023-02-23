import React from 'react';
import { MdNightsStay, MdWbSunny } from 'react-icons/md';
import Dropdown from './common/Dropdown';
import { GrMail } from 'react-icons/gr';
import { BsLinkedin, BsGithub } from 'react-icons/bs';

function Header({
  darkMode,
  darkModeSet,
}: {
  darkMode: boolean;
  darkModeSet: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const socials = [
    {
      id: 1,
      link: 'https://www.linkedin.com/in/emil-zyka-4a6823257/',
      icon: <BsLinkedin />,
    },
    {
      id: 2,
      link: 'https://github.com/emilzyka',
      icon: <BsGithub />,
    },
    {
      id: 3,
      link: 'mailto:"emil.zyka@gmail.com"',
      icon: <GrMail />,
    },
  ];

  return (
    <header className='bg-white dark:bg-gray-800 text-gray-900 dark:text-white sticky top-0 z-50'>
      <nav className='flex flex-wrap items-center justify-between mx-auto p-1'>
        <div className='flex'>
          <Dropdown />
          {socials.map(({ id, link, icon }) => (
            <a
              href={link}
              key={id}
              target='_blank'
              rel='noopener noreferrer'
              className='cursor-pointer text-2xl p-2  duration-300 hover:text-rose-600 ml-5'>
              {icon}
            </a>
          ))}
        </div>
        <div onClick={() => darkModeSet(!darkMode)}>
          {darkMode ? (
            <MdWbSunny className='text-2xl mr-3 cursor-pointer duration-300 hover:text-rose-600' />
          ) : (
            <MdNightsStay className='text-2xl mr-3 cursor-pointer duration-300 hover:text-rose-600' />
          )}
        </div>
      </nav>
    </header>
  );
}

export default Header;
