import "../styles/account-form.css"

import React, { useState } from "react";
import FormField from "./FormField";

import { useAuth } from "../context/Auth";

const RegisterForm = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const auth = useAuth();

    const onSubmit = async (e) => {
        e.preventDefault();
        auth.register(username, email, password);

        setUsername("");
        setEmail("");
        setPassword("");
    };

    return (
        <>
            <form onSubmit={onSubmit}>
                <h1><u>Register</u></h1>
                <FormField label="Username:" name="username" onChange={setUsername} value={username} required />
                <FormField label="Email:" type="email" name="email" onChange={setEmail} value={email} required />
                <FormField label="Password:" type="password" name="password" onChange={setPassword} value={password} required />

                <input className="Button LoginButton" type="submit" value="Submit" />
            </form>
        </>
    );
}

export default RegisterForm;