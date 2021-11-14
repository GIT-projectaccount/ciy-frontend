import React from 'react'
import cbg1 from "../images/cslider1.jpg"
import cbg2 from "../images/cslider2.jpg"
import cbg3 from "../images/cslider3.jpg"
import { Link } from "react-router-dom"

const Carousel = () => {
    return (
        <>
            <div id="homepageCarousel" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={cbg1} className="d-block w-100 h-100" alt="..." />
                        <div className="carousel-caption">
                            <p className="slider-content1">CIY is a cooking and recipe website <br /> dedicated with love and authenticity <br /> to Indian cuisine only.</p>
                        </div>
                    </div>

                    <div className="carousel-item">
                        <img src={cbg2} className="d-block w-100 h-100" alt="..." />
                        <div className="carousel-caption">
                            <p className="slider-content2">From Breakfast to Lunch, Sweet to Spicy and Creamy to Crispy Food Recipes.</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={cbg3} className="d-block w-100 h-100" alt="..." />
                        <div className="carousel-caption">
                            <p className="slider-content3">New to cooking? <br /> Perfect! <br /> We have a guide for beginners.</p>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#homepageCarousel" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#homepageCarousel" data-bs-slide="next">
                    <span className="carousel-control-next-icon"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </>
    )
}

export default Carousel
