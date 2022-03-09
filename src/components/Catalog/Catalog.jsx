import React from "react";

import './Catalog.scss';

import { Card } from '../Card/Card'

export function Catalog() {


    let products = [
        {   id:1,
            name: 'A',
        },
        {   id:1,
            name: 'A',
        },
        {   id:1,
            name: 'A',
        },
        {   id:1,
            name: 'A',
        },
        {   id:1,
            name: 'A',
        },
        {   id:1,
            name: 'A',
        },
        {   id:1,
            name: 'A',
        },
        {   id:1,
            name: 'A',
        },
        {   id:1,
            name: 'A',
        },
        {   id:1,
            name: 'A',
        },
        {   id:1,
            name: 'A',
        },
        {   id:1,
            name: 'A',
        },
        {   id:1,
            name: 'A',
        },
        {   id:1,
            name: 'A',
        },
        {   id:1,
            name: 'A',
        },
        {   id:1,
            name: 'A',
        },
        {   id:1,
            name: 'A',
        },
        {   id:1,
            name: 'A',
        },
        {   id:1,
            name: 'A',
        },
        {   id:1,
            name: 'A',
        },
        {   id:1,
            name: 'A',
        },
        {   id:1,
            name: 'A',
        },
        
    ]


    function showProducts(){
        return products.map(product =>{
            return <Card key={product.id} product={product}></Card>
        })
    }

    return (
        <div className="catalog">
            <div className="catalog-filter">
                <h1>Filter</h1>
                <div>DSDSDSD</div>
                <div>DSDSDSD</div>
                <div>DSDSDSD</div>
                <div>DSDSDSD</div>
                <div>DSDSDSD</div>
                <div>DSDSDSD</div>
                <div>DSDSDSD</div>
                <div>DSDSDSD</div>
            </div>
            <div className="catalog-items">
                {showProducts()}
                {/* <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card> */}
            </div>
        </div>
    )
}