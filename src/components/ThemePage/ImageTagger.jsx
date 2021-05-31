import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { createTag} from '../../actions/tags'
import { fetchAllTags } from '../../actions/tags'

import Tag from './Tag'

export default function ImageTagger({ src,pictureId }) {
    const dispatch = useDispatch()
    const tags = useSelector((state) =>state.tag)


    useEffect(()=> {
        dispatch(fetchAllTags(pictureId))
    },[])

    const handleCreateTag = async (e) => {
        let tagMessage = await window.prompt("write your tag")
        const  { clientX, clientY, target } = e
        const { x, y, width, height } = target.getBoundingClientRect();

        const currentTag = {
            posX: ((clientX - x) *100) / width,
            posY: ((clientY - y) *100 )/ height,
            message: tagMessage,
        }
        dispatch( createTag (currentTag, pictureId))
    }

    

    return (
        <div style={{ position : 'relative'}}>
            <img src={src} style={{ objectFit : 'contain'}} alt="pictureName" id={pictureId} onClick={ handleCreateTag } />
           { pictureId &&
            tags?.map(tag => <Tag tag={tag} pictureId={pictureId} key={tag._id}/>)
            }
        </div>
    )
}


