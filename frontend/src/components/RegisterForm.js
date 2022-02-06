import "../styles/login-form.css"

import React, { useState } from "react";

const RegisterForm = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const onSubmit = async (e) => {
        const response = await fetch("http://localhost:5000/v1/users", {
            method: "POST",
            headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
            },
            body: JSON.stringify({username, email, password})
        });
        console.log(await response.json());
    };

    return (
        <>
            <h1><u>Register</u></h1>
            {/* Login */}
            <form onSubmit={onSubmit}>
                <label for="username">Username:</label>
                <br />
                <input className="Textfield" name="username" type="text" onChange={e => setUsername(e.target.value)} required/>
                
                <br />
                <label for="email">Email:</label>
                <br />
                <input className="Textfield" name="email" type="text" onChange={e => setEmail(e.target.value)} required/>

                <br />
                <label for="password">Password:</label>
                <br />
                <input className="Textfield" name="password" type="password" onChange={e => setPassword(e.target.value)} required/>
                <br />

                <input className="Button LoginButton" type="submit" value={"Submit"}/>
            </form>
        </>
    );
}

export default RegisterForm;