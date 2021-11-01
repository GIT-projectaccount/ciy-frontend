import React from 'react'
import {Link} from 'react-router-dom'

const Categories = () => {
    return (
        <>
            <div className="container-fluid">
                <div className="d-flex align-items-center justify-content-evenly master-heading-container">
                    <h2 className="categories-master-heading"> Categories </h2>
                </div>
                <div>
                    <div className="d-flex justify-content-center category-heading-container">
                        <h4 className="category-type-heading"> Type </h4>
                    </div>
                    <div className="d-flex align-items-start justify-content-evenly row sub-category-container">
                        <div className="card category-card">
                            <div className="card-body category-card-body">
                                <Link to="/dishes"> <h5 className="card-title category-card-title">Breakfast</h5> </Link>
                                <p className="card-text category-card-text">Breakfast is the first meal of the day eaten after waking from the night's sleep.</p>
                            </div>
                        </div>
                        <div className="card category-card">
                            <div className="card-body category-card-body">
                                <h5 className="card-title category-card-title">Lunch</h5>
                                <p className="card-text category-card-text">Breakfast is the first meal of the day eaten after waking from the night's sleep.</p>
                            </div>
                        </div>
                        <div className="card category-card">
                            <div className="card-body category-card-body">
                                <h5 className="card-title category-card-title">Dinner</h5>
                                <p className="card-text category-card-text">Breakfast is the first meal of the day eaten after waking from the night's sleep.</p>
                            </div>
                        </div>
                    </div>
                    <div className="d-flex justify-content-center category-heading-container">
                        <h4 className="category-type-heading"> Cuisine </h4>
                    </div>
                    <div className="d-flex align-items-start justify-content-evenly row sub-category-container">
                        <div className="card category-card">
                            <div className="card-body category-card-body">
                                <h5 className="card-title category-card-title">South-Indian</h5>
                                <p className="card-text category-card-text">Breakfast is the first meal of the day eaten after waking from the night's sleep.</p>
                            </div>
                        </div>
                        <div className="card category-card">
                            <div className="card-body category-card-body">
                                <h5 className="card-title category-card-title">Punjabi</h5>
                                <p className="card-text category-card-text">Breakfast is the first meal of the day eaten after waking from the night's sleep.</p>
                            </div>
                        </div>
                        <div className="card category-card">
                            <div className="card-body category-card-body">
                                <h5 className="card-title category-card-title">Maharashtrian</h5>
                                <p className="card-text category-card-text">Breakfast is the first meal of the day eaten after waking from the night's sleep.</p>
                            </div>
                        </div>
                        <div className="card category-card">
                            <div className="card-body category-card-body">
                                <h5 className="card-title category-card-title">Indo-Chinese</h5>
                                <p className="card-text category-card-text">Breakfast is the first meal of the day eaten after waking from the night's sleep.</p>
                            </div>
                        </div>
                        <div className="card category-card">
                            <div className="card-body category-card-body">
                                <h5 className="card-title category-card-title">Others</h5>
                                <p className="card-text category-card-text">Breakfast is the first meal of the day eaten after waking from the night's sleep.</p>
                            </div>
                        </div>
                    </div>
                    <div className="d-flex justify-content-center category-heading-container">
                        <h4 className="category-type-heading"> Difficulty </h4>
                    </div>
                    <div className="d-flex align-items-start justify-content-evenly row sub-category-container">
                        <div className="card category-card">
                            <div className="card-body category-card-body">
                                <h5 className="card-title category-card-title">Easy</h5>
                                <p className="card-text category-card-text">Breakfast is the first meal of the day eaten after waking from the night's sleep.</p>
                            </div>
                        </div>
                        <div className="card category-card">
                            <div className="card-body category-card-body">
                                <h5 className="card-title category-card-title">Intermediate</h5>
                                <p className="card-text category-card-text">Breakfast is the first meal of the day eaten after waking from the night's sleep.</p>
                            </div>
                        </div>
                        <div className="card category-card">
                            <div className="card-body category-card-body">
                                <h5 className="card-title category-card-title">Hard</h5>
                                <p className="card-text category-card-text">Breakfast is the first meal of the day eaten after waking from the night's sleep.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Categories
