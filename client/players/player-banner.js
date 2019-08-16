import './player-banner.html'
import {_player, _players, api} from '../app.js'

const TP = Template.player_banner;

TP.onCreated(function(){
  console.log(`getParam:`,FlowRouter.getParam("id"));
  console.log(`data:`,this.data);
})

TP.helpers({
  player: ()=>{
    const player_id = Session.get('player-id');
//    console.log(`helper::player_banner _player =>`,_player);
//    console.log(`helper::player_banner _player.get() =>`,_player.get())
//    console.log(`helper::player_banner _players.list() =>`,_players.list().length)
//    console.log(`helper::player_banner Session.get('player-id') =>`,Session.get('player-id'));
    const players = _players.list();
  //  _player.set(player)
//    console.log(`helper::player_banner _players.list() =>`,players.length)
//    console.log(players)
//    console.log(`helper::player_banner players[${player_id}] =>`,api.get_player_byId(player_id));
    return api.get_player_byId(player_id);
    /*
    console.log(`helper::player:`,_player);
    console.log(`helper::player_banner:`,_player.get())
    console.log('helper::player:',api.get_player_byId(Session.get('player-id')));
    return _player.get();
//    return Template.instance().data.player;
    */
//    const p = api.get_player_byId(Session.get('player-id'));
//    console.log(`helper::player:`,p)
//    return p;
  },
  xxplayer: ()=>{
    const player_id = Session.get('player-id');
    console.log('helper::player:',api.get_player_byId(player_id))
    return api.get_player_byId(player_id);
  }
})
