import '../assets/styles/ProjectBox.css'

function ProjectBox(props) {
    return (
        <div className="box">
        <div className="form">{props.projectName}</div>
    </div>
    );
}

export default ProjectBox;