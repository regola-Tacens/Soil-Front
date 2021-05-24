import React from 'react'
import Card from '../Card/Card'

export default function BlackStripe({CardContents, selectedCards}) {
    return (
        <div className='blackStripe'>
                {CardContents.map(cardData =>(
                        selectedCards.includes(cardData.id) && <Card key={cardData.id} cardData={cardData} />
                    ))
                }
        </div>
        
    )
}
