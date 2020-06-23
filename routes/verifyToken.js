const jwt = require("jsonwebtoken");

module.exports = function (req, res, next) {
  //console.log(req.headers);
  const token = req.headers.authorization.split(" ")[1];
  //const token = req.header("auth-token");
  if (!token) return res.status(401).send("Access Denied");

  try {
    const verified = jwt.verify(token, process.env.TOKEN_SECRET);
    req.user = verified;
    //now we will have access to the jwt id,  auth._id

    next();
  } catch (err) {
    res.status(401).send("Invalid Token");
  }
};
