const express= require ("express");
const app= express();
const path= require("path");
const port= process.env.PORT || 3000;
app.use(express.static("public"));

app.listen(3000,()=>{
    console.log("servidor corriendo")
});

app.get("/", function(req, res){
    res.sendFile(path.join(__dirname,"/index.html"))
});
app.get("/register", function(req, res){
    res.sendFile(path.join(__dirname,"/views/register.html"))
});
app.get("/login", function(req, res){
    res.sendFile(path.join(__dirname,"/views/login.html"))
});
app.get("/carrito", function(req, res){
    res.sendFile(path.join(__dirname,"/views/carrito.html"))
});