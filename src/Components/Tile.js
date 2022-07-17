import React from 'react';

function Tile({img, description, title, children}) {
    return (
        <section>
            <img src={img} alt={description}/>
            <h2>{title}</h2>
            {children}
        </section>
    );
}

export default Tile;