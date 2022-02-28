// ==UserScript==
// @name         Gartic bot control
// @namespace    http://tampermonkey.net/
// @version      0.1
// @updateURL    https://github.com/anonimbiri/gartic.io-bot/raw/main/script/Gartic%20bot%20control.user.js
// @downloadURL  https://github.com/anonimbiri/gartic.io-bot/raw/main/script/Gartic%20bot%20control.user.js
// @description  Gartic bot control
// @author       Anonim Biri
// @supportURL   https://github.com/anonimbiri/gartic.io-bot/issues/new
// @match        https://gartic.io/*
// @match        *://*/*
// @match        https://anonimbiri.github.io/*
// @icon         https://www.google.com/s2/favicons?domain=undefined.
// @grant    GM_registerMenuCommand
// ==/UserScript==

/*-- GM_registerMenuCommand (menuName, callbackFunction, accessKey)
*/

(function() {
    'use strict';

let PerformanceMode = false;
let bot = false;

GM_registerMenuCommand("Open Bot Site", openbotsite, "S");

function openbotsite() {
    window.open('https://anonimbiri.github.io/gartic.io-bot/','_self');
}

GM_registerMenuCommand("Open Source Code", opensourcecode, "C");

function opensourcecode() {
    window.open("https://github.com/anonimbiri/gartic.io-bot",'_self');
}

setInterval(function() {  if(window.location.pathname != "/"){if(document.querySelector('.ic-yes')){document.querySelector('.ic-yes').click();}} if(PerformanceMode == true){if(document.querySelector('#canvas')){document.querySelector('#canvas').remove();document.querySelectorAll(".history").forEach(e => e.remove());}} if(bot == true){if(document.querySelector(".ic-drawG")){document.querySelectorAll('.ic-drawG')[0].click();}if(document.querySelector("#hint button")){document.querySelectorAll('#hint div button')[1].click(); document.querySelector('.buttons .btYellowBig.smallButton.ic-yes').click();}} if(document.querySelector('#warning')){document.querySelector('#warning').remove();} }, 0);

setTimeout(function(){ setInterval(function() { if(bot == true){ if(document.querySelector('.ic-playHome')){document.querySelector('.ic-playHome').click();} } }, 10000); }, 10000);

window.addEventListener('message', function(event) {
if(event.data.command == "login"){
    document.querySelector('.selectAvatar').click();
    document.querySelectorAll('.avatars div .scrollElements ul li')[event.data.profilepicture].click();

    setnickname(event.data.username);
    if(event.data.performancemode){PerformanceMode = event.data.performancemode;}
    setTimeout(function(){
    document.querySelector('.ic-playHome').click();
    bot = true;
	console.group(`%c${event.data.command}%c ✓`, "background: green;", "background: none;");
	console.log("İd: ");
	console.log("Username: " + document.querySelector('.nick label input').value);
	console.groupEnd();
    }, 1000);
}else if(event.data.command == "drawreport"){
    document.querySelector('.denounce').click();
	console.group(`%c${event.data.command}%c ✓`, "background: green;", "background: none;");
	console.log("İd: ");
	console.log("Username: " + document.querySelector('.user.you .infosPlayer .nick').textContent);
	console.groupEnd();
	}else if(event.data.command == "spam"){
    chat(event.data.text,event.data.spamid);
    }else if(event.data.command == "userreport"){
    document.querySelectorAll('.nick').forEach((element,index) => {
    if(element.innerHTML == event.data.username){ element.click(); document.querySelector('.ic-votekick').click(); };
    });
    console.group(`%c${event.data.command}%c ✓`, "background: green;", "background: none;");
	console.log("İd: ");
	console.log("Username: " + document.querySelector('.you .infosPlayer .nick').textContent);
	console.groupEnd();
    }else if(event.data.command == "loginproxy"){
    login(event.data.url);
    setTimeout(function(){
    setnickname(event.data.username);
    if(event.data.performancemode){PerformanceMode = event.data.performancemode;}
    setTimeout(function(){
    document.querySelector('.ic-playHome').click();
    bot = true;
	console.group(`%c${event.data.command}%c ✓`, "background: green;", "background: none;");
	console.log("İd: ");
	console.log("Username: " + document.querySelector('.nick label input').value);
	console.groupEnd();
    }, 1000);
    }, 5000);

    }
});
async function setnickname(nickname) {
    let input = document.querySelector('.nick label input');
    let lastValue = input.value;
    input.value =  lastValue.replace("User", nickname);
    let event = new Event('input', { bubbles: true });
    event.simulated = true;
    let tracker = input._valueTracker;
    if (tracker) {
    tracker.setValue(lastValue);
   }
   await input.dispatchEvent(event);
}

async function chat(msg,spamid) {
    let input = document.querySelector('input[name="chat"]');
    if(spamid == 0){
       input = document.querySelector('input[name="answer"]');
    }else{
       input = document.querySelector('input[name="chat"]');
    }
    if(input.disabled == false){
    let lastValue = input.value;
    input.value =  msg;
    let event = new Event('input', { bubbles: true });
    event.simulated = true;
    var event2 = new Event("submit", { bubbles: true });
    event2.simulated = true;
    let tracker = input._valueTracker;
    if (tracker) {
    tracker.setValue(lastValue);
   }
   await input.dispatchEvent(event);
   input.form.dispatchEvent(event2);
    }
}

async function login(url) {
    let input = document.querySelector('input[name="d"]');
    let lastValue = input.value;
    input.value = url;
    let event = new Event('input', { bubbles: true });
    event.simulated = true;
    let tracker = input._valueTracker;
    if (tracker) {
    tracker.setValue(lastValue);
   }
   await input.dispatchEvent(event);

let elem = document.querySelector('button[type="submit"]');
elem.dispatchEvent(new MouseEvent("click",{bubbles:true,button:0}));


}

    //end
})();
