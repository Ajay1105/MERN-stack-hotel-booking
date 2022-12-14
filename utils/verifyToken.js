import jwt from "jsonwebtoken";


export const verifyToken = (req,res,next)=>{
  const token = req.cookies.access_token;
  if(!token){
    res.send("You are not authenticated!");
  }
  jwt.verify(token,process.env.JWT, (err,user)=>{
    if(err) res.send("not validated");
    req.user = user;
    next();
  });
}

export const verifyUser = (req,res,next)=>{
  verifyToken(req,res,()=>{
  if(req.user.id === req.params.id || req.user.isAdmin) next();
  else{
   res.send("You are not authorised")
  }
  })
}

export const verifyAdmin = (req,res,next)=>{
  verifyToken(req,res,()=>{
  if(req.user.isAdmin) next();
  else{
   res.send("You are not admin")
  }
  })
}