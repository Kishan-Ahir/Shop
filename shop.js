const express = require("express"); 
const router = express.Router();

router.get("/",(req,res,next)=>{
    res.send("<html><head><title>SUCCESS</title></head><body><h1>WELCOME TO SHOPPING APP.</h1></body></html>");
})

module.exports = router;