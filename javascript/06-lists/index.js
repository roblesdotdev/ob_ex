const shopList = ["tomatoes", "potatoes", "lettuce", "mayo", "cream"];

shopList.push("sunflower oil");

shopList.pop();

const movies = [
  {
    title: "Foo",
    director: "John Doe",
    year: new Date(2020, 5, 5),
  },
  {
    title: "Bar",
    director: "Mary Jane",
    year: new Date(1997, 5, 23),
  },
  {
    title: "Baz",
    director: "Julia Sanz",
    year: new Date(2003, 11, 10),
  },
];

const moviesAfter2010 = movies.filter((m) => m.year > new Date(2010, 0, 1));

const directors = movies.map((m) => m.director);

const titles = movies.map((m) => m.title);

const directors_titles = directors.concat(titles);

const directors_titles_2 = [...directors, ...titles];

