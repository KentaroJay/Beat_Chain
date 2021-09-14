const express = require("express");
const session = require('express-session');
const cors = require("cors");
var cookieParser = require('cookie-parser');
const path = require("path");

const app = express();
app.set("trust proxy", 1);
app.use(cookieParser());

app.use(
  session({
    secret: process.env.SESSION_SECRET || 'Super Secret (change it)',
    resave: true,
    domain: 'http://localhost:8000',
    saveUninitialized: false,
    cookie: {
      path: "/",
      domain: 'http://localhost:8000',
      sameSite: 'none', // must be 'none' to enable cross-site delivery
      secure: true, // must be true if sameSite='none'
      maxAge: 24 * 60 * 1000
    }
  })
);

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Credentials', true);
  res.header('Access-Control-Allow-Origin', req.headers.origin);
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept');
  next();
});

app.use(
  cors({
    credentials: true,
    origin: [process.env.FRONTEND_APP_URL,process.env.YOUTUBE_URL]
  })
);


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
