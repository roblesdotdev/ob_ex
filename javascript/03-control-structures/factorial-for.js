function factorialFor(x = 10) {
  let fac = 1;
  for (let i = x; i > 0; i--) {
    fac *= i;
  }
  return fac;
}

module.exports = {
  factorialFor,
};
