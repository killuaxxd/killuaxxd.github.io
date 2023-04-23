let params = new URLSearchParams(window.location.search);
document.body.innerHTML += `
<div class="ui inverted segment">
  <div class="ui inverted form">
    <div class="two fields">
	<div class="field" id="botname">
        <label>Bot Name</label>
        <div class="ui large labeled input"><input type="text" value="${params.get('name') || "anonimbiri"}" placeholder="Nickname" maxlength="17" spellcheck="false" data-ms-editor="true"></div>
      </div>
      <div class="field">
        <label>Room Code</label>
        <div class="ui large labeled input" id="roomcode"><div class="ui label">https://gartic.io/ </div><input type="text" value="${params.get('code') || ""}" placeholder="Code"></div>
      </div>
      <div class="field" id="botamount">
        <label>Bot Amount</label>
        <div class="ui large labeled input"><input type="number" value="${params.get('amount') || "5"}" min="1" max="20"></div>
      </div>
    </div>
	
    <div class="two fields">

	<div class="field">
	<label>Bot Image</label>
<div class="ui fluid selection profil dropdown" tabindex="0">
  <input type="hidden" name="user">
  <i class="dropdown icon" tabindex="0"><div class="menu" tabindex="-1"></div></i>
  <div class="text"><img class="ui avatar image" src="https://gartic.io/static/images/avatar/svg/0.svg">Default</div>
  <div class="menu transition hidden" tabindex="-1">
  <div data-value="0" class="item active selected">
        <img class="ui avatar image" src="https://gartic.io/static/images/avatar/svg/0.svg">Default</div><div data-value="1" class="item">
        <img class="ui avatar image" src="https://gartic.io/static/images/avatar/svg/1.svg">Man 1</div><div data-value="2" class="item">
        <img class="ui avatar image" src="https://gartic.io/static/images/avatar/svg/2.svg">Man 2</div><div data-value="3" class="item">
        <img class="ui avatar image" src="https://gartic.io/static/images/avatar/svg/3.svg">Man 3</div><div data-value="4" class="item">
        <img class="ui avatar image" src="https://gartic.io/static/images/avatar/svg/4.svg">Man 4</div><div data-value="5" class="item">
        <img class="ui avatar image" src="https://gartic.io/static/images/avatar/svg/5.svg">Man 5</div><div data-value="6" class="item">
        <img class="ui avatar image" src="https://gartic.io/static/images/avatar/svg/6.svg">Man 6</div><div data-value="7" class="item">
        <img class="ui avatar image" src="https://gartic.io/static/images/avatar/svg/7.svg">Man 7</div><div data-value="8" class="item">
        <img class="ui avatar image" src="https://gartic.io/static/images/avatar/svg/8.svg">Man 8</div><div data-value="9" class="item">
        <img class="ui avatar image" src="https://gartic.io/static/images/avatar/svg/9.svg">Man 9</div><div data-value="10" class="item">
        <img class="ui avatar image" src="https://gartic.io/static/images/avatar/svg/10.svg">Man 10</div><div data-value="11" class="item">
        <img class="ui avatar image" src="https://gartic.io/static/images/avatar/svg/11.svg">Man 11</div><div data-value="12" class="item">
        <img class="ui avatar image" src="https://gartic.io/static/images/avatar/svg/12.svg">Man 12</div><div data-value="13" class="item">
        <img class="ui avatar image" src="https://gartic.io/static/images/avatar/svg/13.svg">Man 13</div><div data-value="14" class="item">
        <img class="ui avatar image" src="https://gartic.io/static/images/avatar/svg/14.svg">Man 14</div><div data-value="15" class="item">
        <img class="ui avatar image" src="https://gartic.io/static/images/avatar/svg/15.svg">Man 15</div><div data-value="16" class="item">
        <img class="ui avatar image" src="https://gartic.io/static/images/avatar/svg/16.svg">Man 16</div><div data-value="17" class="item">
        <img class="ui avatar image" src="https://gartic.io/static/images/avatar/svg/17.svg">Man 17</div><div data-value="18" class="item">
        <img class="ui avatar image" src="https://gartic.io/static/images/avatar/svg/18.svg">Man 18</div><div data-value="19" class="item">
        <img class="ui avatar image" src="https://gartic.io/static/images/avatar/svg/19.svg">Girl 1</div><div data-value="20" class="item">
        <img class="ui avatar image" src="https://gartic.io/static/images/avatar/svg/20.svg">Girl 2</div><div data-value="21" class="item">
        <img class="ui avatar image" src="https://gartic.io/static/images/avatar/svg/21.svg">Girl 3</div><div data-value="22" class="item">
        <img class="ui avatar image" src="https://gartic.io/static/images/avatar/svg/22.svg">Girl 4</div><div data-value="23" class="item">
        <img class="ui avatar image" src="https://gartic.io/static/images/avatar/svg/23.svg">Girl 5</div><div data-value="24" class="item">
        <img class="ui avatar image" src="https://gartic.io/static/images/avatar/svg/24.svg">Girl 6</div><div data-value="25" class="item">
        <img class="ui avatar image" src="https://gartic.io/static/images/avatar/svg/25.svg">Girl 7</div><div data-value="26" class="item">
        <img class="ui avatar image" src="https://gartic.io/static/images/avatar/svg/26.svg">Girl 8</div><div data-value="27" class="item">
        <img class="ui avatar image" src="https://gartic.io/static/images/avatar/svg/27.svg">Girl 9</div><div data-value="28" class="item">
        <img class="ui avatar image" src="https://gartic.io/static/images/avatar/svg/28.svg">Girl 10</div><div data-value="29" class="item">
        <img class="ui avatar image" src="https://gartic.io/static/images/avatar/svg/29.svg">Girl 11</div><div data-value="30" class="item">
        <img class="ui avatar image" src="https://gartic.io/static/images/avatar/svg/30.svg">Girl 12</div><div data-value="31" class="item">
        <img class="ui avatar image" src="https://gartic.io/static/images/avatar/svg/31.svg">Girl 13</div><div data-value="32" class="item">
        <img class="ui avatar image" src="https://gartic.io/static/images/avatar/svg/32.svg">Girl 14</div><div data-value="33" class="item">
        <img class="ui avatar image" src="https://gartic.io/static/images/avatar/svg/33.svg">Gril 15</div><div data-value="34" class="item">
        <img class="ui avatar image" src="https://gartic.io/static/images/avatar/svg/34.svg">Gril 16</div><div data-value="35" class="item">
        <img class="ui avatar image" src="https://gartic.io/static/images/avatar/svg/35.svg">Gril 17</div><div data-value="36" class="item">
        <img class="ui avatar image" src="https://gartic.io/static/images/avatar/svg/36.svg">Gril 18</div></div>
  </div>
  </div>

  <div class="field">
        <label>Server Lang</label>
        <div class="ui fluid search selection dropdown">
  <input type="hidden" name="country">
  <i class="dropdown icon"></i>
  <div class="text"><i class="gb flag"></i>English</div>
  <div class="menu">
  <div class="item" data-value="23"><i class="az flag"></i>Azərbaycanca</div>
  <div class="item" data-value="45"><i class="id flag"></i>Bahasa Indonesia</div>
  <div class="item" data-value="11"><i class="cz flag"></i>Čeština</div>
  <div class="item" data-value="14"><i class="de flag"></i>Deutsch</div>
  <div class="item" data-value="2"><i class="gb flag"></i>English</div>
  <div class="item" data-value="3"><i class="es flag"></i>Español</div>
  <div class="item" data-value="4"><i class="fr flag"></i>Français</div>
  <div class="item" data-value="6"><i class="it flag"></i>Italiano</div>
  <div class="item" data-value="44"><i class="hu flag"></i>Magyar</div>
  <div class="item" data-value="18"><i class="nl flag"></i>Nederlands</div>
  <div class="item" data-value="10"><i class="pl flag"></i>Polski</div>
  <div class="item" data-value="1"><i class="pt flag"></i>Português</div>
  <div class="item" data-value="58"><i class="ro flag"></i>Română</div>
  <div class="item" data-value="22"><i class="sk flag"></i>Slovenčina</div>
  <div class="item" data-value="13"><i class="vn flag"></i>Tiếng Việt</div>
  <div class="item" data-value="8"><i class="tr flag"></i>Türkçe</div>
  <div class="item" data-value="21"><i class="bg flag"></i>български език</div>
  <div class="item" data-value="7"><i class="ru flag"></i>Русский</div>
  <div class="item" data-value="40"><i class="il flag"></i>עברית</div>
  <div class="item" data-value="19"><i class="sa flag"></i>العربية</div>
  <div class="item" data-value="34"><i class="ir flag"></i>فارسی</div>
  <div class="item" data-value="12"><i class="th flag"></i>ภาษาไทย</div>
  <div class="item" data-value="16"><i class="cn flag"></i>中文 (简化字)</div>
  <div class="item" data-value="9"><i class="tw flag"></i>中文 (臺灣)</div>
  <div class="item" data-value="17"><i class="hk flag"></i>中文 (香港)</div>
  <div class="item" data-value="20"><i class="kr flag"></i>한국어</div>
  <div class="item" data-value="15"><i class="jp flag"></i>日本語</div>
</div>
 </div>
      </div>
  </div>

  <div class="inline fields">
	<div class="field">
    <div class="ui proxy checkbox">
      <input type="checkbox" tabindex="0" class="hidden">
      <label>Proxy Mode</label>
    </div></div>
    <div class="field">
    <button class="ui primary button" id="addproxy" style="display: ${params.get('proxy') ? 'block' : 'none'};">Add Proxy</button></div>
    <div class="field">
    <button class="ui inverted red button button" id="clearallproxy" style="display: ${params.get('proxy') ? 'block' : 'none'};">Clear All Proxy</button></div>
    </div>

    <a href="https://github.com/anonimbiri/gartic.io-bot" target="_blank" class="ui right floated
inverted button"><i class="github icon"></i>Open Source Code</a>    <div class="inline"><button class="ui primary button" id="addbot">Add Bots</button><button class="ui inverted red button" id="clearall">Clear All</button> <button class="ui right labeled icon button" id="watchtheroom">Watch The Room<i class="external link icon"></i></button>
<a href="https://anonimbiri.github.io/gartic.io-bot/" class="ui right floated
inverted button"><i class="fire icon"></i>V1 (Old Version)</a></div> </div>
  </div>
</div>
<div class="ui tiny modal">
<div class="ui icon header">
<i class="yellow exclamation triangle icon"></i>
 Failed to Connect to Server</div>
  <div class="content">
    <p>The room is full, you may have been banned or kicked out wait a bit and try again later</p>
  </div>
  <div class="actions">
    <div class="ui black cancel button">
      OK
    </div>
  </div>
  </div>
</div>
<div class="ui inverted segment" id="tool" style="display: none;"><div class="ui inverted form ">
<div class="inline fields"><label>Reports:</label><div class="field"><button class="ui primary button" id="reportdraw">Report Draw</button></div><div class="field"><button class="ui red button" id="kickall">Kick All Players</button></div></div><div class="inline fields"><label>Spam:</label><div class="field"><div class="ui selection spam dropdown">
  <input type="hidden" name="gender">
  <i class="dropdown icon"></i>
  <div class="text">Chat</div>
  <div class="menu">
    <div class="item active selected" data-value="11">Chat</div>
    <div class="item" data-value="13">Answer</div>
  </div></div>
</div><div class="field">
<label>Speed (ms):</label><div class="ui labeled input"><input type="number" value="${params.get('spam-ms') || "960"}" min="960" max="1000000" id="spamms"></div>

</div><div class="field"><div class="ui labeled input" id="spamtext"><input type="text" value="${params.get('spam-text') || "anonimbiri"}" placeholder="Spam text" maxlength="1000" spellcheck="false" data-ms-editor="true"></div></div><div class="field"><button class="ui primary compact labeled icon button" id="startspam"><i class="play icon"></i> Start Spam</button></div></div>
<div class="inline fields">
<label>Automations:</label><div class="ui kick-the-joiner checkbox">
<input type="checkbox" tabindex="0" class="hidden" >
<label>Kick The Joiner</label>
</div></div>
<div class="inline fields">
<label>Drawing Bot:</label>
<div class="field">
<div class="ui drawing-bot checkbox">
<input type="checkbox" tabindex="0" class="hidden" >
<label>Skip The Formality, Draw a Picture Instead</label>
</div></div>
<div class="field">
<button class="ui primary button" id="upload">Upload a Picture</button></div>
</div>

<div id="playerlist" class="ui massive inverted relaxed divided list">

  

  </div>
</div>
`;
$('.profil.dropdown').dropdown('set selected', params.get('image') || 0);
$('.search.dropdown').dropdown('set selected', params.get('lang') || 2);

