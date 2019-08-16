import './player.html'
import './player-overview.js'
import './player-stats.html'
import './player-friends.js'
import './player-follow.js'
import './player-tabs.js'
import './player-game.html'
import './player-banner.js'
import './player-message-follow.html'

import {_player, api, players_directory} from '../app.js'

const TP = Template['player'];

TP.onCreated(function(){
  const player = api.get_player_byId();
});


TP.onRendered(function(){
//  console.log(`_player_2001:`, _player.get());
  /*
  const tp = this;
  const p = tp.find('vbox#player')
//  const p = tp.find('vbox.scrolling-content')
  console.log(`player::onRendered p:`,p)
  console.log(`player::onRendered p.scrollTop:`,p.scrollTop)
  console.log(`player::onRendered p.scrollHeight:`,p.scrollHeight)
  console.log(`player::onRendered p.clientHeight:`,p.clientHeight)
  console.log(`player::onRendered window.scrollY:`,window.scrollY)


//  tp.event_panel.scrollTop = tp.event_panel.scrollHeight - tp.event_panel.clientHeight;
  p.scrollHeight =0;

  if (p.scrollY) {
    p.scroll(0, 0);  // reset the scroll position to the top left of the document.
  }
  */

  console.log('IT SHOULD SCROLL.........')
  window.scrollTo({
    top: 0,
    left: 0,
//    behavior: 'auto'
    behavior: 'smooth'
  });

  /*
  console.log(`player::onRendered (vbox#player).scrollTop:`,tp.find('vbox#player').scrollTop)
  console.log(`player::onRendered (vbox.scollling-content).scrollTop:`,tp.find('vbox.scrolling-content').scrollTop)
  console.log(`player::onRendered (vbox.player-overview).scrollTop:`,tp.find('vbox.player-overview').scrollTop)
  */

//return;
  const x = LocalStore.get(`player-tab-last-visited`)
  console.log("LocalStore.get(`player-tab-last-visited`) =>",x)

  if (x) {
    const mi = this.find(`.js-player-tab[tab=${x}]`)
    mi && mi.click();
  } else {
    const mi = this.find('.js-player-tab[tab=overview]')
    mi && mi.click();
  }
//  Session.set('player-menu','overview')
})

TP.helpers({
  player: ()=>{
    const player_id = Session.get('player-id')
//    console.log('helper::player.js player:',_player.get())
    return _player.get();
  },
  player2: ()=>{
    const player_id = Session.get('player-id');
    const player = api.get_player_byId(player_id);
    return player;
    /*
    return {
      fullname : 'Patcharaporn (Ning) Koopitachati-Marawi',
      loc: 'Bangkok',
      dob: '/ 19-2-83',
      age: '36 years',
      sports: 'Football, Tennis',
      positions: [{
        cat: 'Street football',
        position: 'Goalkeeper'
      },
      {
        cat: 'Indoor football',
        position: 'Mid attack'
      }]
    }
    */
  },
})

Template.player.helpers({
    overview_panel: ()=>{
      const x = LocalStore.get('player-tab-last-visited');
      if (!x) LocalStore.set('player-tab-last-visited','overview')
      return (LocalStore.get('player-tab-last-visited') == 'overview');
    },
    stats_panel: ()=>{
      return (LocalStore.get('player-tab-last-visited') == 'stats');
    },
    friends_panel: ()=>{
      return (LocalStore.get('player-tab-last-visited') == 'friends');
    },
})



FlowRouter.route('/player/:id', {
  name: 'player-profile',
  action: function(params, queryParams){
        console.log('Router::action for: ', FlowRouter.getRouteName());
        console.log(' --- params:',params);
        LocalStore.set('last-visited-profile',`/player/${params.id}`)
        Session.set('player-id', params.id)
        if (players_directory) {
          const player = players_directory[params.id];
          console.log(`player:`,player);
          _player.set(player);
        }

        BlazeLayout.render('player',params);
    }
});


// ===========================================================================
