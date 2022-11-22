import { VerMais  } from "./MostrarItem.js";



const Vitrine = document.getElementById('VitrinePrincipal')


export function MostrarProduto(item) {
    
    let div = document.createElement('label')
    div.classList.add('itemVitrine')
    div.id = item.id

    let ImgItem = document.createElement('img')
    ImgItem.src = item.img

    let NomeItem = document.createElement('p')
    NomeItem.textContent = item.nome

    let PrecoItem = document.createElement('p')
    PrecoItem.textContent = item.preco.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })

    let ButtonAdd = document.createElement('button')
    ButtonAdd.id = item.id
    ButtonAdd.classList.add('BtnItem')
    ButtonAdd.textContent = 'Ver mais'
    ButtonAdd.onclick = VerMais


    div.appendChild(ImgItem)
    div.appendChild(NomeItem)
    div.appendChild(PrecoItem)
    div.appendChild(ButtonAdd)

    Vitrine.appendChild(div)
    
}

