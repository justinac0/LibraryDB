import React, { useState } from "react";

const Book = ({name, author, description}) => {
    const [isExpanded, setExpanded] = useState(false);

    function toggleExpand() {
        setExpanded(!isExpanded);
    }

    return (
        <article className={isExpanded ? "ExpandedBook" : "Book"} onClick={isExpanded ? _ => {} : toggleExpand}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/JPEG_example_subimage.svg/256px-JPEG_example_subimage.svg.png" alt=""  onDragStart={e => e.preventDefault()}/>

            <div>
                <h2>{name}</h2>
                <h4>{author}</h4>
                <p>{description}</p>
                {isExpanded && (
                    <button className="Button" onClick={toggleExpand}>
                        <b>Close</b>
                    </button>
                )}
            </div>

        </article>
    );
}

export default Book;
