import React, { useState } from 'react';
import { HiMenu } from 'react-icons/hi';

export default function Dropdown() {
  const [isOpen, openSet] = useState(false);

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
    openSet(!isOpen);
  };

  const goToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
    openSet(!isOpen);
  };

  const goToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
    openSet(!isOpen);
  };

  return (
    <div className='dropdown'>
      <button
        className='text-black dark:text-white duration-300 dark:hover:text-rose-600
        hover:text-rose-600 font-medium px-4 py-2.5 text-center inline-flex items-center'
        onClick={() => openSet(!isOpen)}>
        <HiMenu className='text-2xl cursor-pointer' />
      </button>

      <div
        id='dropdown'
        onMouseLeave={() => openSet(!isOpen)}
        className={`absolute z-10 w-44 rounded-lg divide-y ${
          isOpen ? 'block' : 'hidden'
        }`}>
        <ul className=' z-10 w-44 rounded-lg '>
          <li>
            <button
              onClick={goToTop}
              className='block text-left w-44 py-2 px-4 dark:hover:bg-gray-700
             hover:bg-slate-200 dark:bg-gray-800 bg-slate-100'>
              Home
            </button>
          </li>
          <li>
            <button
              onClick={goToAbout}
              className='block text-left w-44 py-2 px-4 dark:hover:bg-gray-700
             hover:bg-slate-200 dark:bg-gray-800 bg-slate-100'>
              About
            </button>
          </li>
          <li>
            <button
              onClick={goToProjects}
              className='block text-left w-44 py-2 px-4 dark:hover:bg-gray-700
             hover:bg-slate-200 dark:bg-gray-800 bg-slate-100'>
              Projects
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}
