const projectButtons = document.querySelectorAll(".project-btn");
const projectMessage = document.getElementById("project-message");

console.log("Botones encontrados", projectButtons.length);
console.log("Elemento mensaje:", projectMessage);

projectButtons.forEach(button => {
  button.addEventListener("click", (event) => {
    event.preventDefault();

    projectMessage.textContent =
      "Este proyecto estará disponible pronto 🚧";
    projectMessage.style.display = "block";
  });
});


