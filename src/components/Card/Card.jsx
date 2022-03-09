import React from "react";

import './Card.scss'

export function Card (product){
    // console.log(product)
    return (
        <div className="card shadow">
            {/* <span>dSJkdjskdjslkd    </span> */}
            <span>{product.product.id}</span>
            <span>{product.product.name}</span>
        </div>
    )
}