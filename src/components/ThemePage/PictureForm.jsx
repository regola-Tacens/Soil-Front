import React, {useState} from 'react'
import { useDispatch } from 'react-redux'
import closeCross from '../../images/pictos/cross.svg'
import FileBase64 from 'react-file-base64'
import { createPicture, updatePicture } from '../../actions/picture'
import RoundButton from '../UI/RoundButton'

let initialState = { pictureName :'', creator:'', description : '', img:'', themeLinked : '' }

export default function PictureForm({pictureToUpdate, themeId, setShowForm}) {
    const [picture, setPicture] = useState(pictureToUpdate || initialState)
    

    const dispatch=useDispatch()

    const handleSubmit =(e)=> {console.log('update')
        if(pictureToUpdate){
            e.preventDefault()
            dispatch(updatePicture(picture, picture._id))
            clear()
            setShowForm(false)
        } else {
            e.preventDefault()
            dispatch(createPicture(picture, themeId))
            clear()
            setShowForm(false)
        }
    }

    const clear =()=>{
        
        setPicture({ pictureName: '', description: '', headerImg: '', img:'', themeLinked : '' })
    }
    
    
    const handleChange =(e)=> {
        e.preventDefault()
        
        setPicture({...picture, [e.target.name] : e.target.value})
    }

    return (
        <>
        <form className='signup themeForm' type='submit' onSubmit={handleSubmit}>
            {/* <img src={closeCross} className="closeForm" onClick={()=>setShowForm(prevState => !prevState)}/> */}
            <div className="input">
                <label htmlFor='pictureName'>picture name</label>
                <input type='text' name='pictureName' value={picture.pictureName}onChange={handleChange}/>
            </div>
            <div className="input">
                <label htmlFor='description'>description</label>
                <textarea type='text' name='description' value={picture.description} onChange={handleChange}/>
            </div>
            <div className="input">
                <FileBase64 className='convertBase64Button' type="file"  multiple={false} onDone={({ base64 }) => setPicture({ ...picture, img: base64 })}/>
            </div>
            <RoundButton buttonName={'+'} buttonType={'submit'}/>
        </form>
    </>
    )
}
