// import React from 'react'
// import Slider from 'react-slick'
// import 'slick-carousel/slick/slick.css'
// import 'slick-carousel/slick/slick-theme.css'
// import './Carousel.css';
// import { data } from './Data'
// import { ArrowBackIos, ArrowForwardIos } from '@material-ui/icons'

// const PreviousBtn = ((props) => {
//     console.log(props);
//     const { className, onClick } = props;
//     return ( <
//         div className = { className }
//         onClick = { onClick } >
//         <
//         ArrowBackIos style = {
//             { color: "blue" }
//         }
//         /> < /
//         div >
//     )
// })

// const NextBtn = ((props) => {
//     const { className, onClick } = props;
//     return ( <
//         div className = { className }
//         onClick = { onClick } >
//         <
//         ArrowForwardIos style = {
//             { color: "blue" }
//         }
//         /> < /
//         div >

//     )
// })

// const Carousel = () => {
//     return ( <
//         div style = {
//             { margin: "30px" }
//         } >
//         <
//         h1 > Popular Foods < /h1> <
//         Slider autoplay autoplaySpeed = { 1500 }
//         dots initialSlide = { 3 }
//         prevArrow = { < PreviousBtn / > }
//         nextArrow = { < NextBtn / > } >

//         {
//             data.map((item) => ( <
//                 div >
//                 <
//                 img src = { item }
//                 alt = "food image"
//                 style = {
//                     { width: "100%", height: "50vh" }
//                 }
//                 /> < /
//                 div >
//             ))
//         }

//         <
//         /Slider> < /
//         div >
//     )
// }

// export default Carousel


import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './Carousel.css';
import { data } from './BrandData'
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

const carouselProperties={
    prevArrow:<PreviousBtn/>,
            nextArrow:<NextBtn/>,
            slidesToShow:4,
            slidesToScroll:1,
            // centerMode:true,
            // centerPadding:"170px",
            responsive:[
                
                {
                    breakpoint:600,
                    settings:{
                        slidesToShow:2,
                        slidesToScroll:1,
                        centerMode:false,
                        width:"50%",
                        height:"50%",
                        innerWidth:"50%",
                        outerWidth:"50%",
                        innerHeight:"50%",
                        transform:false,
                        
                    }
                },
                {
                    breakpoint:769,
                    settings:{
                        slidesToShow:2,
                        slidesToScroll:1,
                        centerMode:false,
                        width:"50%",
                        centerPadding:"170px",
                    }       
                },
                {
                    breakpoint:992,
                    settings:{
                        slidesToShow:3,
                        slidesToScroll:1,
                        centerMode:false,
                    }
                },
                {
                    breakpoint:1200,
                    settings:{
                        slidesToShow:4,
                        slidesToScroll:2,
                        centerMode:false,
                    }
                }
            ]
}

const Carousel = () => {
    return (
        <div style={{margin:"30px"}}>
            <h1>Popular Brands</h1>
            <Slider {...carouselProperties}>

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
            <p style={{fontSize:"14px", padding:"5px 0"}}>Popular Brands</p>
            <p style={{fontSize:"14px", padding:"5px 0", color:"green"}}>Just ₹200</p>
            <p style={{fontSize:"14px", padding:"5px 0", color:"grey"}}>Up to 50% off on First Order</p>
        </div>
    )
}

export default Carousel
