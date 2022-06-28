const btn = document.getElementById("btn");

btn.addEventListener("click", (e) => {
  alert("Button clicked");
});

(() => {
  $("#btn-jq").click(() => {
    console.log("Jquery in action");
  });
})();
