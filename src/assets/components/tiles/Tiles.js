import React from 'react';

function Tiles({title, image, children}) {
    return (
        <section>
            <h2> {title}</h2>
            <img src={image} alt={title} />
        >
            {children}
        </section>
    );
}

export default Tiles;