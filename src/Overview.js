import React from "react";
import './css/style.css';
import over from './photos/Overview.jpg';
import gradient from './photos/gradient.jpg';
import logo from './photos/PureHealingLogoEmpty.jpg';

function CreateOverview() {
    return(
    <div id="overviewMainContainer">
        <div id="overviewImgContainer">
            <img src={over}/>
        </div>
        <div id="overviewTextContainer">
            <h1>My Services</h1>
        </div>
        <div id="serviceOverviewText">
            <p>Pure Healing Nutrition offers personalized counseling packages that focus on Integrative and Functional nutrition. Megan’s goal is to discover what is causing your health problems. She will create a therapeutic plan customized to YOU, to address these concerns and help you feel your best.</p>
            <p><b>All appointments are virtual</b></p>
        </div>  
        <div id="overviewImgContainer2">
            <img src={gradient}/>
        </div> 
        <div id="servicesContainer">
            <div id="service1">
                <div id="svg1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-box-seam" viewBox="0 0 16 16">
                    <path d="M8.186 1.113a.5.5 0 0 0-.372 0L1.846 3.5l2.404.961L10.404 2l-2.218-.887zm3.564 1.426L5.596 5 8 5.961 14.154 3.5l-2.404-.961zm3.25 1.7-6.5 2.6v7.922l6.5-2.6V4.24zM7.5 14.762V6.838L1 4.239v7.923l6.5 2.6zM7.443.184a1.5 1.5 0 0 1 1.114 0l7.129 2.852A.5.5 0 0 1 16 3.5v8.662a1 1 0 0 1-.629.928l-7.185 2.874a.5.5 0 0 1-.372 0L.63 13.09a1 1 0 0 1-.63-.928V3.5a.5.5 0 0 1 .314-.464L7.443.184z"/>
                    </svg>
                </div>
                <div>
                    <h3 id="serviceHeader">Sessions & Packages</h3>
                    <p id="serviceDescription">Together, you and Megan will strategize how to get to the root cause of your symptoms. We work like detectives to figure out what’s going on with your body and how to fix it. There are cutting edge testing that we use as well as good old fashioned assessment and expertise. Click below to learn more about our packages and fees. </p>
                </div>
                <div>
                    <button id="learnMore">Learn More</button>
                </div>
            </div>
            <div id="service2">
                <div id="svg2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-lightbulb" viewBox="0 0 16 16">
                    <path d="M2 6a6 6 0 1 1 10.174 4.31c-.203.196-.359.4-.453.619l-.762 1.769A.5.5 0 0 1 10.5 13a.5.5 0 0 1 0 1 .5.5 0 0 1 0 1l-.224.447a1 1 0 0 1-.894.553H6.618a1 1 0 0 1-.894-.553L5.5 15a.5.5 0 0 1 0-1 .5.5 0 0 1 0-1 .5.5 0 0 1-.46-.302l-.761-1.77a1.964 1.964 0 0 0-.453-.618A5.984 5.984 0 0 1 2 6zm6-5a5 5 0 0 0-3.479 8.592c.263.254.514.564.676.941L5.83 12h4.342l.632-1.467c.162-.377.413-.687.676-.941A5 5 0 0 0 8 1z"/>
                    </svg>
                </div>
                <div>
                    <h3 id="serviceHeader2">Professional Mentoring</h3>
                    <p id="serviceDescription">Megan provides professional mentoring to other dietitians and nutritionist who are either new to private practice or new to functional nutrition. Review case studies, get all your questions answered, know what really works when going into private practice! </p>
                </div>
                <div>
                    <button id="learnMore">Learn More</button>
                </div>
            </div>
            <div id="service3">
                <div id="svg3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-capsule" viewBox="0 0 16 16">
                    <path d="M1.828 8.9 8.9 1.827a4 4 0 1 1 5.657 5.657l-7.07 7.071A4 4 0 1 1 1.827 8.9Zm9.128.771 2.893-2.893a3 3 0 1 0-4.243-4.242L6.713 5.429l4.243 4.242Z"/>
                    </svg>
                </div>
                <div>
                    <h3 id="serviceHeader3">Supplements</h3>
                    <p id="serviceDescription">You may be asked to take supplements while working with Megan, especially if there is a deficiency to correct or a bacterial imbalance in the gut. Supplements may not be needed long term but will greatly aid in helping you feel better faster. We only use and recommend professional grade supplements. Many of the supplements we recommend have significant research to support their safety and efficacy. </p>
                </div>
                <div>
                    <button id="learnMore">Learn More</button>
                </div>
            </div>
        </div>
        <div class="bottomContainer">
                <div id="bottomLogoConatiner">
                    <img src={logo}/>
                    <h4>Copyright &#xA9; All Rights Reserved</h4>
                </div>
                <div id="contact">
                    <h2>Contact</h2>
                    <h3>Call:  949-954-0457</h3>
                    <h3>Email: megan@purehealingnutrition.com</h3>
                    <h3>All appointments are 100% virtual</h3>
                </div>
                <div id="businessHours">
                    <h2>Business Hours</h2>
                    <h3>Mon-Sat: Appointment Only</h3>
                    <h3>Sunday: Closed</h3>
                </div>
            </div>
    </div>
    )
}

export default function Overview(){
    return (
        <CreateOverview />
    )
}