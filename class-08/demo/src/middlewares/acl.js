'use strict';

module.exports = (capability) => {
    //delete
    return (req, res, next) => {
        // try {
        // ['read', 'create', 'update', 'delete']

        // "capabilities": [
        //     "read",
        //     "create"
        //   ]
        if (req.user.capabilities.includes(capability)) {
            next()
        } else {
            next('access denied')
        }

        // } catch (e) {
        //     next('invalid login')
        // }

    }
}