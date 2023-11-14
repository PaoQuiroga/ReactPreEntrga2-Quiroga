import { useState } from "react";
import ItemCount from "../ItemCount/ItemCount";
import "./ItemDetail.css";

const ItemDetail = ({item}) => {
    const {quantity, setQuantity} = useState(0);

    const onAdd = (quantityToAdd) => {
        setQuantity(quantityToAdd);
    };
    return (
        <article className="card"> 
         <div className="img-container">
            <img src={item.img} className="card-img" />
          </div>
          <div className="card-description">
            <p className="card-nombre">{item.nombre}</p>

            <p>{item.description}</p>
            <p>Precio: ${item.precio}</p>
            {quantity ? (
                <a href="/#">Ver {quantity} productos agregados</a>
            ) : (
            <ItemCount initial={1} stock={20} />
            )}
         </div>
        </article>
    );
};

export default ItemDetail;