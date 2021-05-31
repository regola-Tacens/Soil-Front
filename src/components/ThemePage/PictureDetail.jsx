import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import PictureForm from './PictureForm'
import { erasePicture } from '../../actions/picture'
import ImageTagger from './ImageTagger'

export default function PictureDetail({ pictureId, setPictureId }) {
    const dispatch = useDispatch()
    const history = useHistory()
    const pictures = useSelector(state => state.pictures)
    const picture = pictures.find(picture =>picture._id === pictureId )
    const[showForm, setShowForm] = useState(false)

    
    const updatePicture =(e)=> {
        e.preventDefault()
        setShowForm(previousState => !previousState)
        
    }

    const handleErasePicture = async (e)=> {
        e.preventDefault()
        await dispatch( erasePicture (picture._id))
        setPictureId(null)
    }

    return (
        <div>
            <div className="pictureDetailHeader">
                {picture ?
                <ImageTagger src={picture?.img} pictureId={picture?._id} /> : null
                }
                {/* <img src={picture?.img} style={{ objectFit : 'contain'}} alt="pictureName"  /> */}
                <div className="infos">
                    <h1 className="themeSubTitle">{picture?.pictureName}</h1>
                    <p className="lowercaseBodyText">{picture?.description}</p>
                    <button  className="themePageButton" onClick={()=> setPictureId(null)}>BACK</button>
                    <button className="themePageButton" onClick={updatePicture}>UPDATE</button>
                    <button className="themePageButton" onClick={handleErasePicture}>ERASE</button>
                    <div className="pictureForm" style={{ marginTop : '1em'}}>{showForm && <PictureForm pictureToUpdate={picture} setShowForm={setShowForm}/>}</div>

                </div>
            </div>
        </div>
    )
}
