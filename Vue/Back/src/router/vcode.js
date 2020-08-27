const express =require ("express");
const router = express.Router();

const svgCaptcha = require("svg-captcha");


router.get("/",function(req,res){
    const captcha = svgCaptcha.create({
        height:25,
        fontSize:40

    });
    req.session.vcode = captcha.text.toLowerCase();
    res.send({
        code:0,
        data:captcha.data,
    });
   
    console.log(req.session);
    
})


module.exports = router;


