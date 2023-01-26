import './css/style.css';
import React from 'react';
import PureHealingLogo from './photos/PureHealingLogoEmpty.jpg'

function CreateTopBar(){
  return (
      <div id="headerContainer">
        <div id="pureLogo">
            <a href='/Home'><img src={PureHealingLogo}/></a>
        </div>
        <div id="navigationMenus">
            <div id="home">
                <a href='/home'><h3>HOME</h3></a>
            </div>
            <div id="services">
                <a><h3>SERVICES</h3></a>
                <div class="dropdown-content">
                    <a rel="noopener" href="/Overview">Overview</a> 
                    <a rel="noopener" href="/NewClientPackages">New Clients</a>               
                    <a rel="noopener" href="/ExistingPastClients">A-La-Carte Sessions</a>   
                    <a rel="noopener" href="/MealPlanning">Meal Planning</a>       
                </div>
            </div>
            <div id="about">
                <a href='/about'><h3>ABOUT</h3></a>
            </div>
            <div id="faq">
                <a href='/FAQ'><h3>FAQ</h3></a>
            </div>
            <div id="testimonials">
                <a href='/testimonials'><h3>TESTIMONIALS</h3></a>
            </div>
        </div>
      </div>
  )
}

export default function TopBar() {
  return (
    <CreateTopBar />
  );
}

