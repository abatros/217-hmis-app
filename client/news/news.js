import './news.html';


const TP = Template['news'];

FlowRouter.route('/news', {
  name: 'news',
  action: function(params, queryParams){
        console.log('Router::action for: ', FlowRouter.getRouteName());
        console.log(' --- params:',params);
        BlazeLayout.render('news',params);
    }
});
