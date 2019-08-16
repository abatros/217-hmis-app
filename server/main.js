import { Meteor } from 'meteor/meteor';
import './methods/methods.js'
import {load_players, load_teams, load_games, relink} from './data.js'
Meteor.startup(() => {
  // code to run on server at startup
  load_players();
  load_teams();
  load_games();
  relink();
});
