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

const padre = dom.getElementById('cards')



const nuevo = [...padre.children]

nuevo.map((a, i) => {
  if (i % 2 ==! 0) {
    a.classList.toggle("bg-white")

    console.log(a.children)

    const parrafo = a.children[1].children[1]

    parrafo.classList.toggle("color")
    
    // const hijo = [...a.children]

    // console.log(hijo)
  }
})

console.log(nuevo)


const $input = dom.querySelector('.search__form > .input')

$input.setAttribute("autocomplete", "off")
$input.removeAttribute("placeholder")


console.log($input)

// custom properties CSS

const $html = dom.documentElement

// const mineshaft = getComputedStyle($html).getPropertyValue("--mine-shaft")

// $html.style.setProperty("--mine-shaft", "fff")
// $html.style.setProperty("--white", "000")

// console.log(mineshaft)

const $parrafo = dom.querySelector('#elementos')

$parrafo.innerHTML = `Parrafo ipsum <b>dolor</b> sit amet consectetur adipisicing elit. <b>Nemo</b> aliquam labore rem quo culpa excepturi repellat dolores molestiae magni, commodi quidem sed reprehenderit nobis quae doloremque eius, natus qui explicabo?`