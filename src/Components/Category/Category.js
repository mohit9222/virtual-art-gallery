import React from 'react'
import './Category.css'
import DisplayCard from '../DisplayCard/DisplayCard'

function Category({title}) {
    return (
        <div className="category-container">
            {/* <div className="category-title">
                <h3>{title}.</h3>
                <div className="category-desc">
                    <p>Watercolor or watercolour, also aquarelle, is a painting method in which the paints are made of pigments suspended in a water-based solution. Watercolor refers to both the medium and the resulting artwork.</p>
                </div>
            </div> */}
            <div className="category-paintings">
                <div className="painting">
                    <DisplayCard />
                </div>
                <div className="painting">
                    <DisplayCard />
                </div>
                <div className="painting">
                    <DisplayCard />
                </div>
            </div>
        </div>
    )
}

export default Category
