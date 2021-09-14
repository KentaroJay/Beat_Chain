import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  constructor() {
    super();
    this.setTitle("Dashboard");
  }

  async getHtml() {
    return `
            <h1>ようこそ、Beat Chainへ！</h1>
            <p>
              リズム感を鍛えて不安なく音楽を楽しもう！
            </p>
            <input type="button" value="動画をミュート" onclick="fadeVolume()" />
            <input type="button" value="動画をフェードイン" onclick="fadeInVolume()" />
            <input id="youtube-link" type="text" placeholder="youtubeリンクをペースト"/>
            <input type="button" value="音源を追加" onclick="reflectVideo()" />

            <!-- 1. The <iframe> (and video player) will replace this <div> tag. -->
            <div id="player"></div>
        `;
  }
}
