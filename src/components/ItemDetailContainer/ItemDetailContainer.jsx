import React, {useState, useEffect } from "react";
import productsData from "../data/productsData.json"
import ItemDetail from "../ItemDetail/ItemDetail"
import "./ItemDetailContainer.css"

const ItemDetailContainer = () => {
const [product, setProduct] = useState([]);

useEffect(() => {
    const getProduct = (productList) =>
    new Promise((resolve, reject) => {
        setTimeout(() => {
            if (productList.length) {
                resolve(productList.find((prod) => prod.id === "1"));          
            } else {
              reject("Error");
            }
        }, 2000);           
    });

 getProduct(productsData)
  .then((res) => setProduct (res))
  .catch((err) => console.log('$ {err}: No encontrado'));
}, []);

return (
    <section className="product-detail">
        <h3>Detalle de producto</h3>
       (product ? <ItemDetail item={product} /> : <p>Buscando...</p>  )
    </section>
);

};

export default ItemDetailContainer;