if (params.get('kick-the-joiner') || false) {
  $('.kick-the-joiner.checkbox').checkbox('check');
}

if (params.get('drawing-bot') || false) {
  $('.drawing-bot').checkbox('check');
}

if (params.has('proxy') && params.get('proxy') !== 'false') {
  $('.proxy.checkbox').checkbox('check');
  document.querySelector("#addproxy").style.display = "block";
  document.querySelector("#clearallproxy").style.display = "block";
  $('#botamount .labeled.input').addClass('disabled');
  if (JSON.parse(localStorage.getItem("proxies"))) { $('#botamount .labeled.input input').val(JSON.parse(localStorage.getItem("proxies")).length); }
} else {
  $('.proxy.checkbox').checkbox('uncheck');
  document.querySelector("#addproxy").style.display = "none";
  document.querySelector("#clearallproxy").style.display = "none";
  $('#botamount .labeled.input').removeClass('disabled');
}

if (params.get('code') && params.get('code') !== "") {
  $('.ui.search.dropdown').addClass('disabled');
} else {
  $('.ui.search.dropdown').removeClass('disabled');
}

let btn = document.querySelector('#addbot');
let btn2 = document.querySelector('#clearall');
let url = document.querySelector('#roomcode input');
let amount = document.querySelector('#botamount input');
let serverid = document.querySelector('#serverid input');
let watchtheroom = document.querySelector('#watchtheroom');

let reportdraw = document.querySelector('#reportdraw');
let kickall = document.querySelector('#kickall');
let spambutton = document.querySelector('#startspam');
let playerList = document.getElementById('playerlist');

let socketList = [];

