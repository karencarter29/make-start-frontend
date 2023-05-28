import React from 'react';
import Logo from '../components/Logo';
import '../assets/styles/Registration.css'

function Register() {
    return(
        <>
            <div className='register-container'>
                <div className='register-image'></div>
                <div className='register-content'>
                    <Logo top='5%' color='#064789' />
                    <div className='register-title'>РЕЄСТРАЦІЯ</div>
                    <div className='form-container'>
                        <div className='register-form'>
                            <label for="firstName">Ім'я</label><br></br>
                            <input type="text" id="firstName" name="firstName"></input><br></br>
                            <label for="secondName">Прізвище</label><br></br>
                            <input type="text" id="secondName" name="secondName"></input><br></br>
    
                            <label for="email">Пошта</label>
                            <label for="age">Вік</label><br></br>
                            <input type="text" id="email" name="email"></input>
                            <input type="number" id="age" name="age"></input><br></br>
    
                            <label for="username">Логін</label><br></br>
                            <input type="text" id="username" name="username"></input><br></br>
    
                            <label for="password">Пароль</label><br></br>
                            <input type="text" id="password" name="password"></input><br></br>
                            <label for="repeatPassword">Підтвердіть пароль</label><br></br>
                            <input type="text" id="repeatPassword" name="repeatPassword"></input><br></br>
                        </div>
                    </div>
                    <button className='register-button'>Зареєструватись</button>
                    <div className='register-copyright'>MAKESTART © COPYRIGHT 2023</div>
                </div>
            </div>
        </>
    );
}

export default Register;