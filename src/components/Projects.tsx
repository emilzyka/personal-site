import React from 'react';
import Section from './common/Section';
import { BiCode } from 'react-icons/bi';
import card from '../../public/card.jpg';
import tiles from '../../public/tiles.jpg';
import lib from '../../public/library.jpg';
import recipe from '../../public/recipe.jpg';

function Projects() {
  const projects = [
    {
      id: 1,
      img: tiles,
      title: 'Master of Towers',
      github: 'https://github.com/emilzyka/HanoiTowerMaster',
    },
    {
      id: 2,
      img: card,
      title: 'Online Store',
      github: 'https://github.com/emilzyka/E-commerceShop',
    },
    {
      id: 3,
      img: lib,
      title: 'Library Website',
      github: 'https://github.com/emilzyka/LibraryApp',
    },
    {
      id: 4,
      img: recipe,
      title: 'Recipe Web Scraper',
      github: 'https://github.com/emilzyka/ICA-Grocery-List',
    },
  ];

  return (
    <Section
      sectionId='projects'
      title='Projects'
      subtitle='This section displays some of my student projects.'>
      <div className='grid gap-8 lg:gap-14 lg:grid-cols-2'>
        {projects.map(({ id, img, title, github }) => (
          <div
            key={id}
            className='max-w-lg flex rounded-2xl overflow-hidden border border-rose-400 duration-300 ease-in-out hover:scale-105'>
            <div className='w-1/4 flex flex-col items-center justify-evenly p-2'>
              <h2 className='text-base italic'>{title}</h2>
              <a
                href={github}
                target='_blank'
                rel='noopener noreferrer'
                className='text-4xl cursor-pointer duration-150 hover:scale-110 hover:text-rose-600'>
                <BiCode />
              </a>
            </div>
            <img src={img} alt='' className='w-3/4' />
          </div>
        ))}
      </div>
    </Section>
  );
}

export default Projects;