let imageUrl = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAyAAAAMgCAIAAABUEpE/AAAACXBIWXMAAAsTAAALEwEAmpwYAAAG9WlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgOS4wLWMwMDEgNzkuYzAyMDRiMiwgMjAyMy8wMi8wOS0wNjoyNjoxNCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0RXZ0PSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VFdmVudCMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDI0LjMgKFdpbmRvd3MpIiB4bXA6Q3JlYXRlRGF0ZT0iMjAyMy0wNC0yM1QxNzozMjozMSswMzowMCIgeG1wOk1vZGlmeURhdGU9IjIwMjMtMDQtMjNUMTc6NDE6NDcrMDM6MDAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMjMtMDQtMjNUMTc6NDE6NDcrMDM6MDAiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIiBwaG90b3Nob3A6Q29sb3JNb2RlPSIzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjE5ZGY4MjRmLWY4YWYtMzc0MS05MGMwLWE1NmI2ZjEwM2E4YiIgeG1wTU06RG9jdW1lbnRJRD0iYWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOmE1OGNjMGE0LTUzMzItMzE0OS04NTlmLTQ3NGE2NmY2MjIzZiIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOmNhYTYwZjcwLTI4NzgtMTM0Yy1hYTE1LTIxNzRiMDdjYmNhMCI+IDxwaG90b3Nob3A6VGV4dExheWVycz4gPHJkZjpCYWc+IDxyZGY6bGkgcGhvdG9zaG9wOkxheWVyTmFtZT0iQm90IGRldmVsb3BlcjogZ2l0aHViLmNvbS9hbm9uaW1iaXJpIiBwaG90b3Nob3A6TGF5ZXJUZXh0PSJCb3QgZGV2ZWxvcGVyOiBnaXRodWIuY29tL2Fub25pbWJpcmkiLz4gPC9yZGY6QmFnPiA8L3Bob3Rvc2hvcDpUZXh0TGF5ZXJzPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjcmVhdGVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOmNhYTYwZjcwLTI4NzgtMTM0Yy1hYTE1LTIxNzRiMDdjYmNhMCIgc3RFdnQ6d2hlbj0iMjAyMy0wNC0yM1QxNzozMjozMSswMzowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIDI0LjMgKFdpbmRvd3MpIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjb252ZXJ0ZWQiIHN0RXZ0OnBhcmFtZXRlcnM9ImZyb20gYXBwbGljYXRpb24vdm5kLmFkb2JlLnBob3Rvc2hvcCB0byBpbWFnZS9wbmciLz4gPHJkZjpsaSBzdEV2dDphY3Rpb249InNhdmVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjE5ZGY4MjRmLWY4YWYtMzc0MS05MGMwLWE1NmI2ZjEwM2E4YiIgc3RFdnQ6d2hlbj0iMjAyMy0wNC0yM1QxNzo0MTo0NyswMzowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIDI0LjMgKFdpbmRvd3MpIiBzdEV2dDpjaGFuZ2VkPSIvIi8+IDwvcmRmOlNlcT4gPC94bXBNTTpIaXN0b3J5PiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pj8HPsIAAHWxSURBVHic7d13fBTV/v/xDS1AQg9BiqARlqKEjhpBNKig/MRGCeJVrKCJXhQVvBj0ghcvarCBgsR2VcouIjZMRKKUBAQpAWmBRJSa0CEBpCS/P3K/uTHZPTs7e3bOzOzr+cd9eNnszGdmp7znzJkzYSUlJQ4AAADIU0V1AQAAAHZDwAIAAJCMgAUAACAZAQsAAEAyAhYAAIBkBCwAAADJCFgAAACSEbAAAAAkI2ABAABIRsACAACQjIAFAAAgGQELAABAMgIWAACAZAQsAAAAyQhYAAAAkhGwAAAAJCNgAQAASEbAAgAAkIyABQAAIBkBCwAAQDICFgAAgGQELAAAAMkIWAAAAJIRsAAAACQjYAEAAEhGwAIAAJCMgAUAACAZAQsAAEAyAhYAAIBkBCwAAADJCFgAAACSEbAAAAAkI2ABAABIRsACAACQjIAFAAAgGQELAABAMgIWAACAZAQsAAAAyQhYAAAAkhGwAAAAJCNgAQAASEbAAgAAkIyABQAAIBkBCwAAQDICFgAAgGQELAAAAMkIWAAAAJIRsAAAACQjYAEAAEhGwAIAAJCMgAUAACAZAQsAAEAyAhYAAIBkBCwAAADJCFgAAACSEbAAAAAkI2ABAABIRsACAACQjIAFAAAgGQELAABAMgIWAACAZAQsAAAAyQhYAAAAkhGwAAAAJCNgAQAASEbAAgAAkIyABQAAIBkBCwAAQDICFgAAgGQELAAAAMkIWAAAAJIRsAAAACQjYAEAAEhGwAIAAJCMgAUAACAZAQsAAEAyAhYAAIBkBCwAAADJCFgAAACSEbAAAAAkI2ABAABIRsACAACQjIAFAAAgGQELAABAMgIWAACAZAQsAAAAyQhYAAAAkhGwAAAAJCNgAQAASEbAAgAAkIyABQAAIBkBCwAAQDICFgAAgGQELAAAAMkIWAAAAJIRsAAAACQjYAEAAEhGwAIAAJCMgAUAACAZAQsAAEAyAhYAAIBkBCwAAADJCFgAAACSEbAAAAAkI2ABAABIRsACAACQjIAFAAAgGQELAABAMgIWAACAZAQsAAAAyQhYAAAAkhGwAAAAJCNgAQAASEbAAgAAkIyABQAAIBkBCwAAQDICFgAAgGQELAAAAMkIWAAAAJIRsAAAACQjYAEAAEhGwAIAAJCMgAUAACAZAQsAAEAyAhYAAIBkBCwAAADJCFgAAACSVVNdAIBQ9OeffxYWFp48efLkyZMnTpw4ePBgYWHhn3/+eebMmTNnzvz555+nT58u+79nzpw5ffr0uXPnqlevXqtWrZr/Jzw8vFatWuHh4WX/NzIysnHjxnXr1q1Tp06dOnUiIyPDw8NVLyuAUETAAhBEx48f3759+549ew4dOnTw4MFjx44VFBQcOXLk4MGDhw8fPnTo0LFjx4Ix3/r160dFRTVq1Khx48YNGzaMjo6uX79+48aNo6KiWrRo0bZt23r16gVjvgBQKqykpER1DQDs4MyZM6UpaufOnVu2bNm6devOnTsPHTpUUFBw+vRp1dX9T61ataKjo6Oiolq3bt2+ffsOHTq0bt26NHvVrFlTdXUAbIKABUC/TZs2rV+//rfffsvNzd2xY8eOHTsOHz6suig9GjVq1KZNmzZt2lx22WWXXnpply5dOnbsqLooABZGwALgh4MHD/7+++9ZWVkrVqzIycnJzc0tLCxUXZR8kZGRl112mdPp7NWrV1xcXKtWrRo3bqy6KABWQsAC4MMff/yxYcOGrVu3rl69Oisr68CBA6orMtpFF10UFxd35ZVXtmvXrnPnzi1btlRdEQCzI2AB8ODUqVNbt26dP39+VlbW9u3b8/PzVVdkFk2aNGnbtm1cXNygQYPat29fu3Zt1RUBMCMCFoD/OXTo0OrVq5cvX75w4cKcnJzi4mLVFZlXlSpVnE7n7bff3rt37549e0ZFRamuCICJELAAOPbt2/f1119nZGSsXr16165dqsuxnksuuaRnz57x8fG33nprs2bNVJcDQD0CFhC6cnJyli1bNm/evNWrV584cUJ1OXZQt27dnj17Dh069Nprr3U6narLAaAMAQsIOefOnVuwYMEXX3zx7bff2vIZQDOIjIwcMGDAHXfcceedd1avXl11OQCMRsACQsjatWu/+OKLOXPm5OXlqa4lVMTExAwbNuyOO+7o1q2b6loAGIeABdhffn7+p59++v3333///feqawldN91000033XTPPfc0adJEdS0Ago6ABdjZ0qVLZ8yYsWzZsn379qmuBQ6Hw9GsWbNrr7121KhRffr0UV0LgCAiYAH25HK5Pvzww7S0NNWFwLP+/fvff//9Q4YMUV0IgKAgYAG2cvTo0c8//3z69OkbNmxQXQt869y5c2Ji4l133dWgQQPVtQCQiYAF2MSBAwc+/vjj1NTUnTt3qq4F/mnduvVDDz103333XXTRRaprASAHAQuwvJ07d7711lsLFizYu3ev6lqgX/Pmze+8884nnniidevWqmsBECgCFmBh27dvf+utt95///0///xTdS2QIzw8/MEHH3ziiSfatm2ruhYA+hGwAEsqKCiYMmVKamoqI7DbUt26dR966KGxY8dGR0errgWAHgQswGIKCwvffffdN954g5EXbK9Zs2ajR49+9NFHIyMjVdcCwD8ELMBKZsyY8eabb27btk11ITBOu3bt/v73v48aNUp1IQD8QMACrOGLL76YMmXKzz//rLoQqHHllVeOHTv2jjvuUF0IAE0IWIDZLV68eMqUKUuWLFFdCNTr27fv2LFjb7zxRtWFAPCBgAWYV0FBwYsvvjhz5szi4mLVtcAsqlSpMnLkyBdffJH+74CZEbAAk/rkk08mTJiwa9cu1YXAjC655JKJEyf+7W9/U10IAM+qqC4AQEWbN28eNGjQvffeS7qCN7t27br33nsHDRq0efNm1bUA8IAWLMBEiouLX3/99RdeeKGoqEh1LbCGiIiIf/7zn08++WSVKlwwAyZCwALMYsmSJc8+++y6detUFwLr6dq16yuvvNK3b1/VhQD4L654APWOHDmSmJh4ww03kK6gz7p162644YbExMQjR46orgWAw0ELFqDc119//cQTT9DdClJccsklb7311q233qq6ECDU0YIFqDRu3LiBAweSriDLrl27Bg4cOG7cONWFAKGOFixAjfXr1yclJWVlZakuBPYUFxc3bdq0Ll26qC4ECFG0YAEKfPDBB9deey3pCsGTlZV17bXXfvDBB6oLAUIULViAoY4cOfLYY4/NmzdPdSEIFUOHDn3nnXcaNmyouhAgtNCCBRhn8eLFvXv3Jl3BSPPmzevdu/fixYtVFwKEFgIWYJBJkybddNNNW7ZsUV0IQs6WLVtuuummSZMmqS4ECCHcIgSCrqio6MEHH6ThCsolJCSkpqZGRESoLgSwPwIWEFxbtmz529/+xgiiMImuXbt++umn7du3V10IYHPcIgSCaOHChXFxcaQrmMe6deuuueaaL7/8UnUhgM0RsIBgeeutt+64447jx4+rLgT4i6NHj95+++3Tp09XXQhgZ9wiBILisccee/fdd1VXAYgkJiZOmzZNdRWAPRGwAMkOHDjwwAMPfPfdd6oLAXwbMGDABx98EB0drboQwG4IWIBMK1euHDx48N69e1UXAmh18cUXz58/v2fPnqoLAWyFPliAND/88MOAAQNIV7CW3bt3Dxgw4KefflJdCGArBCxAjoULFw4YMODo0aOqCwH8dujQof79+3/99deqCwHsg4AFSPCf//znjjvuOHv2rOpCAJ3+/PPPgQMHzp49W3UhgE0QsIBAzZgx47777lNdBSDB8OHDU1NTVVcB2AEBCwjIv//970cffVR1FYA0Dz/88Guvvaa6CsDyCFiAfuPHj3/uuedUVwFI9swzz7zwwguqqwCsjWEaAJ2eeuqp119/XXUVQLA8/fTTr776quoqAKsiYAF63Hffff/5z39UVwEE1wMPPPD++++rrgKwJG4RAn5LSkoiXSEUfPDBB08++aTqKgBLImAB/hk7dixvyUXoeOONN8aPH6+6CsB6uEUI+OHf//43vdoRgl555ZVnnnlGdRWAlRCwAK3eeeedxMRE1VUAarz77rujRo1SXQVgGQQsQJPZs2cPHz5cdRWASrNnzx42bJjqKgBrIGABvi1cuPCOO+5QXQWg3sKFC2+77TbVVQAWQMACfFi8ePGAAQPOnTunuhBAvRo1aixatKhv376qCwHMjoAFiKxevTo+Pr6oqEh1IYBZREZGLlmypGfPnqoLAUyNgAV49fvvv/fs2bOgoEB1IYC5REdHr169ulWrVqoLAcyLcbAAzy5cuDB8+HDSFVBZQUHB8OHDL1y4oLoQwLwIWIBnDz30UGZmpuoqAJPKzMx86KGHVFcBmBcBC/DgX//610cffaS6CsDUPvroo3/961+qqwBMij5YQEVfffUVD6IDGn355ZcDBw5UXQVgOgQs4C/Wr1/fu3dvHhsENIqIiFi+fHmXLl1UFwKYCwEL+J8TJ0707Nlz+/btqgsBrKRt27arV6+uW7eu6kIAE6EPFvA/gwcPJl0B/tq+ffvgwYNVVwGYCwEL+K8nn3zy+++/V10FYEnff//9k08+qboKwES4RQg4HA7Hl19+efvtt6uuArA23lQIlCFgAY59+/Z17do1Pz9fdSGAtTVp0mTdunXNmjVTXQigHrcIAceIESNIV0Dg8vPzR4wYoboKwBRowUKoe/PNN0ePHq26ioouueSSSy+9tE2bNh06dKhevfrBgwePHDly9OjRAwcO7Nq1Kzc3t7i4WHWNMELTpk1btWrVoUOHFi1a1KpVq06dOnXr1i0sLNywYcP27dt//fXXw4cPq66xojfeeOPvf/+76ioAxQhYCGlr1qyJi4s7f/686kL+olGjRtu3b2/UqJHHT0+fPv3LL79kZ2dv3rw5Kytr48aNBpeHYKtXr95tt93WuXPn9u3bx8bGCu64LVmy5IYbbjCyNi2qVauWlZXVo0cP1YUAKhGwELrOnTvXpUuXzZs3qy6kogcffDA1NVXLX548eXLr1q2ff/75V199tW3btmAXhqBq2bJl9+7d77777h49erRs2VLjt2JjYzdt2hTUwnS4/PLL169fX716ddWFAMoQsBC6EhMT33nnHdVVePDdd9/1799fx7fS0tIWLVq0c+fOYFSF4Bk6dOjNN998++2316tXz9/vTp48efz48cGoKkCPPfbY9OnTVVcBKEPAQohyu91DhgxRXYUHLVu23LRpk+5BsQ8dOrRs2bJ33313xYoVZ86ckVsb5GrWrNnw4cPvvffeK664QvdENm/eHMjXg8rlcjEAKUIWAQuh6MCBAx07djx06JDqQjx4+OGH33vvvcCn8/PPP3/wwQcLFiww52KGuN69e99xxx0PPPCAjiarynr16pWZmRn4dKSLioratGnTRRddpLoQQAGGaUAoeuihh0wbO+666y4p07nyyitnzpy5du3at99+OzY2Vso0EaCIiIhhw4YtXrx42bJlTz75pJR05XA47rjjDinTke7QoUMPPfSQ6ioANWjBQsgx86DtLVu23Llzp/SuwcXFxfPnz//kk0+++eYbuVOGRjExMXfeeecDDzzQvn176RPPzc3t2LHj6dOnpU9ZCoZ3R2giYCG0HDt2LDY2dvfu3aoL8Wz48OGffvpp8Ka/Zs2aBQsWzJo1y4SDJ9nVpZde+swzzwwdOrRhw4bBm0vPnj3XrFkTvOkH4uKLL964cWP9+vVVFwIYiluECC3JycmmTVcOh6Nv375BnX6PHj1efvnlDRs2PP3000E938PhcDRu3PiFF15Yu3bto48+Guy1ff311wd1+oHYvXt3cnKy6ioAo9GChRCyatWqq6++WnUVXlWtWvXXX39t166dMbPLy8ubPn36zJkzi4qKjJlj6AgP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xhu2SVcOh6NVq1akK1gIAQuWYbMBBj/++OOVK1eqrgK2tXHjxvfee091FTLZ7AgA2yNgwTLsd0Nt3LhxqkuAbY0bN+7ChQuqq5DJfkcA2BsBC5bRvXt31SVItmzZss8//1x1FbChtLS07777TnUVktnvCAB7o5M7LOPkyZOdO3fOy8tTXYhMHTp0WLduXXh4uOpCYB/FxcXdu3dfv3696kJkuuyyy9avX1+nTh3VhQBa0YIFy6hTp06fPn1UVyHZli1b7PQgPczg3XfftVm6cjgcffr0IV3BWghYsJJevXqpLkG+iRMn7tixQ3UVsIk9e/a88MILqquQ75prrlFdAuAfAhas5LrrrouMjFRdhWQnT5584IEHuFkPKe6///7Dhw+rrkKyyMjI66+/XnUVgH8IWLCSmJgYWw7lvGLFihdffFF1FbC8l1566YcfflBdhXxXXHHFpZdeqroKwD8ELFiMXS9kX3rppaysLNVVwMJWrVpl15hu170e9kbAgsX069dPdQlBUVxcPHz48OPHj6suBJZ07NixhIQEmw18VaZ///6qSwD8RsCCxXTq1KlZs2aqqwiKXbt23XfffaqrgPWUlJTce++9v//+u+pCgqJ58+axsbGqqwD8RsCCxdSvX79v376qqwiWL7/88uGHH1ZdBSzmvvvu+/rrr1VXESx9+/atX7++6ioAvxGwYD32fmA7NTV18uTJqquAZTz33HOffPKJ6iqCyN77O2yMgAXr6dOnT61atVRXEUTjx49/5513VFcBC5g4ceK///1v1VUEUa1atew3vDBCBAEL1tOuXbu2bduqriK4EhMTP/vsM9VVwNTefPNNW44pWl4o7OywKwIWLOnGG29UXULQ3XPPPbxFB96MHz9+9OjRqqsIulDY02FXBCxY0rBhw1SXYIQnnnjipZdeUl0FTOfvf/97iHTUu/vuu1WXAOgUxgs6YFG9evXKzMxUXYURRo8e/frrr6uuAqZw5syZYcOGLVy4UHUhRujdu/eyZctUVwHoRAsWrCpEGrEcDscbb7xx7733FhUVqS4EiuXl5d1yyy0hkq4cNF/B4mjBglXt2bOnXbt2oRM7unTpMmvWrG7duqkuBGp88803jz766J49e1QXYpDIyMicnJymTZuqLgTQiRYsWFWLFi1CqgPs+vXr4+Lipk2bproQKJCcnHzrrbeGTrpyOBw33XQT6QqWRsCChSUkJKguwVBnz559/PHH77vvPl5ZGDp+++23fv36heCzDtwfhNVxixAWVlRU1KZNm/3796suxGitW7eeOHFi6PRCC1kpKSkvv/zy4cOHVRditBYtWuTk5Nh7PGHYHi1YsLCIiIihQ4eqrkKBnTt33n333cOHD9+xY4fqWhAUmZmZ8fHxTz/9dAimK4fDMWzYMNIVrI6ABWsLzYBVavbs2d27d09JSaEd2k4OHDjw97//vVevXj/++KPqWpQZMmSI6hKAQHGLENZWUlLSqVOnTZs2qS5EpZ49e44fP37gwIGqC0FATp48+dlnn02aNGnfvn2qa1GpS5cu69atU10FEChasGBtYWFhgwYNUl2FYqtXr77tttvi4+O/+uor1bVAj5KSkhkzZlx11VWPPvpoiKcrh8MxePBg1SUAEtCCBcvbuXNn+/btz58/r7oQUxgwYMDTTz993XXXqS4Empw7d87lcr322msbNmxQXYsp1KhRIycnp1WrVqoLAQJFCxYsr3Xr1rfddpvqKszi22+/vf766++8887PP/9cdS0QOXv27IwZM6677rp77rmHdFXmrrvuIl3BHmjBgh2sWrXq6quvNmBGbdq0uf7666+99tr69etHRkbWr18/LCxsz54927dv37lz57Zt23JycswzGuSVV145atSo2267rUGDBqprwf/s2bPnP//5z4cffrhz507VtZjO6tWre/TooboKQAICFmzi+uuv/+mnn4I3/Ro1arz22mtJSUlhYWGCPzty5Mi8efMyMjK++OKLCxcuBK8e7dq2bXvvvffeddddbdu2VV1LqFuxYsWCBQs++uijo0ePqq7FjPr27fvDDz+orgKQg4AFm/j666+D+hjdfffd99FHH2n/+y1btixdunTatGlbtmwJWlF+aNCgQVxc3H333RcfH9+oUSPV5YSWvXv3LliwYO7cuatWrSouLlZdjnl9++23t9xyi+oqADkIWLCPrl27rl+/PkgTf+yxx6ZPn+7vt06dOvXmm2++/PLLJ0+eDEZVOjRv3vxvf/tb7969r7vuutq1a6sux8727du3YsWKxYsXz507t7CwUHU5Zte9e/c1a9aorgKQhoAF+3C5XMEbd7R+/fpr166NiYnR8d2dO3dOnjz5ww8/lF5VINq2bdulS5ebb775pptuatKkifjWJzQ6e/bsH3/88dVXXy1ZsmTDhg2MuaCd2+1myBXYCQEL9nHmzJnY2NjgvT3m//2///f111/r/np6enpycrIJr9Hr1q3brVu3Xr16XXHFFU6ns3379uHh4aqLspKjR49u3bp1+/btGzduXLFiRXZ29rlz51QXZTFt27bdsGFDzZo1VRcCSEPAgq28/fbbTzzxRPCmP2PGjJEjRwYyhSlTpowbN05WPdJVq1atffv2rVu37tix41VXXdWtW7eoqKgqVRjP5S/OnTu3d+/e1atX//zzz9u2bdu+fXtubq7qoqxt2rRpiYmJqqsAZCJgwVZOnDjRoUOHvXv3Bmn61apVW7hw4YABAwKZyLfffjtq1CjzjOYgUK9ePafTefXVV8fGxrZo0aJx48YXXXRRdHR0tWrVVJdmnNOnTxcUFBw4cODgwYO//fbb+vXrV65cuWfPHrpVydKiRYstW7bUqVNHdSGATAQs2M3kyZPHjx8fvOlXqVLl/fffHzFiRCATyc/PHzFiRFpamqSijNO0adNmzZq1aNHioosuatWq1aWXXtqqVavLLrssMjKyatWqlr63WFRUVKVKlYKCgt9++23Xrl2//fbbH3/8kZ+fv2fPnn379h0+fFh1gbb18ssvm7lZF9CHgAW7KSgocDqdx48fD+pcUlJSnnrqqUCmUFxcPHTo0Pnz58sqSZXw8PCIiIjIyMjFixc7nU7V5ej3ww8/DBs27Pz58ydPnjTJGGahoH79+tu3b4+OjlZdCCAZXStgN9HR0Y888kiw5zJmzJjBgwcH8oxYlSpVXC6XDd5r++effx45cuTxxx+3dLpyOBx9+/a99957jx07Rroy0sMPP0y6gi3RggUb+u233zp16mTA0FNNmjR59tlnR44cGRERoXsi99577yeffCKxKuNNmTLl2WefVV2FHP/+97+fe+451VWEijp16mRnZ1966aWqCwHkowULNnTppZeOHj3agBnl5+ePGTOmd+/eq1at0j2R999/Py4uTmJVBhs9erRt0pXD4Rg3blxSUpLqKkLF6NGjSVewK1qwYE8nTpzo1KnTrl27jJldeHh4SkqK7ufMDx8+fPXVVwdvBK/gGTJkyLx581RXIVlxcfG1116bmZmpuhCbu+SSS7Kzs+vWrau6ECAoaMGCPdWtW3fChAmGze7PP/9MSkrS/SRUo0aNXC6X5V5c07hx4/fee091FfJVqVLl008/jYqKUl2IzU2YMIF0BRsjYMG2RowY0b17dyPnOGXKFN3DnHbu3DklJUVuPcH25ptv1qtXT3UVQXHJJZe8++67qquws+7duwc41glgctwihJ0tWbLkhhtuMHimo0ePfv311/V99/rrr//pp5+klhMsvXr1Wr58ueoqgstCP4fl/PDDD3379lVdBRBEtGDBzvr27TtkyBCDZ/rGG29MmjRJ33ffe++9QB5INNKbb76puoSge/PNN6tWraq6ChsaMmQI6Qq2R8CCzU2ePNn497pMmDDhiy++0PHFNm3a/POf/5Rej3SPP/54165dVVcRdLGxsaNGjVJdhd1Uq1Zt8uTJqqsAgo5bhLC/Z5555rXXXjN4prVr187MzOzcubO/XywpKenRo8fatWuDUJQcDRo02L59e+PGjVUXYoTc3NwrrrjizJkzqguxj6effvrVV19VXQUQdLRgwf6ee+65Jk2aGDzTU6dOjRgxQseY4GFhYdOmTQtGSbLccMMNIZKuHA7HZZdddtNNN6muwj6aNGnCOK4IEQQs2F/Dhg2V3JLIzs7Wdy656qqrzDx053333ae6BEMZM2htiJg8eXLDhg1VVwEYgVuECAklJSWxsbG//vqr8bPOyMi4/vrr/f1WYWFhp06d8vLyglFSIC699NItW7bUrFlTdSHGKSkp6d69+7p161QXYnlXXHHFxo0bw8LCVBcCGIEWLISEsLAwVaNM3X///ceOHfP3W5GRkXPmzAkPDw9CRQG5++67QypdORyOsLCwO+64Q3UVdpCSkkK6QuggYCFU3HTTTUreMff777/rG320Z8+es2bNkl5PIKpUqXLXXXeprkKBPn36qC7B8pKSkujNhpDCLUKEkMLCwssvv/yPP/4wftYLFizQ1wqSmJj4zjvvSK9Hn549e/7888+qq1DgzJkzsbGxVnxZpEm0bNly8+bNkZGRqgsBjEMLFkJIZGTkhx9+qGTWY8eOPXfunI4vTps27fbbb5ddjk6hMPaVRzVr1rzmmmtUV2FhH374IekKoYaAhdASHx+v5KGwHTt26LvfFxYWNmfOHONf+ONRx44dVZegzJVXXqm6BKsaPXp0fHy86ioAo3GLECHn/PnznTp12rJli8Hzbd68+ebNm/W9HfncuXODBg366quvpFfll59//rlnz55qa1BlzZo1IbvsgejQoUN2drbxb1MAlKMFCyGnWrVqSjqP792797333tP33erVq7tcLrX3Chs1atS+fXuFBajVvn370BleVaJZs2aRrhCaCFgIRXFxcePHjzd+vv/+97/379+v77vh4eFffPGFwlGwO3fuXKdOHVVzVy4yMjJku6DpNn78+Li4ONVVAGoQsBCikpOTY2NjDZ7pkSNHpk+fHsgUJk+e7Ha7lYyFfcUVVxg/U1NhDfglNjY2OTlZdRWAMgQshKjw8PCPP/7Y+JsXH3zwwcmTJwOZwqBBg9asWWP8eFQ33nijwXM0mxYtWqguwTKqVav28ccfm3CkXMAwBCyErs6dO48bN87gme7fv3/hwoUBTiQmJmb+/Pnz5s0zoE2lXbt2zzzzzK+//jpgwIBgz8vkmjZtqroEyxg3blznzp1VVwGoxFOECGnFxcVxcXEGD57ZrVu3X375RcqkiouL33jjjdTU1K1bt0qZYJnIyMgBAwbcdtttd911V40aNeRO3KIyMjL69u2rugoLuPLKK7OysqpU4QIeIY2AhVC3ffv2bt26FRUVGTnT77//XuIdt+PHj//www+zZs3KysoK5P5jvXr12rRpc/XVVw8YMKB9+/YtW7aUVaE9ZGdnd+vW7cKFC6oLMbWIiIi1a9e2bdtWdSGAYgQswDF//vzBgwcbOcfbbrst8BuFlW3atGnp0qWbN2/OysraunWreOz4hg0bXnLJJS1btrz00kubNm3asmXLjh07dujQQXpVtrFr167u3bsfPnxYdSGm5na7Bw0apLoKQD0CFuBwOBz//Oc/X3zxRcNmFx4e/uuvv7Zu3TpI0z9x4sT+/ftPnTp14sSJgoKCc+fORURE1K5du3bt2jVr1qxevXq1atUiIiKioqIiIiKCVIP97Nu3r0ePHvv27VNdiHm9+OKLL7zwguoqAFMgYAH/dfPNN6elpRk2uxdeeMHISIfAHTx4sGfPnrt27VJdiEn179//u+++U10FYBZ0QgT+a/bs2W3atDFsdrNmzTp9+rRhs0PgqlevXr16ddVVmFSbNm1mz56tugrARAhYwH81aNBg7ty5hj0xt2/fPk5I1lKjRg0GdvKoRo0ac+fObdCggepCABMhYAH/07Vr15kzZxo2uxdffPH48eOGzQ4BqlGjBiNWeDRz5kzeIwRUQMAC/mLEiBFJSUnGzGvPnj2TJ082Zl5AkCQlJY0YMUJ1FYDp0Mkd8KBPnz7Lli0zYEZVqlRZvXp1t27dDJgXAnT+/Pkrr7xy3bp1qgsxkWuvvXbp0qWqqwDMiBYswIPZs2cb816U4uLiRx999Pz58wbMC5CradOm9CMEvCFgAR40b9583rx5YWFhBsxrzZo19913nwEzAiQKCwubN29e8+bNVRcCmBQBC/Csd+/eH3zwgTHzmj179qRJk4yZFyDFBx980Lt3b9VVAOZFwAK8GjFixGuvvWbMvCZMmPDhhx8aMy8gQK+99hod2wExAhYgMmbMmOTkZGPm9cADD7z66qvGzAvQLTk5ecyYMaqrAMyOgAX4MHHixJEjRxozr2effXb06NHGzAvQYeTIkRMnTlRdBWABBCzAtxkzZgwfPtyYeb355pv33HNPQUGBMbMDtBs+fPiMGTNUVwFYAwEL0OSjjz7q06ePMfP67LPP4uLi0tPTjZkdoEWfPn0++ugj1VUAlkHAAjSpVq3aokWL4uLijJldbm5u//79R40adeTIEWPmCAjExcUtWrSoWrVqqgsBLIOABWhVu3Ztl8vVsmVLw+Y4c+bMbt26vf7666dPnzZspkAFLVu2dLlctWvXVl0IYCUELMAPzZs3X7p0qZEZa9euXU899VT37t2nTZtGzILxWrZsuXTpUgYUBfzFuwgBv61Zs+a66647deqUwfNt2bLlPffcM2DAAMPuVKK8EHwXYe3atX/66acePXqoLgSwHgIWoMfPP/98xx137N+/X8ncr7/++h49evTu3fuqq66KiooyZqYlJSXGvDvItEItYDVt2nThwoU9e/ZUXQhgSQQsQKdffvnllltuOXjwoMIaoqKi2rdv37Vr18suuywmJiY6OrpJkyaNGzeuVatWgFO+cOHC/v379+7d+8cff2RmZtaqVWvSpEkh3sc5pAJWdHT0okWLunXrproQwKoIWIB+O3fuHDhw4NatW1UX8j+NGzdu0aJFy5YtL7744qioqHr16kVGRtapU6dOnTqRkZF169atU6dO1apVz549e+7cuXPnzp0/f770f48dO7Zv3749e/YcOnQoPz//wIEDv/3224EDB0on26ZNm+3bt9OCFSIBq0OHDl999dVll12muhDAwkL6ehQIUOvWrdPT0wcOHLhhwwbVtfzXwYMHDx48uH79+sofVa9evUaNGuHh4WFhYRcuXCguLi4uLi77j3PnzgkmW69eveLi4qpVqwatcJhF165dFy5cePHFF6suBLA2AhYQkIsvvjg9Pf32229fuXKl6lp8KG2yKioq0vHd4uJiWrtDQVxc3MKFCxs3bqy6EMDyGKYBCFR0dPSPP/44cOBA1YUEUUlJCQHL9u64444ff/yRdAVIQcACJAgPD58/f/7tt9+uuhBApzvvvNPtdteoUUN1IYBNELAAOapXr/7FF1+MGjVKdSFBUdpPS3UVCJbExMTPP/+cPnaARAQsQKZ333338ccfV10F4Icnn3xy2rRpqqsA7IaABUj21ltv/etf/1JdhWS0YNnVlClTpk6dqroKwIYIWIB8//jHP+bOnVu/fn3VhUhDJ3f7adiwodvtfvbZZ1UXAtgTAQsIiqFDh65Zs+bKK69UXYgcBCybufrqq3/55ZdBgwapLgSwLQIWECytW7devHjx3XffrboQCQhYdnLvvfcuXrz40ksvVV0IYGcELCCI6tSp89lnn7388suqCwkUA43axiuvvPLxxx9HRESoLgSwOQIWEHTjxo2bP39+gwYNVBeiHy1YNtCwYcPPP//8mWeeUV0IEBIIWIAR7rrrrlWrVlm6SxZPEVraVVddtWrVqjvvvFN1IUCoIGABBnE6nT/++OPDDz+suhA9SFeW9sgjj/z4449t2rRRXQgQQghYgHFq1ar13nvvvfrqq9WrV1ddi3/og2VR1atXf/XVV2fOnFmzZk3VtQChhYAFGO3pp5/Oysq66qqrVBfiHwKW5Vx11VUrV658+umnVRcChCICFqBA9+7df/rppxdeeEF1IVrRyd1yXnzxxaVLl3br1k11IUCIImABaoSHh7/44ovLli27+uqrVdfiG7cILSQuLm7FihUvvPBCjRo1VNcChC4CFqBS7969ly5dav4n52nBsornnntu6dKl11xzjepCgFBHwAIUq169+iuvvJKZmWnmuzm87Nn8evbsuXLlysmTJ1erVk11LQAIWIA5xMXFLV++3LT9kWnBMrlx48YtW7bMck9OADZGwALMolatWq+++urSpUs7deqkupaKaMEyra5du2ZlZb388svh4eGqawHwPwQswFyuvfbarKys8ePH16tXT3Ut/0MLlgk1bNjwhRdeyMzMtMRzEkCoIWABplO7du2XXnpp1apVDzzwgOpa/osWLLN55JFHVq1a9eKLLzKCKGBOBCzApNq1a/f+++8vXrz4xhtvVF0LwzSYSP/+/X/88ceZM2fy6hvAzAhYgKndcMMN33///WeffRYbG6uwDFqwzKBz585z5sz57rvvrrvuOtW1APCBgAVYwN13371ixYrXXnstOjpaSQH0wVIrOjo6JSVl+fLlCQkJqmsBoAkBC7CGOnXqjBkzZs2aNUlJScbPnYCl0OOPP/7LL7889dRTkZGRqmsBoBUBC7CSli1bvv322+vXrx88eLCR40lyi9B41apVGzJkyIYNG956662LL75YdTkA/EPAAqync+fOLpcrIyNj+PDhxsyRgGWksLCw4cOHZ2RkzJs3z4SDogHQgoAFWFXv3r0//fTT9evXP/XUU3Xq1AnqvAhYDocjLCws2LOoW7fumDFj1q9f/+mnn/bu3TvYswMQPLyyCrC2zp07d+7c+YknnpgxY8acOXN+//33YMylZs2ajLdUtWrVWrVqBWnil1xyyd133z1y5MiWLVsGaRYAjBRGx1XANg4dOjRnzpx33nln27Ztcqfcpk2bdevW0cn61ltv/eabb+ROs3379o899tiwYcMaNWokd8oAFOIWIWAfUVFRjz/++Nq1a1NTU6+88kqJU27Xrh3pyuFwdOzYUeLUrrrqqg8++GDt2rVJSUmkK8BmaMECbGvhwoVz5879/PPPz58/H+CkPvjgg/vvv19KVZa2du3a7t27BziR6tWrDxo0aOjQobfddpuUqgCYEAELsLnc3Fy32z1//vy1a9fqm0L79u03bNhQo0YNuYVZ1O233/7ll1/q+263bt0GDx48ePDgmJgYuVUBMBsCFhAqlixZ8t13382bN2/Pnj3av1W1atWlS5dec801wSvMWnbv3t21a9dDhw5p/8rFF188dOjQm2++OT4+PniFATAVAhYQWvLz85cvX/7RRx+tWrXq8OHD4j+uUaPGjBkzuDlYQVpa2uDBgwsLC8V/FhUVdeWVV95///29evVq0qSJMbUBMAkCFhCicnNzP//882+//XbZsmUe/+C6667717/+FRcXZ3BhlrBhw4axY8d+//33Hj+99tprBwwYMGjQIG4FAiGLgAWEtOLi4szMzOzs7D/++GPv3r0lJSV16tS57LLLevXqdfXVVxswtKal/fzzz8uWLcvNzT1x4kRYWFjz5s1btmzZqVOna665pkoV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CFgAAACSEbAAAAAkI2ABAABIRsACAACQjIAFAAAgGQELAABAMgIWAACAZAQsAAAAyQhYAAAAkhGwAAAAJCNgAQAASEbAAgAAkIyABQAAIBkBCwAAQDICFgAAgGQELAAAAMkIWAAAAJIRsAAAACQjYAEAAEhGwAIAAJCMgAUAACAZAQsAAEAyAhYAAIBkBCwAAADJCFgAAACSEbAAAAAkI2ABAABIRsACAACQjIAFAAAgGQELAABAMgIWAACAZAQsAAAAyQhYAAAAkhGwAAAAJCNgAQAASEbAAgAAkIyABQAAIBkBCwAAQDICFgAAgGQELAAAAMkIWAAAAJIRsAAAACQjYAEAAEhGwAIAAJCMgAUAACAZAQsAAEAyAhYAAIBkBCwAAADJCFgAAACSEbAAAAAkI2ABAABIRsACAACQjIAFAAAgGQELAABAMgIWAACAZAQsAAAAyQhYAAAAkhGwAAAAJCNgAQAASEbAAgAAkIyABQAAIBkBCwAAQDICFgAAgGQELAAAAMkIWAAAAJIRsAAAACQjYAEAAEhGwAIAAJCMgAUAACAZAQsAAEAyAhYAAIBkBCwAAADJCFgAAACSEbAAAAAkI2ABAABIRsACAACQjIAFAAAgGQELAABAsv8P7yzJGhCN2CIAAAAASUVORK5CYII=";
document.querySelector("#upload").addEventListener("click", function () {
  imageUrl = prompt("Please upload the image to the Discord platform and paste the image URL here.");
  params = new URLSearchParams(window.location.search);
  params.set('image-url', imageUrl);
  const newUrl = `${window.location.pathname}?${params.toString()}`;
  window.history.pushState({}, '', newUrl);
  iziToast.success({
    position: 'topRight',
    //theme: 'dark',	
    title: 'Successful',
    message: 'The İmage Has Been Uploaded.',
  });
});

