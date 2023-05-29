import React, { useState } from 'react';
import axios from 'axios';

import Logo from '../components/Logo';
import '../assets/styles/Registration.css'

function Register() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [age, setAge] = useState(0);
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');

    function onSubmit() {
        sendUserInfo();
    }

    const sendUserInfo = async () => {      
        const url = 'http://localhost:8585/user';

        var jsonString = '{ "firstName": "' + firstName
            + '", "lastName": "' + lastName
            + '", "age": "' + age
            + '", "password": "' + password
            + '", "username": "' + username
            + '", "email": "' + email + '" }' ;

        var jsonObject = JSON.parse(jsonString);

        try {
            await axios.post(url, jsonObject);
            // Request was successful
            // Process the response data
        } catch (error) {
            // An error occurred during the request
            // Handle the error
        }
    }

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
                            <input type="text" id="firstName" name="firstName"
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)} /><br></br>

                            <label for="secondName">Прізвище</label><br></br>
                            <input type="text" id="secondName" name="secondName" 
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)} /><br></br>
    
                            <label for="email">Пошта</label>
                            <label for="age">Вік</label><br></br>

                            <input type="text" id="email" name="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)} />
                            <input type="number" id="age" name="age"
                                value={age}
                                onChange={(e) => setAge(e.target.value)} /><br></br>
    
                            <label for="username">Логін</label><br></br>
                            <input type="text" id="username" name="username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)} /><br></br>
    
                            <label for="password">Пароль</label><br></br>
                            <input type="text" id="password" name="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)} /><br></br>

                            <label for="repeatPassword">Підтвердіть пароль</label><br></br>
                            <input type="text" id="repeatPassword" name="repeatPassword"></input><br></br>
                        </div>
                    </div>
                    <button className='register-button' onClick={onSubmit}>Зареєструватись</button>
                    <div className='register-copyright'>MAKESTART © COPYRIGHT 2023</div>
                </div>
            </div>
        </>
    );
}

export default Register;