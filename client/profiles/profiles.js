/*
import './profiles.html';
import './player-overview.html'
import './player-stats.html'
import './player-friends.js'
*/

import '../players/player.js'
import '../teams/team-page.js'
const TP = Template['profiles'];




FlowRouter.route('/profiles', {
  name: 'profiles',
  action: function(params, queryParams){
        console.log('Router::action for: ', FlowRouter.getRouteName());
        console.log(' --- params:',params);
        const route = LocalStore.get('last-visited-profile');
        if (route) {
          console.log(`last-visited-profile: ${route}`)
          FlowRouter.redirect(route)
          return;
        }
//        BlazeLayout.render('profiles',params);
      /*
          redirect to the latest player or team visited.
          default to either players-directory, teams-directory or me.
      */
        FlowRouter.redirect('/players')
    }
});


// ===========================================================================
