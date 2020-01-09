const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(" ")[1];
        const decodedtoken = jwat.verify(token, "RANDOM");
        const userId = decodedtoken.userId;
        if (req.body.userId && req.body.userId !== userId) {
            throw "Invalid User Request";
        } else {
            next();
        }
    } 
    catch (error) {
        res.status(401).json({
            error: new Error("Invalid request")
        });
    }
}