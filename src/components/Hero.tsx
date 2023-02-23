import React from 'react';

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
    <section className='min-h-screen flex flex-col justify-center items-center p-5 text-center bg-hero-pattern bg-fixed'>
      <div className='flex flex-col'>
        <h2 className='text-4xl  uppercase font-bold text-rose-500 dark:text-white'>
          Hello.
        </h2>
        <h2 className='text-4xl  text-white dark:text-rose-500  uppercase font-bold ml-2'>
          I'm Émile Zyka
        </h2>
      </div>
      <h2 className='text-4xl uppercase text-rose-500 dark:text-white font-bold'>
        IT Consultant.
      </h2>
      <h3 className='py-3 text-2xl underline text-white'>
        Aspiring full-stack developer.
      </h3>
      <div className='mt-8 down-button'>
        <button
          onClick={goToAbout}
          className='flex border hover:bg-rose-600 items-center justify-center text-white 
          hover:scale-110 hover:cursor-pointer w-36 h-12 animate-bounce'>
          Learn more
        </button>
      </div>
    </section>
  );
}

export default Hero;
