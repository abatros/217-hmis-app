import './players-directory.html';
import './player-chip.html'
import {api, _players} from '../app.js' // a reactive-array.

const TP = Template['players-directory'];

TP.onCreated(function(){
})

TP.helpers({
  players_not_ready: ()=>{
    const players = _players.list();
    const not_ready = (!players || players.length <=0)
    console.log(`players_not_ready ${not_ready}`)
    return not_ready
  },
  players: ()=>{
    const players = _players.list();
    players.forEach(p=>{
      const cats = p.roles && p.roles.map(it=>it.cat);
      p.cats = cats && [...new Set(cats)].join(', ')
    })

    return players;
  }
})

FlowRouter.route('/players', {
  name: 'players-directory',
  action: function(params, queryParams){
        console.log('Router::action for: ', FlowRouter.getRouteName());
        console.log(' --- params:',params);
        LocalStore.set('last-visited-profile',`/players`)
        BlazeLayout.render('players-directory',params);
    }
});
