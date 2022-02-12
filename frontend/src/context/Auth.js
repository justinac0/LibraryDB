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
    const [username, setUsername] = useState("");
    const [isAuthentic, setIsAuthentic] = useState(false);

    const login = (username, password) => {
        return fetch("http://localhost:5000/login", {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({username, password})
        })
        .then(response => {
            setIsAuthentic(true);
            setUsername(username);

            return response.json();
        })
    }

    const logout = () => {
        setToken("")
        setUsername("")
        setIsAuthentic(false);
    }

    const register = (username, email, password) => {
        return fetch("http://localhost:5000/register", {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({username, email, password})
        })
        .then(response => response.json())
    }

    const updateToken = (new_token) => {
        setToken(new_token);
    } 

    return {
        token,
        username,
        isAuthentic,
        updateToken,
        login,
        logout,
        register,
    }
}

export const useAuth = () => {
    return useContext(AuthContext);
}
