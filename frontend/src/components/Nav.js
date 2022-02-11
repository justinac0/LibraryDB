import "../styles/nav.css"

import React from "react";

import { useAuth } from "../context/Auth";

const Nav = () => {
    const auth = useAuth();

    return (
        <header className="Nav">
            <nav>
                <h2>library-db</h2>
            </nav>

            <p className="shorty">{auth.token}</p>
        </header>
    );
}

export default Nav;