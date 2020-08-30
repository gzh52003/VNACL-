const express =require ("express");
const router = express.Router();

const svgCaptcha = require("svg-captcha");


router.get("/",function(req,res){
    const captcha = svgCaptcha.create({
        height:25,
        fontSize:40,
        ignoreChars:"0oli1"


    });
    req.session.vcode = captcha.text.toLowerCase();
    res.send({
        code:1,
        data:captcha.data,
    });
   
    console.log(req.session);
    
})


module.exports = router;


