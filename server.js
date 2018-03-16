const express = require("express");
const app = express();
const path = require("path");

app.use(express.static(__dirname));

app.get("/1", (req, res) => {
    res.sendFile(path.resolve(__dirname, "1.html"));
});

app.get("/2", (req, res) => {
    res.sendFile(path.resolve(__dirname, "2.html"));
});

app.get("/3", (req, res) => {
    const links = [`<https://fonts.googleapis.com/css?family=Roboto>;rel="preload";as="style"`, `<https://fonts.gstatic.com/s/roboto/v18/KFOmCnqEu92Fr1Mu4mxKKTU1Kg.woff2>;rel="preload";as="font";crossorigin`]
    res.header("Link", links);

    res.sendFile(path.resolve(__dirname, "3.html"));
});

app.get("/4", (req, res) => {
    res.sendFile(path.resolve(__dirname, "4.html"));
});

app.listen(3000, () => {
    console.log("Server running on 3000");
})