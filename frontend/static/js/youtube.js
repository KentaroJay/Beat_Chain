let param = ""
if (location.search != "") {
    const regexp = /(?:https?:)?(?:\/\/)?(?:[0-9A-Z-]+\.)?(?:youtu\.be\/|youtube(?:-nocookie)?\.com\S*?[^\w\s-])([\w-]{11})(?=[^\w-]|$)(?![?=&+%\w.-]*(?:['"][^<>]*>|<\/a>))[?=&+%\w.-]*/gim;
    param = location.search.slice(1)
    param = regexp.exec(param)[1]
}


if (param == "") {
    param = "E3hvxbM_ubw"
}

// 2. This code loads the IFrame Player API code asynchronously.
let tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
let firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
let player;
function onYouTubeIframeAPIReady(videoId = param) {
    player = new YT.Player('player', {
        height: '360',
        width: '640',
        videoId: videoId,
        events: {
        }
    });
}

// 4. The API will call this function when the video player is ready.
function onPlayerReady(event) {
    event.target.playVideo();
}
function playVideo() {
    player.playVideo();
}
function stopVideo() {
    player.stopVideo();
}
const _sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
async function fadeVolume() {
    for (let volume = 100; volume >= 0; volume--){
        player.setVolume(volume)
        await _sleep(2);
    }
}
async function fadeInVolume() {
    for (let volume = 0; volume <= 100; volume++) {
        player.setVolume(volume)
        await _sleep(2)
    }
}

function reflectVideo() {
    let textbox = document.getElementById("youtube-link");
    console.log(textbox.value);
    window.location.href = "https://" + location.host + "?" + textbox.value;
}