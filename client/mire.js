import './mire.html';

const TP = Template.mire;

TP.events({
  'click .js-quit': (e,tp)=>{
    FlowRouter.go('/')
    return false;
  }
})

FlowRouter.route('/mire', {
  name: 'mire',
  action: function(params, queryParams){
        console.log('Router::action for: ', FlowRouter.getRouteName());
        console.log(' --- params:',params);
//        document.auteur = "Museum v9";
//        app.article_id.set(undefined);
        BlazeLayout.render('mire',params);
    }
});
