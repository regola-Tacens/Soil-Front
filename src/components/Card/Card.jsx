import React from 'react'


export default function Card({cardData = ""}) {


    return (
        
            <div className='card'>
                <div className='cardNumber'>{cardData.id}</div>
                <div className='underline'></div>
                <div className='titleText' dangerouslySetInnerHTML={{ __html : cardData.title}}></div>
                <article className='lowercaseBodyText' dangerouslySetInnerHTML={{ __html : cardData.content}}></article>
                <div className='cardSketchContainer'>
                    <img className={`sketch${cardData.id}`} src={process.env.PUBLIC_URL + `/images/homeSketch${cardData.id}.svg`} alt="logo" />
                </div>
            </div>

        
    )
}
