const express = require("express");
const session = require('express-session');
const cors = require("cors");
const path = require("path");

const app = express();
app.set("trust proxy", 1);

app.use(
  session({
    secret: process.env.SESSION_SECRET || 'Super Secret (change it)',
    resave: true,
    saveUninitialized: false,
    cookie: {
      sameSite: 'none', // must be 'none' to enable cross-site delivery
      secure: true, // must be true if sameSite='none'
    }
  })
);

app.use(
  cors({
    credentials: true,
    origin: [process.env.FRONTEND_APP_URL]
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
