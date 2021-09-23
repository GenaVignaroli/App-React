import React from 'react'
import Item  from './Item'

const ItemList = ({productos}) => {
    return (
        <div className="row">
           {productos.map((producto, i)=>{
               return <Item producto={producto}/>
           })}
        </div>
    )
}

export default ItemList
