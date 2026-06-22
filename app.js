// ERNUR VYNX AI ROBOTICS

console.log("ERNUR VYNX SYSTEM LOADED");

// HEADER EFFECT

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (!header) return;

    if (window.scrollY > 50) {

        header.style.background =
        "rgba(0,0,0,0.95)";

        header.style.boxShadow =
        "0 0 20px rgba(0,229,255,.3)";

    } else {

        header.style.background =
        "rgba(0,0,0,0.6)";

        header.style.boxShadow =
        "none";

    }

});

// SCROLL ANIMATION

const cards =
document.querySelectorAll(".card");

const observer =
new IntersectionObserver(entries => {

entries.forEach(entry => {

if(entry.isIntersecting){

entry.target.style.opacity = "1";

entry.target.style.transform =
"translateY(0px)";

}

});

});

cards.forEach(card => {

card.style.opacity = "0";

card.style.transform =
"translateY(50px)";

card.style.transition =
"0.8s";

observer.observe(card);

});

// COUNTER EFFECT

const counters =
document.querySelectorAll(".counter");

counters.forEach(counter => {

const updateCounter = () => {

const target =
+counter.getAttribute("data-target");

const count =
+counter.innerText;

const increment =
target / 100;

if(count < target){

counter.innerText =
Math.ceil(count + increment);

setTimeout(updateCounter,20);

}else{

counter.innerText = target;

}

};

updateCounter();

});

// BUTTON EFFECTS

const buttons =
document.querySelectorAll(".btn");

buttons.forEach(btn=>{

btn.addEventListener("mouseenter",()=>{

btn.style.transform =
"scale(1.05)";

});

btn.addEventListener("mouseleave",()=>{

btn.style.transform =
"scale(1)";

});

});

// PAGE LOADER

window.addEventListener("load",()=>{

const loader =
document.getElementById("loader");

if(loader){

loader.style.opacity="0";

setTimeout(()=>{

loader.style.display="none";

},1000);

}

});

// AI BUTTON

const aiButton =
document.querySelector(".floating-ai");

if(aiButton){

aiButton.addEventListener("click",()=>{

alert(
"Welcome To ERNUR VYNX AI Assistant"
);

});

}

// LOCAL STORAGE

const savedLanguage =
localStorage.getItem("language");

if(savedLanguage){

const switcher =
document.getElementById(
"languageSwitcher"
);

if(switcher){

switcher.value =
savedLanguage;

}

}

// SMOOTH LINKS

document
.querySelectorAll('a[href^="#"]')
.forEach(anchor => {

anchor.addEventListener("click",
function(e){

e.preventDefault();

const target =
document.querySelector(
this.getAttribute("href")
);

if(target){

target.scrollIntoView({

behavior:"smooth"

});

}

});

});

// CLOCK

function updateClock(){

const clock =
document.getElementById("clock");

if(clock){

const now =
new Date();

clock.innerHTML =
now.toLocaleTimeString();

}

}

setInterval(updateClock,1000);

// RANDOM QUOTES

const quotes = [

"Future Starts Here",

"Artificial Intelligence For Everyone",

"Build Smart. Build Future.",

"Innovation Never Stops"

];

const quoteBox =
document.getElementById("quote");

if(quoteBox){

setInterval(()=>{

const random =
Math.floor(
Math.random()*quotes.length
);

quoteBox.innerHTML =
quotes[random];

},5000);

}

// BACK TO TOP

const topBtn =
document.getElementById("topBtn");

window.addEventListener("scroll",()=>{

if(topBtn){

if(window.scrollY > 300){

topBtn.style.display =
"block";

}else{

topBtn.style.display =
"none";

}

}

});

if(topBtn){

topBtn.addEventListener("click",()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

});

}

console.log(
"ERNUR VYNX APP READY"
);
