import './game-overview.html';

const TP = Template.game_overview;

Template.game_overview_detail_score.helpers({
  __home_score: (it)=>{
    return it.split(':')[0];
  },
  __visitor_score: (it)=>{
    return it.split(':')[1];
  },
})
