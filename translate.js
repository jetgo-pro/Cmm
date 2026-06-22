// ERNUR VYNX MULTI LANGUAGE SYSTEM

const languageSwitcher =
document.getElementById(
"languageSwitcher"
);

async function loadLanguage(lang){

try{

const response =
await fetch(
`lang/${lang}.json`
);

const translations =
await response.json();

document
.querySelectorAll("[data-key]")
.forEach(element=>{

const key =
element.getAttribute(
"data-key"
);

if(translations[key]){

element.textContent =
translations[key];

}

});

localStorage.setItem(
"language",
lang
);

document.documentElement.lang =
lang;

}
catch(error){

console.error(
"Language Load Error:",
error
);

}

}

const savedLanguage =
localStorage.getItem(
"language"
);

if(savedLanguage){

loadLanguage(
savedLanguage
);

if(languageSwitcher){

languageSwitcher.value =
savedLanguage;

}

}else{

loadLanguage("kz");

}

if(languageSwitcher){

languageSwitcher.addEventListener(
"change",
(event)=>{

loadLanguage(
event.target.value
);

}
);

}

// PAGE TITLE

function updateTitle(lang){

const titles={

kz:
"ERNUR VYNX AI ROBOTICS",

ru:
"ERNUR VYNX AI ROBOTICS",

en:
"ERNUR VYNX AI ROBOTICS"

};

document.title =
titles[lang];

}

if(languageSwitcher){

languageSwitcher.addEventListener(
"change",
e=>{

updateTitle(
e.target.value
);

}
);

}

// DYNAMIC TEXT

function updateDynamicText(lang){

const quote =
document.getElementById(
"quote"
);

if(!quote) return;

const messages={

kz:
"Болашақ бүгіннен басталады",

ru:
"Будущее начинается сегодня",

en:
"The Future Starts Today"

};

quote.innerHTML =
messages[lang];

}

if(languageSwitcher){

languageSwitcher.addEventListener(
"change",
e=>{

updateDynamicText(
e.target.value
);

}
);

}

// WELCOME MESSAGE

window.addEventListener(
"load",
()=>{

const current =
localStorage.getItem(
"language"
) || "kz";

updateTitle(current);

updateDynamicText(current);

}
);

console.log(
"Translation System Loaded"
);
