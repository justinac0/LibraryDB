import React, { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const auth = useAuthProvider();
    return (
        <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>
    );
}

const useAuthProvider = () => {
    const [token, setToken] = useState("");

    const login = (username, password) => {
        return fetch("http://localhost:5000/login", {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({username, password})
        })
        .then(response => response.json())
        .catch(error => console.log(error));
    }

    const logout = () => {
        setToken("")
    }

    const register = (username, password) => {
        return fetch("http://localhost:5000/register", {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({username, password})
        })
        .then(response => response.json())
        .catch(error => console.log(error));
    }

    const updateToken = (new_token) => {
        setToken(new_token);
    } 

    return {
        token,
        updateToken,
        login,
        logout,
        register,
    }
}

export const useAuth = () => {
    return useContext(AuthContext);
}
