import './organizations-directory.html';
//import './organization.js'
import {app, organizations_directory, _organizations, _organization, api} from '../app.js'

const TP = Template['organizations-directory'];

TP.onCreated(function() {
  Meteor.call('organizations.list',(err,data)=>{
    if (err) throw err;
    console.log(`organizations.list => `,data)
  })
})

TP.helpers({
  organizations: () =>{
    const organizations = _organizations.array(); // wait for directory...
    if (!organizations) return;
    console.log(`helper::organizations:`,organizations)
    /*
    const x = etime.get();
    const sec = x%60;
    const min = Math.round(x/60)%60;
    */
    organizations.forEach(organization=>{
      if (organization.home.score) {
        organization.home.win = (organization.home.score > organization.visitor.score)?'win':''
        organization.visitor.win = (organization.home.score < organization.visitor.score)?'win':''
      }
    })
//    organizations[0].etime = `${min.toLocaleString(undefined,{minimumIntegerDigits: 2})}::${sec.toLocaleString(undefined,{minimumIntegerDigits: 2})}`;
//    console.log(organizations)
    return organizations;
  }
})

FlowRouter.route('/organizations', {
  name: 'organizations-directory',
  action: function(params, queryParams){
        console.log('Router::action for: ', FlowRouter.getRouteName());
        console.log(' --- params:',params);
        BlazeLayout.render('organizations-directory',params);
    }
});
