import React from 'react';
import './css/style.css';
import question from './photos/faq.jpg';

function CreateFAQ(){
    return (
        <>
        <div id="faqOverall">
            <div id="faqMainContainer">
                <div id="faqImageContainer">
                    <img src={question}/>
                </div>
                <div id="faqHeader">
                    <h1>FAQ</h1>
                </div>
                <div id="questionsContainer">
                    <div class="questionA">
                        <h2>What is Integrative and Functional Nutrition?</h2>
                        <ul>
                            <li><h3>Personalized nutrition care that focuses on identifying and resolving root causes of illness using therapeutic diets and dietary supplements with an emphasis on optimal gut health </h3></li>
                        </ul>
                        
                    </div>
                    <div class="questionB">
                        <h2>Do you accept insurance?</h2>
                        <ul>
                            <li><h3>We do not bill insurance companies at this time. We can provide you with a superbill of services that you can submit to your insurance for possible reimbursement. Check with your insurance plan to determine if you have coverage.</h3></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default function FAQ() {
    return (
        <CreateFAQ />
    )
}