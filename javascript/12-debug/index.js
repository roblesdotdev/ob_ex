function fiboLst(max) {
  if (typeof max !== "number" || max < 1)
    throw Error("Max must be a positive integer");
  if (max === 1) return [1];
  if (max === 2) return [1, 1];
  let lst = [1, 1];
  for (let i = 2; i < max; i++) {
    lst.push(lst[i - 1] + lst[i - 2]);
  }
  return lst;
}

try {
  console.log(fiboLst(12));
} catch (e) {
  console.error(e.toString());
}
