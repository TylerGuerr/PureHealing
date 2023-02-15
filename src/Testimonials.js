import React from "react";
import './css/style.css';
import photo from './photos/Testimonials.jpg';
import logo from './photos/PureHealingLogoEmpty.jpg'


function CreateTestimonials() {
    return (
        <>
        <div id="testimonialContainer">
            <div id="testimonialImgContainer">
                <img src={photo} />
            </div>
            <div id="testimonialHeaderSection">
                <div id="testimonialHeader">
                    <h1>What My Clients Are Saying</h1>
                </div>
            </div>
            <div id="testimonialMain">
                <div class="cardContainer">
                    <div class="testimonialContent">
                        <p>"After struggling with gastrointestinal issues for so long and not finding answers from different practitioners including GI doctors and naturopathic docs, and undergoing every possible diagnostic procedure, I finally turned to the expertise of Megan. Not only did she perform the most thorough and comprehensive assessment, and detailed intervention, she included me in planning and educating me on physiology, and etiology of suspected GI conditions, and mechanism of interventions. And rest assured, after a few trials, I finally found answers and relief. As a fellow dietitian, who has had the pleasure of working with Megan. I can attest that she is one of the most brilliant and passionate clinicians I have worked with. She is that perfect mix of knowledge and passion. She is the kind that would not leave any stone unturned to provide the best nutritional care for her patients. She is the one I would trust my patients with and dietitian I would trust for me."</p>
                    </div>
                    <div class="clientInformation">
                        <h3>-Mania</h3>
                    </div>
                </div>
                <div class="cardContainer">
                    <div class="testimonialContent">
                        <p>"Working with Megan has been, truly, a wonderful experience! After struggling with GI issues for roughly a year, Megan was able to walk me through the process of ordering tests, reviewing diagnostic results, formulating a plan, and helping me tailor my treatment plan according to my specific needs. As a fellow RDN, I can say with confidence that Megan is a true professional in the field of nutrition. While she is focused on natural nutrition therapy from an integrative and functional perspective, she is also supportive of your personal nutrition journey and won't judge you for seeking western medicine as you feel is needed. I have valued her knowledge, approachablility, and kindness throughout this time and look forward to working with her in the future. I can't recommend her enough!"</p>
                    </div>
                    <div class="clientInformation">
                        <h3>-Lauren</h3>
                    </div>
                </div>
                <div class="cardContainer">
                    <div class="testimonialContent">
                        <p>"I started working with Megan after having digestive issues for more than 6 years. During this time, I had done so many different things (labs, tests, procedures, medications, etc), that ultimately have not solved the root problem of my GI issues. When I came to Megan I had honestly just accepted that my stomach issues might always be a problem I had to live with. Megan had a very different approach than other GI practitioners I had worked with- she suggested testing I had never tried before and went over the results with me very thoroughly. When it came time to come up with a treatment plan, she met me where I was and didn’t throw too many things at me at once. I felt she really listened to my concerns and was willing to work with me to ensure I was going to be successful. She was very responsive when I had follow up questions and was a pleasure to work with. I would, and frequently do, recommend anyone dealing with complex digestive issues to work with her. She’s the best"</p>
                    </div>
                    <div class="clientInformation">
                        <h3>-Holden</h3>
                    </div>
                </div>
            </div>
            <div id="reviewButton">
                <a href="/Email"><button>Leave A Review!</button></a>
            </div>
            <div class="bottomContainer">
                <div id="bottomLogoConatiner">
                    <img src={logo}/>
                    <h4>Copyright &#xA9; All Rights Reserved</h4>
                </div>
                <div id="contact">
                    <h2>Contact</h2>
                    <h3>Call or Text:  949-954-0457</h3>
                    <h3>Email: purehealingnutrition@gmail.com</h3>
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
                      <a rel="noopener" href="https://www.linkedin.com/in/megan-barahona-ms-rdn-a61b5b87/"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-linkedin" viewBox="0 0 16 16">
  <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
</svg></a>
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

export default function Testimonials() {
    return (
        <CreateTestimonials />
    )
}