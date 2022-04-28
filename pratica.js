const botao = document.getElementById("mode-selector");
const titulo = document.getElementById("page-title");
const body = document.getElementsByTagName("body")[0];
const footer = document.getElementsByTagName("footer")[0];

function changeMode() {
  changeclasses();
  changeText();
}

function changeclasses() {
  botao.classList.toggle("dark-mode");
  titulo.classList.toggle("dark-mode");
  body.classList.toggle("dark-mode");
  footer.classList.toggle("dark-mode");
}

function changeText() {
  if (body.classList.contains("dark-mode")) {
    botao.innerHTML = "light Mode";
    titulo.innerHTML = "dark Mode ON";
    return;
  }
  botao.innerHTML = "dark-mode";
  titulo.innerHTML = "lightMode";
}

botao.addEventListener("click", changeMode);