function drawImageBot(imageSrc, newWs, playerServerId) {
  var image = new Image();
  image.crossOrigin = "Anonymous";
  image.src = imageSrc;
  image.onload = function () {
    var canvas = document.createElement('canvas');
    canvas.width = 767;
    canvas.height = 448;
    var ctx = canvas.getContext('2d');
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    var scaleToFit = Math.min(canvas.width / image.width, canvas.height / image.height);
    var w = image.width * scaleToFit;
    var h = image.height * scaleToFit;
    var x = (canvas.width - w) / 2;
    var y = (canvas.height - h) / 2;
    ctx.drawImage(image, x, y, w, h);
    var imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    var data = imageData.data;
    for (var y = 0; y < canvas.height; y++) {
      var start_x = null;
      var start_y = null;
      var current_color = null;
      for (var x = 0; x < canvas.width; x++) {
        var index = (y * canvas.width + x) * 4;
        var r = data[index];
        var g = data[index + 1];
        var b = data[index + 2];
        var color = rgbToHex(r, g, b);
        if (color !== current_color) {
          if (start_x !== null && start_y !== null && current_color !== "xFFFFFF") {
            newWs.send(`42[10,${playerServerId},[5,"${current_color}"]]`);
            newWs.send(`42[10,${playerServerId},[2,${start_x},${start_y},${x},${y}]]`);
          }
          start_x = x;
          start_y = y;
          current_color = color;
        }
      }
      if (start_x !== null && start_y !== null && current_color !== "xFFFFFF") {
        newWs.send(`42[10,${playerServerId},[5,"${current_color}"]]`);
        newWs.send(`42[10,${playerServerId},[2,${start_x},${start_y},${canvas.width},${y}]]`);
      }
    }
  };
}

