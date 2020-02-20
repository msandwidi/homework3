const get_indes = async (req, res) => {
  res.status(200).json({ success: true });
};

module.exports = app => {
  app.get("/", get_indes);
};
