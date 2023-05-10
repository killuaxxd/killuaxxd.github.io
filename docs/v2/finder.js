let params = new URLSearchParams(window.location.search);
document.body.innerHTML += `<div class="ui inverted segment">
<div class="ui inverted form">
    <div class="two fields">

<div class="field">
      <div class="ui fluid search selection lang dropdown">
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


	<div class="field">
    <button class="ui pink right labeled icon button" id="search" ><i class="search icon"></i>Search</button>
    </div>
    </div>
    </div>

    </div>

    <div class="ui inverted segment" id="segment" style="display: none;">
    <div class="ui inverted form">
    <div class="inline fields">

    <div class="field" id="name">
      <label>Username:</label>
      <div class="ui large labeled input"><input type="text" value="${params.get('keyword') || "anonimbiri"}" placeholder="Nickname" maxlength="17" spellcheck="false" data-ms-editor="true"></div>
    </div>

    <div class="field">
    <label>Username Search Type:</label>
    <div class="ui floating name dropdown labeled icon button">
    <i class="filter icon"></i>
    <input type="hidden" name="country">
    <div class="text"></i>Unknown</div>
    <div class="menu">
    <div class="item" data-value="unknown">Unknown</div>
    <div class="item" data-value="full">Full Username</div>
    <div class="item" data-value="partial">Partial Username</div>
    </div>
    </div>
    </div>

    <div class="field">
    <label>Image:</label>
    <div class="ui floating search profil bot-image dropdown labeled icon button" tabindex="0">
    <input type="hidden" name="user">
    <i class="filter icon" tabindex="0"><div class="menu" tabindex="-1"></div></i>
    <div class="text"><img class="ui avatar image">Unknown</div>
    <div class="menu transition hidden" tabindex="-1">
    <div data-value="unknown" class="item active selected">
          <img class="ui avatar image">Unknown</div><div data-value="pictures" class="item">
          <img class="ui avatar image">only those with private pictures</div><div data-value="0" class="item">
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
    <label>User Type:</label>
    <div class="ui floating user dropdown labeled icon button">
    <i class="filter icon"></i>
    <input type="hidden" name="country">
    <div class="text"></i>Unknown</div>
    <div class="menu">
    <div class="item" data-value="unknown"><i class="th list icon"></i>Unknown</div>
    <div class="item" data-value="user"><i class="user icon"></i>User</div>
    <div class="item" data-value="bot"><i class="user secret icon"></i>Bot</div>
    </div>
    </div>
    </div>

    </div>

    <div class="ui pink inverted progress">
    <div class="bar">
      <div class="progress"></div>
    </div>
  </div>

    <div class="ui link four inverted segment cards" id="list">

    </div>

    </div>
`;

$('.search.profil.dropdown').dropdown('set selected', params.get('profil') || "unknown");
$('.search.lang.dropdown').dropdown('set selected', params.get('lang') || 2);
$('.name.dropdown').dropdown('set selected', params.get('name-type') || "unknown");
$('.user.dropdown').dropdown('set selected', params.get('user-type') || "unknown");

$('.profil.dropdown')
    .dropdown({
        clearable: false,
        onChange: function (value, text, $selectedItem) {
            params = new URLSearchParams(window.location.search);
            params.set('profil', value);
            const newUrl = `${window.location.pathname}?${params.toString()}`;
            window.history.pushState({}, '', newUrl);
            updatePlayerList();
        }
    })
    ;
$('.lang.dropdown')
    .dropdown({
        clearable: false,
        onChange: function (value, text, $selectedItem) {
            params = new URLSearchParams(window.location.search);
            params.set('lang', value);
            const newUrl = `${window.location.pathname}?${params.toString()}`;
            window.history.pushState({}, '', newUrl);
            updatePlayerList();
        }
    })
    ;

$('.name.dropdown')
    .dropdown({
        clearable: false,
        onChange: function (value, text, $selectedItem) {
            params = new URLSearchParams(window.location.search);
            params.set('name-type', value);
            const newUrl = `${window.location.pathname}?${params.toString()}`;
            window.history.pushState({}, '', newUrl);
            updatePlayerList();
        }
    })
    ;
$('.user.dropdown')
    .dropdown({
        clearable: false,
        onChange: function (value, text, $selectedItem) {
            params = new URLSearchParams(window.location.search);
            params.set('user-type', value);
            const newUrl = `${window.location.pathname}?${params.toString()}`;
            window.history.pushState({}, '', newUrl);
            updatePlayerList();
        }
    })
    ;
document.querySelector("#name input").onchange = function () {
    params = new URLSearchParams(window.location.search);
    params.set('keyword', document.querySelector("#name input").value);
    const newUrl = `${window.location.pathname}?${params.toString()}`;
    window.history.pushState({}, '', newUrl);
    updatePlayerList();
}

