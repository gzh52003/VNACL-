const express = require("express");
const router = express.Router();
const mongo = require("../utils/mongo");


router.get("/",async(req,res)=>{
    let{page=1,limit,sort="id"} = req.query;
    page = page *1;
    limit = limit *1;
  
    let skip = (page - 1) * limit;
    sort = sort.split(",")

let result = await mongo.find("goods",{},{skip,limit,sort})
   res.send(result);
})
router.get("/:id",async (req,res)=>{
    let {id} = req.params;
    id = id*1;
    let result = await mongo.find("goods",{id})
    res.send(result);

})

router.delete("/:id",async (req,res)=>{
    let {id} = req.params;
    id = id*1;
   try{
    let result = await mongo.remove("goods",{id:id})
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