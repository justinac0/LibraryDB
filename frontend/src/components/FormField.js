import React from "react";

const FormField = ({ label, type = "text", name, onChange, required = false }) => {
    return (
        <>
            <label>
                {label}

                <br/>
                <input className="Textfield" name={name} type={type} onChange={e => onChange(e.target.value)} required={required}/>
                <br/>
            </label>
        </>
    );
};

export default FormField;