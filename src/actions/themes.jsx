import * as api from '../api'
import { erasePicturesLinked } from './picture'


export const createTheme = (theme) => async (dispatch) => {

        try {
            const { data } = await api.createTheme(theme)
            dispatch ({type:'CREATE_THEME', payload : data})


        } catch (err){
            console.log('on a une erreur : ', err)
        }
}

export const fetchThemes = () => async (dispatch) => {

        try {
            const { data } = await api.fetchThemes()
           
            dispatch ({type:'FETCH_THEMES', payload : data})
        } catch (err) {
            console.log(err)
        }
}

export const updateTheme = (theme) => async (dispatch) => {
    console.log('theme dans action creator', theme)
    try{
        const { data } = await api.updateTheme(theme)
        dispatch({type:'UPDATE_THEME', payload : data})
    } catch (err) {
        console.log(err)
    }
}

export const eraseThemeNested = (themeId) => async (dispatch) => {

    try {
        await api.eraseTheme(themeId)
        dispatch({ type :'ERASE_THEME', payload : themeId})

    } catch (err) {
        console.log(err)
    }
}


export const eraseTheme = (themeId) => (dispatch) => {
    dispatch(erasePicturesLinked(themeId))
    dispatch(eraseThemeNested(themeId))
}

