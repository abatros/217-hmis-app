import './team-page.html';
import './team-overview.js';
import './team-stats.html';
import './team-followers.js';
import './team-banner.js';
import './team-tabs.js';
import './team-game.html';
import './team-message-follow.html';
import {_team, _teams, teams_directory,  api} from '../app.js'

const TP = Template['team-page'];

TP.onCreated(function(){
  console.log(`onCreated::team-page  getParam:`,FlowRouter.getParam("id"));
  console.log(`-- data:`,this.data);
  console.log(`-- team:`,_team.get());
  console.log(`-- teams:`,_teams.array());
  console.log(`-- session/team-id:${Session.get('team-id')}`);
  /*
    if direct access to /team/xyz there is no directory yet...
    check for _teams (reactive var) in helper.
  */
})


TP.onRendered(function(){
  console.log(`onRendered::team-page  getParam:`,FlowRouter.getParam("id"));
  console.log(`-- data:`,this.data);
  console.log(`-- team:`,_team.get());
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'auto'
//    behavior: 'smooth'
  });
})


TP.helpers({
  team: ()=>{
    const team_id = Session.get('team-id');
    const teams = _teams.array(); // wait for directory...

    /*
    console.log(`helper::team team-id:${team_id} =>`,_team.get())
    console.log(`-- session/team-id:${Session.get('team-id')}`);
    console.log(`-- teams:`,_teams.array());
    _team.set(teams_directory[team_id]);
    console.log(`-- team:`,_team.get());
    return _team.get();*/
  },
})


TP.helpers({
  overview_panel: ()=>{
    const x = LocalStore.get('team-tab-last-visited');
    console.log(`team_page::helper team-tab-last-visited:${x}`);
//    if (!x) return true;
    if (!x) LocalStore.set('team-tab-last-visited','overview')
    return (LocalStore.get('team-tab-last-visited') == 'overview');
  },
  stats_panel: ()=>{
//    const x = Session.get('team-sub-menu');
//    console.log('x:',x)
//    return (Session.get('team-sub-menu') == 'stats');
  return (LocalStore.get('team-tab-last-visited') == 'stats');
  },
  followers_panel: ()=>{
//    const x = Session.get('team-sub-menu');
//    console.log('x:',x)
//    return (Session.get('team-sub-menu') == 'followers');
    return (LocalStore.get('team-tab-last-visited') == 'followers');
  },
})



FlowRouter.route('/team/:id', {
  name: 'team-profile',
  action: function(params, queryParams){
        console.log('Router::action for: ', FlowRouter.getRouteName());
        console.log(' --- params:',params);
        LocalStore.set('last-visited-profile',`/team/${params.id}`)
        Session.set('team-id',params.id);
        if (teams_directory) {
          const team = teams_directory[params.id];
          _team.set(team);
        }
        BlazeLayout.render('team-page',params);
    }
});
