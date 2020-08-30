
function cors(req,res,next){
 
    res.set({
        "Access-Control-Allow-Origin":"http://localhost:8080",
        "Access-Control-Allow-Headers":"Content-Type,Content-Length, Authorization, Accept,X-Requested-With",
        "Access-Control-Allow-Methods":"PUT,POST,GET,PATCH,DELETE,OPTIONS",
        "Access-Control-Allow-Credentials":true
    })

    if(req.method=="OPTIONS") {
        res.sendStatus(200);
    } else{
        next();
    }

   

}

module.exports = cors;