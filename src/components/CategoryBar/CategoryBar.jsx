import React, { useState, useEffect } from "react";
import { Button } from '../Button/Button'
import './CategoryBar.scss'

export function CategoryBar() {

    const [category, setCategory] = useState('promocoes')

    function toggleCategory(category) {
        setCategory(category)
    }

    useEffect(() => {
        console.log('CATEGORY', category)
    }, [category])

    return (
        <div className="bar" >
            <div className="categorybar">
                <Button estilo='btn1' onClick={() => toggleCategory('promocoes')}>PROMOCOES</Button>
                <Button estilo='btn1' onClick={() => toggleCategory('masculino')}>MASCULINO</Button>
                <Button estilo='btn1' onClick={() => toggleCategory('feminino')}>FEMININO</Button>
            </div>
            <div className='category-selected'>
                <h1>{category.toUpperCase()}</h1>
            </div>

        </div>
    )
}