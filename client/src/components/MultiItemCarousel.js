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

const MultiItemCarousel = () => {
    return (
        <div style={{margin:"30px"}}>
            <h1>Trending Foods</h1>
            <Slider 
            prevArrow={<PreviousBtn/>}
            nextArrow={<NextBtn/>}
            slidesToShow={4}
            slidesToScroll={2}
            >

            {data.map((item)=>(
                <Card item={item}/>
                ))}
                
            </Slider>
        </div>
    )
}

const Card = ({item}) => {
    return (
        <div style={{textAlign:"center"}}>
            <img className="multi_image" src={item} alt="" style={{width:"100%", height:"170px", objectFit:"contain", marginBottom:"10px"}}/>
            <p style={{fontSize:"14px", padding:"5px 0"}}>TOP TRENDING FOOD's</p>
            <p style={{fontSize:"14px", padding:"5px 0", color:"green"}}>Just ₹200</p>
            <p style={{fontSize:"14px", padding:"5px 0", color:"grey"}}>Up to 50% off on First Order</p>
        </div>
    )
}

export default MultiItemCarousel
