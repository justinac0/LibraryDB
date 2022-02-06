import React, { useState } from "react";

const Book = ({name, author, description}) => {
    const [isExpanded, setExpanded] = useState(false);

    function toggleExpand() {
        setExpanded(!isExpanded);
    }

    return (
        <article className={isExpanded ? "ExpandedBook" : "Book"} onClick={isExpanded ? _ => {} : toggleExpand}>
            {isExpanded && (
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/JPEG_example_subimage.svg/256px-JPEG_example_subimage.svg.png" alt=""  onDragStart={e => e.preventDefault()}/>
            )}

            <div className="Info">
                <h2>{name}</h2>
                <p><b>{author}</b></p>
                <p>{description}</p>
            </div>

            {isExpanded ? (
                <button className="Button" onClick={toggleExpand}>
                    <b>Close</b>
                </button>
            ) : (
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/JPEG_example_subimage.svg/256px-JPEG_example_subimage.svg.png" alt=""  onDragStart={e => e.preventDefault()}/>
            )}
        </article>
    );
}

export default Book;
