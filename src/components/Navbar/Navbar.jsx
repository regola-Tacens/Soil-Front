import React, {useEffect, useState} from 'react'
import burger from '../../images/pictos/burger.svg'
import headerRondVert from '../../images/HeaderRondVert.svg'
import LogoSoilFooter from '../../images/pictos/LogoSoilFooter.svg'
import { Link,useLocation} from 'react-router-dom'
import { useDispatch } from 'react-redux'


export default function Navbar() {
    const dispatch = useDispatch()
    const [isVisible, setIsVisible] = useState(true)
    const [isBurgerClicked, setIsBurgerClicked]=useState(false)
    const[onTop, setOnTop] = useState(true)
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')))
    const location = useLocation()

    const signOut =()=> {
        dispatch({type:'SIGN_OUT'})
        setUser(null)
    }

    useEffect(()=>{
        const token = user?.token
        setUser(JSON.parse(localStorage.getItem('profile')))
    }, [location])

    useEffect(()=>{
      
        window.addEventListener('scroll', ()=>{
            if (window.scrollY > 0 && isBurgerClicked === false) {
                setIsVisible(()=> isVisible === false)
                setOnTop(()=>onTop === false )
                
            } else if (window.scrollY === 0){
                setIsVisible(()=>isVisible===true)
            }
        })
    },[])

    window.onscroll=()=>{
        setIsBurgerClicked(false)
    }
    
    const handleMenuClick =()=>{
        setIsBurgerClicked(true)
    }



    return <>
        <div className='mainHeader'>
            <div className='logoContainer'>
                <Link to='/home'>
                    <img className='logoSoil' src={LogoSoilFooter} alt ='footerLogo'/>
                </Link>
                {user && <div className='loggedUser bodyText '>log</div>}            
            </div>
            <img src={headerRondVert}  className={`headerRondVert ${ isVisible || isBurgerClicked ? 'slideDown' : 'slideUp'}`}  alt='lrondVert'></img>           
        </div>
        <div className='Navbar'>
            <Link className='linkButton' to="/Themes">
                <div className ={`menuButton ${ isVisible || isBurgerClicked ? 'fadeOut':'fadeIn' } `} href='#'>THEMES</div>
            </Link>
            {user?
                <Link className='linkButton' to="/home">
                    <div className ={`menuButton ${ isVisible  || isBurgerClicked ? 'fadeOut':'fadeIn' } `} href='#' onClick={signOut}>LOGOUT</div>
                </Link>
                :
                <Link className='linkButton' to="/Auth">
                    <div className ={`menuButton ${ isVisible  || isBurgerClicked ? 'fadeOut':'fadeIn' } `} href='#'>LOGIN</div>
                </Link>
            
            }
            
            <div className ={`menuButton ${ isVisible  || isBurgerClicked ? 'fadeOut':'fadeIn' } `} href='#'>SIGNUP</div>
            <img src={burger} style={onTop ? {visibility: 'hidden'} : {visibility: 'visible'} } className={`burger ${ isVisible || isBurgerClicked? `fadeIn` : 'fadeOut' } `} onClick={handleMenuClick}/>
            
        </div>
            
        </>
    
}


