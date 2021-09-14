const express = require("express");
const session = require('express-session');
const cors = require("cors");
const path = require("path");

const app = express();

app.set("trust proxy", 1);

app.use(session({
  secret: 'reply-analyzer',
  name: "spa",
  resave: false,
  saveUninitialized: false,
  cookie: {
    sameSite: 'none',
    secure: true
  }
}));

app.use(cors());


//静的ファイルの読み込み
app.use(
  "/static",
  express.static(path.resolve(__dirname, "frontend", "static"))
);


//リクエスト処理
app.get("/*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "frontend", "index.html"));
});

app.listen(process.env.PORT || 8000, () => console.log("Server running..."));
