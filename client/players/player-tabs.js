import './player-tabs.html'

const TP = Template.player_tabs;

TP.onRendered(function(){
  const x = LocalStore.get(`player-tab-last-visited`)
  console.log("LocalStore.get(`player-tab-last-visited`) =>",x)
  const tp = this;

  if (x) {
    const mi = this.find(`.js-player-tab[tab=${x}]`)
    mi && mi.click();
  } else {
    const mi = this.find('.js-player-tab[tab=overview]')
    mi && mi.click();
  }
//  Session.set('player-menu','overview')
})

function last_visited(x) {
  const y = LocalStore.get(`player-tab-last-visited`)
//  console.log("helper::::LocalStore.get(`player-tab-last-visited`) =>",y)
  return (x==y)?'active':null;
}

TP.helpers({
  overview_active: ()=>last_visited('overview'),
  stats_active: ()=>last_visited('stats'),
  friends_active: ()=>last_visited('friends'),
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

    LocalStore.set(`player-tab-last-visited`, tab_name);
    console.log(`LocalStore.set (player-tab-last-visited) =>${tab_name}`)
    return false;
  }
})
