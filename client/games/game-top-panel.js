const assert = require('assert');

import './game-top-panel.html';

const etime = new ReactiveVar(0);
const home_score = new ReactiveVar(0);
const visitor_score = new ReactiveVar(0);
const ball_side = new ReactiveVar(0);


const TP = Template.game_top_panel;
var game;

TP.onCreated(function(){
  game = this.data.game;
  if (!game) {
    console.log('data:',this.data);
    throw "NO-GAME"
  }
  console.log('game:',game)
})

TP.helpers({
  home_score: ()=>{
    game.home.score = home_score.get();
    return home_score.get() ||0;
  },
  visitor_score: ()=>{
    game.visitor.score = visitor_score.get();
    return visitor_score.get() || 0;
  },
  home_ball_hidden: ()=>{
    const x = ball_side.get();
    return (x==0)?'':'hidden';
  },
  visitor_ball_hidden: ()=>{
    const x = ball_side.get();
    return (x==1)?'':'hidden';
  }
})


TP.helpers({
  game: (e,tp)=>{
//    if (!game) return;
//    const game = tp.data.game;
//    assert(game)
    const x = etime.get();
    const sec = x%60;
    const min = Math.round(x/60)%60;
    if (game.home.score) {
        game.home.win = (game.home.score > game.visitor.score)?'win':''
        game.visitor.win = (game.visitor.score > game.home.score)?'win':''
      }
    game.etime = `${min.toLocaleString(undefined,{minimumIntegerDigits: 2})}:${sec.toLocaleString(undefined,{minimumIntegerDigits: 2})}`;
//    console.log(games)
    return game;
  }
})