var players = [];
document.querySelector("#search").addEventListener("click", async function () {
    document.querySelector("#segment").style.display = "block";
    document.querySelector(".ui.progress").style.display = "block";
    players = [];
    try {
        document.querySelector("#list").innerHTML = `
            <div class="ui active dimmer">
                <div class="ui large text loader">Searching Rooms</div>
            </div>
            <div class="ui card">
    <div class="image">
      <div class="ui placeholder">
        <div class="square image"></div>
      </div>
    </div>
    <div class="content">
      <div class="ui placeholder">
        <div class="header">
        <div class="medium line"></div>
          <div class="very short line"></div>
        </div>
      </div>
    </div>
    <div class="extra content">
    <div class="ui placeholder">
    <span class="right floated"><div class="very short line"></div></span>
    <span><div class="very short line"></div></span>
    </div>
    </div>
        `;

        const response = await fetch(`https://gartic.io/req/list?search=&language[]=${params.get('lang') || `2`}`);
        const data = await response.json();
        const filteredData = data.filter(item => item.quant !== 0);

        $('.ui.progress')
            .progress({
                total: filteredData.length,
            })
            ;

        // 1. filteredData dizisini beşerli gruplara ayırın
        const chunkedData = [];
        for (let i = 0; i < filteredData.length; i += 10) {
            const chunk = filteredData.slice(i, i + 10);
            chunkedData.push(chunk);
        }

        // 2. Her beşli grup için işlem yapın
        for (const chunk of chunkedData) {
            // Sunucu bilgilerini ve WebSocket bağlantılarını paralel olarak alın
            const promises = chunk.map(async (room) => {
                const serverResponse = await fetch(`https://gartic.io/server?check=1&room=${room.code}`);
                const serverData = await serverResponse.text();
                const serverURL = serverData.split(':')[1];
                return { room, serverURL };
            });
            const results = await Promise.all(promises);

            // Tüm WebSocket bağlantılarını açın ve hemen mesaj gönderin
            const wsPromises = results.map(({ room, serverURL }) =>
                new Promise((resolve) => {
                    const ws = new WebSocket(`wss:${serverURL}/socket.io/?EIO=3&transport=websocket`);
                    ws.addEventListener('open', () => {
                        console.log(`WebSocket connection established for room ${room.id} with code ${room.code}`);
                        ws.send(`42[12,{"v":20000,"sala":"${room.id}"}]`);
                    });
                    ws.addEventListener('message', (event) => {
                        if (event.data === '42[6,6]') {
                            ws.close();
                            resolve();
                        }
                        if (!event.data.includes('[')) return;
                        const data = JSON.parse(event.data.replace(/^\d+/g, ''));
                        switch (data[0]) {
                            case 5: {
                                data[5].forEach((player) => {
                                    player.roomcode = room.code;
                                    player.roomplayers = `${room.quant} / ${room.max}`;
                                    player.roomrating = room.rating;
                                    players.push(player);
                                });
                                ws.close();
                                resolve();
                                break;
                            }
                        }
                    });
                    ws.addEventListener('close', resolve);
                    $('.ui.progress')
                        .progress('increment')
                        ;
                })
            );

            await Promise.all(wsPromises); // beklendiği yerde resolve edilen tüm promiselerin tamamlanmasını bekleyin
        }
        var audio = new Audio('warning.mp3');
        audio.play();
        audio = null;
        updatePlayerList();
        document.querySelector(".ui.progress").style.display = "none";
    } catch (error) {
        console.error(error);
    }
});

