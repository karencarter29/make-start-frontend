import '../assets/styles/ProjectBox.css'

function ProjectBox(props) {
    return (
        <div className="box">
            <div className="form">{props.project.projectName}</div>
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