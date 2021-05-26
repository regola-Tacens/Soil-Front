import React, { useState } from 'react'
import Tag from './Tag'

export default function ImageTagger({ src,pictureId }) {
    const [tags, setTag] = useState([])

    const createTag = async (e) => {
        let tag = await window.prompt("write your tag")
        const  { clientX, clientY, target } = e
        const { x, y, width, height } = target.getBoundingClientRect();
        setTag(state => [
            ...state, {
                posX: ((clientX - x) *100) / width,
                posY: ((clientY - y) *100 )/ height,
                message: tag,
                id:Math.random() * (clientX+clientY),
                targetWidth : target.width
            }
        ])
    }
    return (
        <div style={{ position : 'relative'}}>
            <img src={src} style={{ objectFit : 'contain'}} alt="pictureName" id={pictureId} onClick={ createTag }  />
            {tags?.map(tag => <Tag tag={tag} pictureId={pictureId} key={tag.id}/>)}
        </div>
    )
}


