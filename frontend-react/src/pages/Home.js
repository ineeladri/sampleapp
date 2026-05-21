import React from "react";

function Home() {

    const featuredProducts = [
        { id: 1, name: "Gaming Laptop", price: 85000 },
        { id: 2, name: "Wireless Headphones", price: 4500 },
        { id: 3, name: "Smart Watch", price: 7000 }
    ];

    return (
        <div>
            <h1>Welcome To Azure Ecommerce Store</h1>

            <p>
                Sample ecommerce application deployed on Azure Web App.
            </p>

            <h2>Featured Products</h2>

            <div style={{display:'flex', gap:'20px'}}>

                {featuredProducts.map(product => (
                    <div
                        key={product.id}
                        style={{
                            border:'1px solid gray',
                            padding:'15px',
                            width:'250px'
                        }}
                    >
                        <h3>{product.name}</h3>
                        <p>₹ {product.price}</p>
                        <button>Add To Cart</button>
                    </div>
                ))}

            </div>
        </div>
    );
}

export default Home;