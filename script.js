const state={rolls:Number(localStorage.rolls||0),cookies:Number(localStorage.cookies||0)};
function update(){document.querySelector('#rolls').textContent=state.rolls;document.querySelector('#cookies').textContent=state.cookies;document.querySelector('#rollBar').style.width=Math.min(state.rolls/60*100,100)+'%';document.querySelector('#cookieBar').style.width=Math.min(state.cookies/120*100,100)+'%';localStorage.rolls=state.rolls;localStorage.cookies=state.cookies}
function add(type,n){state[type]=Math.min(type==='rolls'?60:120,state[type]+n);update()}
update();
let seconds=5*60*60, timerId=null;
function renderTimer(){let h=String(Math.floor(seconds/3600)).padStart(2,'0'),m=String(Math.floor(seconds%3600/60)).padStart(2,'0'),s=String(seconds%60).padStart(2,'0');let el=document.querySelector('#timer');if(el)el.textContent=`${h}:${m}:${s}`}
function startTimer(){if(timerId)return;timerId=setInterval(()=>{if(seconds<=0){clearInterval(timerId);timerId=null;return}seconds--;renderTimer()},1000)}
const quotes=['Ты уже сделала очень много.','Королевам тоже можно отдыхать. 👑','Синабоны никуда не убегут. Сделай глоток воды.','Ты справляешься лучше, чем тебе кажется.','Я рядом. Правда. 💗','Сегодня ты официально повелительница всей выпечки.'];
function newQuote(){const el=document.querySelector('#quote');if(el)el.textContent=quotes[Math.floor(Math.random()*quotes.length)]}
