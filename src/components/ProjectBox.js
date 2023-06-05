import '../assets/styles/ProjectBox.css'
import { useNavigate } from 'react-router';

function ProjectBox(props) {
    const navigate = useNavigate();

    const redirectToProject = async () => {
        navigate("/project/" + props.project.projectName);
    }

    return (
        <div className="box" onClick={redirectToProject}>
            <div className="form" >{props.project.projectName}</div>
            <div className='box-content'>
                <div className='description'>{props.project.description}</div>
                <div className='members'>Team: {props.project.countOfTeammates}, Open positions: {props.project.countOfProposition}</div>
            </div>
            <div className='box-left-content'>
                <div className='price'>{props.project.price}$</div>
            </div>
        </div>
    );
}

export default ProjectBox;