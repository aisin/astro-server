const express = require("express");
const { getIntro } = require('./province');

const router = express.Router();

// 主页路由
router.get("/", (req, res) => {
  const name = req.query.name;
  res.json(getIntro(name));
});

module.exports = router;
