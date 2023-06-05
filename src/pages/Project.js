import React, { useEffect, useState } from 'react';
import Logo from '../components/Logo';
import LoginButtons from '../components/LoginButtons';
import { useParams } from 'react-router';
import axios from 'axios';
import '../assets/styles/Project.css';

function Project() {
    const urlGetProjectDetails = "http://localhost:8585/project/detail";
    const { projectNameParam } = useParams();
    
    const [project, setProject] = useState({
        projectName: "",
        description: "",
        price: 0,
        owner: {
            firstName: "",
            lastName: "",
            age: "",
            userName: "",
            email: ""
        },
        positions: {
            seniority: {
                name: ""
            },
            positionStatus: "",
            experienceYears: 0,
            languages: [
                {
                    languageName: ""
                }
            ]
        },
        team: {
            teamName: "Noname team",
            users: []
        }
    });

    const [positions, setPositions] = useState({
            seniority: {
                name: ""
            },
            positionStatus: "",
            experienceYears: 0,
            languages: [
                {
                    languageName: ""
                }
            ]
    });

    const [team, setTeam] = useState({
        teamName: "Noname team",
        users: []
    });

    

    useEffect(() => {
        const getProjectDetails = async () => {
            axios.get(urlGetProjectDetails, {params: {projectName: projectNameParam}})
                .then(response => {
                    console.log(response);
                    setProject(response.data);
                    setPositions(project.positions);
                    setTeam(project.team);
                })
                .catch(function (error) {
                    if (error.response) {
                        console.log(error.response.data);
                        console.log(error.response.status);
                        console.log(error.response.headers);
                    }
                });
        }
        getProjectDetails();
    }, []);

    return (
        <>
        <header>
            <Logo top="15px" left="119px" color="white" />
            <LoginButtons />
        </header>
        <div className='container' style={{paddingTop: "30px"}}>
        <div className='projects'>
            <div className='projectAreaName'>Project name</div>
            <div className='projectNameField'>{project.projectName}</div>

            <div className='projectAreaName'>Description</div>
            <div className='projectDescriptionArea'>{project.description}</div>

            <div className='projectAreaName'>Owner Info</div>
            <div className='projectDescriptionArea'>
                {project.owner.firstName} {project.owner.lastName}<br/>
                {project.owner.email}
            </div>

            <div className='projectAreaName'>Team name</div>
            <div className='projectDescriptionArea'>
                {team.teamName === "" ? "Noname team" : team.teamName}
            </div>

            <div className='projectAreaName'>Team members</div>
            <div className='projectDescriptionArea'>
                {team.users.length === 0 ? "No members" : team.users}
            </div>

            <div className='projectAreaName'>Open positions</div>
            <div className='projectDescriptionArea'>
                {positions.seniority.name === "" ? "No open positions" : positions.seniority.name}
            </div>

        </div>
        <div className='filters'>
            THIS IS RIGHT SECTION
        </div>
        </div>
        <footer style={{position: "absolute", bottom: 0}}>
            <div className="footerText">MAKESTART © COPYRIGHT 2023</div>
        </footer>
        </>
    );
}

export default Project;