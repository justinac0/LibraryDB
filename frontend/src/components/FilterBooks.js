import React, { useState } from "react";
import { useLibrary } from "../context/Library";

import FormField from "./FormField";

const FilterBooks = () => {

    const library = useLibrary();
    const [seachTerm, setSearchTerm] = useState("");

    return (
        <>
            <form>
                <FormField name="search" onChange={setSearchTerm} required />
                <button className="Button" onClick={(e) => {
                    e.preventDefault();
                    library.filterBooks(seachTerm);
                }}>search</button>
            </form>
            <br />
        </>
    );
}

export default FilterBooks;