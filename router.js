const express = require("express");
const { getIntro } = require('./provice');

const router = express.Router();

// 主页路由
router.get("/", (req, res) => {
  const name = req.query.name;
  res.send(getIntro(name));
});

module.exports = router;
