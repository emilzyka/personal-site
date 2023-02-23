import React, { ReactNode } from 'react';

function Section({
  title,
  sectionId,
  subtitle,
  children,
}: {
  title: string;
  sectionId: string;
  subtitle: string;
  children: ReactNode;
}) {
  return (
    <section
      className='min-h-fit flex flex-col justify-start items-center 
    py-16 px-5 text-center'
      id={sectionId}>
      <h3 className='py-3 text-3xl lg:text-5x'>{title}</h3>
      <p className='max-w-xl text-2xl lg:text-3xl font-light text-gray-500 mb-10 md:text-base'>
        {subtitle}
      </p>
      {children}
    </section>
  );
}

export default Section;
