// snowsore.com test server

const express = require("express");
const app = express();
const session = require("express-session");

app.use(express.static("public"));
app.use(express.json());

app.use(
  session({
    secret: "keyboard cat",
    cookie: { maxAge: 60000 },
  })
);

app.get("/", (req, res) => {
  res.json({ msg: "good" });
});

app.post("/", (req, res) => {
  const id = req.body.id;
  const passwd = req.body.passwd;
  res.redirect("/");
});

app.use((req, res, next) => {
  if (req.session.user_id) next();
  else res.redirect("/");
});

app.listen(8080, () => {
  console.log("Server start at 8080");
});
