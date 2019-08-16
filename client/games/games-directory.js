import './games-directory.html';
import './game.js'
import {games_directory, _games, _game, api} from '../app.js'

const TP = Template['games-directory'];

const etime = new ReactiveVar(0);

var x = setInterval(function() {
//  console.log('bip', etime.get())
  etime.set(etime.get() +1);
},1000)


TP.helpers({
  games: () =>{
    const games = _games.array(); // wait for directory...
    if (!games) return;
    console.log(`helper::games:`,games)
    /*
    const x = etime.get();
    const sec = x%60;
    const min = Math.round(x/60)%60;
    */
    games.forEach(game=>{
      if (game.home.score) {
        game.home.win = (game.home.score > game.visitor.score)?'win':''
        game.visitor.win = (game.home.score < game.visitor.score)?'win':''
      }
    })
//    games[0].etime = `${min.toLocaleString(undefined,{minimumIntegerDigits: 2})}::${sec.toLocaleString(undefined,{minimumIntegerDigits: 2})}`;
//    console.log(games)
    return games;
  }
})

FlowRouter.route('/games', {
  name: 'games-directory',
  action: function(params, queryParams){
        console.log('Router::action for: ', FlowRouter.getRouteName());
        console.log(' --- params:',params);
        BlazeLayout.render('games-directory',params);
    }
});
