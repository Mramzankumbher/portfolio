import React from 'react';
import Heading from './Heading';
import Card from './Card';

const data = [
  {
    id: 0,
    title: 'Resume builder',
    desc: 'Html Css Javascript',
    img: '/screenshot.png',
    tags: ['Html', 'Css', 'Javascript'],
  },
  {
    id: 1,
    title: 'Form',
    desc: 'Html Css',
    img: '/html.form.png',
    tags: ['Html','Css'],
  },
  {
    id: 2,
    title: 'Student Form',
    desc: 'Html Css',
    img: '/form2.png',
    tags: ['Html','Css'],
  },
];

const Projects = () => {
  return (
    <div id='projects' className='container pt-32'>
      <Heading title='My Projects' />
      <div className='grid gap-10 xl:gap-0 xl:gap-y-10 md:grid-cols-2 lg:grid-cols-3 place-items-center'>
        {data.map((el) => (
          <Card
            key={el.id}
            title={el.title}
            desc={el.desc}
            img={el.img}
            tags={el.tags}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;