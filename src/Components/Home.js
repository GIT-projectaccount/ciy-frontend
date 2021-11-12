import React from 'react'

import Carousel from './Carousel'
import Randomdish from './Randomdish'

const Home = () => {
    return (
        <>
            <div className="container-fluid">
                <Carousel/>
                <hr className="hr-1"/>
                <Randomdish/>
            </div>
        </>
    )
}

export default Home
