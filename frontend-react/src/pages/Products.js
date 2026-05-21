import React, { useEffect, useState } from "react";
import { getProducts } from "../services/api";

function Products() {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        loadProducts();
    }, []);

    const loadProducts = async () => {
        const data = await getProducts();
        setProducts(data);
    };

    return (
        <div>

            <h1>Products Page</h1>

            <div style={{
                display:'grid',
                gridTemplateColumns:'repeat(3, 1fr)',
                gap:'20px'
            }}>

                {products.map(product => (

                    <div
                        key={product.id}
                        style={{
                            border:'1px solid gray',
                            padding:'20px'
                        }}
                    >
                        <h3>{product.name}</h3>

                        <p>{product.description}</p>

                        <h4>₹ {product.price}</h4>

                        <button>Add To Cart</button>

                    </div>

                ))}

            </div>

        </div>
    );
}

export default Products;