const jwt = require("jsonwebtoken");
const verifyAuthToken = async (req, res, next) => {
  const token = req?.headers?.authorization || "";
  try {
    if (token && token.split(" ").length > 0) {
      const accessToken = token.split(" ")[1];
      console.log("Calling verifyAuthToken From Middleware :", accessToken);
      const isValidToken = await jwt.verify(
        accessToken,
        process.env.JSON_SECRET
      );
      if (isValidToken) {
        req.user = isValidToken;
        next();
      } else {
        return res.status(401).send("Unauthorized");
      }
    } else {
      return res.status(401).send("Unauthorized");
    }
  } catch (error) {
    console.log(error);
    return res.status(500).send("Internal Server Error");
  }
};

module.exports = {
  verifyAuthToken,
};
