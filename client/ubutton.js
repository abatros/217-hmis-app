import './ubutton.html'

Template.ubutton.events({
  'click': (e,tp) =>{
    console.log(`ubutton click e.target:`,e.target);
    console.log(`ubutton click e.target value:`,e.target.getAttribute('value'));
    const cur_item = e.target;
    const tab_name = e.target.getAttribute('tab');
    /*
      clear everything, then reselect the new one.
    */
//    console.log(`tp.view.parentView:`,tp.view.parentView)
//    console.log(`tp.view.parentView.parentView.templateInstance():`,tp.view.parentView.parentView.templateInstance())
    const parentInstance = tp.view.parentView.parentView.templateInstance();
    const v = parentInstance.findAll(`.js-${tp.data.group}`)
    console.log(`.js-${tp.data.group} =>`,v)
    v.forEach(mi=>{
      mi.classList.remove('active')
    });
    v.forEach(mi=>{
      console.log(`--mi:`,mi.getAttribute('tab'))
      if (cur_item == mi) {
        console.log(`match/set underline`)
        cur_item.classList.add('active')
      }
    })
    /*
    console.log(`session set (${tp.data.group})`)
    Session.set(tp.data.group,cur_item_value)
    console.log(`session get (${Session.get(tp.data.group)})`)
    */

    LocalStore.set(`${tp.data.group}-last-visited`, tab_name);
    console.log(`LocalStore.set (${tp.data.group}-last-visited) =>${tab_name}`)

    return false;
  }
})
