const express = require("express");
const path = require("path");
const app = express();

const PORT = 3000;


app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname, "views/home.html"));
});

app.get("/productos",(req,res)=>{
    res.sendFile(path.join(__dirname, "views/productos.html"));
});
app.get("/productos/1",(req,res)=>{
    res.sendFile(path.join(__dirname, "views/productos1.html"));
});

app.listen(PORT,()=> console.log("servidor ejecutandose en el puerto " + PORT));