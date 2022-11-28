const ctrlWrapper = (ctrl) => {
  async function wrapper(req, res, next) {
    try {
      await ctrl(req, res, next);
    } catch (error) {
      next(error);
    }
  }
  return wrapper;
};

module.exports = ctrlWrapper;
