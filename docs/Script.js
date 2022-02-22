document.body.innerHTML += `
<div class="ui segment inverted clearing bottom attached" id="warning">
  <i class="warning icon"></i>
    <div class="ui right floated button" id="download">Download</div>You need to download script for it to work
</div>

<div class="ui inverted segment">
  <div class="ui inverted form">
    <div class="two fields">
	<div class="field" id="botname">
        <label>Bot Name</label>
        <div class="ui large labeled input"><input type="text" value="anonimbiri" placeholder="Nickname" maxlength="14" spellcheck="false" data-ms-editor="true"></div>
      </div>
      <div class="field">
        <label>Room Code</label>
        <div class="ui large labeled input" id="roomcode"><div class="ui label">https://gartic.io/ </div><input type="text" placeholder="Code"></div>
      </div>
      <div class="field" id="botamount">
        <label>Bot Amount</label>
        <div class="ui large labeled input"><input type="number" value="5" min="1" max="10"></div>
      </div>
    </div>
    <div class="field">
    <div class="ui checkbox">
      <input type="checkbox" tabindex="0" class="hidden">
      <label>Performance Mode</label>
    </div></div>
    <div class="inline"><button class="ui primary button" id="addbot">Add Bots</button><button class="ui inverted red button" id="clearall">Clear All</button></div>
  </div>
</div>

<div class="ui tiny modal">
<div class="ui icon header">
<i class="yellow exclamation triangle icon"></i>
  Script Not Found</div>
  <div class="content">
    <p>Script not found won't run if there is no script.</p>
  </div>
  <div class="actions">
    <div class="ui black cancel button">
      Already Available
    </div>
	<div class="ui black approve button">
      Download
    </div>
  </div>
  </div>
</div>

<div class="ui inverted segment" id="tool" style="display:none"><div class="inline"><button class="ui primary button" id="reportdraw">Report Draw</button><label>Spam: </label><div class="ui labeled input" id="spamtext"><input type="text" value="anonimbiri" placeholder="Spam text" maxlength="99" spellcheck="false" data-ms-editor="true"></div><button class="ui primary button" id="startspam">Start Spam</button></div></div></div>
`;
let download = document.querySelector('#download');
let download2 = document.querySelector('#download2');
let btn = document.querySelector('#addbot');
let btn2 = document.querySelector('#clearall');
let url = document.querySelector('#roomcode input'); 
let amount = document.querySelector('#botamount input');

let reportdraw = document.querySelector('#reportdraw');
let spambutton = document.querySelector('#startspam');
let spamtext = document.querySelector('#spamtext input');

let scripturl = "https://github.com/anonimbiri/gartic.io-bot/raw/main/script/Gartic%20bot%20control.user.js";

download.addEventListener("click", function () {
	window.open(scripturl).close();
});

btn.addEventListener("click", function () {
	btn.setAttribute("class", "ui primary disabled loading button");
	if(document.querySelector("#warning")){
	$('.tiny.modal')
	.modal({
	closable  : false,
	blurring : true,
    onApprove : function() {
	  window.open(scripturl).close();
    }})
    .modal('show');
	}
	
	var div = document.createElement("div");
	div.setAttribute('id', 'list');
	document.body.appendChild(div);
	
    for (let i = 0; i < amount.value; i++) {
	var iframe = document.createElement("iframe");
	iframe.setAttribute('id', i);
	iframe.setAttribute('src', 'https://gartic.io/' + url.value);
	iframe.setAttribute('sandbox', 'allow-same-origin allow-scripts');
	//iframe.style.visibility = 'hidden';
	if(i == amount.value -1){ iframe.setAttribute('onload', 'loaded();');}
	div.appendChild(iframe);
    }
	iziToast.success({
	position: 'topRight',	
	//theme: 'dark',
    title: 'Successful',
    message: 'Creating Bots'
});

});
btn2.addEventListener("click", function () {
	if(document.querySelector('#list')){
	document.querySelector('#list').remove();
	
	btn.setAttribute("class", "ui primary button");
	
	document.querySelector("#tool").style.display = 'none';
	spam = false
    spambutton.textContent = "Start Spam"
	iziToast.success({
	position: 'topRight',	
	//theme: 'dark',	
    title: 'Successful',
    message: 'All Bots Destroyed',
	}); 
	}else{
	iziToast.error({
	position: 'topRight',	
	//theme: 'dark',	
    title: 'Error',
    message: 'Guess No Bots' ,
});
}

});
url.onchange = function(){ url.value = url.value.replace("https://gartic.io/",""); };

var performancemode = false;

function loaded() {
document.querySelectorAll('iframe').forEach( item =>
  item.contentWindow.postMessage({'command': 'login', 'username':document.querySelector('#botname div input').value, 'performancemode':performancemode }, '*')
)
document.querySelector("#tool").style.display = 'block';
	btn.setAttribute("class", "ui primary button");
	iziToast.success({
	position: 'topRight',	
	//theme: 'dark',
    title: 'Successful',
    message: 'Joining the Server'
});
}

reportdraw.addEventListener("click", function () {
document.querySelectorAll('iframe').forEach( item =>
  item.contentWindow.postMessage({'command': 'drawreport'}, '*')
)
iziToast.success({
	position: 'topRight',	
	//theme: 'dark',	
    title: 'Successful',
    message: 'Drawing Reported',
	}); 
});

let spam = false;
spambutton.addEventListener("click", function () {
	if(spam== false){
	spam = true;
	spambutton.textContent = "Stop Spam"
	iziToast.success({
	position: 'topRight',	
	//theme: 'dark',	
    title: 'Successful',
    message: 'Spam Started',
	}); 
	}else{
    spam = false
    spambutton.textContent = "Start Spam"
	iziToast.success({
	position: 'topRight',	
	//theme: 'dark',	
    title: 'Successful',
    message: 'Spam Stopped',
	}); 
	}
document.querySelectorAll('iframe').forEach( item =>
  item.contentWindow.postMessage({'command': 'spam', 'spam': spam,  'text': spamtext.value}, '*')
)
});

$('.checkbox')
  .checkbox({
    // check all children
    onChecked: function() { performancemode = true; },
	onUnchecked: function() {  performancemode = false; }
  })
;

setTimeout(function(){
if(!document.querySelector("#warning")){
iziToast.success({
	position: 'topRight',	
	//theme: 'dark',
    title: 'Successful',
    message: 'Script loaded'
});
}else{
iziToast.error({
	position: 'topRight',	
	//theme: 'dark',	
    title: 'Error',
    message: 'The script has not been downloaded, please download it' ,
});	
}
}, 1000);