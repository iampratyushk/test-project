import express from "express";


const app = express();


const port = 4500;


app.get("/ping", (req, res) => res.status(200).json('Pong'));
app.get("/test", (req, res) => res.status(200).json('success'));

app.listen(port, () => {
    console.log(`Server running at port  ${port}`);
});