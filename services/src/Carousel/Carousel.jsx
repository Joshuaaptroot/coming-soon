import React from 'react'
import './Carousel.css'
import Gearbig from '../Images/Gearbig.png'
import GearColour from '../Images/Gearcolour.png'

const slider = [
    {
        title: "python",
        description: "Python Language",
        image: "../Images/PythonLogo.jpg"
    },
    {
        title: "HTML",
        description: "HTML",
        image: "../Images/HtmlLogo.jpg"
    }
]


export const Carousel = () => {
  return (
    <div className='carousel'>
        <div>
            <div className='carousel-content'>
                <span>discover</span>
                <h1>Python</h1>
                <hr />
                <p>I've got skills with Python Brudda</p>
                <a className='slider-btn' href="#">Request Back-end work!</a>
            </div>
        </div>
        <div>Carousel</div>

        <img src={Gearbig} alt="gear" className='gear-1' />
        <img src={GearColour} alt="gear" className='gear-2' />
    </div>
  )
}



export default Carousel