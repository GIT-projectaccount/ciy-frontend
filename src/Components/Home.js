import React from 'react'

import Carousel from './Carousel'
import Populardish from './Populardish'

const Home = () => {
    return (
        <>
            <div className="container-fluid">
                <Carousel/>
                <hr className="hr-1"/>
                <Populardish/>
                <hr className="hr-1"/>
            </div>
        </>
    )
}

export default Home
