import './game2.html';
import '../games/game-top-panel.js';

const etime = new ReactiveVar(0);
const home_score = new ReactiveVar(0);
const visitor_score = new ReactiveVar(0);
const ball_side = new ReactiveVar(0);

var bip = setInterval(function() {
//  console.log('bip', etime.get())
  const x = etime.get()
/*
if (x >= next_change) {
  console.log('next-change at')
  next_change += 5 + getRandomInt(10);
  ball_side.set((ball_side.get()+1)%2)
}
if (x%10 == 9) {
  const y = getRandomInt(2);
  console.log(`new-goal ${getRandomInt(2)}`)
  if (y) {
    // visitor
    visitor_score.set(visitor_score.get() +1)
  } else {
    home_score.set(home_score.get() +1)
  }
}
  */
//  etime.set(x +1);
},1000)

const messages = [
  "Welcome to today's crucial game from Volkswagen Arena. We are awaiting the arrival of both teams, in anticipation of a great match!",
  "The referee starts the match",
  "Germany kick-off, and the game is underway.",
  "The pitch is in fantastic condition today and the players are enjoying the surface.",
  "Welcome to tonights game where the floodlight surrounds the pitch.",
  "Luka Jovic is penalised for pushing Joshua Kimmich",
  "Leroy Sane from Germany takes the ball forward trying to make something happen...",
  "Ilkay Guendogan from Germany directs the ball behind the defence, but it's intercepted by an opponent player.",
  "Lukas Klostermann sees his shot deflected off target",
  "Luka Jovic is penalised for pushing Joshua Kimmich",
  "Marcel Halstenberg from Germany takes a short corner kick from the left.",
  "A shot by Ilkay Guendogan is blocked",
  "Germany take a throw-in at the right side of the pitch in the opponent's half of the field",
  "Germany is trying to create something here.",
  "Marcel Halstenberg of Germany passes the ball to a team mate.",
  "Good effort by Kai Havertz as he directs a shot on target, but the keeper saves it",
  "Serbia is in control of the ball.",
  "Germany is trying to create something here.",
  "Ilkay Guendogan from Germany directs the ball behind the defence, but the keeper reads the play well and comes to claim it",
  "Germany is trying to create something here.",
  "Ball possession: Germany: 52%, Serbia: 48%.",
  "Julian Brandt from Germany takes the ball forward trying to make something happen...",
  "Julian Brandt from Germany directs the ball behind the defence, but the keeper reads the play well and comes to claim it",
  "Germany is trying to create something here.",
  "The match is very one-sided right now. Germany are clearly dominating possession",
  "Leroy Sane from Germany tries to pick out a team-mate in the area but his cross is blocked by an opponent.",
  "Germany take a throw-in at the left side of the pitch in the opponent's half of the field",
  "Germany take a throw-in at the right side of the pitch in the opponent's half of the field",
  "Serbia take a throw-in at the right side of the pitch in the opponent's half of the field",
  "Serbia is in control of the ball.",
  "The referee signals a free kick as Julian Brandt from Germany trips Mijat Gacinovic",
  "Miroslav Bogosavac delivers a teasing cross into the box...",
  "Safe hands from Manuel Neuer as he comes out and claims the ball",
  "Germany is having a good opportunity to score.",
  "Leroy Sane of Germany passes the ball to a team mate.",
  "Marcel Halstenberg from Germany had a bad first touch and fails to benefit from his team mates cross.",
  "Safe hands from Marko Dmitrovic as he comes out and claims the ball",
  "Germany take a throw-in at the left side of the pitch in the opponent's half of the field",
  "Ball possession: Germany: 59%, Serbia: 41%.",
  "Marko Dmitrovic could cost his team a goal after a defensive blunder.",
  "Germany take a throw-in at the right side of the pitch in the opponent's half of the field",
  "Germany is trying to create something here.",
  "Joshua Kimmich from Germany directs the ball behind the defence, but the keeper reads the play well and comes to claim it",
  "Serbia is having a good opportunity to score.",
  "Adem Ljajic from Serbia plays successfully a nice 1-2 with Sergej Milinkovic-Savic.",
  "Adem Ljajic sees his shot deflected off target",
  "Adem Ljajic from Serbia swings in the corner from the right.",
  "Poor play by Joshua Kimmich as his weak attempt to clear the ball puts his side under pressure",
  "G O O O A A A L - Luka Jovic Serbia scores with a header.",
  "Nemanja Maksimovic provided the assist for the goal.",
  "That goal for Serbia came against the run of play",
  "The referee signals a free kick as Darko Lazovic from Serbia trips Marcel Halstenberg",
  "Luka Jovic from Serbia is ruled offside",
  "Germany is trying to create something here.",
  "Ball possession: Germany: 61%, Serbia: 39%.",
  "Marcel Halstenberg delivers a teasing cross into the box...",
  "Antonio Rukavina relieves the pressure with a clearance",
  "Germany take a throw-in at the left side of the pitch in the opponent's half of the field",
  "Germany is trying to create something here.",
  "Goal kick for Serbia",
  "Germany take a throw-in at the left side of the pitch in their own half of the field",
  "Germany take a throw-in at the left side of the pitch in their own half of the field",
  "Germany is in control of the ball.",
  "Lukas Klostermann delivers a teasing cross into the box...",
  "Timo Werner from Germany heads the ball, but it's a terrible effort nowhere near the goal.",
  "Serbia take a throw-in at the left side of the pitch in their own half of the field",
  "Germany is trying to create something here.",
  "Ball possession: Germany: 63%, Serbia: 37%.",
  "Germany take a throw-in at the right side of the pitch in the opponent's half of the field",
  "Joshua Kimmich delivers a teasing cross into the box...",
  "Kai Havertz from Germany tries to head the ball to a team mate, but it's intercepted by an opponent player.",
  "Nemanja Maksimovic could cost his team a goal after a defensive blunder.",
  "Could be a good chance here as Kai Havertz from Germany cuts the opponents defense open with a through ball...",
  "CHANCE! Timo Werner finds himself in a 1 on 1 situation with the keeper...",
  "Marko Dmitrovic saved a certain goal there! Timo Werner found himself in a great scoring position but Marko Dmitrovic denied him with a great save",
  "Goal kick for Serbia",
  "Germany is in control of the ball.",
  "Kai Havertz from Germany directs the ball behind the defence, but it's intercepted by an opponent player.",
  "Germany is trying to create something here.",
  "Uros Spajic relieves the pressure with a clearance",
  "Serbia start a counter attack",
  "Darko Lazovic of Serbia passes the ball to a team mate.",
  "Luka Jovic has a great chance to score, but fails to score as his effort is blocked!",
  "Danger averted there as Lukas Klostermann from Germany clears the danger with a good tackle",
  "Ball possession: Germany: 61%, Serbia: 39%.",
  "Timo Werner from Germany directs the ball behind the defence, but the keeper reads the play well and comes to claim it",
  "Germany is in control of the ball.",
  "Julian Brandt from Germany sends a deflected cross into the box.",
  "Safe hands from Marko Dmitrovic as he comes out and claims the ball",
  "Ilkay Guendogan of Germany passes the ball to a team mate.",
  "Leroy Sane from Germany sees his pass blocked by an opponent.",
  "Germany take a throw-in at the left side of the pitch in the opponent's half of the field",
  "Kai Havertz from Germany passes the ball in the box, but it's intercepted by an opponent player.",
  "Great defending by Marko Dmitrovic from Serbia to prevent his team conceding a goal.",
  "Serbia is in control of the ball.",
  "Great skill from Leroy Sane as he dribbles past his opponents",
  "Could be a good chance here as Leroy Sane from Germany cuts the opponents defense open with a through ball...",
  "Timo Werner from Germany directs a ball squarely in the box, but it's intercepted by an opponent player.",
  "Ball possession: Germany: 65%, Serbia: 35%.",
  "Serbia take a throw-in at the right side of the pitch in the opponent's half of the field",
  "Luka Jovic from Serbia is ruled offside",
  "Could be a good chance here as Lukas Klostermann from Germany cuts the opponents defense open with a through ball...",
  "Great skill from Leroy Sane as he dribbles past his opponents",
  "Leroy Sane from Germany directs a ball squarely in the box, but it's intercepted by an opponent player.",
  "Marcel Halstenberg of Germany passes the ball to a team mate.",
  "Julian Brandt of Germany passes the ball to a team mate.",
  "Miroslav Bogosavac relieves the pressure with a clearance",
  "Germany take a throw-in at the right side of the pitch in the opponent's half of the field",
  "Joshua Kimmich from Germany directs the ball behind the defence, but the keeper reads the play well and comes to claim it",
  "Julian Brandt from Germany sends a deflected cross into the box.",
  "Goal kick for Serbia",
  "Germany is trying to create something here.",
  "Joshua Kimmich delivers a teasing cross into the box...",
  "Lukas Klostermann from Germany tries to head the ball to a team mate, but it's intercepted by an opponent player.",
  "Ball possession: Germany: 63%, Serbia: 37%.",
  "Joshua Kimmich from Germany tries to play a nice 1-2 with Lukas Klostermann, but his team mate fails to benefit from it.",
  "Germany take a throw-in at the right side of the pitch in the opponent's half of the field",
  "Lukas Klostermann from Germany chips the ball into the penalty box.",
  "Julian Brandt of Germany passes the ball to a team mate.",
  "Leroy Sane goes for goal, but his effort was never close to hitting the target.",
  "Serbia take a throw-in at the right side of the pitch in their own half of the field",
  "Could be a good chance here as Joshua Kimmich from Germany cuts the opponents defense open with a through ball...",
  "Lukas Klostermann of Germany passes the ball to a team mate.",
  "Kai Havertz of Germany passes the ball to a team mate.",
  "Should have been a goal! Timo Werner gets a great chance to score, but his effort is turned behind by Marko Dmitrovic!",
  "Ilkay Guendogan from Germany swings in the corner from the right.",
  "Sergej Milinkovic-Savic relieves the pressure with a clearance",
  "Ilkay Guendogan from Germany directs the ball behind the defence, but the keeper reads the play well and comes to claim it",
  "Serbia is trying to create something here.",
  "Antonio Rukavina delivers a teasing cross into the box...",
  "Safe hands from Manuel Neuer as he comes out and claims the ball",
  "Great defending by Miroslav Bogosavac from Serbia to prevent his team conceding a goal.",
  "Darko Lazovic from Serbia tries to pick out a team-mate in the area but his cross is blocked by an opponent.",
  "Serbia take a throw-in at the right side of the pitch in the opponent's half of the field",
  "Ball possession: Germany: 64%, Serbia: 36%.",
  "Could be a good chance here as Luka Jovic from Serbia cuts the opponents defense open with a through ball...",
  "Darko Lazovic of Serbia passes the ball to a team mate.",
  "How did he miss that? Adem Ljajic has a wonderful chance to score but somehow manages to miss the target!",
  "Goal kick for Germany",
  "Germany is trying to create something here.",
  "Could be a good chance here as Kai Havertz from Germany cuts the opponents defense open with a through ball...",
  "Julian Brandt from Germany passes the ball in the box, but it's intercepted by an opponent player.",
  "Serbia take a throw-in at the left side of the pitch in their own half of the field",
  "Jonathan Tah from Germany goes a bit too far there as the pulls down Sergej Milinkovic-Savic",
  "Adem Ljajic crosses the ball into the box from the free kick",
  "Luka Jovic from Serbia heads towards goal but sees his effort blocked.",
  "Nikola Milenkovic has a great chance to score, but fails to score as his effort is blocked!",
  "Adem Ljajic from Serbia swings in the corner from the right.",
  "Sergej Milinkovic-Savic from Serbia heads the ball, but it's a terrible effort nowhere near the goal.",
  "Ball possession: Germany: 63%, Serbia: 37%.",
  "Serbia take a throw-in at the left side of the pitch in the opponent's half of the field",
  "Ball possession: Germany: 63%, Serbia: 37%.",
  "It's over! The referee blows for half time",
  "The second half is underway",
  "Kai Havertz is leaving the field to be replaced by Marco Reus in a tactical substitution.",
  "Manuel Neuer is leaving the field to be replaced by Marc-Andre ter Stegen in a tactical substitution.",
  "The captain is forced to give away his armband, because he is leaving the field.",
  "Serbia take a throw-in at the right side of the pitch in their own half of the field",
  "Germany take a throw-in at the left side of the pitch in the opponent's half of the field",
  "Could be a good chance here as Leroy Sane from Germany cuts the opponents defense open with a through ball...",
  "Marco Reus from Germany directs a ball squarely in the box, but it's intercepted by an opponent player.",
  "Marco Reus from Germany directs a ball squarely in the box, but it's intercepted by an opponent player.",
  "Serbia start a counter attack",
  "Could be a good chance here as Mijat Gacinovic from Serbia cuts the opponents defense open with a through ball...",
  "How did he miss that? Darko Lazovic has a wonderful chance to score but somehow manages to miss the target!",
  "Goal kick for Germany",
  "Luka Jovic is penalised for pushing Joshua Kimmich",
  "Luka Jovic from Serbia takes the ball forward trying to make something happen...",
  "Jonathan Tah relieves the pressure with a clearance",
  "Reckless challenge there. Miroslav Bogosavac commits a rough foul on Timo Werner",
  "Ball possession: Germany: 61%, Serbia: 39%.",
  "Timo Werner from Germany is ruled offside",
  "Darko Lazovic from Serbia tries to play a 1-2 with Antonio Rukavina, but the ball is intercepted.",
  "Marcel Halstenberg from Germany sends a deflected cross into the box.",
  "Nikola Milenkovic relieves the pressure with a clearance",
  "Serbia is in control of the ball.",
  "Poor play by Marko Dmitrovic as his weak attempt to clear the ball puts his side under pressure",
  "Timo Werner delivers a teasing cross into the box...",
  "Nikola Milenkovic relieves the pressure with a clearance",
  "Germany take a throw-in at the left side of the pitch in the opponent's half of the field",
  "Germany take a throw-in at the left side of the pitch in the opponent's half of the field",
  "Serbia take a throw-in at the left side of the pitch in their own half of the field",
  "The referee signals a free kick as Niklas Suele from Germany trips Luka Jovic",
  "Germany is in control of the ball.",
  "Ball possession: Germany: 59%, Serbia: 41%.",
  "Lukas Klostermann delivers a teasing cross into the box...",
  "Uros Spajic relieves the pressure with a clearance",
  "Julian Brandt is leaving the field to be replaced by Leon Goretzka in a tactical substitution.",
  "Goal kick for Serbia",
  "Leroy Sane from Germany takes the ball forward trying to make something happen...",
  "Leon Goretzka of Germany passes the ball to a team mate.",
  "Antonio Rukavina clears the danger but is forced to give away a corner...",
  "Marcel Halstenberg from Germany swings in the corner from the left.",
  "Nemanja Maksimovic relieves the pressure with a clearance",
  "Marco Reus fails to find the target with a shot from outside the box",
  "Goal kick for Serbia",
  "Serbia take a throw-in at the right side of the pitch in the opponent's half of the field",
  "Dangerous challenge by Darko Lazovic from Serbia. Joshua Kimmich on the receiving end of that.",
  "Serbia take a throw-in at the left side of the pitch in their own half of the field",
  "Nikola Milenkovic could cost his team a goal after a defensive blunder.",
  "Should have been a goal! Marco Reus gets a great chance to score, but his effort is turned behind by Marko Dmitrovic!",
  "Ilkay Guendogan from Germany swings in the corner from the right.",
  "Nikola Milenkovic relieves the pressure with a clearance",
  "Marcel Halstenberg goes for goal, but his effort was never close to hitting the target.",
  "Goal kick for Serbia",
  "Ball possession: Germany: 60%, Serbia: 40%.",
  "Sergej Milinkovic-Savic is penalised for pushing Timo Werner",
  "Ilkay Guendogan delivers a teasing cross into the box...",
  "Marcel Halstenberg from Germany had a bad first touch and fails to benefit from his team mates cross.",
  "Goal kick for Serbia",
  "Serbia is trying to create something here.",
  "Goal kick for Germany",
  "Leroy Sane from Germany is ruled offside",
  "Mijat Gacinovic is leaving the field to be replaced by Nemanja Radonjic in a tactical substitution.",
  "Sergej Milinkovic-Savic is leaving the field to be replaced by Sasa Lukic in a tactical substitution.",
  "Could be a good chance here as Marco Reus from Germany cuts the opponents defense open with a through ball...",
  "Nikola Milenkovic relieves the pressure with a clearance",
  "Germany take a throw-in at the left side of the pitch in the opponent's half of the field",
  "Joshua Kimmich delivers a teasing cross into the box...",
  "Timo Werner from Germany had a bad first touch and fails to benefit from his team mates cross.",
  "Germany take a throw-in at the right side of the pitch in the opponent's half of the field",
  "The referee signals a free kick as Nemanja Maksimovic from Serbia trips Joshua Kimmich",
  "Could be a good chance here as Marco Reus from Germany cuts the opponents defense open with a through ball...",
  "Marcel Halstenberg from Germany directs a ball squarely in the box.",
  "So close! Leroy Sane has a great chance to score, but his header is saved well by Marko Dmitrovic!",
  "Leroy Sane from Germany find his team mate with a neat back heel pass.",
  "Great skill from Ilkay Guendogan as he dribbles past his opponents",
  "What a chance! Ilkay Guendogan looks odds on to score, but his effort is cleared off the line!",
  "Great defending by Nemanja Maksimovic from Serbia to prevent his team conceding a goal.",
  "Safe hands from Marko Dmitrovic as he comes out and claims the ball",
  "Ball possession: Germany: 61%, Serbia: 39%.",
  "Germany are piling the pressure on and look like scoring anytime",
  "Serbia start a counter attack",
  "Adem Ljajic from Serbia directs the ball behind the defence, but it's intercepted by an opponent player.",
  "The referee signals a free kick as Nemanja Maksimovic from Serbia trips Leon Goretzka",
  "Could be a good chance here as Joshua Kimmich from Germany cuts the opponents defense open with a through ball...",
  "That looked a fine chance. Marco Reus from Germany directs a ball squarely in the box, but it comes to nothing in the end",
  "Goal kick for Serbia",
  "Serbia is in control of the ball.",
  "Uros Spajic could cost his team a goal after a defensive blunder.",
  "Could be a good chance here as Ilkay Guendogan from Germany cuts the opponents defense open with a through ball...",
  "Marco Reus of Germany passes the ball to a team mate.",
  "G O O O A A A L - Leon Goretzka with the goal!",
  "Marco Reus provided the assist for the goal.",
  "Ball possession: Germany: 60%, Serbia: 40%.",
  "Luka Jovic is leaving the field to be replaced by Milan Pavkov in a tactical substitution.",
  "Germany take a throw-in at the left side of the pitch in their own half of the field",
  "Germany is having a good opportunity to score.",
  "Uros Spajic relieves the pressure with a clearance",
  "Ilkay Guendogan from Germany crosses the ball but it is nowhere near the intended target.",
  "Could be a good chance here as Marco Reus from Germany cuts the opponents defense open with a through ball...",
  "Great skill from Leroy Sane as he dribbles past his opponents",
  "Should have been a goal! Leroy Sane gets a great chance to score, but his effort is turned behind by Marko Dmitrovic!",
  "Ilkay Guendogan from Germany swings in the corner from the right.",
  "A chance presents itself to Marcel Halstenberg from Germany but his header goes wide",
  "Goal kick for Serbia",
  "Germany take a throw-in at the right side of the pitch in their own half of the field",
  "Serbia take a throw-in at the right side of the pitch in the opponent's half of the field",
  "Ball possession: Germany: 62%, Serbia: 38%.",
  "Germany is having a good opportunity to score.",
  "Great skill from Marco Reus as he dribbles past his opponents",
  "Marco Reus sends a shot inches wide. Close!",
  "Goal kick for Serbia",
  "Darko Lazovic delivers a teasing cross into the box...",
  "Jonathan Tah relieves the pressure with a clearance",
  "A player from Serbia takes a long throw from right side of the pitch into the opponent's box",
  "Serbia take a throw-in at the left side of the pitch in the opponent's half of the field",
  "Germany start a counter attack",
  "Leroy Sane from Germany takes the ball forward trying to make something happen...",
  "It's a good hit from long range by Leroy Sane who forces a save from Marko Dmitrovic. Corner kick.",
  "Ilkay Guendogan from Germany swings in the corner from the right.",
  "Milan Pavkov relieves the pressure with a clearance",
  "Germany take a throw-in at the right side of the pitch in the opponent's half of the field",
  "Great skill from Leroy Sane as he dribbles past his opponents",
  "Leroy Sane from Germany directs a ball squarely in the box, but it's intercepted by an opponent player.",
  "Germany are piling the pressure on and look like scoring anytime",
  "Joshua Kimmich from Germany plays successfully a nice 1-2 with Ilkay Guendogan.",
  "Marko Dmitrovic saved a certain goal there! Joshua Kimmich found himself in a great scoring position but Marko Dmitrovic denied him with a great save",
  "The referee signals a free kick as Niklas Suele from Germany trips Milan Pavkov",
  "Darko Lazovic is leaving the field to be replaced by Andrija Zivkovic in a tactical substitution.",
  "Miroslav Bogosavac is leaving the field to be replaced by Stefan Mitrovic in a tactical substitution.",
  "Ball possession: Germany: 63%, Serbia: 37%.",
  "Great skill from Adem Ljajic as he dribbles past his opponents",
  "Great defending by Niklas Suele from Germany to prevent his team conceding a goal.",
  "Germany is trying to create something here.",
  "Today's attendance is 26101",
  "Timo Werner of Germany passes the ball to a team mate.",
  "Marco Reus from Germany had a bad first touch and fails to benefit from his team mates cross.",
  "Safe hands from Marko Dmitrovic as he comes out and claims the ball",
  "Serbia take a throw-in at the left side of the pitch in the opponent's half of the field",
  "Serbia take a throw-in at the left side of the pitch in the opponent's half of the field",
  "Serbia take a throw-in at the left side of the pitch in the opponent's half of the field",
  "Andrija Zivkovic from Serbia takes the ball forward trying to make something happen...",
  "Andrija Zivkovic from Serbia makes a good pass into the box, but his team mates fail to take advantage of the space",
  "Germany start a counter attack",
  "Nemanja Maksimovic is penalised for pushing Leroy Sane",
  "Marco Reus takes the free-kick but it is blocked by the wall",
  "Ball possession: Germany: 62%, Serbia: 38%.",
  "The referee signals a free kick as Nikola Milenkovic from Serbia trips Leroy Sane",
  "Marcel Halstenberg crosses the ball into the box from the free kick",
  "Nikola Milenkovic clears the danger but is forced to give away a corner...",
  "Joshua Kimmich from Germany swings in the corner from the right.",
  "Sasa Lukic relieves the pressure with a clearance",
  "Joshua Kimmich delivers a teasing cross into the box...",
  "Leon Goretzka from Germany heads the ball, but it's a terrible effort nowhere near the goal.",
  "Timo Werner delivers a teasing cross into the box...",
  "Uros Spajic relieves the pressure with a clearance",
  "Ilkay Guendogan is penalised for pushing Milan Pavkov",
  "Nemanja Maksimovic is leaving the field to be replaced by Branko Jovicic in a tactical substitution.",
  "Marko Dmitrovic from Serbia is a contender for Man of the Match after a great performance today",
  "Nemanja Radonjic from Serbia tries to pick out a team-mate in the area but his cross is blocked by an opponent.",
  "Play has been stopped because there is a player lying on the pitch.",
  "Lukas Klostermann is down injured and receives medical treatment on the field.",
  "Lukas Klostermann is injured and is replaced by Thilo Kehrer.",
  "Andrija Zivkovic from Serbia swings in the corner from the left.",
  "Niklas Suele relieves the pressure with a clearance",
  "Nemanja Radonjic delivers a teasing cross into the box...",
  "Marc-Andre ter Stegen clears the danger but is forced to give away a corner...",
  "Andrija Zivkovic from Serbia swings in the corner from the right.",
  "Niklas Suele relieves the pressure with a clearance",
  "The fourth official shows there are 4 minute(s) of time to be added",
  "Branko Jovicic is penalised for pushing Leroy Sane",
  "The play is stopped. The players are pushing and shouting at each-other, the referee should take action.",
  "The game is restarted",
  "Reckless challenge there. Marco Reus commits a rough foul on Antonio Rukavina",
  "Germany is trying to create something here.",
  "Germany take a throw-in at the left side of the pitch in the opponent's half of the field",
  "Reckless challenge there. Milan Pavkov commits a rough foul on Leroy Sane",
  "SENT OFF! - After a serious foul Milan Pavkov is dismissed",
  "Play has been stopped because there is a player lying on the pitch.",
  "Leroy Sane is down injured and receives medical treatment on the field.",
  "Ball possession: Germany: 61%, Serbia: 39%.",
  "The game is restarted",
  "A shot by Jonathan Tah is blocked",
  "Jonathan Tah delivers a teasing cross into the box...",
  "A chance presents itself to Timo Werner from Germany but his header goes wide",
  "Leroy Sane is injured and is replaced by Nico Schulz.",
  "Goal kick for Serbia",
  "Ball possession: Germany: 61%, Serbia: 39%.",
  "That's it! The referee blows the final whistle",
  "Plenty of chances in this game but neither team could score the decisive goal",
];

