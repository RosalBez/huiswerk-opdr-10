import React from 'react';

function Article({label, title, price, image, }) {
    return (<article>

            <span> {label}  </span>
            <img src={image} alt={title} />
            <h4> {title}</h4>
            <p> {price}</p>

        </article>);
}

export default Article;