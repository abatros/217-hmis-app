import './profile-selector.html'
//import {isActiveRoute} from 'zimme:active-route';

console.log('ActiveRoute:',ActiveRoute)

const TP = Template.profile_selector;

TP.helpers({
  player_tab_active: ()=>{
    if (ActiveRoute.name('players-directory')
    || ActiveRoute.name('player-profile')) {
      return 'active';
    }
  },
  team_tab_active: ()=>{
    if (ActiveRoute.name('teams-directory')
    || ActiveRoute.name('team-profile')) {
      return 'active';
    }
  },
  me_tab_active: ()=>{
    if (ActiveRoute.name('me')) {
      return 'active';
    }
  },
})