function updatePlayerList() {
    document.querySelector("#list").innerHTML = ``;
    let filteredPlayers = players;

    if (params.get('profil') === "unknown" || !params.get('profil')) {
        filteredPlayers = players;
    } else if (params.get('profil') === "pictures") {
        filteredPlayers = filteredPlayers.filter(player => {
            return player.hasOwnProperty('foto') && player.foto.trim().length > 0;
        });
    } else {
        filteredPlayers = filteredPlayers.filter(player => !player.hasOwnProperty('foto') > 0 && player.avatar === parseInt(params.get('profil')));
    }

    if (params.get('name-type') === "full") {
        let keyword = params.get('keyword') || "anonimbiri";
        filteredPlayers = filteredPlayers.filter(player => player.nick.toLowerCase().includes(keyword.toLowerCase()));
    } else if (params.get('name-type') === "partial") {
        let keyword = params.get('keyword') || "anonimbiri";

        filteredPlayers = players.filter(player => {
            if (player.nick) {
                const playerName = player.nick.toLowerCase();
                const keywordLower = keyword.toLowerCase();
                // check if the player's name contains the keyword or is similar to it
                return playerName.includes(keywordLower) || playerName.includes(keywordLower.replace(/i/g, 'ı').replace(/İ/g, 'I'));
            }
            return false;
        });

    }

    if (params.get('user-type') === "user") {
        filteredPlayers = filteredPlayers.filter(player => !player.nick.includes("឵") || !player.nick.startsWith("REDbot"));
    } else if (params.get('user-type') === "bot") {
        filteredPlayers = filteredPlayers.filter(player => {
            return player.nick.includes("឵") || player.nick.startsWith("REDbot");
        });
    }

    if (filteredPlayers.length === 0) {
        document.querySelector("#list").innerHTML = `
        <h2 class="ui center aligned icon header">
      <i class="user icon"></i>
      <div class="content">
       User Not Found
      </div>
    </h2>
    `;
    }

    filteredPlayers.forEach(item => {
        const card = document.createElement("div");
        card.classList.add("card");

        const imageDiv = document.createElement("div");
        imageDiv.classList.add("ui", "fluid", "image");

        const image = document.createElement("img");

        image.setAttribute("data-name", item.nick);

        if (item.foto) {
            image.setAttribute("src", item.foto);
        } else {
            image.setAttribute("src", `https://gartic.io/static/images/avatar/svg/${item.avatar}.svg`);
        }

        imageDiv.appendChild(image);

        const content = document.createElement("div");
        content.classList.add("content");

        const header = document.createElement("div");
        header.classList.add("header");
        header.innerText = item.nick;

        const meta = document.createElement("div");
        meta.classList.add("meta");

        const subtitle = document.createElement("a");
        subtitle.innerText = `https://gartic.io/${item.roomcode}`;

        meta.appendChild(subtitle);

        content.appendChild(header);
        content.appendChild(meta);

        const extraContent = document.createElement("div");
        extraContent.classList.add("extra", "content");

        const joinSpan = document.createElement("span");
        joinSpan.classList.add("right", "floated");
        joinSpan.innerText = `Rating: ${item.roomrating}`;

        const friendsSpan = document.createElement("span");
        const userIcon = document.createElement("i");
        userIcon.classList.add("user", "icon");
        friendsSpan.appendChild(userIcon);
        friendsSpan.appendChild(document.createTextNode(item.roomplayers));

        extraContent.appendChild(joinSpan);
        extraContent.appendChild(friendsSpan);

        card.addEventListener("click", async function (e) {
            if (e.target.tagName === "A") {
                await navigator.clipboard.writeText(`https://gartic.io/${item.roomcode}`);
                iziToast.info({
                    position: 'topRight',
                    //theme: 'dark',
                    title: 'Copied',
                    message: `${item.roomcode} Room Link has been Copied to the Clipboard.`
                });
            } else {
                window.open(`./index.html?code=${item.roomcode}`);
            }
        });
        card.appendChild(imageDiv);
        card.appendChild(content);
        card.appendChild(extraContent);
        document.querySelector("#list").appendChild(card)
    });

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

let currentTagTarget = null;

document.addEventListener("contextmenu", function (e) {
    e.preventDefault();
    var contextmenu = document.getElementById("contextmenu");
    contextmenu.style.display = "block";
    contextmenu.style.left = e.pageX + "px"; // X koordinatı sayfa konumuna göre ayarlanıyor
    contextmenu.style.top = e.pageY + "px"; // Y koordinatı sayfa konumuna göre ayarlanıyor

    if (e.target.tagName) {
        currentTagTarget = e.target;
    } else {
        currentTagTarget = null;
    }
});



// Sayfada herhangi bir yere tıklandığında menüyü gizle
document.addEventListener("click", function (e) {
    var contextmenu = document.getElementById("contextmenu");
    contextmenu.style.display = "none";
});

document.addEventListener("DOMContentLoaded", function () {
    // Edit butonu
    document.getElementById("editButton").addEventListener("click", function () {
        if (currentTagTarget.tagName === 'INPUT') {
            currentTagTarget.select();
        }
    });

    // Copy butonu
    document.getElementById("copyButton").addEventListener("click", async function () {
        if (currentTagTarget.tagName === 'INPUT') {
            try {
                await navigator.clipboard.writeText(currentTagTarget.value);
                console.log('Metin panoya kopyalandı!');
            } catch (err) {
                console.error('Metni kopyalarken hata oluştu:', err);
            }
        }
    });

    // Cut butonu
    document.getElementById("cutButton").addEventListener("click", async function () {
        if (currentTagTarget.tagName === 'INPUT') {
            try {
                await navigator.clipboard.writeText(currentTagTarget.value);
                currentTagTarget.value = '';
                console.log('Metin panoya kopyalandı ve input alanı temizlendi!');
            } catch (err) {
                console.error('Metni keserken hata oluştu:', err);
            }
        }
    });

    // Paste butonu
    document.getElementById("pasteButton").addEventListener("click", async function () {
        if (currentTagTarget.tagName === 'INPUT') {
            try {
                const text = await navigator.clipboard.readText();
                currentTagTarget.value = text;
            } catch (err) {
                console.error('Metni okurken hata oluştu:', err);
            }
        }
    });

    // Resim kayedetme butonu
    document.getElementById("saveImageButton").addEventListener("click", async function () {
        if (currentTagTarget.tagName === 'IMG') {
            try {
                var filename = currentTagTarget.getAttribute('data-name') + '-anonimbiri.jpg';
                fetch(currentTagTarget.src)
                    .then(function (t) { return t.blob().then((b) => { var a = document.createElement("a"); a.href = URL.createObjectURL(b); a.setAttribute("download", filename); a.click(); }) });
            } catch (err) {
                console.error('Resmi kayıt ederken hata oluştu:', err);
            }
        }
    });

});