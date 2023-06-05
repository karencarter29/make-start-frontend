import React, { useEffect, useState } from 'react';

import '../assets/styles/Home.css'
import Logo from '../components/Logo'
import LoginButtons from '../components/LoginButtons'
import ProjectBox from '../components/ProjectBox'
import axios, { HttpStatusCode } from 'axios';


const Home = (props) => {
    const urlGetProjects = 'http://localhost:8585/project';
    const [projects, setProjects] = useState([]);
    
    useEffect(() => {
        getProjects();
    }, []);

    const getProjects = async () => {
        axios.get(urlGetProjects, {params: {size: 10}})
            .then(function (response) {
                if (response.status === HttpStatusCode.Ok) {
                    console.log(response.data);
                    setProjects(response.data);
                } else {
                    alert("Can't retrieve projects from server");
                }
            })
            .catch(function (error) {
                if (error.response) {
                    console.log(error.response.data);
                    console.log(error.response.status);
                    console.log(error.response.headers);
                }
            });
    }

    return(
    <>
        <header>
            <Logo top="15px" left="119px" color="white" />
            <LoginButtons />
        </header>
        <div className='container'>
            <div className='projects'>

                {projects.map((project) => (
                    <ProjectBox project={project} />
                ))}

            </div>
            <div className='filters'>
                THIS IS SECTION FOR FILTERS<br></br>
            </div>
        </div>
        <footer>
            <div className="footerText">MAKESTART © COPYRIGHT 2023</div>
        </footer>
    </>
    );
}
  
  export default Home;