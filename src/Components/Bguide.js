import React from 'react'
import bguide1 from "../images/bguide1.jpg"
import bguide2 from "../images/bguide2.jpg"
import bguide3 from "../images/bguide3.jpg"
import bguide4 from "../images/bguide4.jpg"
import { useEffect } from "react"



const Bguide = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    return (
        <div className="container-fluid">
            <div className="d-flex align-items-center justify-content-center master-heading-container">
                <h2 className="bguide-master-heading"> The Beginner's Guide</h2>
            </div>
            <div className="d-flex">
                <div>
                    <img src={bguide1} alt="..." className="bguide-img" />
                </div>
                <div>
                    <h3 className="bguide-heading"> How to Read and Pick a Recipe.</h3>
                    <p className="bguide-text">Read the recipe all the way to the end before you start cooking anything. <br /> Actually doing so removes much of the stress you might associate with cooking. <br /> Read the ingredients list too! It tells a story, and all too often hides some of the prep, like chopping onions or grating cheese. <br /> If there’s a term you don’t understand, google it. Almost every mysterious recipe term has been clearly defined online now.</p>
                </div>
            </div>
            <div className="d-flex">
                <div>
                    <img src={bguide2} alt="..." className="bguide-img" />
                </div>
                <div>
                    <h3 className="bguide-heading"> When to Cook?</h3>
                    <p className="bguide-text">Assume it will take you 60 to 90 minutes to prepare and clean up after any meal. <br />  It doesn't matters if the recipe says 30 minutes. You’re new to this, and some of us are just slower in the kitchen. <br /> If you don’t want to spend an hour cooking, choose a recipe that takes a long time but requires little from you. <br /> Equally important is knowing when not to cook.</p>
                </div>
            </div>
            <div className="d-flex">
                <div>
                    <img src={bguide3} alt="..." className="bguide-img" />
                </div>
                <div>
                    <h3 className="bguide-heading"> Assemble Your Tools and Stock Your Pantry. </h3>
                    <p className="bguide-text"> Having the most essential cooking tools in your cupboard will make your life so much easier. <br /> Although the kitchen world comes out with sleek, trendy, and exciting kitchen gadgets all the time, that doesn’t mean you need to buy every single one to be able to cook well. <br /> In fact, the most basic tools are all you need to start cooking delicious meals. <br /> With these items, you’ll be able to cook just about anything - <br /> FRYING PAN, SAUCEPAN, KNIVES, MEASURING SPOONS, MEASURING CUPS, CUTTING BOARD, RICE COOKER and other tools as per the dish you are cooking. </p>
                </div>
            </div>
            <div className="d-flex">
                <div>
                    <img src={bguide4} alt="..." className="bguide-img" />
                </div>
                <div>
                    <h3 className="bguide-heading"> Cook Safely. </h3>
                    <h4 className="bguide3-mini-heading"> 3 Golden C's of Cooking Safety - </h4>
                    <p className="bguide-text">  <br /> CLEAN - Always wash your food, hands, platform, and cooking tools.<br /> COOK - Foods need to get hot and stay hot. Heat kills germs.
                        <br /> CHILL - Put food in the fridge right away if not eating/leftover. </p>
                </div>
            </div>
            <hr className="hr-1" />
        </div>

    )
}

export default Bguide
