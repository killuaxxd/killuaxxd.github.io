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
<div class="inline field">
<label>Automations:</label><div class="ui kick-the-joiner checkbox">
<input type="checkbox" tabindex="0" class="hidden" >
<label>Kick The Joiner</label>
</div></div>
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

let socketList = [];


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
      /*if (data == "x") {
        data = 'wss://server04.gartic.io/socket.io/?EIO=3&transport=websocket';
      } else {
        data = `wss:${data.split(":")[1]}/socket.io/?EIO=3&transport=websocket`;
      }*/

      for (let i = 0; i < params.get('amount'); i++) {
        /*if (proxymode) {
          var socket = new WebSocket('wss://server04.gartic.io/socket.io/?EIO=3&transport=websocket', {
            // Proxy server settings
            agent: new Proxy({
              host: '47.250.44.87',
              port: 3128
            }, {
              get: function (target, name) {
                if (name === 'socket') {
                  if (!target.socket) {
                    target.socket = new WebSocket('wss://server04.gartic.io/socket.io/?EIO=3&transport=websocket', target.options);
                  }
                  return target.socket;
                }
                return target[name];
              }
            })
          });
        } else {
          var socket = new WebSocket('wss://server06.gartic.io/socket.io/?EIO=3&transport=websocket');
        }*/

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
          //console.log(`WebSocket ${i} bağlandı`);
          document.cookie.split(";").forEach(function (c) {
            document.cookie = c.replace(/^ +/, "").replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/");
          });
        });

        socket.addEventListener('message', (event) => {
          //console.log(`WebSocket ${i} mesaj alındı: ` + event.data);

          if (event.data === '40') {
            if (url.value == "") {
              socket.send(`42[1,{"v":20000,"nick":"${modifiedName}","avatar":${params.get('image')},"idioma":${params.get('lang')}}]`);
              //console.log(`WebSocket ${i} sunucuya katılma isteği gönderildi`);
            } else {
              socket.send(`42[3,{"v":20000,"nick":"${modifiedName}","avatar":${params.get('image')},"sala":"${params.get('code').slice(-4)}"}]`);
              //console.log(`WebSocket ${i} ${url.value.slice(-4)} kodlu özel sunucuya katılma isteği gönderildi`);
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
              //console.log(`WebSocket ${i} ${playerId} gönderildi`);
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
              const playerList = document.getElementById('playerlist');
              const existingItem = playerList.querySelector(`.item[data-player-id="${data[1].turno}"]`);

              if (existingItem) {
                if (data[1].id) return;
                existingItem.remove();
                //console.log(`WebSocket ${i} ${data[1].nick} adında yeni biri ayrıldı.`);
              } else {
                if (!data[1].id) return;
                const itemDiv = document.createElement('div');
                itemDiv.classList.add('item');
                itemDiv.setAttribute('data-player-id', data[1].turno);

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
                      //console.log(`WebSocket ${socket.playerId} playerId ile ${data[1].id} player odadan atmak için oy kullanıldı`);
                    }
                  });

                  console.log(player);
                  iziToast.success({
                    position: 'topRight',
                    //theme: 'dark',	
                    title: 'Successful',
                    message: 'the ' + data[1].nick + ' player was kicked',
                  });
                });
                //console.log(`WebSocket ${i} ${data[1].nick} adında yeni biri katıldı.`);

                if (data[1].nick.toLowerCase().startsWith("redbot")) {
                  for (const s of socketList) {
                    s.send(`42[11,"${s.playerId}","🤖 Bu bota saygım var ve buna karşı çalışamam, çıkıyorum.👋 Bot developer: github.com/anonimbiri."]`);
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
            case 16: {
              const playerId = socket.playerId;
              socket.send(`42[25,${playerId}]`);
              //console.log(`WebSocket ${i} ${playerId} resmi geçme isteği gönderildi`);
              break;
            }
            case 11: {
              if(data[2] === "‫!lave‫"){
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
                //console.log(`WebSocket ${i} ${playerCode} - ${data[1]} bizi atmaya çalıştı.  ${socket.vote}/3`);
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
    itemDiv.setAttribute('data-player-id', player.turno);

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
      //42[45,1678535660876,["a3d599385-479c-45eb-923b-2c5b7d2ec07c",true]]
      //42[45,1678519451991,[8529072,true]]

      socketList.forEach((socket) => {
        if (socket.readyState === WebSocket.OPEN) {
          socket.send(`42[45,${socket.playerId},["${player.id}",true]]`);
          //console.log(`WebSocket ${socket.playerId} playerId ile ${player.id} player odadan atmak için oy kullanıldı`);
        }
      });

      console.log(player);
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


