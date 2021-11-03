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
                </div>
                <div className="d-flex align-items-start justify-content-evenly row sub-category-container">
                    <div className="card category-card">
                        <div className="card-body category-card-body">
                            <Link to="/breakfast"> <h5 className="card-title category-card-title">Breakfast</h5> </Link>
                            <p className="card-text category-card-text">Breakfast is the first meal of the day eaten after waking from the night's sleep.</p>
                        </div>
                    </div>
                    <div className="card category-card">
                    <div className="card-body category-card-body">
                            <Link to="/lunch"> <h5 className="card-title category-card-title">Lunch</h5> </Link>
                            <p className="card-text category-card-text">Breakfast is the first meal of the day eaten after waking from the night's sleep.</p>
                        </div>
                    </div>
                    <div className="card category-card">
                    <div className="card-body category-card-body">
                            <Link to="/dinner"> <h5 className="card-title category-card-title">Dinner</h5> </Link>
                            <p className="card-text category-card-text">Breakfast is the first meal of the day eaten after waking from the night's sleep.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Categories
