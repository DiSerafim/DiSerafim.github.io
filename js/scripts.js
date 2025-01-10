// Aprendizado Popup <---</
document.addEventListener("click", (e) => {
  if(e.target.classList.contains("btn-detalhes")) {
    toggleAprendizadosPopup();
    document.querySelector(".aprendizados-popup").scrollTo(0,0);
    aprendizadosDetalhes(e.target.parentElement);
  }
})

function toggleAprendizadosPopup() {
  document.querySelector(".aprendizados-popup").classList.toggle("open");
  document.body.classList.toggle("esconder-scrolling");
  document.querySelector(".principal").classList.toggle("fade-out");
}

document.querySelector(".pp-close").addEventListener("click", toggleAprendizadosPopup);

// Próximo
document.addEventListener("click", (e) => {
  if(e.target.classList.contains("pp-interno")) {
    toggleAprendizadosPopup();
  }
});

// Descrição
function aprendizadosDetalhes(portfolioItem) {
  // img
  document.querySelector(".pp-miniaturas img").src =
  portfolioItem.querySelector(".aprendizados-miniaturas img").src;
  // titulo
  document.querySelector(".pp-header h3").innerHTML =
  portfolioItem.querySelector(".aprendizados-titulo").innerHTML;
  // detalhes
  document.querySelector(".pp-body").innerHTML =
  portfolioItem.querySelector(".aprendizados-detalhes").innerHTML;
}