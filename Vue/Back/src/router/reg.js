const express = require("express");
const router = express.Router();
const mongo = require("../utils/mongo");

router.post("/", async function(req,res){
    let {username,password} = req.body;
    console.log(req.body);
    let result;
    try{
        result = await mongo.insert("superuser",{
            username,password
        })
        res.send({
            code:1,
            msg:"success"

        })

    }catch(err){
        res.send({
            code:1,
           
            msg:"fail"
        })
    }

})


module.exports = router;