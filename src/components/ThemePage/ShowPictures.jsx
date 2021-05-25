import React, { useEffect, useState} from 'react'
import { fetchPictures } from '../../actions/picture'
import { useDispatch, useSelector } from 'react-redux'
import Picture from './Picture'
import GradientButton from '../UI/GradientButton'
import PictureForm from './PictureForm'
import PictureDetail from './PictureDetail'


export default function ShowPictures({themeId, themeDescription,showForm,  setShowForm}) {
    const [pictureId, setPictureId] = useState()
    const pictures = useSelector((state) =>state.pictures)
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(fetchPictures(themeId))
    },[])


    const handleCloseForm =(e)=>{
        e.preventDefault()
        setShowForm(prevState => !prevState)
    }
    
    return (
        <div>
            <div className='pictureContainer'>
                { !pictureId && <div className="themeDescription lowercaseBodyText" style={{ paddingBottom : '2em'}}>{ themeDescription } </div>}
                {!pictureId && <GradientButton buttonName= {showForm ? 'close window' : 'add picture'} clickAction={ handleCloseForm }/>}
                <div className="pictureForm"> {showForm && <PictureForm setShowForm={setShowForm} themeId={themeId} /> }</div>
                <div className="pictures">
                    {pictures && !pictureId &&
                        pictures.map(picture =>
                        (<Picture picture={picture} pictureId={pictureId} setPictureId={ setPictureId } key={picture._id} />))
                    }
                </div>    
                <div className="pictureDetail">
                    {pictureId && <PictureDetail pictureId={pictureId} setPictureId = { setPictureId }/>}
                </div>
            </div>
        </div>
    )
}
