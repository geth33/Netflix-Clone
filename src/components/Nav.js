import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom';
import "./css/Nav.css"

function Nav() {
    const [show, handleShow] = useState(false);
    const history = useHistory();

    useEffect(() => {
        window.addEventListener("scroll", transitionNavBar)
        return () => window.removeEventListener("scroll", transitionNavBar)
    }, []) // empty bracket = code only runs when component mounts

    const transitionNavBar = () => {
        if (window.scrollY > 100){
            handleShow(true);
        } else {
            handleShow(false);
        }
    }

    return (
        <div className={`nav ${show && 'nav__black'}`}>
            <div className="nav__contents">
                <img
                onClick={() => history.push("/")} 
                className='nav__logo' 
                src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"/>

                <img 
                onClick={() => history.push("/profile")}
                className='nav__avatar' 
                src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png" />
            </div>
        </div>
    )
}

export default Nav
