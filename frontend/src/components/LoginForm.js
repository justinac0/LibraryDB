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

        auth.updateToken(await auth.login(username, password));
    };

    return (
        <>
            {auth.token ?
                <button  className="Button LoginButton" onClick={auth.logout}>Logout</button>
            :
                <form onSubmit={onSubmit}>
                    <h1><u>Login</u></h1>
                    <FormField label="Username:" name="username" onChange={setUsername} required/>
                    <FormField label="Password:" name="password" type="password" onChange={setPassword} required/>

                    <input className="Button LoginButton" type="submit" value={"Login"}/>
                </form>
            }
        </>
    );
}

export default LoginForm;