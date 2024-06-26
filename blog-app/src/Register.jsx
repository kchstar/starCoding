import React, { useState } from 'react';
export const Register = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');

    const handleSubmit = (e) =>{
        email.preventDefault();
        console.log(email);
    }
    return (
        <div className="auth-form-container">
        <from onSubmit={handleSubmit}>
            <label htmlFor="name">Full name</label>
            <input value={name} name="name" id="name" placeholder="full "></input>
            <label htmlFor="email">email</label>
            <input value={email} onChange ={(e) => setEmail(e.target.value)} type="email" placeholder="youremail@gmail.com" id="email" name="email" />
            <label htmlFor="password">password</label>
            <input value={pass} onChange ={(e) => setPass(e.target.value)} type="password" placeholder="**********" id="password" name="password" />
            <button type="submit">Log In</button>
        </from> 
        <button onClick={() => props.onFormSwitch('login')}>Already have an account? Login here</button>
        </div>
    )
}