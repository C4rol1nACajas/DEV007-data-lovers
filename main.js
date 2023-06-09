import { ordenarPokemones } from "./data.js";
// import data from './data/lol/lol.js';
import data from "./data/pokemon/pokemon.js";
import { filterData } from "./data.js";
// import data from './data/rickandmorty/rickandmorty.js';
//console.log(example, data);
//console.log(data.pokemon[0]);
const enlistar = document.getElementById("Pokemon");
const pokeList = data.pokemon;
function mostrarpokemones(listadoPokemones) {
  enlistar.innerHTML = "";
  listadoPokemones.forEach(
    (element) =>
      (enlistar.innerHTML += `<div class="caracteristica"> <div>${element.num}</div><p>${element.name}</p><img src=${element.img}>  <div>${element.type}</div></div>`)
  );
}
const select = document.getElementById("ordenamiento");
select.addEventListener("change", () => {
  const selectedOpttion = select.value;
  //console.log(selectedOpttion);
  const newData = ordenarPokemones(selectedOpttion);
  mostrarpokemones(newData);
});
window.onload = function () {
  //console.log("carga");
  mostrarpokemones(pokeList);
};
//Trae a los pokemons por tipo
const seleccionarTipo = document.getElementById("seleccionar-tipo");
seleccionarTipo.addEventListener("change", () => {
  const type = seleccionarTipo.options[seleccionarTipo.selectedIndex].value;
  //console.log(type);
  if (type === "All") {
    mostrarpokemones(pokeList);
  } else {
    mostrarpokemones(filterData(data, type));
  }
});
