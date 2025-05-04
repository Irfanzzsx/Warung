import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import path from "path";


const __dirname = dirname(fileURLToPath(import.meta.url));

const port = 3000;
const app = express();

//date
const d = new Date();

//dbForm


const data = {
    value: 0,
    price: 12000,
    date: d.getMinutes(),
    
}

app.use(express.static(path.join(__dirname, 'public')));






app.get("/", (req,res) => {
    res.render("index.ejs");
})

app.get("/product.ejs", (req,res) => {
    res.render("product.ejs", data);
});

app.get("/About.ejs", (req,res) => {
    res.render("About.ejs", data);
});



app.listen(port, () => {
    console.log(`Server run or port ${port}.`);
});