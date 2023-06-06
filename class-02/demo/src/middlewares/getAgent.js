function getAgent(req, res, next) {
    req.browser = req.headers["user-agent"];
    req.myName = "anas alsmadi";
    next();
}

module.exports = getAgent;