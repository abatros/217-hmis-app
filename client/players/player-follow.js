import './player-follow.html'

import {follow, unfollow} from './player-friends.js';
import {api, players_directory} from '../app.js';

const TP = Template.player_follow;

TP.onCreated(function(){
  /*
  const player_id = Session.get('player-id')
  const player = api.get_player_byId(player_id)
  console.log('onCreated player:',player);
  */
  // HERE IT IS A FOLLOWER NOT THE PLAYER....
  console.log('IT SHOULD SCROLL.........')
  window.scrollTo({
    top: 0,
    left: 0,
//    behavior: 'auto'
    behavior: 'smooth'
  });

});

TP.helpers({
  player: ()=>{
    const player = Template.instance().data.player;
//    console.log('follower.data.player:',player);
    return player;
  },
  player_pic: ()=>{
    const player = Template.instance().data.player;
//    console.log('follower.data.player:',player);
    return players_directory[player.sname].profpic[0].url;
  },

});

TP.events({
  'click .-js-follow': (e,tp)=>{
    console.log('follow:',tp.data.player);
    follow({player:tp.data.player})
  },
  'click .-js-unfollow': (e,tp)=>{
    console.log('unfollow:', tp.data.player);
    unfollow({player:tp.data.player})
  },
})

TP.helpers({
  _player: ()=>{
    const p = Template.instance().data.player;
    console.log('helper:player:',p)
    return p;
  }
})
