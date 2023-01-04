import React from 'react';
import "./Navlinks.css";
import { Link } from "react-router-dom";

const Page3onsite = "./Page3onsite";
const Page6saved = "./Page6saved";
const Page5applied = "./Page5applied";

export default function Navlinks() {
    return (
        <>
            <div className='body'>
                <div>
                    <div className='Nav'>
                        <img className='blue' src="./images/blue4.png" alt="" />
                        <img className='archslate' src="./images/Archslate.png" alt="" />
                        <img className='icon' src="./Icon.png" alt="" />
                        <img className='icon1' src="./Icon (1).png" alt="" />
                        <img className='icon2' src="./Icon (2).png" alt="" />
                        <img className='icon3' src="./Icon (3).png" alt="" />
                        <img className='icon4' src="./Icon (4).png" alt="" />

                        <span className='candidates'>Candidates</span>
                        <span className='companies'>Companies</span>
                        <span className='jobs'>Jobs</span>
                        <span className='notification'>Notification</span>
                        <span className='user'>User Name</span>
                    </div>
                    <div className="rectangle1">
                        <span className='searchjobs'><Link to={Page3onsite}>  Search jobs </Link> </span>
                        <span className='savedjobs'><Link to={Page6saved}>  Saved jobs </Link></span>
                        <span className='applied'><Link to={Page5applied}>  Applied </Link></span>
                        {/* <img className='line91' src="./line91.png" alt="" /> */}
                    </div>
                </div>
            </div>
        </>
    )
}