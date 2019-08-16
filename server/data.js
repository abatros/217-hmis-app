const fs = require('fs');
const path = require('path');
//const fs = require('fs-extra');
const yaml = require('js-yaml');
const assert = require('assert')
const jsonfile = require('jsonfile');

export const players = {}
export const teams = {}
export const games = {}

export function load_players() {
  const _players = fs.readdirSync('./assets/app/players');
  console.log(_players);
  _players.forEach(fn=>{
    const txt = Assets.getText('players/'+fn);
//    const json = yaml.safeLoad(fs.readFileSync(path.join(data_folder,'players',fn),'utf8'));
    const json = yaml.safeLoad(txt);
//    console.log(json);
    scan_player(json)
  })
  // here we have a structure for players (not an array).
}

export function load_teams() {
  const _teams = fs.readdirSync('./assets/app/teams');
//  console.log(_teams);
  _teams.forEach(fn=>{
    const txt = Assets.getText('teams/'+fn);
//    const json = yaml.safeLoad(fs.readFileSync(path.join(data_folder,'players',fn),'utf8'));
    const json = yaml.safeLoad(txt);
//    console.log(json);
    scan_team(json)
  })
  // here we have a structure for players (not an array).
}


export function load_games() {
  const _games = fs.readdirSync('./assets/app/games');
//  console.log(_teams);
  _games.forEach(fn=>{
    const txt = Assets.getText('games/'+fn).replace(/score: (\d):(\d)/g,'score: $1-$2');
//    const json = yaml.safeLoad(fs.readFileSync(path.join(data_folder,'players',fn),'utf8'));
    const json = yaml.safeLoad(txt);
//    console.log(json);
    scan_game(json)
  })
  // here we have a structure for players (not an array).
}



export function relink() {
  // 1. player.team.main_pic
  Object.values(players).forEach(p=>{
    p.teams.forEach(it=>{
      it.main_pic = teams[it.sname].main_pic;
    })
    p.games && p.games.forEach(it=>{
      if (it.home) {
        if (!teams[it.home]) {
          console.log(`teams[${it.home}] not found`)
        }
        it.home = {
          pic: teams[it.home].main_pic,
          short_name: teams[it.home].short_name
        }
      }
      if (it.visitor) {
        if (!teams[it.visitor]) {
          console.log(`teams[${it.visitor}] not found`)
        }
        it.visitor = {
          pic: teams[it.visitor].main_pic,
          short_name: teams[it.visitor].short_name
        }
      }
    })

  })
  Object.values(teams).forEach(x =>{
    x.games && x.games.forEach(it=>{
      if (it.home)
        it.home_pic = teams[it.home.sname].main_pic;

      const visitor = teams[it.visitor];
      console.log(`teams[${it.visitor}]:`,teams[it.visitor])
      if (visitor)
        it.visitor_pic = teams[it.visitor].main_pic;
    })
  })
}



function scan_team(team) {
  if (teams[team.sname]) {
    if (teams[team.sname].stats) {
      console.log('1.team already defined : ',team)
      console.log(`2.team already defined : `,teams[team.sname])
      throw `team "${team.sname}" already defined`;
    }
  }
  teams[team.sname] = team;

  team.players && team.players.forEach(p =>{
    players[p.sname] = players[p.sname] || p;
    p.main_pic = players[p.sname].main_pic;
  })

  team.followers && team.followers.forEach(p=>{
    players[p.sname] = players[p.sname] || p; //Object.assign(x,{undefined:true})
  })
  team.main_pic = team.profpic[0].url;
  console.log('scan_team:',team)
}


function scan_game(game) {
  if (games[game.game_id]) {
      throw `game "${game.game_id}" already defined`;
  }
  games[game.game_id] = game;

  game.visitor_pic = teams[game.visitors.team_name.toLowerCase()].profpic[0].url;
  game.home_pic = teams[game.home.team_name.toLowerCase()].profpic[0].url;
  console.log('scan_game:',game)
}



/*
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
*/


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
  p.main_pic = p.profpic[0].url;
}
