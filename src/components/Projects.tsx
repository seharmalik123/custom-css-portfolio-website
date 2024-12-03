import React from 'react'
import Heading from './Heading';
import Card from './Card';
import '../app/styles/projects.css';


const data = [
    {
        id:0,
        title:'Amazon Clone Home Page',
        desc:'Amazon Clone Home page with the help of Html amd Css.',
        img: '/project1.png',
        tags: ['Html', 'CSS', 'Node', 'Typescript'],
    },
    {
        id:1,
        title:'Countdown Timer',
        desc:'A Next.js and Typescript powered application to track time with an interactive countdown features.',
        img: '/project2.png',
        tags: ['Next.JS', 'Node', 'CSS', 'Typescript'],
    },
      {
        id:2,
        title:'StopWatch',
        desc:'A Next.js and Typescript powered application is a time-tracking tool used to measure the exact duration of an event.',
        img: '/project3.png',
        tags: ['Next.JS', 'Node', 'CSS', 'Typescript'],
      },
      {
        id:3,
        title:'Currency Convertor',
        desc:'A simple node and typescript project for converting currencies with real time rates.',
        img: '/project4.png',
        tags: ['Node', 'Typescript', 'Next.JS', 'CSS'],
    },
    {
      id:4,
      title:'Todo List',
      desc:'A React and typescript application for managing and organizing your task effieiently.',
      img: '/project5.png',
      tags: ['React', 'Typescript', 'Node', 'CSS'],
  },
  {
    id:5,
    title:'Static Interactive Resume',
    desc:'A typescript-based interactive resume built with Html and CSS, allowing users to showcase their skills dynamically.',
    img: '/project6.png',
    tags: ['Html', 'CSS', 'Typescript', 'node'],
},

];

const Projects = () => {
  return (
    <div id='projects' className='projects-container'>
      <Heading title='My Projects' />
      <div className='projects-grid projects-grid-xl projects-grid-md-2 projects-grid-lg-3 projects-center'>
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