import React, { useEffect } from 'react'

import Carousel from './Carousel'
import Randomdish from './Randomdish'

const Home = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <>
            <div className="container-fluid">
                <Carousel />
                <hr className="hr-1" />
                <Randomdish />
            </div>
        </>
    )
}

export default Home
