import React from 'react'

export default function RoundButton({buttonName, buttonType}) {
    return (
        <button className='roundButton' type={buttonType}>{buttonName}</button>
    )
}
