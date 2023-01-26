import React from "react";
import './css/style.css';
import over from './photos/Overview.jpg';
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
        <div id="servicesContainer">
            <div id="service1">
                <div id="svg1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-box-seam" viewBox="0 0 16 16">
                    <path d="M8.186 1.113a.5.5 0 0 0-.372 0L1.846 3.5l2.404.961L10.404 2l-2.218-.887zm3.564 1.426L5.596 5 8 5.961 14.154 3.5l-2.404-.961zm3.25 1.7-6.5 2.6v7.922l6.5-2.6V4.24zM7.5 14.762V6.838L1 4.239v7.923l6.5 2.6zM7.443.184a1.5 1.5 0 0 1 1.114 0l7.129 2.852A.5.5 0 0 1 16 3.5v8.662a1 1 0 0 1-.629.928l-7.185 2.874a.5.5 0 0 1-.372 0L.63 13.09a1 1 0 0 1-.63-.928V3.5a.5.5 0 0 1 .314-.464L7.443.184z"/>
                    </svg>
                </div>
                <div>
                    <h3 id="serviceHeader">Counseling Sessions</h3>
                    <p id="serviceDescription">You will meet with Megan one-on-one to thoroughly address your nutrition concerns. Individualized counseling provides the support you need to achieve lasting results. We offer packages of sessions for new clients, and a-la-carte sessions are available for those that have already completed a package. </p>
                </div>
                <div>
                    <a href="/NewClientPackages"><button id="learnMore">Learn More</button></a>
                </div>
            </div>
            <div id="service2">
                <div id="svg2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-lightbulb" viewBox="0 0 16 16">
                    <path d="M2 6a6 6 0 1 1 10.174 4.31c-.203.196-.359.4-.453.619l-.762 1.769A.5.5 0 0 1 10.5 13a.5.5 0 0 1 0 1 .5.5 0 0 1 0 1l-.224.447a1 1 0 0 1-.894.553H6.618a1 1 0 0 1-.894-.553L5.5 15a.5.5 0 0 1 0-1 .5.5 0 0 1 0-1 .5.5 0 0 1-.46-.302l-.761-1.77a1.964 1.964 0 0 0-.453-.618A5.984 5.984 0 0 1 2 6zm6-5a5 5 0 0 0-3.479 8.592c.263.254.514.564.676.941L5.83 12h4.342l.632-1.467c.162-.377.413-.687.676-.941A5 5 0 0 0 8 1z"/>
                    </svg>
                </div>
                <div>
                    <h3 id="serviceHeader2">Specialty Testing</h3>
                    <p id="serviceDescription">The GI-Map is a comprehensive stool test that you complete at home. It provides a detailed report of your overall gut health. This test provides info on: levels of bad/healthy bacteria, yeast overgrowth, parasites, inflammation, leaky gut and more. </p>
                </div>
                <div>
                    <a href="https://www.diagnosticsolutionslab.com/tests/gi-map"><button id="learnMore">Learn More</button></a>
                </div>
            </div>
            <div id="service3">
                <div id="svg3">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-egg-fried" viewBox="0 0 16 16">
  <path d="M8 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
  <path d="M13.997 5.17a5 5 0 0 0-8.101-4.09A5 5 0 0 0 1.28 9.342a5 5 0 0 0 8.336 5.109 3.5 3.5 0 0 0 5.201-4.065 3.001 3.001 0 0 0-.822-5.216zm-1-.034a1 1 0 0 0 .668.977 2.001 2.001 0 0 1 .547 3.478 1 1 0 0 0-.341 1.113 2.5 2.5 0 0 1-3.715 2.905 1 1 0 0 0-1.262.152 4 4 0 0 1-6.67-4.087 1 1 0 0 0-.2-1 4 4 0 0 1 3.693-6.61 1 1 0 0 0 .8-.2 4 4 0 0 1 6.48 3.273z"/>
</svg>
                </div>
                <div>
                    <h3 id="serviceHeader3">Meal Planning</h3>
                    <p id="serviceDescription">Customized meal plans are already included in many of our new client packages! They can also be purchased a-la-carte on a weekly or monthly basis. Meal plans are always personalized to your preferences and health needs. </p>
                </div>
                <div>
                    <a href="/MealPlanning"><button id="learnMore">Learn More</button></a>
                </div>
            </div>
            <div id="service4">
                <div id="svg3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-capsule" viewBox="0 0 16 16">
                    <path d="M1.828 8.9 8.9 1.827a4 4 0 1 1 5.657 5.657l-7.07 7.071A4 4 0 1 1 1.827 8.9Zm9.128.771 2.893-2.893a3 3 0 1 0-4.243-4.242L6.713 5.429l4.243 4.242Z"/>
                    </svg>
                </div>
                <div>
                    <h3 id="serviceHeader4">Supplements</h3>
                    <p id="serviceDescription">Megan often recommends supplements as part of your nutrition plan, especially with gut-healing protocols. We only recommend professional grade supplements, and will always explain the rationale for use in your plan. <b>To access our dispensary, click the link below.</b></p>
                </div>
                <div>
                    <a href="https://us.fullscript.com/welcome/mbarahona/signup?fbclid=PAAaYVAKpAQytcIFORQzHX3ehPfDkIKvurkWJ97OiM6Y4-icOhQSD4c0KIYlk"><button id="learnMore">Learn More</button></a>
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
                    <h3>Call or Text:  949-954-0457</h3>
                    <h3>Email: megan@purehealingnutrition.com</h3>
                    <h3>All appointments are 100% virtual</h3>
                </div>
                <div id="businessHours">
                    <h2>Social Media</h2>
                    <a rel="noopener" href="https://www.instagram.com/purehealingnutrition/"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-instagram" viewBox="0 0 16 16">
                        <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"/>
                      </svg></a>        
                    <a rel="noopener" href="https://www.tiktok.com/@purehealingnutrition"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-tiktok" viewBox="0 0 16 16">
                        <path d="M9 0h1.98c.144.715.54 1.617 1.235 2.512C12.895 3.389 13.797 4 15 4v2c-1.753 0-3.07-.814-4-1.829V11a5 5 0 1 1-5-5v2a3 3 0 1 0 3 3V0Z"/>
                      </svg></a>
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