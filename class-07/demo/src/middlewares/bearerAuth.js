'use strict';
const base64 = require('base-64');
const Users = require('../models/users.model');

function bearer(req, res, next) {
    if (req.headers.authorization) {
        // Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InNhdmFubmFoIiwicGFzc3dvcmQiOiIkMmIkMDUkUmFPVWFDMEU4UGxCc3BzOFZXSnl4T2ZFYUhXT3B0Q3FmSmt6cW9zazdDQldHb25DclhXS2UiLCJpYXQiOjE2ODcyNTAwODl9.cF3N6z__ID7e3DJ9E1SiPP0dt8YGToRkC1hv9_pYNJI
        const bearerHeadersToken = req.headers.authorization.split(' ')[1];
        Users.authBearer(bearerHeadersToken).then((data) => {
            req.user = data;
            next();
        }).catch(() => {
            next('invalid token');
        })
    }
}



module.exports = bearer;