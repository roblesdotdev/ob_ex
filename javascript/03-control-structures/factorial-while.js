function factorialWhile(x = 10) {
  let fac = 1;
  while (x > 0) {
    fac *= x;
    x--;
  }
  return fac;
}

module.exports = {
  factorialWhile,
};
