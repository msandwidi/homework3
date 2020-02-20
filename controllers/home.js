const get_ping = (req, res) => {
  res.status(200).json({
    success: true,
    text: "Up and Running..."
  });
};

module.exports = app => {
  app.get("/", get_ping);
};