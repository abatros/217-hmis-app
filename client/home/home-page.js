import './home-page.html';


const TP = Template['home-page'];

FlowRouter.route('/home', {
  name: 'home-page',
  action: function(params, queryParams){
        console.log('Router::action for: ', FlowRouter.getRouteName());
        console.log(' --- params:',params);
        BlazeLayout.render('home-page',params);
    }
});
