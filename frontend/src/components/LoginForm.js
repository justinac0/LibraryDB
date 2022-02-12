import "../styles/account-form.css"

import React, { useState } from "react";

import { useAuth } from "../context/Auth"
import FormField from "./FormField";

const LoginForm = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const auth = useAuth();

    const onSubmit = async (e) => {
        e.preventDefault();
        try {
            const status = await auth.login(username, password);
            auth.updateToken(status);
            console.log(status);
        } catch (error) {
            // Display error message on screen (also return a useful error message from flask in json form)
            setPassword("");
            console.warn(error);
        }
    };

    return (
        <form onSubmit={onSubmit}>
            <h1><u>Login</u></h1>
            <FormField label="Username:" name="username" onChange={setUsername} value={username} required />
            <FormField label="Password:" name="password" type="password" onChange={setPassword} value={password} required />

            <input className="Button FullWidth" type="submit" value={"Login"}/>
        </form>
    );
}

export default LoginForm;