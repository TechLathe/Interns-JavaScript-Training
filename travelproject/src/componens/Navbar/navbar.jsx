import React from 'react';
import "./navbar.css";
import {BiLogoMediumOld} from 'react-icons/bi';
import { PiDotsNineBold } from 'react-icons/bi';
import { AiFillCloseCircle} from 'react-icons/bi;'
const navbar =() => {
    return (
        <div className='navbar'>
        <div className="logodiv">
            <BiLogoMediumOld classname='icon'/>
            <span>OU-trips</span>
        </div>

        <div className='menu'>
            <ul>
                <li className='nevlist'>
                    destination
                </li>
                <li className='navlist'>
                    about us
                </li>
                <li className='nevlist'>
                    testimonial
                </li>
                <li className='nevlist'>
                    gallery
                </li>
            </ul>
            <AiFillCloseCircle className='icon'/>
        </div>
        <button className='signUpBtn byn'>sign up</button>
        <PiDotsNineBold className='icon'/>
        </div>
    )
}
export default navbar