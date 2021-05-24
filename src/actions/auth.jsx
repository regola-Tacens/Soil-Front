import * as api from '../api'

export const signin =(formData, history)=> async (dispatch) => {
    try {
        const { data } = await api.signIn(formData)

        dispatch ({ type : 'AUTH', data})

        history.push('/themes')
    }catch (error) {
        if(error.response.status === 400 )alert('wrong credentials')
        if(error.response.status === 404)alert('user does not exist')
        console.log(error.response)

    }   
}

export const signup =(formData, history)=> async (dispatch) => {
    console.log('data in action', formData)
    try {
        const { data } = await api.signUp(formData)
        
        dispatch({ type : 'AUTH', data})
        console.log('data apres dispatch')
        history.push('/home')
    }catch (error) {
        console.log(JSON.stringify(error))

    }   
}

