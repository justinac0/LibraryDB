import React from "react";
import { useLibrary } from "./Library";
import Book from "./Book"

const BookList = (props) => {
    const { books } = useLibrary();

    return (
        <>
            {books.map(info => (
                <Book key={info.name} {...info}/>
            ))}
        </>
    );
}

export default BookList;