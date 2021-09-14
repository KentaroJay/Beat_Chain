function _sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function training() {
    document.getElementById("tap").setAttribute("disabled", "disabled")
    player.playVideo()
    player.unMute()
    player.setVolume(100)
    let announce = document.getElementById("announcement")
    announce.innerText = "トレーニング開始です。最初の30秒間は音楽が流れます。"
    await _sleep(30000 - 4000)
    announce.innerText = "3秒後に音量が小さくなります。"
    await _sleep(1000)
    announce.innerText = "2秒後"
    await _sleep(1000)
    announce.innerText = "1秒後"
    await _sleep(1000)
    repetition(announce)
}
async function repetition(announce) {
    fadeVolume()
    announce.innerText = "音量を小さくしました。"
    await _sleep(5000)
    fadeInVolume()
    announce.innerText = "音量を元に戻しました。"
    await _sleep(10000 - 4000)
    announce.innerText = "3秒後に音量が小さくなります。"
    await _sleep(1000)
    announce.innerText = "2秒後"
    await _sleep(1000)
    announce.innerText = "1秒後"
    await _sleep(1000)
    repetition(announce)
}
/* async function countDown(ms, announce) {
    await _sleep(ms - 4000)
    announce.innerText = "3秒後に音量が小さくなります。"
    await _sleep(1000)
    announce.innerText = "2秒後"
    await _sleep(1000)
    announce.innerText = "1秒後"
    await _sleep(1000)
} */

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
    validate = regexp.exec(textbox.value);
    if (validate == null) {
        alert("Youtubeのリンクを貼ってください。")
    } else {
        window.location.href = location.protocol + "//" + location.host + "?" + textbox.value;
    }
}