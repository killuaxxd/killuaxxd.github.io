// ==UserScript==
// @name         Gartic bot control
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://gartic.io/*
// @match        https://anonimbiri.github.io/*
// @icon         https://www.google.com/s2/favicons?domain=undefined.
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

let PerformanceMode = false;
let spam = false;
let spamtext = "anonimbiri";
let bot = false;

setInterval(function() {  if(document.querySelector('.ic-yes')){document.querySelector('.ic-yes').click();} if(PerformanceMode == true){if(document.querySelector('#canvas')){document.querySelector('#canvas').remove();document.querySelectorAll(".history").forEach(e => e.remove());}} if(bot == true){if(document.querySelector(".ic-drawG")){document.querySelectorAll('.ic-drawG')[0].click();}if(document.querySelector("#hint button")){document.querySelectorAll('#hint div button')[1].click(); document.querySelector('.buttons .btYellowBig.smallButton.ic-yes').click();}} if(document.querySelector('#warning')){document.querySelector('#warning').remove();} }, 0);

let id = 1;
setInterval(function() {  if(spam == true){if(id == 1){chat(spamtext,); id = 2; }else if(id == 2){chat(spamtext + "឵",); id = 3;}else if(id == 3){chat("឵" + spamtext,); id = 4;}else if(id == 4){chat("github.com/anonimbiri",); id = 1;} } }, 5000);

window.addEventListener('message', function(event) {
   // console.dir(event.data);
if(event.data.command == "login"){
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
    spam = event.data.spam;
    spamtext = event.data.text;
    console.group(`%c${event.data.command}%c ✓`, "background: green;", "background: none;");
	console.log("İd: ");
	console.log("Username: " + document.querySelector('.you .infosPlayer .nick').textContent);
	console.groupEnd();
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

async function chat(msg) {
    let input = document.querySelector('input[name="chat"]');
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

    //end
})();