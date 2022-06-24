import React, { useState } from "react"
import { AddCategory,GifGrid } from "./components";


export const GifExpertApp = ()=>{
    const [categories, setCategories] = useState(['One Punch']);

    const onAddCategory = ( NewCategory) =>{ 
        if  ( categories.includes(NewCategory)) return; 
        //categories.push('valorant'); No se debe usar el push hasta entender bien el concepto de esto!
        setCategories([NewCategory,...categories])
        //setCategories(cate=>[...cate,'Valorant'])
    };

    return (
        <>
            {/* Titulo */}
            <h1>GifExpertApp</h1>

            {/* Input */}
            <AddCategory 
            //setCategories={setCategories}
            onNewCategory={ onAddCategory }

             />
            {/* Listado de Gif */}
            <ol>
                {categories.map((category)=>(
                      <GifGrid 
                            key={category} 
                            category = {category}
                            />
                    )
                )}
            </ol>
                {/* Gif Item */}
        </>
    )
}