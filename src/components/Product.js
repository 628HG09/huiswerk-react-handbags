import React from "react";
function Product({redlabel, image, name, price, title}) {
    return (
        <article>
            <span>{redlabel}</span>
            <img src={image} alt={name}/>
            <p>{name}</p>
            <h4>{price} euro</h4>
        </article>

    )
}

export default Product;