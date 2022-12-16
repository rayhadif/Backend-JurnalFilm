const jwt = require('jsonwebtoken');


SECRET = process.env.SECRET
const Auth = {
    verifyToken(req, res, next){
      // const token = req.cookies['JWT'];
      const token = req.body.token || req.cookies['JWT']
        if (token) {
          // 12. Lalukan jwt verify 
          try {
            const verified = jwt.verify(token,SECRET);
            req.verified = verified;
            console.log("Succesfully Verified!");
            next()
          } catch (err) {
            return res.status(401).send("Invalid Token");
          }
          return next();
        } else {
          res.status(403).send({message: 'Youre not authenticated, please login first'})
            console.log('Youre not authenticated');
        }
  }
}

module.exports = Auth;