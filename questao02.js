function triangle(x, y, z) {
  if (typeof x != "number" || typeof y != "number" || typeof z != "number" || x < 0 || y < 0 || z < 0) {
    return "Valores inválidos! Insira novos parâmetros."
  } 
  else {
    if (x == y && x == z) {return "Equilátero"} 
    else if (x == y || x == z || y == z) {return "Isóceles"} 
    else {return "Escaleno"}
  }
}

console.log(triangle(1, 1, 1))
console.log(triangle("a", 2, 1))
console.log(triangle("a", "b", "c"))
console.log(triangle(3, 3, 1))
console.log(triangle(1, 2, 7))
console.log(triangle(-1, -2, 7))
