import React, { createContext, useContext, useState } from "react";

const LibraryContext = createContext();

export const LibraryProvider = ({children}) => {
    const library = useLibraryProvider();
    return (
        <LibraryContext.Provider value={library}>{children}</LibraryContext.Provider>
    );
}

const useLibraryProvider = () => {
    // get these from database at somepoint
    const [books, setBooks] = useState([{
            name: "Dune",
            author: "Frank Herbert",
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem, obcaecati?",
        },
        {
            name: "The Hobbit",
            author: "J. R. R. Tolkien",
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem, obcaecati?",    
        },
        {
            name: "Maus: A Survivor's Tale: 1. My Father Bleeds History",
            author: "Art Speigelman",
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem, obcaecati?",    
        },
        {
            name: "Maus: A Survivor's Tale: 2. And Here My Troubles Began",
            author: "Art Speigelman",
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem, obcaecati?",    
        },
        {
            name: "The Confessions of Saint Augustine",
            author: "R. C. Sproul",
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem, obcaecati?",    
        },
    ]);

    const addBook = (book) => {
        const newBooks = [
            ...books,
            book
        ];

        setBooks(newBooks);
        return newBooks;
    }

    const addTestBook = () => {
        const newBook = {
            name: "The Smelly",
            author: "Justin's Shower",
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem, obcaecati?",    
        };
        return addBook(newBook);
    }

    return {
        books,
        addBook,
        addTestBook,
    }
}

export const useLibrary = () => {
    return useContext(LibraryContext);
}
