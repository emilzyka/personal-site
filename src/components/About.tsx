import React from 'react';
import Section from './common/Section';
import { SlClock } from 'react-icons/sl';
import { HiWrenchScrewdriver } from 'react-icons/hi2';
import { AiOutlineMobile } from 'react-icons/ai';
import { FaPenFancy } from 'react-icons/fa';
import portrait from '../img/me.jpg';
import bg from '../img/stripes.jpg';

function About() {
  const aboutPrinciples = [
    {
      id: 1,
      icon: (
        <SlClock className='w-16 h-16 md:w-20 object-contain text-rose-400 p-1.5 border-rose-400' />
      ),
      desc: "I'm receptive to training and capable of picking up new concepts quickly.",
    },
    {
      id: 2,
      icon: (
        <AiOutlineMobile className='w-16 h-16 md:w-20 object-contain text-rose-400 p-1.5 border-rose-400' />
      ),
      desc: 'I believe technology can improve the way people live their everyday lives.',
    },
    {
      id: 3,
      icon: (
        <HiWrenchScrewdriver className='w-16 h-16 md:w-20 object-contain text-rose-400 p-1.5 border-rose-400' />
      ),
      desc: "I'm curious and regularly explore new areas wich is why I can keep with modern trends.",
    },

    {
      id: 4,
      icon: (
        <FaPenFancy className='w-16 h-16 md:w-20 object-contain text-rose-400 p-1.5 border-rose-400' />
      ),
      desc: 'I enjoy tackling a problem with an open mind and finding creative solutions.',
    },
  ];

  return (
    <Section title="Who's this guy?" sectionId='about' subtitle=''>
      <div
        style={{ backgroundImage: `url(${bg})` }}
        className='flex items-center bg-bottom rounded-md'>
        <p className='text-3xl text-white opacity-95 font-bold max-w-sm lg:max-w-md'>
          Software Developer, passion for maintainability
        </p>
        <div>
          <img
            src={portrait}
            alt=''
            className='w-72 h-96 md:w-72 md:h-96 object-cover'
          />
        </div>
      </div>
      <p className='max-w-xl mt-10 font-light text-justify text-lg lg:text-2xl text-gray-400'>
        I currently work as an IT Consultant at Consid. I have a degree in
        system development. I'm intrested in software architecture and
        full-stack web developement. I'm always looking for challanges where I
        am able to apply my experience and knowledge and have opportunities to
        learn and develop. I have a serious passion for writing clean and
        maintainable code. Otherwise I enjoy playing disc golf. I also try to
        play lots of board and video games. Besides that I like reading
        philosophy, especially ancient greek philosophy, where Plato is my
        favorite philosopher.
      </p>
      <p className='text-5xl font-bold mt-12 underline underline-offset-8 decoration-rose-400 decoration-1'>
        Competencies
      </p>
      <p className='mt-8 p-1 text-justify font-light text-gray-400 text-lg'>
        HTML, CSS, TS, JS, React, Redux, Bootstrap,
        <br></br>
        TailwindCSS, C#, Python, PHP, ASP.NET,
        <br></br>
        Microsoft SQL Server, PostgreSQL, SQLite,
        <br></br>
        Azure DevOps, Git, VS code, Visual Studio.
        <br></br>
      </p>
      <div className='grid gap-5 smm:grid-cols-1 grid-cols-2 lg:gap-10 m-10'>
        {aboutPrinciples.map(({ id, icon, desc }) => (
          <div
            key={id}
            className='flex flex-col items-center justify-center p-3 '>
            {icon}
            <h3 className='mt-2 text-base max-w-xs'>{desc}</h3>
          </div>
        ))}
      </div>
    </Section>
  );
}

export default About;
