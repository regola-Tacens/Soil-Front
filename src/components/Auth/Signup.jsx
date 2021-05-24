import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import HeroTitle from '../HeroTitle/HeroTitle'
import GradientButton from '../UI/GradientButton'
import { useDispatch } from 'react-redux'
import { signup, signin } from '../../actions/auth'

const initialState= {firstName:'', lastName:'', email:'', password:''}


export default function Signup() {
    const[isSignup, setisSignup] = useState(false)
    const dispatch = useDispatch()
    const history = useHistory()
    const [formData, setFormData] = useState(initialState)

    const handleSwitch = ()=>{
        setisSignup( prev => !prev)
    }

    const handleSubmit =(e)=>{
   
        e.preventDefault()
        if(isSignup){
            dispatch(signup(formData, history))
        } else {
            dispatch(signin(formData, history))
        }
    }
    
    const handleChange=(e) => {
        e.preventDefault()
        setFormData({ ...formData, [e.target.name] : e.target.value})
    
    }
    return (<>
            <HeroTitle/>
            <div className='formContainer'>
                <div className='signup'>
                    <h3 className='signTitle'>{isSignup ? 'SIGN UP' : 'SIGN IN'}</h3>
                    <form className='signForm' onSubmit={handleSubmit} >
                        {isSignup &&
                        <div className='firstRow'>
                            <div className='input' >
                                <label htmlFor='firstName' name='firstName'>First name :</label><br></br>
                                <input type='text' name='firstName' onChange={handleChange} />
                            </div>
                            <div className='input'>
                                <label htmlFor='lastName' name='lastName'>Last name : </label><br></br>
                                <input type='text' name='lastName' onChange={handleChange} />
                            </div>
                        </div>
                        }

                        <div className='firstRow'>
                            <div className='input' >
                                <label htmlFor='email' name='email'>Email :</label><br></br>
                                <input type='mail' name='email' onChange={handleChange} />
                            </div>
                            <div className='input'>
                                <label htmlFor='password' name='password'>Password : </label><br></br>
                                <input type='password' name='password' onChange={handleChange}/>
                            </div>
                        </div>
                        <GradientButton buttonName={ isSignup ?  'JOIN !': 'LOGIN'} buttonType={'submit'}/>  
                        {isSignup ?
                            <div className='bodyTextBlack signSwitch' onClick={handleSwitch} >  already signed up ? <span> go to login</span> </div>
                            :
                            <div className='bodyTextBlack signSwitch' onClick={handleSwitch} >  not signed up ? <span> join !</span> </div>      
                        }              
                    </form>

                </div>
            </div>
        </>
    )
}
