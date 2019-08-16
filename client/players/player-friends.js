import './player-friends.html'
import {api} from '../app.js'
//import {ReactiveArray} from 'reactive-array';

export function follow(o) {
  console.log('api.follow:',o);
  const list = followers.array().filter(it =>(it==o.player))
  console.log('list:',list)
  const j = followers.indexOf(o.player);
  if (j>=0) {
    const it = followers.array()[j];
    it.following = true;
//    it = Object.assign({},it);
    followers.splice(j,1,it);
  }

  const list2 = player_following.array().filter(it =>(it==o.player))
  console.log('list2:',list2)
  const j2 = player_following.indexOf(o.player);
  if (j2>=0) {
    const it = player_following.array()[j2];
    it.following = true;
//    it = Object.assign({},it);
    player_following.splice(j2,1,it);
  }
}

export function unfollow(o) {
  console.log('api.follow:',o);
  const list = followers.array().filter(it =>(it==o.player))
  console.log('list:',list)
  const j = followers.indexOf(o.player);
  if (j>=0) {
    const it = followers.array()[j];
    it.following = false;
//    it = Object.assign({},it);
    followers.splice(j,1,it);
  }

  const list2 = player_following.array().filter(it =>(it==o.player))
  console.log('list2:',list2)
  const j2 = player_following.indexOf(o.player);
  if (j2>=0) {
    const it = player_following.array()[j2];
    it.following = false;
//    it = Object.assign({},it);
    player_following.splice(j2,1,it);
  }
}

/*
const _player_following = [
  {
    following: false,
    sname: 'Julio',
    full_name: 'Julio'
  },
  {
    following: true,
    sname: 'Peter',
    full_name: 'Peter'
  },
  {
    following: false,
    sname: 'Walter',
    full_name: 'Walter'
  },
];
*/

//player_following.set(_player_following)


const TP = Template.player_friends;

TP.onCreated(function(){
  //const followers = new ReactiveArray(_followers);
  const tp = this;
  console.log(`tp.data.player:`,tp.data.player)
})

TP.helpers({
  followers: ()=>{
    const player_id = Session.get('player-id')
    const player = api.get_player_byId(player_id)
    return player && player.followers;
  },
  following: ()=>{
    const player_id = Session.get('player-id')
    const player = api.get_player_byId(player_id)
    return player && player.following;
  }
})

TP.events({
  'click .js-follow': (e,tp)=>{
//    console.log('follow tp:',tp.data.player);
    console.log('follow e:', e.target);
    follow({player:tp.data.player})
  },
  'click .js-unfollow': (e,tp)=>{
    console.log('unfollow:', tp.data.player);
    unfollow({player:tp.data.player})
  },
})



TP.events({
  'click .js-followers': ()=>{
    console.log('followers')
    LocalStore.set('selected-friends','followers')
    return false;
  },
  'click .js-following': ()=>{
    console.log('following')
    LocalStore.set('selected-friends','following')
    return false;
  }
})

TP.helpers({
  active: (x)=>{
    const sel = LocalStore.get('selected-friends')
    retv = (x == sel)?'active':null;
    console.log(`helper (${x}) retv:`,retv);
    console.log('IT SHOULD SCROLL.........')

    window.scrollTo({
      top: 0,
      left: 0,
  //    behavior: 'auto'
      behavior: 'smooth'
    });

    return retv;
  }
})
