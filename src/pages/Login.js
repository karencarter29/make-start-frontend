import React from 'react';
import Logo from '../components/Logo';
import '../assets/styles/Login.css';

function Login() {
    return(
        <>
            <div className='login-container'>
                <div className='login-image'></div>
                <div className='login-content'>
                    <Logo color='#064789' top='100px' left='0px'/>
                    <div className='login-title'>ВХІД</div>
                    <form>
                        <label for='login'>Логін</label><br></br>
                        <input type='text' id='login' name='login'></input><br></br>
                        <label for='password'>Пароль</label><br></br>
                        <input type='text' id='password' name='password'></input><br></br>
                    </form>
                    <button className='login-button'>Увійти</button>
                    <div className='login-no-profile'>Нема акаунту? Зареєструватись.</div>
                    <div className='login-copyright'>MAKESTART © COPYRIGHT 2023</div>
                </div>
            </div>
        </>
    );
}

export default Login