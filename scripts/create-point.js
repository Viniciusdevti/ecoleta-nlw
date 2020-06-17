function populateUfs() {
  const ufSelect = document.querySelector("select[name=uf]");
  fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
    .then((res) => res.json())
    .then((states) => {
      for (state of states) {
        ufSelect.innerHTML += `  <option value="${state.id}">${state.nome}</option>`;
      }
    });
}

populateUfs();

function getCity(e) {
  const citySelect = document.querySelector("select[name=city]");
  const stateInput = document.querySelector("input[name=state]");

  const ufValue = e.target.value;

  const indexOfSelectStage = event.target.selectedIndex;

  stateInput.value = event.target.options[indexOfSelectStage].text;
  const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${ufValue}/distritos`;

  citySelect.innerHTML = " <option value> Selecione a cidade</option>"
  citySelect.disabled = true;

  fetch(url)
    .then((res) => res.json())
    .then((cities) => {
      for (city of cities) {
        citySelect.innerHTML += `  <option value="${city.id}">${city.nome}</option>`;
      }

      citySelect.disabled = false;
    });
}


 document
  .querySelector("select[name=uf]")
  .addEventListener("change", getCity);


  // Itens de coleta

  const itensToColect = document.querySelectorAll(".itens-grid li")

  for( itens of itensToColect){
    itens.addEventListener("click", handleSelectedItem )
  }


function handleSelectedItem(e){
  const itemLi = e.target

  itemLi.classList.toggle("selected")

  console.log(itemLi.dataset.id)

}