function rgbToHex(r, g, b) {
  if (r === 255 && g === 255 && b === 255) {
    return "xFFFFFF";
  }
  const step = 50;
  const hexR = Math.round(r / step) * step;
  const hexG = Math.round(g / step) * step;
  const hexB = Math.round(b / step) * step;
  return `x${hexR.toString(16).padStart(2, '0').toUpperCase()}${hexG.toString(16).padStart(2, '0').toUpperCase()}${hexB.toString(16).padStart(2, '0').toUpperCase()}`;
}




btn.addEventListener("click", function () {
  params = new URLSearchParams(window.location.search);
  params.set('name', document.querySelector('#botname div input').value);
  params.set('code', url.value);
  params.set('amount', amount.value);
  params.set('image', profilepicture);
  params.set('lang', serverlang);
  params.set('proxy', document.querySelector('.proxy.checkbox input').checked);
  const newUrl = `${window.location.pathname}?${params.toString()}`;
  window.history.pushState({}, '', newUrl);
  btn.setAttribute("class", "ui primary disabled loading button");

  let proxylist = JSON.parse(localStorage.getItem("proxies"));

  fetch(url.value ? `https://gartic.io/server?check=1&room=${params.get('code')}` : `https://gartic.io/server?check=1&lang=${params.get('lang')}`)
    .then(x => x.text())
    .then(data => {

      for (let i = 0; i < params.get('amount'); i++) {

        let name = params.get('name');

        const regex = /\b[aA]\.?([lLℓᎥiI]\.?){2}[hH𝔥ʜ]*[\W_]*[aA]\.?([lLℓᏂhH𝔥ʜ]*[\W_]*){1,2}\b|\b(?:[^\w\s]*[aA][^\w\s]*){2,}|\b[ᴬaA][ˡlL1Ii][ᴸlL1Ii]?[ᴬaA][ℍhH](?:\W*[\/*\-+.,:;]\W*)*[^\W_]*|\b[hH][ℑℎhHℏ𝕙𝖍𝗁][𝖺aA𝗮𝘢ⓗ𝐡][𝛂𝛼aA𝒶𝓪𝔞𝕒]+(?:\W*[\/*\-+.,:;]\W*)*[^\W_]*[lLℓIi][^w\s]*[lLℓIi](?:\W*[\/*\-+.,:;]\W*)*[^\W_]*[aA][^\w\s]*[hH][ℑℎhHℏ𝕙𝖍𝗁][𝖺aA𝗮𝘢ⓗ𝐡][𝛂𝛼aA𝒶𝓪𝔞𝕒]+(?:\W*[\/*\-+.,:;]\W*)*[^\W_]*\b/gi;

        if (regex.test(name)) {
          document.querySelector('#botname div input').value = "anonimbiri";
          name = "anonimbiri";
        }

        // Rastgele bir pozisyon seçerek '.' karakteri ekleyelim
        const randomIndex = Math.floor(Math.random() * (name.length + 1));
        const modifiedName = name.slice(0, randomIndex) + '឵' + name.slice(randomIndex);

        let socket = null;
        if (params.get('proxy') === "true") {
          if (proxylist) {
            const encodedUrl = btoa(`wss:${data.split(":")[1]}/socket.io/?EIO=3&transport=websocket`);
            socket = new WebSocket(`wss://${proxylist[i]}/__cpw.php?u=${encodedUrl}&o=aHR0cHM6Ly9nYXJ0aWMuaW8=`, null);
            console.log(`wss://${proxylist[i]}/__cpw.php?u=${encodedUrl}&o=aHR0cHM6Ly9nYXJ0aWMuaW8=`);
          } else {
            iziToast.error({
              position: 'topRight',
              //theme: 'dark',	
              title: 'Error',
              message: 'You Need to Add a Proxy First.',
            });
          }
        } else {
          socket = new WebSocket(`wss:${data.split(":")[1]}/socket.io/?EIO=3&transport=websocket`, null);
        }

        socketList.push(socket);

        socket.playerName = modifiedName;
        socket.vote = 0;

        socket.addEventListener('open', (event) => {
          document.cookie.split(";").forEach(function (c) {
            document.cookie = c.replace(/^ +/, "").replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/");
          });
        });

        socket.addEventListener('message', (event) => {

          if (event.data === '40') {
            if (url.value == "") {
              socket.send(`42[1,{"v":20000,"nick":"${modifiedName}","avatar":${params.get('image')},"idioma":${params.get('lang')}}]`);
            } else {
              socket.send(`42[3,{"v":20000,"nick":"${modifiedName}","avatar":${params.get('image')},"sala":"${params.get('code').slice(-4)}"}]`);
            }
          } else if (event.data === '42[6,4]') {
            $('.tiny.modal')
              .modal({
                closable: false,
                blurring: true,
                onApprove: function () {
                  window.open(scripturl).close();
                }
              })
              .modal('show');
          } else if (event.data === '41') {
            socket.close();
          }
          if (!event.data.includes('[')) return;
          const data = JSON.parse(event.data.replace(/^\d+/g, ''));
          switch (data[0]) {
            case 5: {
              const playerId = data[2];
              const playerCode = data[1];
              socket.playerId = playerId; // playerId'yi soket nesnesine kaydet
              socket.playerCode = playerCode; // playerCode'yi soket nesnesine kaydet
              socket.players = data[5]; // players'i soket nesnesine kaydet
              socket.send(`42[46,${playerId}]`);
              socket.send(`42[11,"${playerId}","Bot developer: github.com/anonimbiri"]`);
              updateUserList(data[5]);
              iziToast.info({
                position: 'topRight',
                //theme: 'dark',
                title: 'Joined',
                message: `WebSocket ${i} Joined the Server.`
              });
              break;
            }
            case 23: {
              const existingItem = playerList.querySelector(`.item[data-player-id="${data[1].id}"]`);

              if (!existingItem) {
                socket.players.push(data[1]);
                const itemDiv = document.createElement('div');
                itemDiv.classList.add('item');
                itemDiv.setAttribute('data-player-id', data[1].id);
                console.log(data[1]);

                const rightContentDiv = document.createElement('div');
                rightContentDiv.classList.add('right', 'floated', 'content');

                const kickButton = document.createElement('div');
                kickButton.classList.add('ui', 'red', 'button');
                kickButton.textContent = 'Kick Player';

                rightContentDiv.appendChild(kickButton);

                const avatarImg = document.createElement('img');
                avatarImg.classList.add('ui', 'avatar', 'image');
                if (data[1].foto) {
                  avatarImg.src = data[1].foto;
                } else {
                  avatarImg.src = `https://gartic.io/static/images/avatar/svg/${data[1].avatar}.svg`;
                }
                const contentDiv = document.createElement('div');
                contentDiv.classList.add('content');
                contentDiv.textContent = data[1].nick;

                itemDiv.appendChild(rightContentDiv);
                itemDiv.appendChild(avatarImg);
                itemDiv.appendChild(contentDiv);

                playerList.appendChild(itemDiv);

                kickButton.addEventListener('click', function (event) {
                  socketList.forEach((socket) => {
                    if (socket.readyState === WebSocket.OPEN) {
                      socket.send(`42[45,${socket.playerId},["${data[1].id}",true]]`);
                    }
                  });

                  iziToast.success({
                    position: 'topRight',
                    //theme: 'dark',	
                    title: 'Successful',
                    message: 'the ' + data[1].nick + ' player was kicked',
                  });
                });

                if (data[1].nick.startsWith("REDbot") && data[1].avatar === 1) {
                  for (const s of socketList) {
                    s.send(`42[11,"${s.playerId}","🤖 I respect this bot and cannot work against it. Goodbye! 👋 Bot developer: github.com/anonimbiri."]`);
                    s.send(`42[24,${s.playerId}]`);
                  }
                } else {
                  var kickTheJoiner = params.get('kick-the-joiner') || false;
                  if (kickTheJoiner) {
                    let found = socketList.some((s) => {
                      if (s.playerCode === data[1].id) return true;
                    });

                    if (!found) {
                      for (const s of socketList) {
                        console.log(data);
                        if (s.playerCode !== data[1].id) {
                          s.send(`42[45,${s.playerId},["${data[1].id}",true]]`);
                        }
                      }
                    }
                  }
                }

              }
              break;
            }
            case 24: {
              const existingItem = playerList.querySelector(`.item[data-player-id="${data[1]}"]`);

              if (existingItem) {
                existingItem.remove();
                let index = socket.players.findIndex(player => player.id === data[1]);
                if (index !== -1) {
                  socket.players.splice(index, 1);
                }
              }
              break;
            }
            case 16: {
              const playerId = socket.playerId;
              var drawingBot = params.get('drawing-bot') || false;
              var image_url = params.get('image-url') || imageUrl;
              if (drawingBot === "true") {
                if (!image_url) return socket.send(`42[25,${playerId}]`);
                socket.send(`42[34,${playerId},${Math.round(Math.random())}]`);
                drawImageBot(image_url, socket, playerId);
              } else {
                socket.send(`42[25,${playerId}]`);
              }
              break;
            }
            case 11: {
              if (data[2] === "‫!lave‫") {
                const playerId = socket.playerId;
                socket.send(`42[11,"${playerId}","The order has been given for the bots to be released. Bot developer: github.com/anonimbiri."]`);
                socket.send(`42[24,${playerId}]`);
              }
              break;
            }
            case 45: {
              const playerId = socket.playerId;
              const playerCode = socket.playerCode;
              if (data[2] == playerCode) {
                socket.vote++;
                if (socket.vote >= 3) {
                  socket.send(`42[24,${playerId}]`);
                }
                iziToast.warning({
                  position: 'topRight',
                  //theme: 'dark',
                  title: 'Warning',
                  message: `A Bot Voted for Throwing a WebSocket ${i}: ${socket.vote}/3`
                });
              }
              break;
            }
          }
        });

        socket.onerror = function (error) {
          console.error(`WebSocket ${i} Connection has Been Closed due to an issue.`);
          /*iziToast.error({
            position: 'topRight',
            //theme: 'dark',	
            title: 'Error',
            message: `WebSocket ${i} Connection has Been Closed due to an issue.`,
          });*/
        };

        socket.onclose = function (event) {
          console.error(`Connection to Server WebSocket ${i} has Been Lost.`);
          /*iziToast.error({
            position: 'topRight',
            //theme: 'dark',	
            title: 'Error',
            message: `Connection to Server WebSocket ${i} has Been Lost.`,
          });*/
        };

      }
    })

  loaded();

  iziToast.success({
    position: 'topRight',
    //theme: 'dark',
    title: 'Successful',
    message: 'Creating Bots'
  });

});
btn2.addEventListener("click", function () {
  if (socketList) {
    socketList.forEach(function (socket) {
      if (socket.readyState === WebSocket.OPEN) {
        socket.close();
        socket.onerror = null;
        socket.onclose = null;
      }
    });

    document.querySelector("#tool").style.display = 'none';
    socketList = [];
    playerList.innerHTML = "";

    iziToast.success({
      position: 'topRight',
      //theme: 'dark',	
      title: 'Successful',
      message: 'All Bots Destroyed',
    });
  } else {
    iziToast.error({
      position: 'topRight',
      //theme: 'dark',	
      title: 'Error',
      message: 'Guess No Bots',
    });
  }

});
watchtheroom.addEventListener("click", function () {
  if (url.value != "") {
    window.open("https://gartic.io/" + url.value + "/viewer");
  } else {
    iziToast.error({
      position: 'topRight',
      //theme: 'dark',	
      title: 'Error',
      message: "You didn't give me a code to monitor the room",
    });
  }
});

url.onchange = function () { url.value = url.value.replace("https://gartic.io/", "").replace("/viewer", ""); if (url.value) { $('.ui.search.dropdown').addClass('disabled'); } else { $('.ui.search.dropdown').removeClass('disabled'); } };

var profilepicture = params.get('image') || 0;
var serverlang = params.get('lang') || 2;

function loaded() {
  document.querySelector("#tool").style.display = 'block';
  btn.setAttribute("class", "ui primary button");
}

function updateUserList(players) {

  const container = document.getElementById('playerlist');

  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }

  players.forEach(player => {

    const itemDiv = document.createElement('div');
    itemDiv.classList.add('item');
    itemDiv.setAttribute('data-player-id', player.id);

    const rightContentDiv = document.createElement('div');
    rightContentDiv.classList.add('right', 'floated', 'content');

    const kickButton = document.createElement('div');
    kickButton.classList.add('ui', 'red', 'button');
    kickButton.textContent = 'Kick Player';

    rightContentDiv.appendChild(kickButton);

    const avatarImg = document.createElement('img');
    avatarImg.classList.add('ui', 'avatar', 'image');
    if (player.foto) {
      avatarImg.src = player.foto;
    } else {
      avatarImg.src = `https://gartic.io/static/images/avatar/svg/${player.avatar}.svg`;
    }
    const contentDiv = document.createElement('div');
    contentDiv.classList.add('content');
    contentDiv.textContent = player.nick;

    itemDiv.appendChild(rightContentDiv);
    itemDiv.appendChild(avatarImg);
    itemDiv.appendChild(contentDiv);

    container.appendChild(itemDiv);

    kickButton.addEventListener('click', function (event) {

      socketList.forEach((socket) => {
        if (socket.readyState === WebSocket.OPEN) {
          socket.send(`42[45,${socket.playerId},["${player.id}",true]]`);
        }
      });

      iziToast.success({
        position: 'topRight',
        //theme: 'dark',	
        title: 'Successful',
        message: 'the ' + player.nick + ' player was kicked',
      });
    });

  });

}

