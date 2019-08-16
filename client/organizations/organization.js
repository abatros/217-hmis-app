import './game.html'
import './game-overview.js'
import './game-stats.html'
import './game-players-substitutions.js'
import './game-players-lineup.html'
import './game-players.html'
import './game-tabs.js'
import {games_directory, _games, _game, api} from '../app.js'

const TP = Template.game;


  const etime = new ReactiveVar(0);
  const home_score = new ReactiveVar(0);
  const visitor_score = new ReactiveVar(0);
  const ball_side = new ReactiveVar(0);
  let next_change = 10;

  /*
    bidouille:
    every minute we add a goal. random.
  */


  var x = setInterval(function() {
  //  console.log('bip', etime.get())
  const x = etime.get()
  if (x >= next_change) {
    console.log('next-change at')
    next_change += 5 + getRandomInt(10);
    ball_side.set((ball_side.get()+1)%2)
  }
  if (x%10 == 9) {
    const y = getRandomInt(2);
    console.log(`new-goal ${getRandomInt(2)}`)
    if (y) {
      // visitor
      visitor_score.set(visitor_score.get() +1)
    } else {
      home_score.set(home_score.get() +1)
    }
  }
    etime.set(x +1);
  },1000)

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }


TP.onRendered(function(){
  window.scrollTo({
    top: 0,
    left: 0,
//    behavior: 'auto'
    behavior: 'smooth'
  });
})

TP.helpers({
  /*
  home_score: ()=>{
    _game.home.score = home_score.get();
    return home_score.get();
  },
  visitor_score: ()=>{
    _game.visitors.score = visitor_score.get();
    return visitor_score.get();
  }, */
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
    const x = etime.get();
    const sec = x%60;
    const min = Math.round(x/60)%60;

    const game = _game.get();
    if (!game) return;

    if (game.home.score) {
        game.home.win = (game.home.score > game.visitor.score)?'win':''
        game.visitor.win = (game.visitor.score > game.home.score)?'win':''
      }
    game.etime = `${min.toLocaleString(undefined,{minimumIntegerDigits: 2})}::${sec.toLocaleString(undefined,{minimumIntegerDigits: 2})}`;
//    console.log(games)
    return game;
  }
})

TP.helpers({
  overview_panel: ()=>{
//    const x = Session.get('team-sub-menu');
//    console.log('x:',x)
    return (LocalStore.get('game-tab-last-visited') == 'overview');
  },
  stats_panel: ()=>{
//    const x = Session.get('team-sub-menu');
//    console.log('x:',x)
//    return (Session.get('team-sub-menu') == 'stats');
  return (LocalStore.get('game-tab-last-visited') == 'stats');
  },
  players_panel: ()=>{
//    const x = Session.get('team-sub-menu');
//    console.log('x:',x)
//    return (Session.get('team-sub-menu') == 'followers');
    return (LocalStore.get('game-tab-last-visited') == 'players');
  },
})



FlowRouter.route('/game/:id', {
  name: 'game-page',
  action: function(params, queryParams){
        console.log('Router::action for: ', FlowRouter.getRouteName());
        console.log(' --- params:',params);
        Session.set('game-id',params.id);
        if (games_directory) {
          const game = games_directory[params.id];
          _game.set(game);
        }
        BlazeLayout.render('game',params);
    }
});
