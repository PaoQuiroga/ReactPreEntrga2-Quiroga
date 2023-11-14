import React from "react";


const Item = ({id,nombre,precio,img,description}) => {
    return (
        <article>
            <p>Id: {id}</p>
            <p>Nombre: {nombre}</p>
            <p>Precio: ${precio} </p>
            <p>Img: {img}</p>
            <p>Descripcion: {description}</p>
            
        </article>
    );
};

export default Item;