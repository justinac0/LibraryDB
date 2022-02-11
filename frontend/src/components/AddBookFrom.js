import { useState } from "react";
import { useLibrary } from "../context/Library";
import { useAuth } from "../context/Auth";

import FormField from "./FormField"

const AddBookForm = () => {
    const { addBook } = useLibrary();

    const [title, setTitle] = useState("");
    const [publisher, setPublisher] = useState("");
    const [author, setAuthor] = useState("");
    const [description, setDescription] = useState("");
    const [isbn, setISBN] = useState("");

    const auth = useAuth();

    return (auth.token &&
        <div className="addBookForm">
            <h2>Add Book</h2>
            <form onSubmit={e => {
                e.preventDefault();
                addBook({title, publisher, author, description, isbn});
            }
            }>
                <FormField label="Title:" name="title" onChange={setTitle} required/>
                <FormField label="Publisher:" name="publisher" onChange={setPublisher} required/>
                <FormField label="Author:" name="author" onChange={setAuthor} required/>
                <FormField label="Description:" name="description" onChange={setDescription} required/>
                <FormField label="ISBN:" name="isbn" onChange={setISBN} required/>

                <button type="submit">Add Book</button>
            </form>
        </div>
    );
}

export default AddBookForm;