import "../styles/nav.css"

import React from "react";

import { useAuth } from "../context/Auth";

const Nav = () => {
    const auth = useAuth();

    return (
        <div className="Nav">
            <h1>library-db</h1>

            {auth.isAuthentic &&
                <>
                    <p>logged in as: {auth.username}</p>
                    <button className="Button" onClick={auth.logout}>logout</button>
                    <br />
                    <br />
                </>
            }
        </div>
    );
}

export default Nav;