import * as api from '../api'

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



