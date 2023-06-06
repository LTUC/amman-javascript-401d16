'use strict';

function stamper(req, res, next) {
    req.timeStamp = new Date();
    next();
}

module.exports = stamper;

// module.exports = (req,res,next)=>{
//     req.timeStamp = new Date();
//     next();
// }