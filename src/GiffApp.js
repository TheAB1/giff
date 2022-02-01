import React, { useState } from 'react';
import AddCategory from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

const GiffApp = () => {
    const [categories, setCategories] = useState(['Enderman']);


    return (
        <>
            <h2> giff </h2>
            <hr></hr>
            <AddCategory setCategories={setCategories} />
            <hr></hr>
            <ol>
                {categories.map((cat) =>
                    <GifGrid key={cat} category={cat} />
                )}
            </ol>
        </>

    )
}

export default GiffApp; 