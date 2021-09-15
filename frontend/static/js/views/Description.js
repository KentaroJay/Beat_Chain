import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle("Posts");
  }

  async getHtml() {
    return `
            <h1>Beatrainとは?</h1>
            <p>リズム感に自信がない方のための、リズム感強化アプリです。</p>
            <p>
              再生が始まると30病後に音量が小さくなったり、音量が元に戻ったりします。音量が小さくなっても、音量が元に戻るタイミングまでテンポを維持できるように練習してください。
            </p>
            <p>
              テンポが一定の曲で練習することを想定しています。変拍子が含まれる曲では、トレーニング効果が低減する可能性があります。
            </p>
            <p>
              ご自身のメトロノームを曲のBPMに合わせて練習するのも効果的です。難しい場合はメトロノームを使われることをお勧めします。
            </p>
        `;
  }
}
