import React from 'react';
import '../app/styles/skills.css';

const Skills = () => {
  return (
    <div  id='skills' className='skills-container'>
        <div className='skills-grid'>
            {/* First column: Heading and Paragraph */}
            <div data-aos="zoom-in-up" className='skills-left'>
                <h2 className='skills-heading'>Technologies I work with</h2>
                <p className='skills-para'>
                    I have a solid foundation in web development, specializing in coding languages <br />like HTML, CSS, and JavaScript, and often includes knowledge of frameworks,<br /> and responsive design principles.
                </p>
            </div>
            {/* Second Column: Skills */}
            <div className='skills-right'>
                <div className='skills-icons-grid'>
                    <div className='skills-space'>
                        <h2 data-aos="zoom-in-up">Next.js</h2>
                        <h2 data-aos="zoom-in-up">Typescript</h2>
                        <h2 data-aos="zoom-in-up">React.js</h2>
                    </div>

                    <div className='skills-space'>
                        <h2 data-aos="zoom-in-up">Tailwind</h2>
                        <h2 data-aos="zoom-in-up">CSS</h2>
                        <h2 data-aos="zoom-in-up">Node js</h2>

                    </div>
                </div>
            </div>
        </div>

    </div>
  );
};

export default Skills;