import React from 'react';
import './css/style.css';
import NewClientPhoto from './photos/New-Clients.jpg';
import logo from './photos/PureHealingLogoEmpty.jpg'

function CreateNewClient(){
    return (
        <>
        <div id="newClientMainContainer">
            <div id="newClientImgContainer">
                <img src={NewClientPhoto}/>
            </div>
            <div id="newClientTextContainer">
                <h1>New Client Packages</h1>
            </div>
            <div id="theBasic">
                <div id="section1">
                    <h2>The Basic</h2>
                    <h3>For those with minor digestive concerns looking for simple recommendations.</h3>
                </div>
                <div id="section2">
                    <h2>$750</h2>
                    <h3>
                        <b>What you get:</b>
                        <ul>
                            <li>GI-Map Stool Test</li>
                            <li>One 60-Minute Session</li>
                            <li>Test interpretation and diet/supplement recommendations based on results</li>
                        </ul>
                    </h3>
                    <h4><em>*Does NOT include meal plan/recipes, or email/phone support. Recommend upgrading to the Transformation if you want more support.</em></h4>
                </div>
            </div>
            <div id="theFoundation">
                <div id="section2">
                <h2>$1350 or 3 payments of $500</h2>
                    <h3>
                        <b>What you get:</b>
                        <ul>
                            <li>90-Minute Initial Assessment</li>
                            <li>3 One-Hour Follow Up Sessions</li>
                            <li>Unlimited Email/Phone Support</li>
                            <li>Customized Meal Plan & Recipes</li>
                        </ul>
                    </h3>
                </div>
                <div id="section1">
                    <h2>The Foundation</h2>
                    <h3>For those who don’t want specialty testing, but still want a tailored nutrition plan to solve digestive problems</h3>
                </div>
            </div> 
            <div id="theTransformation">
                <div id="section1">
                    <h2>The Transformation</h2>
                    <h3>Our most popular package! For those committed to solving digestive issues long-term</h3>
                </div>
                <div id="section2">
                    <h2>$1750 or 4 payments of $500</h2>
                    <h3>
                        <b>What you get:</b>
                        <ul>
                            <li>GI-Map Stool Test</li>
                            <li>90-Minute Initial Assessment</li>
                            <li>3 One-Hour Follow Up Sessions</li>
                            <li>Unlimited Email/Phone Support</li>
                            <li>Customized Meal Plan & Recipes</li>
                        </ul>
                    </h3>
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
        </>
    )
}

export default function NewClients(){
    return (
        <CreateNewClient />
    )
}