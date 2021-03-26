let total = parseInt(prompt('Qual sua receita bruta?'))
let cost = parseInt(prompt('Quais são seus custos?'))
let taxPercent = parseInt(prompt('Quantos por cento você paga de impostos?'))

let grossProfit = total-cost

let tax = grossProfit*taxPercent/100

let revenue = grossProfit-tax


document.write('Sua renda líquida é de $'+revenue)