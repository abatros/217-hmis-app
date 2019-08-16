import './team-overview.html'

const team_players =[
  {
    full_name: 'Jules-full-name',
    sname: 'Jules',
    position: 'Goalkeeper'
  },
  {
    full_name: 'Peter-full-name',
    sname: 'Peter',
    position: 'Wing-center'
  }
];

const TP = Template.team_overview;

TP.helpers({
  team_players: ()=>{return team_players;}
})
