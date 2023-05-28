import '../assets/styles/Logo.css'

function Logo(props) {
    const componentStyle = {
        top: props.top,
        left: props.left,
        color: props.color,
    }

    return (
        <div className="logo" style={componentStyle}>
            <div className="make">MAKE</div>
            <div className="start">START</div>
        </div>
    );
}

export default Logo;