import React, { useState } from 'react';

import Logo from '../components/Logo';
import '../assets/styles/Login.css';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    function onSubmit() {
        // sendData();
    }

    return(
        <>
            <div className='login-container'>
                <div className='login-image'></div>
                <div className='login-content'>
                    <Logo color='#064789' top='100px' left='0px'/>
                    <div className='login-title'>ВХІД</div>
                    <form>
                        <label for='login'>Логін</label><br></br>
                        <input 
                            type='text' 
                            id='login' 
                            name='login'
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        /><br></br>
                        <label for='password'>Пароль</label><br></br>
                        <input 
                            type='text' 
                            id='password' 
                            name='password'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        /><br></br>
                    </form>
                    <button className='login-button' onClick={onSubmit}>Увійти</button>
                    <div className='login-no-profile'>Нема акаунту? Зареєструватись.</div>
                    <div className='login-copyright'>MAKESTART © COPYRIGHT 2023</div>
                </div>
            </div>
        </>
    );
}

export default Login