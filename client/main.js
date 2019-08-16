import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';
import './app.js';
//import './app-header.html'
import './lahapp-banner.js'
import './profile-selector.js'
import './app-helpers.js'
import './nav-bottom.js'
//import './nav-bottom2.js'
import './welcome/welcome.js'
import './ubutton.js'
import './mire.js'
import './svg1.html'

import './home/home-page.js'
import './players/players-directory.js'
import './teams/teams-directory.js'
import './teams/team-page.js'
import './organizations/organizations-directory.js'
import './games2/game2.js'
import './profiles/profiles.js'
import './news/news.js'
import './services/services.js'


import './google-form.js'


Template.body.events({
  'click .js-close-sidenav':()=>{
    document.getElementById("mySidenav").style.width = "0";
  },
  'click .js-close-chanSelector':()=>{
    document.getElementById("myChanSelector").style.width = "0";
  }
})

/* Set the width of the side navigation to 250px */
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

/* Set the width of the side navigation to 0 */
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

/* Set the width of the side navigation to 250px */
function openChanSelector() {
  document.getElementById("myChanSelector").style.width = "250px";
}

/* Set the width of the side navigation to 0 */
function closeChanSelector() {
  document.getElementById("myChanSelector").style.width = "0";
}
