import React from 'react'
import cardimg1 from "../images/cardimg1.jpg"

const popularDish = () => {
    return (
        <>
            <div className="d-flex justify-content-center">
                <h3 className="mostpopular-heading"> Most Popular Dishes </h3>
            </div>
            <div className="d-flex justify-content-around">
            <div className="card populardish-card">
                    <img src={cardimg1} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <div className="card-title-div">
                            <h5 className="card-title">Card title</h5>
                        </div>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div>
                <div className="card populardish-card">
                    <img src={cardimg1} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <div className="card-title-div">
                            <h5 className="card-title">Card title</h5>
                        </div>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div>
                <div className="card populardish-card">
                    <img src={cardimg1} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <div className="card-title-div">
                            <h5 className="card-title">Card title</h5>
                        </div>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default popularDish
