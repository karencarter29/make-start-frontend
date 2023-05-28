import React from 'react';

import '../assets/styles/Home.css'
import Logo from '../components/Logo'
import LoginButtons from '../components/LoginButtons'
import ProjectBox from '../components/ProjectBox'


const Home = (props) => {
    const projects = ['Project #1', 'Project #2', 'Project #3', 'Project #4'];

    return(
    <>
        <header>
            <Logo top="15px" left="119px" color="white" />
            <LoginButtons />
        </header>
        <div className='container'>
            <div className='projects'>

                {projects.map((project) => (
                    <ProjectBox projectName={project} />
                ))}

            </div>
            <div className='filters'>
                THIS IS SECTION FOR FILTERS
            </div>
        </div>
        <footer>
            <div className="footerText">MAKESTART © COPYRIGHT 2023</div>
        </footer>
    </>
    );
}
  
  export default Home;