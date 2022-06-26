function factorialBreak(x = 10) {
  let fac = 1;
  while (true) {
    fac *= x;
    x--;
    if (x === 1) break;
  }
  return fac;
}

module.exports = {
  factorialBreak,
};
