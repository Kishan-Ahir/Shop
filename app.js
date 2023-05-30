const http =require("http");
const express = require("express"); 
const app = express();
const adminroute = require("./routes/admin.js");
const shoproute = require("./routes/shop.js");

//when request come firstly it will directed to adminroute then shoproute.
app.use("/admin",adminroute);
app.use(shoproute);

app.use((req,res,next)=>{
    res.status(404).send("<h1>Page Not Found.</h1>");
})
app.listen(4000);