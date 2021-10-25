import React from 'react'
import cbg1 from "../images/cslider1.jpg"
import cbg2 from "../images/cslider2.jpg"
import cbg3 from "../images/cslider3.jpg"
import { Link } from "react-router-dom"

const Carousel = () => {
    return (
        <>
            <div id="homepageCarousel" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#homepageCarousel" data-bs-slide-to="0" class="active" current="true" label="Slide 1"></button>
                    <button type="button" data-bs-target="#homepageCarousel" data-bs-slide-to="1" label="Slide 2"></button>
                    <button type="button" data-bs-target="#homepageCarousel" data-bs-slide-to="2" label="Slide 3"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src={cbg1} class="d-block w-100" alt="..." />
                        <div class="carousel-caption slider-content1">
                            <p>CIY is a cooking and recipe website <br /> dedicated with love and authenticity <br /> to Indian cuisine only.</p>
                        </div>
                    </div>

                    <div class="carousel-item">
                        <img src={cbg2} class="d-block w-100" alt="..." />
                        <div class="carousel-caption slider-content2">
                            <p>From Breakfast to Lunch, Sweet to Spicy and Creamy to Crispy Food Recipes.</p>
                            <div className="slider-btn">
                                <Link className="btn btn-1" to="/categories"> Browse Categories</Link>
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src={cbg3} class="d-block w-100" alt="..." />
                        <div class="carousel-caption slider-content3">
                            <p>New to cooking? <br /> Perfect! <br /> We have a guide for beginners.</p>
                            <div className="slider-btn">
                                <Link className="btn btn-2" to="/bguide"> Check it out</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#homepageCarousel" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#homepageCarousel" data-bs-slide="next">
                    <span class="carousel-control-next-icon"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </>
    )
}

export default Carousel
