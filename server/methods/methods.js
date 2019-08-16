const fs = require('fs');
//const fs = require('fs-extra');
const yaml = require('js-yaml');
const assert = require('assert')
const jsonfile = require('jsonfile');

import {players, teams, games} from '../data.js';

function calculateAge(birthday) { // birthday is a date
    var ageDifMs = Date.now() - birthday.getTime();
    var ageDate = new Date(ageDifMs); // miliseconds from epoch
    return Math.abs(ageDate.getUTCFullYear() - 1970);
}

Meteor.methods({
  'get-players-directory': ()=>{
//    console.log(`players:`,players)
    Object.values(players).forEach(p=>{
      p.age = p.dob && calculateAge(new Date(p.dob));
//      console.log(`p.age:`,p.age)
    })
    return players;
  }
});


Meteor.methods({
  'get-teams-directory': ()=>{
//    console.log(`teams:`, teams)
    /*
    Object.values(players).forEach(p=>{
      p.age = p.dob && calculateAge(new Date(p.dob));
      console.log(`p.age:`,p.age)
    })
    */
    return teams;
  }
});

Meteor.methods({
  'get-games-directory': ()=>{
    return games;
  }
});
