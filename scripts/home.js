import { Itens } from "./Itens.js"

const AllItens = Itens

const Vitrine = document.getElementById('VitrinePrincipal')


function lerDados () {
    AllItens.map((item) => {
        imprimirNaTela(item)  
    })
}

function imprimirNaTela(item){
    let div = document.createElement('label')
    div.classList.add('item')
    div.id = item.id

    let ImgItem = document.createElement('img')
    ImgItem.src = item.img

    let NomeItem = document.createElement('p')
    NomeItem.textContent = item.nome

    let PrecoItem = document.createElement('p')
    PrecoItem.textContent = item.preco.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})

    let ButtonAdd = document.createElement('button')
    ButtonAdd.id = item.id
    ButtonAdd.classList.add('BtnItem')
    ButtonAdd.onclick = VerMais
   
       
    div.appendChild(ImgItem)
    div.appendChild(NomeItem)
    div.appendChild(PrecoItem)
    div.appendChild(ButtonAdd)

    Vitrine.appendChild(div)
}

function VerMais(e){
    const itemID = e.target.id
    const modalItem = document.getElementById('modalItem')
    modalItem.style.display = 'flex'
    MostrarItem(itemID) 
}


function MostrarItem(itemID){
    const containerItens = document.getElementById('InfosItem')
    containerItens.innerHTML = ''
    AllItens.map((item) => {
        if(item.id === itemID){
            

            let divIMg = document.createElement('div')
            let img = document.createElement('img')
            img.src = item.img
            divIMg.appendChild(img)

            let NomeItem = document.createElement('p')
            NomeItem.textContent = item.nome

            let PrecoItem = document.createElement('p')
            PrecoItem.textContent = `Preço da unidade: ${item.preco.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}`

            let DescricaoItem = document.createElement('p')
            DescricaoItem.textContent = item.descricao


            containerItens.appendChild(divIMg)
            containerItens.appendChild(NomeItem)
            containerItens.appendChild(DescricaoItem)
            containerItens.appendChild(PrecoItem)
        }
    })
}

const buttonCloseModal = document.getElementById('closeModal')

buttonCloseModal.addEventListener('click', () => {
    const modalItem = document.getElementById('modalItem')
    modalItem.style.display = 'none'    
})


lerDados()