//import {users, teams, games, notifications, tags, _assert} from './app-client';

import {_team, _player, _game} from './app.js';

Template.registerHelper('session',function(input){
    return Session.get(input);
});

Template.registerHelper('active_user',function(input){
  const user_id = Session.get('user-id');
  return users[user_id]
});

Template.registerHelper('active_game',function(input){
  const gid = Session.get('game-id');
  return games[gid]
});

Template.registerHelper('_team',function() {return _team.get()});
Template.registerHelper('_player',function() {return _player.get()});
Template.registerHelper('_game',function() {return _game.get()});


Template.registerHelper('instance', function () {
  return Template.instance();
});
/*
Template.registerHelper('team',function(input){
    const team_id = Session.get('team-id');
    return teams[team_id]
});
*/

Template.registerHelper('eq', function (x,y) {
  return (x == y);
});


Template.registerHelper('static_images', ()=>{
    //       src="{{static_images}}/LandingPage/ScooruLogoTop.png"
  return 'http://abatros.com/static/hmis-images'
})
