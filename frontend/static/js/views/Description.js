import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle("Posts");
  }

  async getHtml() {
    return `
            <h1>Beat Chainとは?</h1>
            <p>リズム感に自信がない方のための、リズム感強化アプリです。</p>
        `;
  }
}
