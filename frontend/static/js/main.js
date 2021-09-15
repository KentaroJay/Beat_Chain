function _sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

let stopFlag = false

function stopTraining() {
    stopFlag = true
    player.pauseVideo()
}

function createStopButton() {
    const buttons = document.getElementById("buttons");
    const newButton = document.createElement("input");
    newButton.setAttribute("type", "button");
    newButton.setAttribute("value", "トレーニング終了");
    newButton.setAttribute("onclick", "stopTraining()");
    buttons.appendChild(newButton);
}

async function training() {
    document.getElementById("tap").setAttribute("disabled", "disabled")
    createStopButton()
    player.playVideo()
    player.unMute()
    player.setVolume(100)
    let announce = document.getElementById("announcement")
    displayAnnounce(announce, "トレーニング開始です。最初の30秒間は音楽が流れます。")
    await countDown(30000, announce)
    repetition(announce)
}
async function repetition(announce) {
    fadeVolume()
    displayAnnounce(announce, "音量を小さくしました。")
    await _sleep(5000)
    fadeInVolume()
    displayAnnounce(announce, "音量を元に戻しました。")
    await countDown(10000, announce)
    repetition(announce)
}
async function countDown(ms, announce) {
    await _sleep(ms - 4000)
    displayAnnounce(announce, "3秒後に音量が小さくなります。")
    await _sleep(1000)
    displayAnnounce(announce, "2秒後")
    await _sleep(1000)
    displayAnnounce(announce, "1秒後")
    await _sleep(1000)
}

async function fadeVolume() {
    player.unMute()
    for (let volume = 100; volume >= 0; volume--) {
        player.setVolume(volume)
        await _sleep(2);
    }
}
async function fadeInVolume() {
    player.unMute()
    for (let volume = 0; volume <= 100; volume++) {
        player.setVolume(volume)
        await _sleep(2)
    }
}
function reflectVideo() {
    let textbox = document.getElementById("youtube-link");
    let validate = regexp.exec(textbox.value);
    if (validate == null) {
        alert("Youtubeのリンクを貼ってください。")
    } else {
        window.location.href = location.protocol + "//" + location.host + "?" + textbox.value;
    }
}
function displayAnnounce(announce, message) {
    if (!stopFlag) {
        announce.innerText = message;
    }
}