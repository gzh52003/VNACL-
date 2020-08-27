const express = require("express");
const router = express.Router();
const mongo = require("../utils/mongo")

router.get("/",async(req,res)=>{

let result = await mongo.find("user");
    res.send(result);
})




router.delete("/:id",async (req,res)=>{
    let {id} = req.params;
    id = id*1;
    // console.log(req.params);
    // console.log(id);

  
   try{
    let result = await mongo.remove("user",{id:id})
    res.send({
        code:11,
        msg:"删除成功"
    });
   }
   catch(err){
res.send({
    code:404,
        msg:"删除失败"
})
   }
})

module.exports = router;
