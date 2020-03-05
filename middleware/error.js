function errorHandler(error, req, res, next) {
  // Log to console for dev
  console.log(error.stack.red);

  res.status(500).json({
    success: false,
    errror: error.message
  });
}

module.exports = errorHandler;
