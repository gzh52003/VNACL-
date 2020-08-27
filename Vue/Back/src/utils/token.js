const jwt = require("jsonwebtoken");
const privateKey = "kitty";
function create(data={},expiresIn="2h"){
    let token = jwt.sign(data,privateKey,{
        expiresIn,
    })
    return token;
}

function verify(token){
    let result;
    try{
        jwt.verify(token,privateKey);
        result = true;
    }catch(err){
        result = false;
    }
    return result;
}

module.exports = {
    create,
    verify
}