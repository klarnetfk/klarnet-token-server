const express = require("express");
const app = express();

const TOKENS = {
  "KL-TEST-1234": {
    expires: "2026-02-01"
  }
};

app.get("/verify", (req, res) => {
  const token = req.query.token;
  const data = TOKENS[token];

  if (!data) return res.json({ ok: false });

  if (Date.now() > new Date(data.expires).getTime()) {
    return res.json({ ok: false });
  }

  res.json({ ok: true });
});

app.listen(process.env.PORT || 3000, () => {
  console.log("Server çalışıyor");
});