reportdraw.addEventListener("click", function () {
  socketList.forEach((socket) => {
    if (socket.readyState === WebSocket.OPEN) {
      socket.send(`42[35,${socket.playerId}]`);
      //console.log(`WebSocket ${socket.playerId} playerId ile resim rapor edildi`);
    }
  }, () => {
    iziToast.success({
      position: 'topRight',
      //theme: 'dark',	
      title: 'Successful',
      message: 'Drawing Reported',
    });
  });
});

kickall.addEventListener("click", function () {
  if (socketList && socketList.length) {
    for (let i = 0; i < socketList.length; i++) {
      const socket = socketList[i];
      const players = socket.players;
      if (players && players.length) {
        for (let j = 0; j < players.length; j++) {
          const player = players[j];
          let found = socketList.some((s) => {
            if (socket.playerCode === player.id) return true;
          });
          if (socket.readyState === WebSocket.OPEN && !found) {
            socket.send(`42[45,${socket.playerId},["${player.id}",true]]`);
          }
        }
      }
    }
  }
  iziToast.success({
    position: 'topRight',
    //theme: 'dark',	
    title: 'Successful',
    message: 'All Players Reported',
  });
});

//basic modal

let spam = false;
var spamType = 11;
spambutton.addEventListener("click", function () {
  if (spam == false) {
    startSpamIntervalId()
    spam = true;
    spambutton.innerHTML = '<i class="stop icon"></i> Stop Spam'
    params = new URLSearchParams(window.location.search);
    params.set('spam-text', document.querySelector('#spamtext input').value);
    params.set('spam-ms', document.querySelector('#spamms').value);
    const newUrl = `${window.location.pathname}?${params.toString()}`;
    window.history.pushState({}, '', newUrl);
    iziToast.success({
      position: 'topRight',
      //theme: 'dark',	
      title: 'Successful',
      message: 'Spam Started',
    });
  } else {
    clearInterval(spamIntervalId);
    spam = false;
    spambutton.innerHTML = '<i class="play icon"></i> Start Spam'
    iziToast.success({
      position: 'topRight',
      //theme: 'dark',	
      title: 'Successful',
      message: 'Spam Stopped',
    });
  }
});
document.querySelector("#addproxy").addEventListener("click", function () {
  alert("Go to https://gartic.io/ from the opened website and copy the page link. Then come back here and paste it.");
  window.open("https://www.croxyproxy.com/");
  setTimeout(function () {
    window.addEventListener("focus", getProxy);
  }, 500);
});
document.querySelector("#clearallproxy").addEventListener("click", function () {
  localStorage.removeItem('proxies');
  iziToast.success({
    position: 'topRight',
    //theme: 'dark',	
    title: 'Successful',
    message: 'The Proxys Were All Deleted.',
  });
});
$('.proxy.checkbox')
  .checkbox({
    // check all children
    onChecked: function () {
      document.querySelector("#addproxy").style.display = "block";
      document.querySelector("#clearallproxy").style.display = "block";
      $('#botamount .labeled.input').addClass('disabled');
      if (JSON.parse(localStorage.getItem("proxies"))) { $('#botamount .labeled.input input').val(JSON.parse(localStorage.getItem("proxies")).length); }
    },
    onUnchecked: function () {
      document.querySelector("#addproxy").style.display = "none";
      document.querySelector("#clearallproxy").style.display = "none";
      $('#botamount .labeled.input').removeClass('disabled');
    }
  })
  ;
