const paragraphs = document.querySelectorAll("p");
const sections = document.querySelectorAll("section");

paragraphs.forEach((p) => {
  p.addEventListener("dragstart", (event) => {
    console.log("Dragging" + p.innerText);
    p.classList.add("dragging");
    event.dataTransfer.setData("id", p.id);
    const gosth = document.querySelector(".gosth-img");
    event.dataTransfer.setDragImage(gosth, 0, 0);
  });

  p.addEventListener("dragend", () => {
    // console.log("He terminado de arrastrar")
    p.classList.remove("dragging");
  });
});

sections.forEach((s) => {
  s.addEventListener("dragover", (event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = "copy"; // copy por defecto
    // console.log("Drag Over")
  });

  s.addEventListener("drop", (event) => {
    console.log("Drop");
    const id_p = event.dataTransfer.getData("id");
    // console.log("Párrafo id: ", id_parrafo)
    const p = document.getElementById(id_p);
    s.appendChild(p);
  });
});

const eraser = document.querySelector(".eraser");

eraser.addEventListener("dragover", (event) => {
  event.preventDefault();
  event.dataTransfer.dropEffect = "copy";
});

eraser.addEventListener("drop", (event) => {
  const id_p = event.dataTransfer.getData("id");
  document.getElementById(id_p).remove();
});
