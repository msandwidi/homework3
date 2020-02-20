post_login = async (req, res) => {
  return res.status(200).json({
    success: true,
    token: "this is my secret token"
  });
};

module.exports = app => {
  app.post("/api/users/login", post_login);
};
