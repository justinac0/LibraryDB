import React, { createContext, useContext, useEffect, useState } from "react";

const LibraryContext = createContext();

export const LibraryProvider = ({children}) => {
    const library = useLibraryProvider();
    return (
        <LibraryContext.Provider value={library}>{children}</LibraryContext.Provider>
    );
}

const useLibraryProvider = () => {
    const [books, setBooks] = useState([{}]);

    const fetchBooks = async () => {
        const response = await fetch("http://localhost:5000/books", {method: "GET"});
        const data = await response.json();
        
        return data;
    }

    const loadBooks = async () => {
        const loaded = await fetchBooks();
        setBooks(loaded);
    }

    useEffect(() => {
        fetchBooks().then(books => setBooks(books));
    }, []);

    const addBook = (book) => {
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
