import axios from 'axios'
const API = axios.create({ baseURL : 'http://localhost:5000'})

API.interceptors.request.use((req)=>{
    if(localStorage.getItem('profile')){
        req.headers.authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`
    }
    return req;
})

export const signUp = (formData) => API.post('/user/signup', formData)
export const signIn = (formData) => API.post('/user/signin', formData)

export const createTheme = (theme) => API.post('/theme/createTheme', theme)
export const fetchThemes = ()=> API.get('/theme/fetchTheme')
export const updateTheme = (theme)=> API.post(`/theme/updateTheme/${theme._id}`, theme)
export const eraseTheme = (id)=> API.delete(`/theme/eraseTheme/${id}`)

export const createPicture = (picture) => API.post('/picture/createPicture', picture)
export const fetchPictures = (themeId) => API.get(`/picture/fetchPictures/${themeId}`)
export const erasePicturesLinked = (themeId) => API.delete(`/picture/erasePicturesLinked/${themeId}`)