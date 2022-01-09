import React from 'react'
import './Gallery.css'
import Category from '../Category/Category'

function Gallery() {
    return (
        <div className="gallery-container" id="gallery">
            <div className='row>'>
            <Category title="Watercolor Art" />
            </div>            
            <div className='row>'>
            <Category title="Oil Painting" />
            </div>            
            <div className='row>'>
            <Category title="Pencil Art" />
            </div>            
        </div>
    )
}

export default Gallery