const game =   {
    home: {
      label: 'BURI',
      score: 0
    },
    visitor: {
      label: 'CHON2',
      score: 0
    },
    loc: 'Don Muang',
    date: '27/3/18',
};

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

const TP = Template.game2;

TP.onRendered(function(){
  this.event_panel = this.find('vbox.events')
  console.log(`this.event_panel:`,this.event_panel);
  const tp = this;
  tp.iMsg = 0;
  let next_change = 0;

  const bip = setInterval(function() {
//    console.log(`bip ${etime.get()} next_tick: ${next_change}`)
    const x = etime.get()
    etime.set(x +1);
    if (x < next_change) {
      return;
    }

    const message = messages[tp.iMsg++];
    const yellow = message.match(/penalised/i) || message.match(/yellow/i);
    const new_event = document.createElement('hbox');
    new_event.className = "ticker"

    new_event.innerHTML = `
      <div class="col1">${Math.round(next_change/60)} '</div>
      <div class="col2 ${yellow?'yellow':''}">${yellow?'<b>Y</b>':''}</div>
      <div class="col3">${message}</div>
    `;
    /*
    new_event.appendChild(document.createTextNode(messages[tp.iMsg++]))
    */
    tp.event_panel.appendChild(new_event);
    tp.event_panel.scrollTop = tp.event_panel.scrollHeight - tp.event_panel.clientHeight;
    next_change += 5 + getRandomInt(8);
  },1000)

  let bip2 = setTimeout(function tick2(){
    console.log('tick2');
    const x = tp.find('vbox.js-pub');
    x.classList.remove('nodisplay')
    bip2 = setTimeout(tick2, 20*1000)
  },20*1000)

})

TP.helpers({
  game: ()=>{return game},
})

TP.events({
  'click .js-pub': (e,tp)=>{
    const x = tp.find('vbox.js-pub');
    console.log('remove the pub at:',x)
    x.classList.add('nodisplay')
    return false;
  }
})

FlowRouter.route('/game2/:id', {
  name: 'game2',
  action: function(params, queryParams){
        console.log('Router::action for: ', FlowRouter.getRouteName());
        console.log(' --- params:',params);
        BlazeLayout.render('game2',params);
    }
});
