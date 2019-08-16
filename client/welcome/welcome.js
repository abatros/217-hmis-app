import './welcome.html'

const TP = Template.welcome

TP.onRendered(function(){
  const x = document.getElementById('nav-bottom')
  console.log('Landing-page: onRendered x:',x)
  x.classList.add('nodisplay')
})

TP.onDestroyed(function(){
    const x = document.getElementById('nav-bottom')
    console.log('Landing-page: onDestroyed x:',x)
    x.classList.remove('nodisplay')
})


FlowRouter.route('/', {
  name: 'welcome',
  action: function(params, queryParams){
        console.log('Router::action for: ', FlowRouter.getRouteName());
        console.log(' --- params:',params);
//        document.auteur = "Museum v9";
//        app.article_id.set(undefined);
//        BlazeLayout.render('landing-page',params);
        BlazeLayout.render('welcome',params);
    }
});
