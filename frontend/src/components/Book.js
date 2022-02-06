import "../styles/book.css";

import React, { useState } from "react";

const Book = ({name, author, description}) => {
    const [isExpanded, setExpanded] = useState(false);

    function toggleExpand() {
        setExpanded(!isExpanded);
    }

    return (
        <article className={isExpanded ? "BookDetail Book" : "BookCard Book"} onClick={isExpanded ? _ => {} : toggleExpand}>
            <img className="CoverImage" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/JPEG_example_subimage.svg/256px-JPEG_example_subimage.svg.png" alt="" onDragStart={e => e.preventDefault()}/>

            <section className="BookInfo">
                <h2>{name}</h2>
                <p><b>{author}</b></p>
                <p className={!isExpanded && "BookInfoFallOff"}>{description}</p>

                <button className={(isExpanded ? "" : "Hide") + " " + "BookCloseDetail Button"} onClick={toggleExpand}>
                    <b>Close</b>
                </button>
            </section>

        </article>
    );
}

export default Book;
