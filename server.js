const express = require("express");
const path = require("path");

const app = express();

app.set("trust proxy", 1);


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
