import * as api from '../api'
import { eraseTagInPicture } from '../actions/picture'

export const createTag = (currentTag, pictureId) => async(dispatch) =>{
        currentTag = {...currentTag, pictureLink : pictureId}
    try {
        const { data } = await api.createTag(currentTag)
        dispatch ({type:'CREATE_TAG', payload : data})

    } catch (err) {
        console.log('on a une erreur : ', err)
    }

}

export const fetchAllTags = (pictureId) => async (dispatch) => {

    try {
        const { data } = await api.fetchAllTags(pictureId)
        dispatch ({ type :'FETCH_ALL_TAGS', payload : data[0].tags})
    } catch (error) {
        console.log('ona  une erreur : ', error)
    }
}

export const eraseTag = (tagId) => async (dispatch) => {
    try {
        await api.eraseTag(tagId)
        dispatch ({ type:'ERASE_TAG', payload : tagId})
    } catch (err) {
        console.log('on a une erreur : ', err)
        
    }
}

export const eraseTagAndRef = (tagId, pictureId) => async (dispatch) => {
    await dispatch(eraseTagInPicture( tagId, pictureId))
    await dispatch(eraseTag(tagId))
}



