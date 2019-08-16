import './teams-directory.html';
import './team-chip.html';
import {api, _teams} from '../app.js' // a reactive-array.

const TP = Template['teams-directory'];

TP.helpers({
  teams_not_ready: ()=>{
    const teams = _teams.list();
    const not_ready = (!teams || teams.length <=0)
    console.log(`teams_not_ready ${not_ready}`)
    return not_ready
  },
  teams: ()=>{
    const teams = _teams.array();
    console.log('helper::teams:',teams)
    return teams;
  }
})

FlowRouter.route('/teams', {
  name: 'teams-directory',
  action: function(params, queryParams){
        console.log('Router::action for: ', FlowRouter.getRouteName());
        console.log(' --- params:',params);
        LocalStore.set('last-visited-profile',`/teams`)
        BlazeLayout.render('teams-directory',params);
    }
});
