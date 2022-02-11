import React, { createContext, useContext, useEffect, useState } from "react";

import { useAuth } from "./Auth"

const LibraryContext = createContext();

export const LibraryProvider = ({children}) => {
    const library = useLibraryProvider();
    return (
        <LibraryContext.Provider value={library}>{children}</LibraryContext.Provider>
    );
}

const useLibraryProvider = () => {
    const [books, setBooks] = useState([{}]);

    const auth = useAuth();

    const fetchBooks = () => {
        return fetch("http://localhost:5000/books", {method: "GET"})
            .then(response => response.json())
            .catch(error => console.error(error));
    }

    const loadBooks = async () => {
        const loaded = await fetchBooks();
        setBooks(loaded);
    }

    useEffect(() => {
        fetchBooks().then(books => setBooks(books));
    }, []);

    const addBook = async(book) => {
        const thing = fetch("http://localhost:5000/books", { method: "POST",
            headers: {
                "token": auth.token,
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(book)
                
        })
        .then(response => response.json())
        .catch(error => console.error(error));

        console.log(await thing);

        const newBooks = [
            ...books,
            book
        ];

        setBooks(newBooks);
        return newBooks;
    }
    
    return {
        books,
        loadBooks,
        addBook,
    }
}

export const useLibrary = () => {
    return useContext(LibraryContext);
}
