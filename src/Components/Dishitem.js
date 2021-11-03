import React from 'react'
import {Link} from 'react-router-dom'

const Noteitem = (props) => {
    const { recipe } = props;

    return (
        <div className="d-flex justify-content-center mx-2">
            <div className="card dishitem-card">
                <div className="card-body">
                    <img src={recipe.image} className="dishitem-card-img" />
                </div>
                <div className="dishitem-title-container">
                    <h5 className="card-title dishitem-card-title"><Link to="/dishpage"> {recipe.title}</Link> </h5>
                </div>
            </div>
        </div>
    )
}

export default Noteitem
