const express = require("express");
const router = express.Router();
const mongo = require("../utils/mongo")

router.get("/",async(req,res)=>{

let result = await mongo.find("user");
    res.send(result);
})
router.get("/:id",async (req,res)=>{
    let {id} = req.params;
    id = id*1;
    let result = await mongo.find("user",{id})
    res.send(result);

})
router.put("/:id",async (req,res)=>{
    const {id} = req.params;
    let {gender,phonenumber} = req.body;
    let newData = {gender,phonenumber};
    try{
        await mongo.update("user",{id:id},{$set:newData});
        res.send({
            data:{
                id,
                ...newData
            },
            code:1
        })
    }catch(err){
        res.send({
            code:0
        })
    }
    console.log(newData);

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
