const name = "Aldo R. Robles";
const age = 30;
const isDeveloper = true;
const date = new Date(1992, 5, 2);
const favBook = {
  title: "Lorem",
  author: "John Doe",
  pubDate: new Date(1997, 1, 24),
  srcUrl: new URL("https://google.com").href,
};

const lst = [name, age, isDeveloper, date, favBook];

function printData() {
  console.info(lst);
}

printData();
