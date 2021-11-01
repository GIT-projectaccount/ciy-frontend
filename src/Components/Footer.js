import React from 'react'
import ciylogo from "../images/CIYLOGO.png"

const Footer = () => {
    return (
        <>
            <div className="d-flex main-footer">
                <div className="d-flex align-items-start justify-content-center flex-fill footer-left">
                    <p className="footer-text">
                        Interested in cooking?<br /> You've come to the right place.
                    </p>
                </div>
                <div className="d-flex align-items-center justify-content-center flex-fill">
                    <img src={ciylogo} height="250rem" width="300rem" alt="..." className="ciy-logo" />
                </div>
                <div className="d-flex align-items-start justify-content-center flex-fill footer-right">
                    <p className="footer-text">
                        Providing quality food recipes,<br /> Since 2021.
                    </p>
                </div>
            </div>
        </>
    )
}

export default Footer