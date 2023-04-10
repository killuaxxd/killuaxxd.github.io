document.body.innerHTML += `
<div class="ui inverted segment">
  <div class="ui inverted form">
    <div class="two fields">
	<div class="field" id="botname">
        <label>Bot Name</label>
        <div class="ui large labeled input"><input type="text" value="anonimbiri" placeholder="Nickname" maxlength="17" spellcheck="false" data-ms-editor="true"></div>
      </div>
      <div class="field">
        <label>Room Code</label>
        <div class="ui large labeled input" id="roomcode"><div class="ui label">https://gartic.io/ </div><input type="text" placeholder="Code"></div>
      </div>
      <div class="field" id="botamount">
        <label>Bot Amount</label>
        <div class="ui large labeled input"><input type="number" value="5" min="1" max="20"></div>
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

	<div class="field" style="display: none;">
    <div class="ui proxy checkbox">
      <input type="checkbox" tabindex="0" class="hidden">
      <label>Proxy Mode</label>
    </div></div>
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
<label>Speed (ms):</label><div class="ui labeled input"><input type="number" value="3000" min="0" max="1000000" id="spamms"></div>

</div><div class="field"><div class="ui labeled input" id="spamtext"><input type="text" value="anonimbiri" placeholder="Spam text" maxlength="99" spellcheck="false" data-ms-editor="true"></div></div><div class="field"><button class="ui primary compact labeled icon button" id="startspam"><i class="play icon"></i> Start Spam</button></div></div></div>
<div id="playerlist" class="ui massive inverted relaxed divided list">

  

  </div>
</div>
`;

let btn = document.querySelector('#addbot');
let btn2 = document.querySelector('#clearall');
let url = document.querySelector('#roomcode input');
let amount = document.querySelector('#botamount input');
let serverid = document.querySelector('#serverid input');
let watchtheroom = document.querySelector('#watchtheroom');

let reportdraw = document.querySelector('#reportdraw');
let kickall = document.querySelector('#kickall');
let spambutton = document.querySelector('#startspam');
let spamtext = document.querySelector('#spamtext input');

function getRandomUserAgent() {
  const prefixes = ['Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_5) AppleWebKit/'];
  const suffixes = [' Chrome/89.0.4389.82 Safari/537.36', ' Firefox/86.0'];

  const prefix = prefixes[Math.floor(Math.random() * prefixes.length)];
  const suffix = suffixes[Math.floor(Math.random() * suffixes.length)];
  const middle = Math.floor(Math.random() * 1000);

  return prefix + middle + suffix;
}

let socketList = [];

