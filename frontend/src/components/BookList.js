import { useLibrary } from "../context/Library";
import Book from "./Book"

const BookList = (props) => {
    const { books, filteredBooks } = useLibrary();

    return (
        <div>
            { filteredBooks.length > 0 ? 
                filteredBooks.map((info, idx) => (
                    <Book key={idx} title={info.title} author={info.author} description={info.description} />
                ))
            :
                books.map((info, idx) => (
                    <Book key={idx} title={info.title} author={info.author} description={info.description} />
                ))
            }
        </div>
    );
}

export default BookList;
