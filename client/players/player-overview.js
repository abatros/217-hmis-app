import './player-overview.html'
import {_player, _players, api} from '../app.js'

const player_teams =[
  {
    name: 'team-A',
    position: 'Goalkeeper'
  },
  {
    name: 'team-B',
    position: 'Wing-center'
  }
];

const TP = Template.player_overview;

TP.helpers({
  player: ()=>{
    const player_id = Session.get('player-id');
    return api.get_player_byId(player_id);

  },
  player_teams: ()=>{return player_teams;}
})
