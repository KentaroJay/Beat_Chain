const express = require("express");
const session = require('express-session');
const cors = require("cors");
const path = require("path");

const app = express();

app.set("trust proxy", 1);


//静的ファイルの読み込み
app.use(
  "/static",
  express.static(path.resolve(__dirname, "frontend", "static"))
);

app.use(session({
  allowedHeaders: ['sessionId', 'Content-Type'],
  exposedHeaders: ['sessionId'],
  secret: 'reply-analyzer',
  resave: false,
  saveUninitialized: false,
  cookie: {
    secure: true,
    sameSite: 'None'
  }
}));

app.use(
  cors({
    origin: "https://beat-chain.herokuapp.com",
    credentials: true,
    optionsSuccessStatus: 200
  })
);

//リクエスト処理
app.get("/*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "frontend", "index.html"));
});

app.listen(process.env.PORT || 8000, () => console.log("Server running..."));
