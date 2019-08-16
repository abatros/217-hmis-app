import './team-banner.html'
import {_team, _teams, api} from '../app.js'

const TP = Template.team_banner;

TP.onCreated(function(){
  console.log(`onCreated::team-banner  getParam:`,FlowRouter.getParam("id"));
  console.log(`data:`,this.data);
})

TP.onRendered(function(){
  console.log(`onRendered::team-banner  getParam:`,FlowRouter.getParam("id"));
  console.log(`data:`,this.data);
})


TP.helpers({
  xxteam: ()=>{
    return _team.get();
    /*
    const team_id = Session.get('team-id');
    const teams = _teams.list(); // reactivity  bof...
//    return api.get_team_byId(team_id);
    const team = _team.get()
    console.log(`helper::team-banner team-id:${team_id} team:`,team)
    */
  },
})
