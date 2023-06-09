import data from "./data/pokemon/pokemon.js";

export const ordenarPokemones = (ordenamiento) => {
  const sortedData = data.pokemon.sort(function (a, b) {
    if (ordenamiento === "A-Z") {
      if (a.name.toLowerCase() < b.name.toLowerCase()) {
        return -1;
      }
    }
    if (ordenamiento === "Z-A") {
      if (a.name.toLowerCase() > b.name.toLowerCase()) {
        return -1;
      }
    }
  });
  //console.log(sortedData)
  return sortedData;
};

//Filtra la data por tipo de pokemon
export const filterData = (data, condition) => {
  const result = data.pokemon.filter((item) =>
    item.type.includes(condition.toLowerCase())
  );
  //console.log(result)
  return result;
};
