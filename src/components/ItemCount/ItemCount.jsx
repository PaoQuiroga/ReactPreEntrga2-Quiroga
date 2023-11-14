import React, { useState } from "react";
import "./ItemCount.css";

const ItemCount = ({initial, stock, onAdd}) => {
    const {count, setCount} = useState(initial);

    const increment = () => {
        if (count < stock) {
            setCount(count + 1);
        }
    }
    const decrement = () => {
        if (count > initial) {
            setCount(count - 1);
        }
    };

    return (
      <div className="counter">
        <p>Stock: {stock}</p>
        <div className="btn-count">
            <button onClick={decrement} disabled={count == initial}>
              -
            </button>

            <p>Seleccion: {count}</p>   
            <button onClick={increment} disabled={count == stock}>
                +
            </button>
        </div>
        <button onClick={() => onAdd}>Agregar</button>  
        </div>
    );

};

export default ItemCount;