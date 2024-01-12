import jwt from 'jsonwebtoken';

// Authorization via JWT
export const verifyToken = async (req, res, next) => {
  try{
    // Getting the JWT from the front end
    let token = req.header("Authorization")

    if(!token){
      return res.status(403).send("Access Denied");
    }

    // Expecting the JWT token to be in a format like "Bearer <actual_token>", so removing "Bearer " to leave only the token
    if(token.startsWith('Bearer ')) {
      token = token.slice(7, token.length).trimLeft();
    }

    const verified = jwt.verify(token, process.env.JWT_SECRET);
    req.user = verified;
    next();

  } catch(err){
    res.status(500).json( { error: err.message } );
  }
}