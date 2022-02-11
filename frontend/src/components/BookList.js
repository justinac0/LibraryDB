import { useLibrary } from "../context/Library";
import Book from "./Book"

const BookList = (props) => {
    const { books } = useLibrary();

    return (
        <div>
            {books && books.map((info, idx) => (
                <Book key={idx} title={info.title} author={info.author} description={info.description} />
            ))}
        </div>
    );
}

export default BookList;