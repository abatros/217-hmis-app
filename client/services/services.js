import './services.html';

const TP = Template['services'];

FlowRouter.route('/services', {
  name: 'services',
  action: function(params, queryParams){
        console.log('Router::action for: ', FlowRouter.getRouteName());
        console.log(' --- params:',params);
        BlazeLayout.render('services',params);
    }
});
