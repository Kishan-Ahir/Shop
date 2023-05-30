const express = require("express"); 
const bodyparser = require("body-parser");

const router = express.Router();//here by using express.Router() it will return one object which is used to handle the request,return the response and direct request to next middlewares.

router.use(bodyparser.urlencoded({extended:false}));


//    /admin/FORM with GET request
router.get("/FORM",(req,res,next)=>{
    res.send("<form action='/admin/added' method ='POST'><input type='text' name='name'><input type='text' name='age'><button type='submit'>Add Product</button></form>")
});


//    /admin/added with POST request
router.post("/added",(req,res,next)=>{
    let name = req.body.name;
    let age = req.body.age;
    console.log(name);
    console.log(age);
    res.redirect("/");
})

module.exports = router;//we need to export this admin.js file to use or import into any other file by specifimg path of this current file into that file.