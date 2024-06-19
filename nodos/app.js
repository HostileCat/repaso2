import {datos} from "./datos.js";

// identificamos el elemento por la clase

const padre = document.querySelector('.container')

// creamos un nodo

const nodo = document.createElement('p')

const texto = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, neque nemo quia ea nam facilis fugiat reprehenderit quis beatae porro maxime blanditiis iusto suscipit ab obcaecati qui optio tenetur sit?'

nodo.innerHTML = texto

padre.appendChild(nodo)

const list = document.querySelector("div.container > div.card > ul.list")

datos.map(a => {
  const item = document.createElement('li')
  const texto = a.name
  item.innerHTML = texto
  list.appendChild(item).classList.add('item')
})

console.log(datos)