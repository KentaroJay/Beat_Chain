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
    secret: process.env.SESSION_SECRET || 'Super Secret (change it)',
    resave: true,
    saveUninitialized: false,
    cookie: {
      sameSite: process.env.NODE_ENV === "production" ? 'none' : 'lax', // must be 'none' to enable cross-site delivery
      secure: process.env.NODE_ENV === "production", // must be true if sameSite='none'
    }
  })
);

app.use(
  cors()
);

//リクエスト処理
app.get("/*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "frontend", "index.html"));
});

app.listen(process.env.PORT || 8000, () => console.log("Server running..."));
