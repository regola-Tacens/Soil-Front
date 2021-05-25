import React, {useState} from 'react'
import RoundButton from '../UI/RoundButton'
import FileBase64 from 'react-file-base64'
import { useDispatch } from 'react-redux'
import { createTheme, updateTheme } from '../../actions/themes'
import closeCross from '../../images/pictos/cross.svg'


let initialState = { themeName :'', creator:'', description : '', headerImg : '' }

export default function FormTheme({setShowForm, themeToUpdate}) {
    const [theme, setTheme] = useState( themeToUpdate || initialState)
    const dispatch=useDispatch()
    const handleSubmit =(e)=> {
        e.preventDefault()
        if(themeToUpdate){
            dispatch(updateTheme(theme, theme._id))
        } else {
            dispatch(createTheme(theme))
        }
        clear()
        setShowForm(false)
    }
    const clear =()=>{
        
        setTheme({ themeName: '', description: '', headerImg: '' })
    }
    const handleChange =(e)=> {
        e.preventDefault()
        
        setTheme({...theme, [e.target.name] : e.target.value})
    }
    return (
        <>
        <form className='signup themeForm' type='submit' onSubmit={handleSubmit}>
            <img src={closeCross} className="closeForm" onClick={()=>setShowForm(prevState => !prevState)}/>
            <div className="input">
                <label htmlFor='themeName'>theme name</label>
                {themeToUpdate ?   
                <input type='text' name='themeName' value={theme.themeName} onChange={handleChange}/>
                :
                <input type='text' name='themeName' onChange={handleChange}/>
                }

            </div>
            <div className="input">
                <label htmlFor='description'>description</label>
                {themeToUpdate ?   
                <textarea type='text' name='description' value={theme.description} onChange={handleChange}/>
                :
                <textarea type='text' name='description' onChange={handleChange}/>
                }
                
            </div>
            <div className="input">
                <FileBase64 className='convertBase64Button' type="file"  multiple={false} onDone={({ base64 }) => setTheme({ ...theme, headerImg: base64 })}/>
            </div>
            <RoundButton buttonName={'+'} buttonType={'submit'}/>
        </form>
    </>
    )
}

