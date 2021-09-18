let param = ""
const regexp = /(?:https?:)?(?:\/\/)?(?:[0-9A-Z-]+\.)?(?:youtu\.be\/|youtube(?:-nocookie)?\.com\S*?[^\w\s-])([\w-]{11})(?=[^\w-]|$)(?![?=&+%\w.-]*(?:['"][^<>]*>|<\/a>))[?=&+%\w.-]*/gim;
if (location.search != "") {
    param = location.search.slice(1)
    param = regexp.exec(param)[1]
}


if (param == "") {
    param = "0xSiBpUdW4E"
}

// 2. This code loads the IFrame Player API code asynchronously.
let tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
let firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
let player;
async function onYouTubeIframeAPIReady(videoId = param) {
    player = new YT.Player('player', {
        height: '360',
        width: '640',
        videoId: videoId,
        events: {
            //'onReady': onPlayerReady,
        }
    });
}

// 4. The API will call this function when the video player is ready.
async function onPlayerReady(event) {
    player.mute()
    event.target.playVideo();
}
async function playVideo() {
    player.playVideo();
}
async function stopVideo() {
    player.stopVideo();
}

window.onload = function () {
    onYouTubeIframeAPIReady()
}