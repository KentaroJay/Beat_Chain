import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  constructor() {
    super();
    this.setTitle("Dashboard");
  }

  async getHtml() {
    return `
            <h1>ようこそ、Beatrainへ！</h1>
            <p>
              リズム感を鍛えて不安なく音楽を楽しもう！<br />
              音源が聞こえなくなっても、リズムを維持して歌おう！
            </p>
            <small>※動画が表示されない場合は、再読み込みしてください。</small>

            <input id="youtube-link" type="text" placeholder="youtubeリンクをペースト"/>

            <div id="buttons">
              <input type="button" value="リンク先の音源に変更" onclick="reflectVideo()" />

              <input id="tap" type="button" value="トレーニング開始" onclick="training()" />
            </div>

            <small id="announcement"></small>

            <!-- 1. The <iframe> (and video player) will replace this <div> tag. -->
            <div id="player"></div>
        `;
  }
}
