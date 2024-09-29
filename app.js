const express = require("express")
const path = require("path")
const router = express.Router();

const app = express()

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");


app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, 'public')));

app.use(express.urlencoded({ extended: true }));

const messages = [
    {
      text: "Hi!",
      user: "Tigmanshu",
      added: new Date()
    },
    {
      text: "Hello World!",
      user: "Akshat",
      added: new Date()
    }
  ]
  

app.get("/", (req, res) => {

    res.render("index", {messages: messages})
})

app.get("/new", (req, res) => {

    res.render("form")
})

app.post("/new", (req, res) => {

    messages.push({ text: req.body.text, user: req.body.name, added: new Date() });
    res.redirect("/")

})

app.get("/close-up/:index", (req, res) => {

    res.render("close-up", {item: messages[req.params.index]})
})


app.listen(3000, () => console.log("bitch go on port 3000"))