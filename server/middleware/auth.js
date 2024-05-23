import passport from "passport";

const isAuthenticated = (req,res, next) => {
  if(req.isAuthenticated()){
    return next();
  } else {
    res.redirect('http://localhost:5173/login');
  }
}

export default isAuthenticated;