import "../styles/account-form.css"

import React, { useState } from "react";
import FormField from "./FormField";

import { useAuth } from "../context/Auth";

const RegisterForm = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    // const [email, setEmail] = useState("");

    const auth = useAuth();

    const onSubmit = async (e) => {
        e.preventDefault();
        auth.register(username, password);
    };

    return (
        <>
            <form onSubmit={onSubmit}>
                <h1><u>Register</u></h1>
                <FormField label="Username:" name="username" onChange={setUsername} required/>
                <FormField label="Password:" name="password" onChange={setPassword} required/>

                <input className="Button LoginButton" type="submit" value={"Submit"}/>
            </form>
        </>
    );
}

export default RegisterForm;