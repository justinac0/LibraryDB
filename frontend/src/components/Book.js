import "../styles/book.css";

import React, { useEffect, useRef, useState } from "react";

const Book = ({ title, author, description }) => {
    const [isExpanded, setExpanded] = useState(false);

    const card = useRef(null);

    useEffect(() => {
        if (isExpanded) {
            card.current.scrollIntoView({block: "center", inline: "center"});
        }
    }, [isExpanded]);

    const toggleExpand = (e) => {
        setExpanded(!isExpanded);
    }

   
    return (
        <article key={title} className={ isExpanded ? "BookDetail Book" : "BookCard Book"} onClick={isExpanded ? _ => {} : toggleExpand }>
            <img className="CoverImage" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/JPEG_example_subimage.svg/256px-JPEG_example_subimage.svg.png" alt="" onDragStart={e => e.preventDefault()}/>

            <section className="BookInfo" ref={card}>
                <h2>{title}</h2>
                <p><b>{author}</b></p>
                <p className={isExpanded ? "" : "BookInfoFallOff"}>{description}</p>

                <button className={(isExpanded ? "" : "Hide") + " BookCloseDetail Button"} onClick={toggleExpand}>
                    <b>Close</b>
                </button>
            </section>

        </article>
    );
}

export default Book;
