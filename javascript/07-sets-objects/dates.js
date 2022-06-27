const now = new Date();

const birth = new Date(1992, 4, 2);

const comp = now > birth;

const day = birth.getDate();
const month = birth.getMonth() + 1;
const year = birth.getFullYear();

console.log(day, month, year)
