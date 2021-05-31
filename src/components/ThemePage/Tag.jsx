import React from 'react'

export default function Tag({ tag, pictureId }) {
    console.log('pictureId', pictureId)
    const { posX, posY, message,_id } = tag

    // const myImage = document.getElementById(`${pictureId}`)
    // const myImageRect = myImage.getBoundingClientRect()

    const growTag =()=>{
        
        const currentTag = document.getElementById(_id)
        // posX > myImageRect.width - 200 ? currentTag.classList.add('growRight') : currentTag.classList.add('growLeft')
        currentTag.classList.add('growLeft')
        currentTag.innerHTML=message
        currentTag.style.wordWrap = 'break-word'
    }

    const shrinkTag =()=> {
        const currentTag = document.getElementById(_id)
        // posX > myImageRect.width - 220 ? currentTag.classList.remove('growRight') : currentTag.classList.remove('growLeft')
        currentTag.classList.remove('growLeft')
        currentTag.innerHTML=''
     }

    return (
        <div className='tag' id={_id} style={{ left: `${posX}%`, top: `${posY}%` }} 
            onMouseEnter={growTag} 
            onMouseLeave={shrinkTag} 
            >
        </div>
    )
}
