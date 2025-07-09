function exponencial(base, expoente) {
  // Imagino que não possa usar isso: return Math.pow(base, expoente)
  let total = base
  for (i = 1; i < expoente; i++) {
    total *= base
  }
  return total
}

console.log(exponencial(2, 2))
console.log(exponencial(2, 5))
console.log(exponencial(4, 3))
console.log(exponencial(12, 2))
