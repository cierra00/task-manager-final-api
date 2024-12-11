const errorHandler = (err, req, res, next) => {
    console.error(err.stack); // Log the error stack trace
  
    res.status(err.status || 500).json({
      success: false,
      message: err.message || 'Internal Server Error',
    });
  };
  
  module.exports = errorHandler;