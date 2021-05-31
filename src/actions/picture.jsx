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

export const updatePicture = (picture, id)=> async (dispatch) => {
    try{
        const { data } = await api.updatePicture(picture, id)
        dispatch ({ type:'UPDATE_PICTURE', payload : data})
    }catch(err) {
        console.log('on a une erreur : ', err)
    }
}

export const erasePicture = (id)=> async (dispatch) => {

    try{
        await api.erasePicture(id)
        dispatch ({type:'ERASE_PICTURE', payload : id})
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







