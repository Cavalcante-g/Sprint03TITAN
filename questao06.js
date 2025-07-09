function jurosSimples(capital, juros, tempo) {
  let total = capital * juros * tempo
  let montante = capital + total
  console.log(montante)
}

function jurosComp(capital, juros, tempo) {
  let montante = capital * Math.pow(1 + juros, tempo)
  let aplicacao = montante - capital
  console.log(aplicacao.toFixed(2))
}

console.log("Exemplo 1: Capital de R$ 1000 aplicada em uma taxa de juros simples de 30% ao mês, durante um ano. Resposta:")
jurosSimples(1000, 0.3, 12)

console.log("Exemplo 2: Capital de R$ 500 aplicada em uma taxa de juros composto de 5% ao mês, durante 8 meses. Qual o valor de uma aplicação sob o regime de juros compostos? Resposta:")
jurosComp(500, 0.05, 8)
