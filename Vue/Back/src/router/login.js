const express = require("express");
const router = express.Router();
const mongo = require("../utils/mongo");
const token = require("../utils/token")


router.get("/", async function(req,res){
    let {username,password,vcode,mdl} = req.query;
    console.log(vcode);
    console.log(req.session);
   
    if(vcode !== req.session.vcode){
        res.send({
            code:10,
            msg:"验证码不正确",

        })
        return;
    }

    let result = await mongo.find("superuser",{username,password});
    // console.log(result);
    if (result.length > 0){
    //    let authorization;
    //    if(mdl == "true"){
    //        authorization = token.create(username,20);
    //        res.send({
    //            code:1,
    //            data:authorization,
    //        });
    //        return;
    //    }
       res.send({
           code:1,
       })
    }else{
        res.send({
            code:0,
            msg:"用户名或密码错误",
           

        })
    }

})












module.exports = router;