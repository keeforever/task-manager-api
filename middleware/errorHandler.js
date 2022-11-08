const { CustomAPIError } = require("../error/createCustomError");
const errorHandler = (err, req, res, next) => {
  if (err instanceof CustomAPIError) {
    return res.status(err.status).json({ success: false, msg: err.message });
  }

  return res.status(500).json({
    success: false,
    msg: "Something went to wrong! Please try again later.",
  });
};

module.exports = errorHandler;
