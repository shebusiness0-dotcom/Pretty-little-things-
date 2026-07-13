console.log("SCRIPT STARTED");

window.addEventListener("load",()=>{

const loader=document.getElementById("loader");
const app=document.getElementById("app");

setTimeout(()=>{

loader.style.opacity="0";

setTimeout(()=>{

loader.style.display="none";
app.classList.remove("hidden");

},800);

},1500);

});


const testMode=false;


const days={

1:{
title:"Day 1 ❤️",
message:`
Sooo, I wanted you to have something to look forward to before your birthday.

This is the reason why I've made this.
`
},

2:{
title:"Day 2 ❤️",
message:`
Your yaps make my days complete.

I love love your yaps, so never say you've yapped tm or you should stop.

I appreciate them, always will ^-^
`
},

3:{
title:"Day 3 ❤️",
message:`
 I love the way you make you feel comfortable and secure. Your cuddles, your words, you listen. My baby is my home
`
},

4:{
title:"Day 4 ❤️",

reasons:[

"Your presence is enough. You being here is all that matters",

"I love how you talk about the people you love. Your mom, Gloria, your friends. Such a cuteee 🥹",

"Your welcoming energy, simply makes others drawn to you"

]

},


5:{
title:"Day 5 ❤️",

reasons:[

"Your amazing articulation omds!!! flowers ml",

"The way you care, even about the little things. Nothing is little to you. Everything matters. Well, you matter to me and that is all that matters (eiiii call me shakespeare)",

"You make the room brighter with your beautiful smile",

"Your personality is top!!!",

"Being around you feels like home, literally"

]

},


6:{
title:"Day 6 ❤️",
message:`
A little story about us ❤️
`,

story:[

{
title:"The Beginning",
text:" I don't think you realise how brighter my days have been after March 22 <3!!!"
},

{
title:"The Little Things",
text:"Our conversations open my eyes to new perspectives everyday"
},

{
title:"The Feeling",
text:"Some people just make life feel a little warmer. You are my some people"
}

]

},
7:{
title:"Day 7 ❤️",
message:`
A few little things I never want you to forget ❤️
`,

memories:[

"I still smile when I remember our first date. When I got lost but you were still calm about the situation and made me not to panic sana. It's a day I'll live to remember 💕",

"The little time we have spent tg turned out to be the best parts of my life",

"The way you forget about things is cute. Memory of a goldfish 😭",

"I hope you get to visit China. I hope I will witness your dreams come true. You deserve every good thing that comes your way baby. Forever is not promised, but I'll be here with you till whenever (nisamehe sijui vile inaendanga😭😂 but something of the sort)"

]

},


8:{
title:"Day 8 ❤️",
message:`
One more day to remind you that, you are enough my lovely girl. I actually ran out of words smh

Tomorrow is the day this little journey was made for xoxo
`
},


9:{
title:"Happy birthday babyyy ❤️",
message:`
You made it to the end of my likkle, corny ahh website!

Every page before this was a small piece of what I wanted to say.

Thank you for being you. Everything about you makes me question whether this is actual real life. Pinch me, I need to wake up.  I figured I will not be able to spend time with you somewhere btwn your bday and August so I thought of doing this. Bare minimum lwk

Happy birthday my love and may your new year come with blessings and good stuff. you deserve it Bernie ^-^
`
}

};


const music = document.getElementById("music");


document.getElementById("startBtn").onclick=()=>{

const hero=document.querySelector(".hero");

hero.innerHTML=`

<div class="letter-page">

<h1>Hello, Bernie ❤️</h1>

<p class="letter">

I don't know if a website can ever hold everything I feel,
but I wanted to try.

Every page after this one is another little piece of us.

Some parts will make you smile.
Some might make you laugh.

But every single page exists because you are worth the effort.

Ready to continue?

</p>

<button id="continueBtn">
Continue
</button>

</div>

`;

document.getElementById("continueBtn").onclick=showTimeline;

};



