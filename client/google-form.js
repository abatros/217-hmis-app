import './google-form.html'

const TP = Template['google_form']

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

FlowRouter.route('/form', {
  name: 'google-form',
  action: function(params, queryParams){
        console.log('Router::action for: ', FlowRouter.getRouteName());
        console.log(' --- params:',params);
//        document.auteur = "Museum v9";
//        app.article_id.set(undefined);
//        BlazeLayout.render('landing-page',params);
        BlazeLayout.render('google_form',params);
    }
});
