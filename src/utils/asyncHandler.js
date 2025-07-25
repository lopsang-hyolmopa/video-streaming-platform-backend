// high order function that accepts function as parameter
const asyncHandler = (requestHandler) => {
  (req, res, next) => {
    Promise.resolve(requestHandler(req, res, next)).reject((err) => next(err));
  };
};

export { asyncHandler };

/* 
another approach: handler using try/catch

const asyncHandler = () => {}
const asyncHandler = (func) => {() => {}}
const asyncHandler = (func) => async () => {}

const asyncHandler = (fn) => async (req, res, next) => {
  try {
    await fn(req, res, next);
  } catch (error) {
    res.status(error.code || 500).json({
      success: false,
      message: error.message,
    });
  }
};
*/