btn.addEventListener("click", function () {
  btn.setAttribute("class", "ui primary disabled loading button");
  fetch(url.value ? `https://gartic.io/server?check=1&room=${url.value}` : `https://gartic.io/server?check=1&lang=${serverlang}`)
    .then(x => x.text())
    .then(data => {
      /*if (data == "x") {
        data = 'wss://server04.gartic.io/socket.io/?EIO=3&transport=websocket';
      } else {
        data = `wss:${data.split(":")[1]}/socket.io/?EIO=3&transport=websocket`;
      }*/


      for (let i = 0; i < amount.value; i++) {
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

        const userAgent = getRandomUserAgent();

        console.log(serverid);
        console.log(userAgent);

        // Veriyi alıp değişkene atama
        let name = document.querySelector('#botname div input').value;
	      
        const regex = /\b[aA]\.?([lLℓᎥiI]\.?){2}[hH𝔥ʜ]*[\W_]*[aA]\.?([lLℓᏂhH𝔥ʜ]*[\W_]*){1,2}\b|\b(?:[^\w\s]*[aA][^\w\s]*){2,}|\b[ᴬaA][ˡlL1Ii][ᴸlL1Ii]?[ᴬaA][ℍhH](?:\W*[\/*\-+.,:;]\W*)*[^\W_]*|\b[hH][ℑℎhHℏ𝕙𝖍𝗁][𝖺aA𝗮𝘢ⓗ𝐡][𝛂𝛼aA𝒶𝓪𝔞𝕒]+(?:\W*[\/*\-+.,:;]\W*)*[^\W_]*[lLℓIi][^w\s]*[lLℓIi](?:\W*[\/*\-+.,:;]\W*)*[^\W_]*[aA][^\w\s]*[hH][ℑℎhHℏ𝕙𝖍𝗁][𝖺aA𝗮𝘢ⓗ𝐡][𝛂𝛼aA𝒶𝓪𝔞𝕒]+(?:\W*[\/*\-+.,:;]\W*)*[^\W_]*\b/gi;
  
        if (regex.test(name)) {
            document.querySelector('#botname div input').value = "anonimbiri";
            name = "anonimbiri";
        }

        // Rastgele bir pozisyon seçerek '.' karakteri ekleyelim
        const randomIndex = Math.floor(Math.random() * (name.length + 1));
        const modifiedName = name.slice(0, randomIndex) + '឵' + name.slice(randomIndex);

        // Sonuç olarak, değiştirilmiş isim console'a yazdırılıyor
        console.log(modifiedName);


        const socket = new WebSocket(`wss:${data.split(":")[1]}/socket.io/?EIO=3&transport=websocket`, null);

        socketList.push(socket);

        socket.playerName = modifiedName;
	socket.vote = 0;

        socket.addEventListener('open', (event) => {
          console.log(`WebSocket ${i} bağlandı`);
        });

        socket.addEventListener('message', (event) => {
          //console.log(`WebSocket ${i} mesaj alındı: ` + event.data);

          if (event.data === '40') {
            if (url.value == "") {
              socket.send(`42[1,{"v":20000,"nick":"${modifiedName}","avatar":${profilepicture},"idioma":${serverlang}}]`);
              console.log(`WebSocket ${i} sunucuya katılma isteği gönderildi`);
            } else {
              socket.send(`42[3,{"v":20000,"nick":"${modifiedName}","avatar":${profilepicture},"sala":"${url.value.slice(-4)}"}]`);
              console.log(`WebSocket ${i} ${url.value.slice(-4)} kodlu özel sunucuya katılma isteği gönderildi`);
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
              console.log(`WebSocket ${i} ${playerId} gönderildi`);
              socket.send(`42[11,"${playerId}","github.com/anonimbiri"]`);
              updateUserList(data[5]);
              break;
            }
	    case 23: {
              const playerList = document.getElementById('playerlist');
              const existingItem = playerList.querySelector(`.item[data-player-id="${data[1].turno}"]`);
  
              if (existingItem) {
		 if (data[1].id) return;
		 existingItem.remove();
		 console.log(`WebSocket ${i} ${data[1].nick} adında yeni biri ayrıldı.`);
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
		    console.log(`WebSocket ${socket.playerId} playerId ile ${data[1].id} player odadan atmak için oy kullanıldı`);
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
                 console.log(`WebSocket ${i} ${data[1].nick} adında yeni biri katıldı.`);
		 }
              break;
            }
            case 16: {
              const playerId = socket.playerId;
              socket.send(`42[25,${playerId}]`);
              //console.log(`WebSocket ${i} ${playerId} resmi geçme isteği gönderildi`);
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
              console.log(`WebSocket ${i} ${playerCode} - ${data[1]} bizi atmaya çalıştı.  ${socket.vote}/3`);
	      }
              break;
            }
	  }
        });

        socket.addEventListener('close', (event) => {
          console.log(`WebSocket ${i} bağlantısı kapandı`);
        });

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

    socketList.forEach(socket => {
      socket.close();
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

url.onchange = function () { url.value = url.value.replace("https://gartic.io/", "").replace("/viewer", ""); };

var performancemode = false;
var proxymode = false;
var profilepicture = 0;
var serverlang = 2;

function loaded() {
  if (proxymode == false) {
    document.querySelectorAll('iframe').forEach(item =>
      item.contentWindow.postMessage({ 'command': 'login', 'username': document.querySelector('#botname div input').value, 'profilepicture': profilepicture, 'performancemode': performancemode }, '*')
    )
  } else {
    document.querySelectorAll('iframe').forEach(item =>
      item.contentWindow.postMessage({ 'command': 'loginproxy', 'url': 'https://gartic.io/' + url.value, 'username': document.querySelector('#botname div input').value, 'profilepicture': profilepicture, 'performancemode': performancemode }, '*'))
  }
  document.querySelector("#tool").style.display = 'block';
  btn.setAttribute("class", "ui primary button");
  iziToast.success({
    position: 'topRight',
    //theme: 'dark',
    title: 'Successful',
    message: 'Joining the Server'
  });
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
          console.log(`WebSocket ${socket.playerId} playerId ile ${player.id} player odadan atmak için oy kullanıldı`);
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
      console.log(`WebSocket ${socket.playerId} playerId ile resim rapor edildi`);
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
  socketList.forEach((socket) => {
   socket.players.forEach((player) => {
    if (socket.readyState === WebSocket.OPEN) {
      socket.send(`42[45,${socket.playerId},["${player.id}",true]]`);
    }
  });
}, () => {
    iziToast.success({
      position: 'topRight',
      //theme: 'dark',	
      title: 'Successful',
      message: 'All Players Reported',
    });
  });
});

//basic modal

let spam = false;
var spamType = 11;
spambutton.addEventListener("click", function () {
  if (spam == false) {
    spam = true;
    spambutton.innerHTML = '<i class="stop icon"></i> Stop Spam'
    iziToast.success({
      position: 'topRight',
      //theme: 'dark',	
      title: 'Successful',
      message: 'Spam Started',
    });
  } else {
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

$('.performance.checkbox')
  .checkbox({
    // check all children
    onChecked: function () { performancemode = true; },
    onUnchecked: function () { performancemode = false; }
  })
  ;
$('.proxy.checkbox')
  .checkbox({
    // check all children
    onChecked: function () { proxymode = true; },
    onUnchecked: function () { proxymode = false; }
  })
  ;
$('.profil.dropdown')
  .dropdown({
    clearable: false,
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
      console.log(serverlang);
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

spamIntervalId = setInterval(function () {
  if (!spam) return;
  console.log(spamType);

  socketList.forEach((socket) => {
    if (socket.readyState === WebSocket.OPEN) {
      const randomIndex = Math.floor(Math.random() * (spamtext.value.length + 1));
      let modifiedMessage;

      if (Math.random() < 0.1) {
        modifiedMessage = "github.com/anonimbiri";
      } else {
        modifiedMessage = spamtext.value.slice(0, randomIndex) + '឵' + spamtext.value.slice(randomIndex);
      }
      socket.send(`42[${spamType},"${socket.playerId}","${modifiedMessage}"]`);
      //console.log(`WebSocket ${socket.playerId} playerId'li kulanıcı için ${modifiedMessage} mesajı atıldı`);
    }
  });

}, document.querySelector('#spamms').value);

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
