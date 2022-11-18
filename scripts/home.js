import { Itens } from "./Itens.js"


const AllItens = Itens

const Vitrine = document.querySelector('.VitrinePrincipal')


function lerDados () {
    AllItens.map((item) => {
        let nome = item.nome
        let preco = item.preco.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})
        let id = item.id
        let img = item.img

        imprimir(nome, preco, id, img)  
    })
}

function imprimir(nome, preco, id, img){

    let div = document.createElement('div')
    div.classList.add('item')

    let imgTela = document.createElement('img')
    imgTela.src = img

    let NomeTela = document.createElement('p')
    NomeTela.textContent = nome

    let PrecoTela = document.createElement('p')
    PrecoTela.textContent = preco

    let ButtonAdd = document.createElement('button')
    ButtonAdd.id = id
    ButtonAdd.classList.add('BtnAddItem')
    ButtonAdd.textContent = 'Adicionar'
    
    
    div.appendChild(imgTela)
    div.appendChild(NomeTela)
    div.appendChild(PrecoTela)
    div.appendChild(ButtonAdd)

    Vitrine.appendChild(div)
}


function teste () {
    const btns = document.querySelectorAll('.BtnAddItem')

    for(const btn of btns){
    console.log('oi')
    }
}
teste()


lerDados()