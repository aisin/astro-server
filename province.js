const bj = require('./intros/bj');
const sh = require('./intros/sh');
const heb = require('./intros/heb');
const hen = require('./intros/hen');
const gd = require('./intros/gd');
const gx = require('./intros/gx');
const hun = require('./intros/hun');
const hub = require('./intros/hub');
const fj = require('./intros/fj');
const han = require('./intros/han');
const yn = require('./intros/yn');
const js = require('./intros/js');
const ah = require('./intros/ah');
const zj = require('./intros/zj');
const sc = require('./intros/sc');
const cq = require('./intros/cq');
const xz = require('./intros/xz');
const xj = require('./intros/xj');
const gz = require('./intros/gz');
const ln = require('./intros/ln');
const jl = require('./intros/jl');
const hlj = require('./intros/hlj');
const tj = require('./intros/tj');
const xg = require('./intros/xg');
const am = require('./intros/am');
const tw = require('./intros/tw');
const shx = require('./intros/shx');
const sx = require('./intros/sx');
const gs = require('./intros/gs');
const qh = require('./intros/qh');
const sd = require('./intros/sd');
const nmg = require('./intros/nmg');
const nx = require('./intros/nx');
const jx = require('./intros/jx');

const mp = {
  bj,
  sh,
  heb,
  hen,
  gd,
  gx,
  hun,
  hub,
  fj,
  han,
  yn,
  js,
  ah,
  zj,
  sc,
  cq,
  xz,
  xj,
  gz,
  ln,
  jl,
  hlj,
  tj,
  xg,
  am,
  tw,
  shx,
  sx,
  gs,
  qh,
  sd,
  nmg,
  nx,
  jx,
};

const getIntro = function(name) {
  const res = mp[name];
  return { detail: res || bj };
};

module.exports = { getIntro };
