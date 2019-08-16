const fs = require('fs');
const yaml = require('js-yaml');
const assert = require('assert')
//const fs = require('fs-extra');

const jsonfile = require('jsonfile');

export var teams_directory;
export var _teams = new ReactiveArray()

export var games_directory;
export var _games = new ReactiveArray()

Meteor.startup(()=>{
//  console.log(`Meteor.startup::api.js`)
  Meteor.call('get-players-directory',(err,data)=>{
    if (err) throw err;
    players_directory = data; // this is an object. Not an array.
    //console.log(`api.js:: players_directory:`,players_directory)
    _players.push(...Object.values(players_directory));
    //console.log(`api.js:: _players:`,_players)
  //  return _players;
    console.log(`PLAYERS AVAILABLE and Session(player-id):${Session.get('player-id')}`)
    const player_id = Session.get('player-id');
    if (player_id) {
      _player.set(players_directory[player_id]);
      console.log('_player:',_player.get())
    }
  })

  Meteor.call('get-teams-directory',(err,data)=>{
    if (err) throw err;
    teams_directory = data; // this is an object. Not an array.
    _teams.push(...Object.values(teams_directory).filter(it=>(it.stats)));
    console.log(`TEAMS AVAILABLE and Session(team-id):${Session.get('team-id')} ->  _team.set()`)
    const team_id = Session.get('team-id');
    if (team_id) {
      _team.set(teams_directory[team_id]);
      console.log('_team:',_team.get())
    }
  })


  function fix_minutes(x) {
    switch(x.type) {
      case 'goal':
        if (x.home) x.home ={scorer:x.home, assist:x.assist};
        else
          x.visitor ={scorer:x.visitor, assist:x.assist};

//        console.log('fixing x:',x)

//        if ((''+x.score.split(':')).length<=0) {
//          x.score = x.score.split().join(':')
//        }
        x.home_score = x.score.split('-')[0];
        x.visitor_score = x.score.split('-')[1];
      break;
      case 'yellow':
        x.yellow = true;
      break;
      case 'half_time':
        x.half_time = x.score;
        x.home_score = x.score.split('-')[0];
        x.visitor_score = x.score.split('-')[1];
        x.score = null
      break;
    }
  }


  Meteor.call('get-games-directory',(err,data)=>{
    if (err) throw err;
    games_directory = data; // this is an object. Not an array.
    _games.push(...Object.values(games_directory));
//    console.log(`GAME AVAILABLE and Session(team-id):${Session.get('team-id')} ->  _team.set()`)
    Object.values(data).forEach(g=>{
      g.minutes.forEach(m=>{
        fix_minutes(m);
      })
    })
    const game_id = Session.get('game-id');
    if (game_id) {
      _game.set(games_directory[game_id]);
      console.log(`_game[${game_id}]:`,_game.get())
    }
  })
})

export var _player = new ReactiveVar();
export var _team = new ReactiveVar();
export var _game = new ReactiveVar();


export var players_directory;
export var _players = new ReactiveArray()

/*
    get_player_byId
    MUST BE REACTIVE
    case we access directly /player/101.
*/

function get_player_byId(sname) {
  const players = _players.list();
  // assuming players_directory set be for _players
  const player = players_directory && players_directory[sname];
  //_player.set(player)
  //console.log(`get_player_byId(${sname}) =>`,_player.get())
  return player;
}

function get_team_byId(sname) {
  const teams = _teams.list();
  // assuming players_directory set be for _players
  const team = teams_directory && teams_directory[sname];
  //_player.set(player)
  //console.log(`get_player_byId(${sname}) =>`,_player.get())
  return team;
}


export var app = {
  players_directory,
  _players,
  get_player_byId
}
