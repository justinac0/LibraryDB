import React from "react";

const FormField = ({ children, label, type = "text", onChange, ...options }) => {
    return (
        <>
            <label>
                {label}

                <br/>
                <input className="Textfield" type={type} onChange={e => onChange(e.target.value)} {...options}/>
                <br/>
            </label>
        </>
    );
};

export default FormField;