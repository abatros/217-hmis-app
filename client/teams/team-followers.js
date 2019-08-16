import './team-followers.html';

const team_followers = new ReactiveArray([
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
]);

export function follow(o) {
  console.log('api.follow:',o);
  const list = team_followers.array().filter(it =>(it==o.player))
  console.log('list:',list)
  const j = team_followers.indexOf(o.player);
  if (j>=0) {
    const it = team_followers.array()[j];
    it.following = true;
//    it = Object.assign({},it);
    team_followers.splice(j,1,it);
  }
}

export function unfollow(o) {
  console.log('api.follow:',o);
  const list = team_followers.array().filter(it =>(it==o.player))
  console.log('list:',list)
  const j = team_followers.indexOf(o.player);
  if (j>=0) {
    const it = team_followers.array()[j];
    it.following = false;
//    it = Object.assign({},it);
    team_followers.splice(j,1,it);
  }
}


const TP = Template.team_followers;

TP.helpers({
  team_followers: ()=>{return team_followers.list()}
})
