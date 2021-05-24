import * as api from '../api'

export const createPicture = (picture, themeId) => async (dispatch) => {
    picture = {...picture, themeLinked : themeId}
    // console.log('picture in action creator',picture)
    try {
        const { data } = await api.createPicture(picture)
        dispatch ({type:'CREATE_PICTURE', payload : data})


    } catch (err){
        console.log('on a une erreur : ', err)
    }
}

export const fetchPictures = (themeId) => async (dispatch) => {

    try {
        const { data } = await api.fetchPictures(themeId)
        dispatch ({ type:'FETCH_PICTURES', payload : data})
        
    } catch (err) {
        console.log('on a une erreur : ', err)
    }
}

export const erasePicturesLinked = (themeId) => async ( dispatch ) => {
    
    try {
        await api.erasePicturesLinked(themeId)
        dispatch ({ type:'ERASE_PICTURES_LINKED', payload : themeId})
    } catch (err) {
        console.log ('on a une erreur :', err)
    }
}






