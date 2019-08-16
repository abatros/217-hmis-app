import './nav-bottom.html'

const TP = Template.nav_bottom;

TP.helpers({
  tab_games_active: ()=>{
    return (ActiveRoute.name('games-directory')
    || ActiveRoute.name('game-page'))?'active':'';
  },
  tab_profiles_active: ()=>{
    if (ActiveRoute.name('players-directory')
    || ActiveRoute.name('player-profile')
    || ActiveRoute.name('teams-directory')
    || ActiveRoute.name('team-profile')
    ) {
      return 'active';
    }
  },
  tab_news_active: ()=>{
    return (
      ActiveRoute.name('news')
    )?'active':'';
  },
  tab_services_active: ()=>{
    return (
      ActiveRoute.name('services')
    )?'active':'';
  },

})
