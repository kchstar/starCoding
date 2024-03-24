import React, {useState} from "react";

export const Login = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    
    const handleSubmit = (e) =>{
        email.preventDefault();
        console.log(email);
    }

    return (
        <div className="auth-form-container">
            <from className="login-form" onSubmit={handleSubmit}>
                <label htmlFor="email">email</label>
                <input value={email} onChange ={(e) => setEmail(e.target.value)} type="email" placeholder="youremail@gmail.com" id="email" name="email" />
                <label htmlFor="password">password</label>
                <input value={pass} onChange ={(e) => setPass(e.target.value)} type="password" placeholder="**********" id="password" name="password" />
                <button type="submit">Log In</button>
            </from>
            <button onClick={() => props.onFormSwitch('register')}>Don't have an account? Register here</button>
        </div>
    )
}