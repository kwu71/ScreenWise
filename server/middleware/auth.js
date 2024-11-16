import passport from "passport";

const isAuthenticated = (req,res, next) => {
  if(req.isAuthenticated()){
    return next();
  } else {
    res.set({
      'Access-Control-Allow-Origin': 'https://screen-wise.vercel.app',
      'Access-Control-Allow-Credentials': 'true'
    });
    res.redirect('https://screen-wise.vercel.app/login');
  }
}

export default isAuthenticated;