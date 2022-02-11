import { useLibrary } from "../context/Library";
import Book from "./Book"

const BookList = (props) => {
    const { books, loadBooks } = useLibrary();

    return (
        <div>
            <button className="Button LoginButton" onClick={() => loadBooks() }>Reload Books</button>
            {books && books.map((info, idx) => (
                <Book key={idx} title={info.title} author={info.author} description={info.description} />
            ))}
        </div>
    );
}

export default BookList;