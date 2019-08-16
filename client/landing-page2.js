import './landing-page.html'


const news = [
  {
    caption: "A football Video you may enjoy.",
    file: "San Antonio Commanders vs Arizona Hotshots highlights  Alliance[Mp4].mp4",
    h1: "Barcelona 5-1 Real Madrid",
    text: "Find out how Barcelona outclasses Real Madrid which resulted in Lopetegui being sacked, thanks to Valverde's tactics."
  },
  {
    caption: "A Tennis Video you may enjoy.",
    file: "Williams takes down Azarenka in 2nd round of BNP Paribas Open[720, Mp4].mp4",
    h1: "No. 5 Tennessee secures 20th win",
    text: "Naomi Osaka's unlikely rise to fameTwo-time Grand Slam champion Naomi Osaka sits down with E:60's Tom Rinaldi to talk about her rapid rise to fame, and that unforgettable U.S. Open win over Serena Williams."
  },
  {
    caption: "A football Video you may enjoy.",
    file: "San Antonio Commanders vs Arizona Hotshots highlights  Alliance[Mp4].mp4",
    h1: "Barcelona 5-1 Real Madrid",
    text: "Find out how Barcelona outclasses Real Madrid which resulted in Lopetegui being sacked, thanks to Valverde's tactics."
  },
  {
    caption: "A football Video you may enjoy.",
    file: "Williams takes down Azarenka in 2nd round of BNP Paribas Open[720, Mp4].mp4",
    h1: "Barcelona 5-1 Real Madrid",
    text: "Find out how Barcelona outclasses Real Madrid which resulted in Lopetegui being sacked, thanks to Valverde's tactics."
  },
  {
    caption: "A football Video you may enjoy.",
    file: "Williams takes down Azarenka in 2nd round of BNP Paribas Open[720, Mp4].mp4",
    h1: "Barcelona 5-1 Real Madrid",
    text: "Find out how Barcelona outclasses Real Madrid which resulted in Lopetegui being sacked, thanks to Valverde's tactics."
  },
  {
    caption: "A football Video you may enjoy.",
    file: "24x36.jpeg",
    h1: "Barcelona 5-1 Real Madrid",
    text: "Find out how Barcelona outclasses Real Madrid which resulted in Lopetegui being sacked, thanks to Valverde's tactics."
  },
  {
    caption: "A football Video you may enjoy.",
    file: "24x36.jpeg",
    h1: "Barcelona 5-1 Real Madrid",
    text: "Find out how Barcelona outclasses Real Madrid which resulted in Lopetegui being sacked, thanks to Valverde's tactics."
  },
];

const TP = Template['landing-page']

TP.helpers({
  news: ()=>{
    return news;
  }
})

FlowRouter.route('/', {
  name: 'landing-page',
  action: function(params, queryParams){
        console.log('Router::action for: ', FlowRouter.getRouteName());
        console.log(' --- params:',params);
//        document.auteur = "Museum v9";
//        app.article_id.set(undefined);
//        BlazeLayout.render('landing-page',params);
        BlazeLayout.render('games-directory',params);
    }
});
