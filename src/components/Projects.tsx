import React from 'react';
import Section from './common/Section';
import { BsGithub } from 'react-icons/bs';
import student from '../img/student.jpg';
import brickGame from '../img/brickGame.jpg';
import threeD from '../img/3d.jpg';
import solarSystem from '../img/solar.jpg';
import recipe from '../img/recipe.jpg';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const ProjectCard = ({
  id,
  img,
  title,
  github,
  darkMode,
  description,
}: {
  id: number;
  img: string;
  title: string;
  github: string;
  darkMode: boolean;
  description: string;
}) => {
  return (
    <VerticalTimelineElement
      key={id}
      contentStyle={{
        background: `${darkMode ? 'rgb(17 24 39)' : 'rgb(251 113 133)'}`,
        color: 'rgb(107 114 128)',
      }}
      contentArrowStyle={{
        borderRight: `${
          darkMode ? '7px solid rgb(225 29 72)' : '7px solid rgb(251 113 133)'
        }`,
      }}
      icon={
        <a
          href={github}
          target='_blank'
          rel='noopener noreferrer'
          className='text-4xl cursor-pointer duration-150 hover:scale-110 hover:text-black'>
          <BsGithub className='animate-pulse' />
        </a>
      }
      iconStyle={{
        background: `${darkMode ? 'rgb(225 29 72)' : 'rgb(251 113 133)'}`,
        color: '#fff',
      }}>
      <div>
        <h3 className='font-light text-xl text-left text-white m-2'>{title}</h3>
        <img src={img} alt='' className='rounded-lg border-none' />
        <p className='text-left'>{description}</p>
      </div>
    </VerticalTimelineElement>
  );
};

function Projects({ darkMode }: { darkMode: boolean }) {
  const projects = [
    {
      id: 1,
      img: brickGame,
      title: 'Master of Towers',
      github: 'https://github.com/emilzyka/HanoiTowerMaster',
      description:
        'A game inspired by towers of hanoi but with more complex towers and objects. Console app in C#.',
    },
    {
      id: 2,
      img: solarSystem,
      title: 'Solar System',
      github: 'https://github.com/sardnas/solar-system',
      description:
        'A 3D website made with react three fiber displaying the solar system and moons for planets. Backend made with .Net.',
    },
    {
      id: 3,
      img: student,
      title: 'Online Store For Students',
      github: 'https://github.com/emilzyka/E-commerceShop',
      description: 'A webshop for students. Made with PHP.',
    },
    {
      id: 4,
      img: threeD,
      title: '3D Website',
      github: 'https://github.com/emilzyka/3d-game-site',
      description: 'A website displaying an awesome 3d Model.',
    },
    {
      id: 5,
      img: recipe,
      title: 'Recipe Web Scraper',
      github: 'https://github.com/emilzyka/ICA-Grocery-List',
      description:
        'Webscraper to generate shopping list for you based on random recipes.',
    },
  ];

  return (
    <Section
      sectionId='projects'
      title='Projects'
      subtitle='Examples of what I have done so far.'>
      <div>
        <VerticalTimeline>
          {projects.map(({ id, img, title, github, description }) => (
            <ProjectCard
              id={id}
              darkMode={darkMode}
              img={img}
              title={title}
              github={github}
              description={description}
            />
          ))}
        </VerticalTimeline>
      </div>
    </Section>
  );
}

export default Projects;
