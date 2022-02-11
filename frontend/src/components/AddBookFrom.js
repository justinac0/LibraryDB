import { useState } from "react";
import { useLibrary } from "../context/Library";

const AddBookForm = () => {
    const { addBook } = useLibrary();

    const [name, setName] = useState("");
    const [author, setAuthor] = useState("");
    const [description, setDescription] = useState("");

    return (
        <div className="addBookForm">
            <h2>Add Book</h2>
            <form onSubmit={e => {
                e.preventDefault();
                addBook({name, author, description});
            }
            }>
                <label for="name">Name</label>
                <br />
                <input type="text" name="name" onChange={(e) => setName(e.target.value)}></input>
                <br />
                <label for="author">Author</label>
                <br />
                <input type="text" name="author" onChange={(e) => setAuthor(e.target.value)}></input>
                <br />
                <label for="description">Description</label>
                <br />
                <textarea name="description" onChange={(e) => setDescription(e.target.value)}></textarea>
                <br />
                <button type="submit">Add Book</button>
            </form>
        </div>
    );
}

export default AddBookForm;