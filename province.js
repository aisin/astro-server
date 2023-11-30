const bj = require('./intros/bj');
const sh = require('./intros/sh');
const hb = require('./intros/hb');
const gd = require('./intros/gd');

const mp = {
  bj,
  sh,
  hb
};

const getIntro = function(name) {
  const res = mp[name];
  return res || gd;
};

module.exports = { getIntro };
