import React from 'react';
import './home.css';
import Navbar from "../Components/Navbar";
import img1 from "../Images/img1.jpeg"
import img2 from "../Images/connectwithpeople.jpeg"

const home = () => {
    return (
        <div className="homepagediv">
            <Navbar />


            <div className="hpd1">
                {/* home page div 1 */}
                
                <div className="hpd1_inner">
                    <h1 className="name">egg - Engineers' Grooming Guide</h1>
                    <p>We are trying to make an effective platform for 
                        all type of engineers. This is a site where you 
                        can find many established engineers and their 
                        establishmemnts. Those who are interested in 
                        Science are mostly welcome.<br></br><br></br>
                        Join today by Clicking the "Join egg" button in
                        the Navbar. Explore the fantastic engineering world
                        with egg and get help to build your career and
                        accquire knowledge by blogs, posts, and courses or 
                        overall guidance.  </p>
                   
                </div>
                <div className="hpd1_inner">
                    <img src={img1}/>
                    
                </div>
            </div>

            <div className="hpd2">
                <div className="hpd2_inner1">
                    <img src={img2}></img>
                    <h2>Connect with people who can help</h2>
                   
                </div>
                <div className="hpd2_inner2">
            
                    
                </div>
            </div>

        </div>
    )
}

export default home;
