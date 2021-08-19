import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './Carousel.css';
import { data } from './Data'
import {ArrowBackIos, ArrowForwardIos} from '@material-ui/icons'

const PreviousBtn= ((props) => {
    console.log(props);
    const {className, onClick} = props;
    return (
        <div className={className} onClick={onClick}>
            <ArrowBackIos style={{color:"blue"}}/>
        </div>
    )
})

const NextBtn= ((props) => {
    const {className, onClick} = props;
    return (
        <div className={className} onClick={onClick}>
        <ArrowForwardIos style={{color:"blue"}}/>
        </div>
        
    )
})

const Carousel = () => {
    return (
        <div style={{margin:"30px"}}>
            <h1>Popular Foods</h1>
            <Slider 
            autoplay 
            autoplaySpeed={1500} 
            dots 
            initialSlide={3}
            prevArrow={<PreviousBtn/>}
            nextArrow={<NextBtn/>}
            >

            {data.map((item)=>(
                <div>
                    <img src={item} alt="food image" style={{width:"100%", height:"50vh"}}/>
                </div>
                ))}
                
            </Slider>
        </div>
    )
}

export default Carousel