function showTimeline(){

const hero=document.querySelector(".hero");

let html="";

const startDate = new Date(2026, 6, 13);
const today = new Date();

today.setHours(0,0,0,0);
startDate.setHours(0,0,0,0);


let daysPassed = Math.floor(
(today - startDate) / (1000 * 60 * 60 * 24)
);


if(daysPassed < 0) daysPassed = 0;
if(daysPassed > 8) daysPassed = 8;


for(let i=1;i<=9;i++){

let unlocked = i <= (daysPassed + 1);;


if(unlocked){

html+=`

<div class="day opened" data-day="${i}">

Day ${i} ❤️

</div>

`;

}else{

html+=`

<div class="day locked" data-day="${i}">

🔒 Day ${i}

</div>

`;

}

}


hero.innerHTML=`

<div class="timeline-page">

<h1>${Math.max(0,9-(daysPassed+1))} Days Until July 21 ❤️</h1>

<p class="timeline-text">

Every day unlocks a little surprise.

</p>

<div class="timeline">

${html}

</div>

</div>

`;
document.querySelectorAll(".day").forEach(day=>{

day.onclick=()=>{

if(day.classList.contains("locked")){

showPopup("Come back tomorrow for your next surprise ❤️");
return;

}

openDay(day.dataset.day);

};

});

}



function openDay(number){

const hero = document.querySelector(".hero");

const day = days[number];

if(number == 9){

startConfetti();

if(music){

music.pause();

}

const birthdayMusic = document.getElementById("birthdayMusic");

if(birthdayMusic){

birthdayMusic.currentTime = 0;
birthdayMusic.play();

}

}else{

const birthdayMusic = document.getElementById("birthdayMusic");

if(birthdayMusic){

birthdayMusic.pause();
birthdayMusic.currentTime = 0;

}

if(music && music.paused){

music.play();

}

}



let content = "";


if(day.reasons){

content=day.reasons.map(reason=>`

<div class="reason-card">

<div class="hidden-reason">
Tap to reveal ❤️
</div>

<div class="real-reason">
${reason}
</div>

</div>

`).join("");

}


else if(day.story){

content=day.story.map(part=>`

<div class="story-card">

<h2>${part.title}</h2>

<p>
${part.text}
</p>

</div>

`).join("");

}


else if(day.memories){

content=day.memories.map(memory=>`

<div class="memory-card">

${memory}

</div>

`).join("");

}


else{

content=`

<p class="letter" id="letterText"></p>

`;

}



hero.innerHTML=`

<div class="letter-page">

<h1>${day.title}</h1>

${content}

<button id="backBtn">

Back

</button>

</div>

`;



const letter=document.getElementById("letterText");


if(letter){

typeWriter(letter,day.message);

}



document.querySelectorAll(".reason-card").forEach(card=>{


card.onclick=()=>{

card.classList.toggle("revealed");

};


});



document.getElementById("backBtn").onclick=showTimeline;


}



function typeWriter(element,text){

element.textContent="";

let i=0;

const speed=25;


function type(){

if(i < text.length){

element.textContent += text.charAt(i);

i++;

setTimeout(type,speed);

}

}


type();

}



function showPopup(message){

const popup=document.getElementById("popup");
const popupText=document.getElementById("popupText");

popupText.textContent=message;

popup.classList.remove("hidden");

}



document.addEventListener("click",(e)=>{

if(e.target.id==="closePopup"){

document.getElementById("popup").classList.add("hidden");

}

});





function startConfetti(){

const container=document.getElementById("confetti");

if(!container) return;


container.innerHTML="";
container.style.display="block";


const colors=[

"#ff6b81",
"#ffd166",
"#7bdff2",
"#b8f2e6",
"#ff99c8"

];


for(let i=0;i<120;i++){

const piece=document.createElement("div");


piece.className="confetti-piece";


piece.style.left=Math.random()*100+"vw";


piece.style.backgroundColor=
colors[Math.floor(Math.random()*colors.length)];


piece.style.animationDelay=
Math.random()*2+"s";


container.appendChild(piece);

}


}