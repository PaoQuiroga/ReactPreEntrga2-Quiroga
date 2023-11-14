import React, {useState, useEffect} from "react";
import productsData from "../data/productsData.json";
import ItemList from "../ItemList/ItemList";

const ItemListContainer = ({mensaje}) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const getProducts = (productsList) =>
        new Promise((resolve, reject) => {
            setTimeout(() => {
                if (productsList.length) {
                    resolve(productsList);          
                } else {
                  reject("Error");
                }
            }, 2000);           
        });

     getProducts(productsData)
      .then((res) => setProducts (res))
      .catch((err) => console.log('$ {err}: No hay productos'));
    }, []);

    return (
        <section>
            <h2>{mensaje}</h2>
            {products.length ? <ItemList list={products}/> : <p>No hay productos</p>}
        </section>
    );
 }

export default ItemListContainer