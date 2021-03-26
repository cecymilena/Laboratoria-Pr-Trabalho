let fullName = prompt('Informe seu primeiro nome seguido do seu último sobrenome')

while (fullName.indexOf(' ')=== -1){
    fullName = prompt('Favor informar novamente com um espaço entre seu nome e sobrenome')
} 

let space = fullName.indexOf(' ')

let firstLetter = fullName.charAt(0)

let secondLetter = fullName.charAt(space + 1)

const letterCombination = firstLetter.toUpperCase() + secondLetter.toUpperCase()

document.write('Suas iniciais são ' + letterCombination)