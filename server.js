const express = require("express");
const expressSession = require('express-session');
const cors = require("cors");
const path = require("path");

const app = express();

app.set("trust proxy", 1);


//静的ファイルの読み込み
app.use(
  "/static",
  express.static(path.resolve(__dirname, "frontend", "static"))
);

app.use(
  expressSession({
    secret: process.env.SESSION_SECRET || 'Super Secret',
    resave: true,
    saveUninitialized: false,
    cookie: {
      sameSite: 'none',
      secure: true,
    }
  })
);

app.use(
  cors({
    credentials: true,
    origin: ["https://beat-chain.herokuapp.com"]
  })
);

//リクエスト処理
app.get("/*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "frontend", "index.html"));
});

app.listen(process.env.PORT || 8000, () => console.log("Server running..."));
