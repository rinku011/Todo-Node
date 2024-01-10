
class ErrorHandler extends Error{
    constructor(meassage , statusCode){
      super(meassage);
      this.statusCode = statusCode;
    }
}

export const ErrorMiddleware = ((err,req,res,next)=>{

    err.message = err.message || "Internal Server Error";
    err.statusCode = err.statusCode || 500;
  return res.status(err.statusCode).json({
    success : false,
    meassage : err.message,
  });
});

export default ErrorHandler;