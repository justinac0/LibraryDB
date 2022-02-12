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
    const [books, setBooks] = useState([]);
    const [filteredBooks, setFilteredBooks] = useState([]);

    const auth = useAuth();

    const fetchBooks = () => {
        return fetch("http://localhost:5000/books", {method: "GET"})
            .then(response => response.json())
            .catch(error => console.error(error));
    }

    const loadBooks = async () => {
        const loaded = await fetchBooks();
        setBooks(loaded);
        console.log(books);
    }

    const filterBooks = (term) => {
        let filtered = [];

        books.forEach(book => {
            const ltitle = book.title.toLowerCase();
            const ldesc = book.description.toLowerCase();
            const lauth = book.author.toLowerCase();
            const lpub = book.publisher.toLowerCase();
            const lterm = term.toLowerCase();

            if (ltitle.match(lterm) ||
                ldesc.match(lterm)  ||
                lauth.match(lterm)  ||
                lpub.match(lterm)) {
                filtered.push(book);
            }
        });

        setFilteredBooks(filtered);
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
        filteredBooks,
        filterBooks,
        loadBooks,
        addBook,
    }
}

export const useLibrary = () => {
    return useContext(LibraryContext);
}
