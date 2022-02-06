import "../styles/login-form.css"

import React, { useState } from "react";

const LoginForm = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const onSubmit = async (e) => {
        e.preventDefault();
        // const response = await fetch("http://localhost:5000/v1/users", {
        //     method: "POST",
        //     headers: {
        //     'Accept': 'application/json',
        //     'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify({username, email, password})
        // });
        // console.log(await response.json());
    };

    return (
        <>
            <h1><u>Login</u></h1>
            {/* Login */}
            <form onSubmit={onSubmit}>
                <FormField label="Username:" name="username" onChange={setUsername} required/>
                <FormField label="Password:" name="password" type="password" onChange={setPassword} required/>

                <input className="Button LoginButton" type="submit" value={"Login"}/>
            </form>
        </>
    );
}

const FormField = ({ label, type = "text", name, onChange, required = false }) => {
    return (
        <>
            <label for={name}>{label}</label>
            <br />
            <input className="Textfield" name={name} type={type} onChange={e => onChange(e.target.value)} required={required}/>
            <br />
        </>
    );
};

export default LoginForm;