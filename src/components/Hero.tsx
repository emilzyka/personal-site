import React from 'react';
import bg from '../img/bgHero.jpg';
import { motion } from 'framer-motion';

const container = {
  visible: {
    scale: 1,
    transition: {
      delayChildren: 1,
      staggerChildren: 0.5,
    },
  },
};

const item = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
  },
};

function Hero() {
  const goToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  window.addEventListener('scroll', function () {
    const downArr = document.querySelector('.down-button');
    if (this.scrollY >= 220) downArr?.classList.add('hide-down-button');
    else downArr?.classList.remove('hide-down-button');
  });

  return (
    <section
      style={{ backgroundImage: `url(${bg})` }}
      className='min-h-screen flex flex-col justify-center items-center p-5 text-center bg-fixed'>
      <motion.ul
        initial='hidden'
        animate='visible'
        variants={container}
        className='flex flex-col items-center'>
        <motion.li
          variants={item}
          className='text-4xl  uppercase font-bold text-slate-800'>
          Hello.
        </motion.li>
        <motion.li
          variants={item}
          className='text-4xl  text-rose-500  uppercase font-bold ml-2'>
          I'm Émile Zyka
        </motion.li>
        <motion.li
          variants={item}
          className='text-4xl uppercase text-slate-800 font-bold'>
          IT Consultant.
        </motion.li>

        <motion.li
          variants={item}
          className='py-3 text-2xl underline text-slate-800'>
          Aspiring full-stack developer.
        </motion.li>

        <motion.li className='mt-8 down-button' variants={item}>
          <button
            onClick={goToAbout}
            className='flex border hover:bg-rose-600 items-center justify-center text-white 
          hover:scale-110 hover:cursor-pointer w-36 h-12 animate-bounce'>
            Learn more
          </button>
        </motion.li>
      </motion.ul>
    </section>
  );
}

export default Hero;
