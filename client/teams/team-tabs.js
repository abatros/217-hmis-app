import './team-tabs.html'

const TP = Template.team_tabs;

TP.onRendered(function(){
  const x = LocalStore.get(`team-tab-last-visited`)
  console.log("LocalStore.get(`team-tab-last-visited`) =>",x)
})

function last_visited(x) {
  const y = LocalStore.get(`team-tab-last-visited`)
//  console.log("helper::::LocalStore.get(`team-tab-last-visited`) =>",y)
  return (x==y)?'active':null;
}

TP.helpers({
  overview_active: ()=>last_visited('overview'),
  stats_active: ()=>last_visited('stats'),
  followers_active: ()=>last_visited('followers'),
})


TP.events({
  'click': (e,tp) =>{
    console.log(`ubutton click e.target:`,e.target);
    console.log(`ubutton click e.target value:`,e.target.getAttribute('value'));

    const cur_item = e.target;
    const tab_name = e.target.getAttribute('tab');
    /*
      clear everything, then reselect the new one.
    */
    const v = tp.findAll('.ubutton');
    // console.log(`.js-${tp.data.group} =>`,v)
    v.forEach(mi=>{
      mi.classList.remove('active')
    });
    v.forEach(mi=>{
      // console.log(`--mi:`,mi.getAttribute('tab'))
      if (cur_item == mi) {
        // console.log(`match/set underline`)
        cur_item.classList.add('active')
      }
    })

    LocalStore.set(`team-tab-last-visited`, tab_name);
    console.log(`LocalStore.set (team-tab-last-visited) =>${tab_name}`)
    return false;
  }
})
