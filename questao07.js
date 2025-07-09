function bhaskara (a, b, c) {
  let delta = Math.pow(b, 2) - (4 * a * c)
  let raizDelta = Math.sqrt(delta)
  if (raizDelta < 0) {
    return "Delta é negativo"
  }
  else {
    let resposta = []
    let x1 = (-b + raizDelta) / (2 * a)
    resposta.push(x1)
    let x2 = (-b - raizDelta) / (2 * a)
    resposta.push(x2)
    return resposta
  }
}

console.log(bhaskara(1, 5, -14))
console.log(bhaskara(-1, 1, 12))
console.log(bhaskara(3, 2, -8))