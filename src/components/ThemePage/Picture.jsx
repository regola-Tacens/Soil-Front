import React from 'react'
import arrow from '../../images/pictos/arrow.svg'


export default function Picture({picture, pictureId, setPictureId}) {
    

    const handlePictureClick =()=> {
        setPictureId(picture._id)
        
    }

    const mouseOverGoButton = (e)=> {
        const goButton = document.getElementById(`go${picture._id}`)
        goButton.classList.add('goToTheme')
        goButton.innerHTML = `${picture.pictureName}`
    }

    const mouseLeaveGoButton = (e) => {
        const goButton = document.getElementById(`go${picture._id}`)
        goButton.classList.remove('goToTheme')
        goButton.innerHTML = ""
    }

    return (
        <div className="pictureImage">
           
                {picture._id &&  <div className="goToTheme" id={`go${picture._id}`}></div>}       
                <div className="arrow">
                    <img src={arrow} alt="arrow" />
                </div>          
                <div className="goButton" id='goButton' 
                onMouseOver={mouseOverGoButton} 
                onMouseLeave={mouseLeaveGoButton}
                onClick={handlePictureClick}>          
                </div>
             
                <img src={picture.img} alt="pictureName"   />

        </div>
    )
}

