import '../assets/styles/LoginButtons.css'
import { Link } from "react-router-dom";

function LoginButtons() {
    return(
        <div className="loginArea">
            <div className="profileIcon"></div>
            <div className="b_login">
                <Link className="s_button" to="/login" >ВХІД</Link>
            </div>
            <div className="b_signUp">
                <Link className="s_button" to="/register" >РЕЄСТРАЦІЯ</Link>
            </div>
        </div>
    );
}

export default LoginButtons;