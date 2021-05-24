import React , {useEffect} from 'react'
import HeroTitle from '../HeroTitle/HeroTitle'
import Zigzag from '../../images/pictos/zigzag.svg'
import CardContents from '../../Texts/cardTexts/cardTexts.json'
import BlackStripe from '../BlackStripe/BlackStripe'
import GradientButton from '../UI/GradientButton'
import { useLocation } from 'react-router-dom'


export default function Home() {
    const location = useLocation()
    
    let user = JSON.parse(localStorage.getItem('profile'))
 

    useEffect(()=>{
        user = JSON.parse(localStorage.getItem('profile'))
    },[location])
    
    return (
        <div className='home'>
            <HeroTitle/>
            {user ? null :<GradientButton buttonName={'login !'} buttonType={'button'} path={'./auth'}/>}
            <img className='zigzag' src={Zigzag} alt='zigzag'></img>
            <div className='box'>
                <div className='bodyText'>HOW DOES IT WORK ?</div>
            </div>
            <BlackStripe CardContents={CardContents} selectedCards={[1,2]}/>
            <div className='whiteSpace'>
                <div className='quotePicasso'> “Good artists copy, great artists steal.” <span>-Picasso</span></div>
            </div>
            <BlackStripe CardContents={CardContents} selectedCards={[3,4]}/>

        </div>
    )
}

