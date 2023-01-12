import React from "react";
import './css/style.css';
import home from './photos/home.jpg';
import logo from './photos/PureHealingLogoEmpty.jpg';

function CreateHome() {
    return(
    <div id="mainContainer">
        <div id="imgContainer">
            <img src={home}/>
        </div>
        <div id="textContainer">
            <div id="text1">
                <h1>Heal Your Chronic Digestive Issues</h1>
                <p>Do you suffer from chronic diarrhea, 
                    constipation, gas, bloating, etc.? Feel Like
                    you've tried everything with no success? Have
                    doctors told you there's nothing wrong with you,
                    but you still feel terrible?
                </p>
                <p>I once did, I know what you going through, and <b>I'M
                    HERE TO HELP.</b> Uncover the root causes of your digestive
                    problems and finally feel better, for good!
                </p>
            </div>
            <div id="text2">
                <h2 id="newClientsHeader">New Clients</h2>
                <h3 id="getStarted"><em>Get Started Now!<br/>Schedule Your Free Call Here:</em></h3>
                <a href="https://my.practicebetter.io/#/62f820492337f29905a94989/bookings?s=62f841252337f29905aa6df7"><button id="schedule">Schedule</button></a>
                <h2 id="existingHeader">Existing and Past Clients</h2>
                <h3 id="requestSession"><em>Request a Session:</em></h3>
                <a href="https://my.practicebetter.io/#/62f820492337f29905a94989/bookings?s=6362bd1eae68b129488458ff"><button id="request">Request</button></a>
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

export default function Home(){
    return (
        <CreateHome />
    );
}