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
            description: "Dune is a 1965 epic science fiction novel by American author Frank Herbert, originally published as two separate serials in Analog magazine. It tied with Roger Zelazny's This Immortal for the Hugo Award in 1966 and it won the inaugural Nebula Award for Best Novel. It is the first installment of the Dune saga. In 2003, it was described as the world's best-selling science fiction novel.",
        },
        {
            name: "The Hobbit",
            author: "J. R. R. Tolkien",
            description: "The Hobbit, or There and Back Again is a children's fantasy novel by English author J. R. R. Tolkien. It was published in 1937 to wide critical acclaim, being nominated for the Carnegie Medal and awarded a prize from the New York Herald Tribune for best juvenile fiction. The book remains popular and is recognized as a classic in children's literature.",    
        },
        {
            name: "Maus: A Survivor's Tale: 1. My Father Bleeds History",
            author: "Art Speigelman",
            description: "The first installment of the Pulitzer Prize-winning graphic novel acclaimed as “the most affecting and successful narrative ever done about the Holocaust” (Wall Street Journal) and “the first masterpiece in comic book history” (The New Yorker).",
        },
        {
            name: "Maus: A Survivor's Tale: 2. And Here My Troubles Began",
            author: "Art Speigelman",
            description: "Acclaimed as a quiet triumph and a brutally moving work of art, the first volume of Art Spieglman's Maus introduced readers to Vladek Spiegleman, a Jewish survivor of Hitler's Europe, and his son, a cartoonist trying to come to terms with his father, his father's terrifying story, and History itself. Its form, the cartoon (the Nazis are cats, the Jews mice), succeeds perfectly in shocking us out of any lingering sense of familiararity with the events described, approaching, as it does, the unspeakable through the diminutive.",
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
