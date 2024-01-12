let nb = Math.floor(Math.random() * 100);
let nombre;
let i = 0
console.log(nb)

while (i < 1) {
  nombre = prompt("Donnez moi un nombre")
  if(nombre > nb){
    alert("C'est moins");
  } else if(nombre < nb) {
    alert("C'est plus");
  } else {
    i++
    alert("Cest gagné")
  }
};

console.log("Vous avez saisi le nombre : " + nombre);
