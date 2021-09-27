import React from 'react'
import { useParams } from 'react-router'

export const ProductDetail = ({title, image, price, description, category}) => {


  
    return (
        <div className="container mt-3">
            <h1>{title}</h1>
            <div className="produucto-detail-container">
                <div className="image-container">
                    <img src={image} />
                </div>
                <div className="description-container">
                    <p>{description}</p>
                    <h3>{price}</h3>
                </div>
            </div>
        </div>
    )
}
