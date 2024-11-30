 import React from 'react'

 const skills = () => {
   return (
     <div id='skills' className='container pt-32'>
       <div className='grid md:grid-cols-2 gap-20 itmes-center'>
         <div data-aos="zoom-in-up">
           <h2 className='text 4xl md:text-5xl'>Technologies I Work With</h2>
           <p className='text-gray-500 pt-2'>
            I have a solid foundation in a web development,specializing in HTML,CSS and Javascript.My experience extends to using framworks like React and Next.js to create dynamic and user-friendly application.I'm also proficient in Tailwind CSS for efficient and design.with a passion for learing I stay update on the latest technologies to enhance my skill set and contribute effectively to projects. 
           </p>
         </div>
         <div>
          <div className='grid grid-cols-2 text-accent text-3xl sm:text-4xl'>
            <div className='space-y-2'>
              <h2 data-aos="zoom-in-up">Html</h2>
              <h2 data-aos="zoom-in-up">Css</h2>
              <h2 data-aos="zoom-in-up">Javascript</h2>
            </div>
            <div className='space-y-2'>
              <h2 data-aos="zoom-in-up">Typescript</h2>
              <h2 data-aos="zoom-in-up">React.js</h2>
              <h2 data-aos="zoom-in-up">Next.js</h2>
            </div>
          </div>
         </div>
       </div>
     </div>
   )
       }

 export default skills

