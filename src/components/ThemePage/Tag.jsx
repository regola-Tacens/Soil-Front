import React from 'react'
import {eraseTagAndRef} from '../../actions/tags'
import { useDispatch } from 'react-redux'

export default function Tag({ tag, pictureId }) {
    const dispatch = useDispatch()
    const { posX, posY, message,_id } = tag

    // const myImage = document.getElementById(`${pictureId}`)
    // const myImageRect = myImage.getBoundingClientRect()

    const erasePictureTag =()=> {
        dispatch(eraseTagAndRef(tag._id, pictureId))
    }

    const growTag =()=>{
        
        const currentTag = document.getElementById(_id)
        // posX > myImageRect.width - 200 ? currentTag.classList.add('growRight') : currentTag.classList.add('growLeft')
        currentTag.classList.add('growLeft')
        currentTag.innerHTML=message + '<br/>'
        currentTag.style.wordWrap = 'break-word'
        const deleteBtn = document.createElement('BUTTON')
        deleteBtn.innerHTML= 'delete'
        deleteBtn.addEventListener('click', erasePictureTag)
        currentTag.appendChild(deleteBtn)
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
