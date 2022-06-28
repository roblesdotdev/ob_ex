const name = "John";
const lastname = "Doe";

const data = {
  name,
  lastname,
};

sessionStorage.setItem("data", JSON.stringify(data));
localStorage.setItem("data", JSON.stringify(data));

const now = new Date();

document.cookie = `data=${JSON.stringify(data)};expires=${new Date(
  now.getTime() + 2 * 60_000
)}`;

// REMOVE ALL
sessionStorage.removeItem("data");
localStorage.removeItem("data");