$('.kick-the-joiner.checkbox')
  .checkbox({
    // check all children
    onChecked: function () {
      params = new URLSearchParams(window.location.search);
      params.set('kick-the-joiner', true);
      const newUrl = `${window.location.pathname}?${params.toString()}`;
      window.history.pushState({}, '', newUrl);
    },
    onUnchecked: function () {
      params = new URLSearchParams(window.location.search);
      params.delete('kick-the-joiner');
      const newUrl = `${window.location.pathname}?${params.toString()}`;
      window.history.pushState({}, '', newUrl);
    }
  })
  ;

$('.drawing-bot.checkbox')
  .checkbox({
    // check all children
    onChecked: function () {
      params = new URLSearchParams(window.location.search);
      params.set('drawing-bot', true);
      const newUrl = `${window.location.pathname}?${params.toString()}`;
      window.history.pushState({}, '', newUrl);
    },
    onUnchecked: function () {
      params = new URLSearchParams(window.location.search);
      params.delete('drawing-bot');
      const newUrl = `${window.location.pathname}?${params.toString()}`;
      window.history.pushState({}, '', newUrl);
    }
  })
  ;

$('.profil.dropdown')
  .dropdown({
    clearable: false,
    defaultValue: '5',
    onChange: function (value, text, $selectedItem) {
      profilepicture = value;
    }
  })
  ;
