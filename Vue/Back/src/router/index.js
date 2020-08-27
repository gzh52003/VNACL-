const express = require("express");
const session = require("express-session");
const router = express.Router();
const userRouter = require("./user");
const goodsRouter = require("./goods");
const regRouter = require("./reg");
const loginRouter = require("./login");
const vcodeRouter = require("./vcode");
const cors = require("../filter/cors")



router.use(cors);

router.use(express.urlencoded({extended:false}),express.json());




router.use(session({
    secret:"kitty",
    resave:false,
    saveUninitialized:true,
    cookie:{
        maxAge:1000*60*60
    }
}))





router.use("/user",userRouter);
router.use("/goods",goodsRouter);
router.use("/reg",regRouter);
router.use("/login",loginRouter);
router.use("/vcode",vcodeRouter);




module.exports = router;