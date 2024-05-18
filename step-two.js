function Soma(numOne, numTwo) {
    return numOne + numTwo 
}

console.log('O valor da soma é:', Soma(10, 15))

function ValidaTamanho(name) {
    if (name.length > 15) {
        return "sua mãe não te ama"
    } else if (name.length > 3) {
        return "nome valido"
    } else {
        return "nome invalido"
    }
}

function buscaCPF(name) {

    switch (name) {
        case "Joao": return 10120230344
        case "Maria": return 98974634620
        case "Roberto": return 87452194563
        default: return "nome não tem cadastro"
    }

}

console.log(buscaCPF("Roberto"))

function AddSr(name) {
    if (typeof(name) === 'string'){
        return `Sr. ${name}`
    } else {
        return "digite um nome valido"
    }
}

console.log(AddSr("Joao"))

function Aprovacao(nota) {
    return ((typeof(nota) === 'number') && (nota > 7 ? "Aprovado" : "Reprovado"))
}

console.log(Aprovacao("texto"))


function ValideNota(nota) {
    if (nota > 7) {
        return "Apto"
    } else if (nota <= 6 && nota >= 5) {
        return "Recuperação"
    } {
        return "Reprovado"
    }
}

console.log(ValideNota(8))
console.log(ValideNota(6))
console.log(ValideNota(1))