$('.search.dropdown')
  .dropdown({
    clearable: false,
    onChange: function (value, text, $selectedItem) {
      serverlang = value;
    }
  })
  ;
$('.spam.dropdown')
  .dropdown({
    clearable: false,
    onChange: function (value, text, $selectedItem) {
      spamType = value;
    }
  })
  ;

setInterval(function () {
  socketList.forEach((socket) => {
    if (socket.readyState === WebSocket.OPEN) {
      socket.send(`42[42, ${socket.playerId}]`);
      //console.log(`WebSocket ${socket.playerId} playerId'li kulanıcı için anti afk gönderildi`);
    }
  });
}, 5000);

let spamIntervalId;

function startSpamIntervalId() {
  spamIntervalId = setInterval(function () {

    socketList.forEach((socket) => {
      if (socket.readyState === WebSocket.OPEN) {
        let spamtext = params.get('spam-text');
        const regex = /\b[aA]\.?([lLℓᎥiI]\.?){2}[hH𝔥ʜ]*[\W_]*[aA]\.?([lLℓᏂhH𝔥ʜ]*[\W_]*){1,2}\b|\b(?:[^\w\s]*[aA][^\w\s]*){2,}|\b[ᴬaA][ˡlL1Ii][ᴸlL1Ii]?[ᴬaA][ℍhH](?:\W*[\/*\-+.,:;]\W*)*[^\W_]*|\b[hH][ℑℎhHℏ𝕙𝖍𝗁][𝖺aA𝗮𝘢ⓗ𝐡][𝛂𝛼aA𝒶𝓪𝔞𝕒]+(?:\W*[\/*\-+.,:;]\W*)*[^\W_]*[lLℓIi][^w\s]*[lLℓIi](?:\W*[\/*\-+.,:;]\W*)*[^\W_]*[aA][^\w\s]*[hH][ℑℎhHℏ𝕙𝖍𝗁][𝖺aA𝗮𝘢ⓗ𝐡][𝛂𝛼aA𝒶𝓪𝔞𝕒]+(?:\W*[\/*\-+.,:;]\W*)*[^\W_]*\b/gi;

        if (regex.test(spamtext)) {
          document.querySelector('#spamtext input').value = "anonimbiri";
          spamtext = "anonimbiri";
        }
        const randomIndex = Math.floor(Math.random() * (spamtext.length + 1));
        let modifiedMessage;

        if (Math.random() < 0.1) {
          modifiedMessage = "Bot developer: github.com/anonimbiri";
        } else {
          modifiedMessage = spamtext.slice(0, randomIndex) + '឵' + spamtext.slice(randomIndex);
        }
        socket.send(`42[${spamType},"${socket.playerId}","${modifiedMessage}"]`);
        //console.log(`WebSocket ${socket.playerId} playerId'li kulanıcı için ${modifiedMessage} mesajı atıldı`);
      }
    });

  }, params.get('spam-ms'));
}
function getProxy() {
  var proxy = prompt("Copy and paste the page link here and add 1 proxy.");
  const pattern = /\/\/([^/]+\.[^/.]+(\.[^/.]+)*)/;
  const match = pattern.exec(proxy);
  var storageKey = "proxies";
  var storedData = localStorage.getItem(storageKey);
  var dataObject = [];
  var isDuplicate = false;
  if (storedData != null) {
    dataObject = JSON.parse(storedData);
  }
  for (var i = 0; i < dataObject.length; i++) {
    if (dataObject[i] === match[1]) {
      isDuplicate = true;
      break;
    }
  }
  if (!isDuplicate) {
    dataObject.push(match[1]);
    localStorage.setItem(storageKey, JSON.stringify(dataObject));
    $('#botamount .labeled.input input').val(dataObject.length);
    iziToast.success({
      position: 'topRight',
      //theme: 'dark',
      title: 'Successful',
      message: `${match[1]} Proxies Have Been Added, Total: ${dataObject.length} Now it Has Proxies`
    });
  } else {
    iziToast.info({
      position: 'topRight',
      //theme: 'dark',
      title: 'Not Added',
      message: `The Proxy was not Added Because it is Already on The List. Total Proxies: ${dataObject.length}`
    });
  }
  window.removeEventListener("focus", getProxy);
}


const isDevToolsOpened = () => {
  const widthThreshold = window.outerWidth - window.innerWidth > 160
  const heightThreshold = window.outerHeight - window.innerHeight > 160
  return widthThreshold || heightThreshold
}

setInterval(() => {
  if (isDevToolsOpened()) {
    location.reload()
  }
}, 1000)


function ctrlShiftKey(e, keyCode) {
  return e.ctrlKey && e.shiftKey && e.keyCode === keyCode.charCodeAt(0);
}
document.onkeydown = (e) => {
  if (
    event.keyCode === 123 ||
    ctrlShiftKey(e, 'I') ||
    ctrlShiftKey(e, 'J') ||
    ctrlShiftKey(e, 'C') ||
    (e.ctrlKey && e.keyCode === 'U'.charCodeAt(0))
  )
    return false;
};

// Contextmenu açma kodu
document.addEventListener("contextmenu", function (e) {
  e.preventDefault(); // Varsayılan sağ tıklama menüsünü iptal et

  var contextmenu = document.getElementById("contextmenu"); // Contextmenu öğesini seç
  contextmenu.style.left = e.clientX + "px"; // Menünün x koordinatını ayarla
  contextmenu.style.top = e.clientY + "px"; // Menünün y koordinatını ayarla
  contextmenu.style.display = "block"; // Menüyü görünür yap
});

// Sayfada herhangi bir yere tıklandığında menüyü gizle
document.addEventListener("click", function (e) {
  var contextmenu = document.getElementById("contextmenu");
  contextmenu.style.display = "none";
});

document.addEventListener("DOMContentLoaded", function () {
  // Edit butonu
  document.getElementById("editButton").addEventListener("click", function () {
    document.execCommand("selectAll");
  });

  // Copy butonu
  document.getElementById("copyButton").addEventListener("click", function () {
    document.execCommand("copy");
  });

  // Cut butonu
  document.getElementById("cutButton").addEventListener("click", function () {
    document.execCommand("cut");
  });

  // Paste butonu
  document.getElementById("pasteButton").addEventListener("click", function () {
    document.execCommand("paste");
  });
});


