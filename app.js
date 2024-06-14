let win = window
let dom = document
let body = dom.body
let divs = dom.querySelectorAll('div')
let div = dom.querySelector('div')
let form = dom.forms
let poridnuevo = dom.querySelector('#documento')
let porclase = dom.querySelector('.container')
let porclaseall = dom.querySelectorAll('.container')
let porid = dom.getElementById('documento')

let atributo = dom.getElementsByName('search')
let oldclass = dom.getElementsByClassName('input')
let liitems = dom.querySelectorAll('ul.list>li.item')

// pasar a mayuscula
const api = dom.getElementById('api')

console.log(win)
console.log(dom)
console.log(dom.doctype)
console.log(dom.head)
console.log(dom.body)
console.log(dom.body.children)
console.log(dom.body.children[1])
console.log(divs)
console.log(div)
console.log(form)
console.log(dom.links)
console.log(dom.images)
console.log(porid)
console.log(poridnuevo)
console.log(porclase)
console.log(porclaseall)
console.log(atributo)
console.log(oldclass)
console.log(liitems)




const listaA= [...body.children]
console.log(listaA)
console.clear()
console.log(api)

api.innerHTML = "¿QUE ES API?"

console.log(body.childNodes)