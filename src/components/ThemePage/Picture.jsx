import React from 'react'


export default function Picture({picture, pictureId, setPictureId}) {
    

    const handlePictureClick =()=> {
        console.log('picture id', picture._id)
        setPictureId(picture._id)
    }

    const mouseOverGoButton = (e)=> {
        const goButton = document.getElementById(`go${picture._id}`)
        console.log(goButton)
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
           
                {picture?._id &&  <div className="goToTheme" id={`go${picture._id}`}></div>}            
                <div className="goButton" id='goButton' 
                onMouseOver={mouseOverGoButton} 
                onMouseLeave={mouseLeaveGoButton}
                onClick={handlePictureClick}>          
                </div>
             
                <img src={picture.img} alt="pictureName"   />

        </div>
    )
}

