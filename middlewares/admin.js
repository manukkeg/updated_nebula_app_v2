const admin = async (req, res, next) => {
  try {
    // No token verification, allow all requests
    next();
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = admin;