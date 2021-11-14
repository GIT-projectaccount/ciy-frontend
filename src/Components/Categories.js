import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'


const Categories = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

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
                            <Link className="category-link" to="/breakfast"> <h5 className="card-title category-card-title">Breakfast</h5> </Link>
                            <p className="card-text category-card-text">Breakfast is the first meal of the day eaten after waking from the night's sleep.</p>
                        </div>
                    </div>
                    <div className="card category-card">
                        <div className="card-body category-card-body">
                            <Link className="category-link" to="/lunch"> <h5 className="card-title category-card-title">Lunch</h5> </Link>
                            <p className="card-text category-card-text"> Lunch is commonly the second meal of the day, after breakfast.</p>
                        </div>
                    </div>
                    <div className="card category-card">
                        <div className="card-body category-card-body">
                            <Link className="category-link" to="/dinner"> <h5 className="card-title category-card-title">Dinner</h5> </Link>
                            <p className="card-text category-card-text">Dinner usually refers to the largest and most formal meal of the day.</p>
                        </div>
                    </div>
                    <div className="card category-card">
                        <div className="card-body category-card-body">
                            <Link className="category-link" to="/dessert"> <h5 className="card-title category-card-title">Dessert</h5> </Link>
                            <p className="card-text category-card-text">Dessert is a course that concludes a meal. The course consists of sweet foods.</p>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="d-flex justify-content-center category-heading-container">
                        <h4 className="category-type-heading"> Cuisine </h4>
                    </div>
                </div>
                <div className="d-flex align-items-start justify-content-evenly row sub-category-container">
                    <div className="card category-card">
                        <div className="card-body category-card-body">
                            <Link className="category-link" to="/northindian"> <h5 className="card-title category-card-title">North-Indian</h5> </Link>
                            <p className="card-text category-card-text">North-Indian cuisine is a style of cooking characterized by distinctive ingredients, techniques and dishes from Northern part of India. </p>
                        </div>
                    </div>
                    <div className="card category-card">
                        <div className="card-body category-card-body">
                            <Link className="category-link" to="/southindian"> <h5 className="card-title category-card-title">South-Indian</h5> </Link>
                            <p className="card-text category-card-text">South-Indian cuisine is a style of cooking characterized by distinctive ingredients, techniques and dishes from Southern part of India.</p>
                        </div>
                    </div>

                    <div className="card category-card">
                        <div className="card-body category-card-body">
                            <Link className="category-link" to="/indochinese"> <h5 className="card-title category-card-title">Indo-Chinese</h5> </Link>
                            <p className="card-text category-card-text">Dishes originating from China with a blend of Indian ingredients, techniques and flavours.</p>
                        </div>
                    </div>
                    <div className="card category-card">
                        <div className="card-body category-card-body">
                            <Link className="category-link" to="/others"> <h5 className="card-title category-card-title">Others</h5> </Link>
                            <p className="card-text category-card-text">Dishes originating from diverse regions of India.</p>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="d-flex justify-content-center category-heading-container">
                        <h4 className="category-type-heading"> Beverages </h4>
                    </div>
                </div>
                <div className="d-flex align-items-start justify-content-evenly row sub-category-container">
                    <div className="card category-card">
                        <div className="card-body category-card-body">
                            <Link className="category-link" to="/tea"> <h5 className="card-title category-card-title">Tea</h5> </Link>
                            <p className="card-text category-card-text">Tea is an aromatic beverage prepared by pouring hot or boiling water over cured or fresh leaves.</p>
                        </div>
                    </div>
                    <div className="card category-card">
                        <div className="card-body category-card-body">
                            <Link className="category-link" to="/coffee"> <h5 className="card-title category-card-title">Coffee</h5> </Link>
                            <p className="card-text category-card-text">Coffee is a brewed drink prepared from roasted coffee beans, the seeds of berries from certain Coffea species.</p>
                        </div>
                    </div>
                    <div className="card category-card">
                        <div className="card-body category-card-body">
                            <Link className="category-link" to="/soups"> <h5 className="card-title category-card-title">Soup</h5> </Link>
                            <p className="card-text category-card-text">Soup is a primarily liquid food, generally served warm or hot that is made by combining vegetables with water.</p>
                        </div>
                    </div>
                    <div className="card category-card">
                        <div className="card-body category-card-body">
                            <Link className="category-link" to="/milkshakes"> <h5 className="card-title category-card-title">Milkshake</h5> </Link>
                            <p className="card-text category-card-text">A Milkshake is a sweet drink made by blending milk, ice cream, and flavorings or sweeteners.</p>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="d-flex justify-content-center category-heading-container">
                        <h4 className="category-type-heading"> Fast Food </h4>
                    </div>
                </div>
                <div className="d-flex align-items-start justify-content-evenly row sub-category-container">
                    <div className="card category-card">
                        <div className="card-body category-card-body">
                            <Link className="category-link" to="/sandwiches"> <h5 className="card-title category-card-title">Sandwich</h5> </Link>
                            <p className="card-text category-card-text">A sandwich is a food typically consisting of vegetables and cheese placed on or between slices of bread.</p>
                        </div>
                    </div>
                    <div className="card category-card">
                        <div className="card-body category-card-body">
                            <Link className="category-link" to="/pizzas"> <h5 className="card-title category-card-title">Pizza</h5> </Link>
                            <p className="card-text category-card-text">Pizza is a dish of Italian origin consisting of a usually round, flattened base of wheat-based dough topped with tomatoes, cheese, and various other ingredients</p>
                        </div>
                    </div>
                    <div className="card category-card">
                        <div className="card-body category-card-body">
                            <Link className="category-link" to="/burgers"> <h5 className="card-title category-card-title">Burger</h5> </Link>
                            <p className="card-text category-card-text">Dish consisting of a flat round cake of potato that is fried or grilled and served in a split bun with various condiments and toppings.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Categories