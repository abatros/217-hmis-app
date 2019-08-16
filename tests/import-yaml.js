#! /usr/bin/env node

const fs = require('fs');
const path = require('path');
//const fs = require('fs-extra');
const yaml = require('js-yaml');
const assert = require('assert')
const jsonfile = require('jsonfile');

const data_folder = '/home/dkz/tmp/scooru-UI-git/Demo_data'

const players = {}
const teams = {}
const games = {}

;(()=>{
  const players = fs.readdirSync(path.join(data_folder,'players'));
  console.log(players);
  players.forEach(fn=>{
    const json = yaml.safeLoad(fs.readFileSync(path.join(data_folder,'players',fn),'utf8'));
//    console.log(json);
    scan_player(json)
  })
})();

;(()=>{
  const games = fs.readdirSync(path.join(data_folder,'games'));
//  console.log(players);
  games.forEach(fn=>{
    const json = yaml.safeLoad(fs.readFileSync(path.join(data_folder,'games',fn),'utf8'));
    console.log(json);
//    scan_player(json)
  })
})();

;(()=>{
  const games = fs.readdirSync(path.join(data_folder,'teams'));
//  console.log(players);
  games.forEach(fn=>{
    const json = yaml.safeLoad(fs.readFileSync(path.join(data_folder,'teams',fn),'utf8'));
    console.log(json);
//    scan_player(json)
  })
})();



/*
console.log(Object.values(players).sort((a,b)=>(a.sname.localeCompare(b.sname)))
.map(p=>{
  const {sname, full_name, loc} = p;
  return {sname, full_name,loc}
}));
*/


function scan_player(p) {
  if (players[p.sname]) {
    if (players[p.sname].player_id) {
      console.log('1.player already defined : ',p)
      console.log(`2.player already defined : `,players[p.sname])
      throw `player "${p.sname}" already defined`;
    }
  }
  players[p.sname] = p;
  p.teams.forEach(t=>{
    teams[t.sname] = teams[t.sname] || t;
  })
  p.followers.forEach(x=>{
    players[x.sname] = players[x.sname] || x; //Object.assign(x,{undefined:true})
  })
  p.following.forEach(x=>{
    players[x.sname] = players[x.sname] || x; //Object.assign(x,{undefined:true})
  })
}
