// métodos de console

console.log("Hello Node!")
console.info("Alert")
console.warn("Warn")
console.error("Error")

// váriaveis

var a = 10 
let b = 15
const c = 20

a = 'oi'
b = 500

console.log(a, b)

// tipos de dados

// string
const name = "Maria"
console.log(typeof name)
// number
const age = 35
console.log(typeof age)
// boolean
const isApproved = false
console.log(typeof isApproved)
// nulo
let lastName = null
console.log(typeof lastName)
// undefined
let address
console.log(typeof address)
// array
const languages = ['JavaScripto', 'Python']
console.log(typeof languages)
// objeto
const user = {name: 'Maria', email: 'maria@gmail.com'}
console.log(typeof user)

// métodos strings

const fullName = "Lucas do Espirito Santo Correa"

// conta os caracteres da variável
console.log(fullName.length)

// quebra a string conforme o caracter selecionado
const stringToArray = fullName.split(' ')
console.log(stringToArray)

// deixa a string com os caracteres maiusculos
console.log(fullName.toUpperCase())

// deixa a string com os caracteres minusculos
console.log(fullName.toLowerCase())

// encontra o indice do inicio da palavra
console.log(fullName.indexOf("do"))

// retira a string pelo indice
console.log(fullName.slice(9, 17))

//métodos de Array

const list = ['a', 'b', 'c', 'd', 'e']

// conta a quantidade de itens do array
console.log(list.length)

// busca o item do array pelo nome e traz o indice
console.log(list.indexOf("c"))

// busca um item especifico no array
console.log(list[2])

// inserir item no array sem método
list[5] = 'f'
console.table(list)

// inserir item no array com método
console.log(list.push('g'))
console.table(list)

// trazer o ultimo item do array
console.log(list[list.length - 1])

// remove o ultimo item do array
list.pop()
console.log(list)

// remove o primeiro item do array
list.shift()
console.log(list)

// insere um item no inicio do array
list.unshift('inicio')
console.log(list)

// retira um pedaço do array pelo indice 
console.log(list.splice(2, 5))

// objeto

const product = {
    name: 'camisa',
    price: 15.99,
    inStock: true,
    sizes: ['P', 'M', 'G']
}

// percorremos as propriedades do objeto
// com o .
console.log(product.name)

// adicionando uma nova propriedade no objeto
product.color = ['Azul', 'Rosa']

console.log(product)

// desestruturação de objeto
const { price, sizes } = product

console.log(price, sizes)

const alunoAddress = {
    "cep": "06449-150",
    "logradouro": "Rua Cajarana",
    "complemento": "",
    "bairro": "Parque Viana",
    "localidade": "Barueri",
    "uf": "SP",
    "ibge": "3505708",
    "gia": "2069",
    "ddd": "11",
    "siafi": "6213"
  }

  console.log(alunoAddress.siafi)

  // exemplo de desestruturaçâo
  const { logradouro, bairro } = alunoAddress
    
  console.log(logradouro, bairro)
    
  // JSON

  const cat = {
    name: 'Bola de Pelo',
    age: 2,
    race: 'Persa'
  }

  console.log(cat)

// transforma o dado que está em JSON em string
  const catString = JSON.stringify(cat)
  console.log(catString)
// transforma o dado em JSON
  const catToJson = JSON.parse(catString)
  console.log(catToJson)