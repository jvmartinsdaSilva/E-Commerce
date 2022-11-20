import { Itens } from "./Itens.js"

const AllItens = Itens

const Vitrine = document.getElementById('VitrinePrincipal')


function lerDados() {
    AllItens.map((item) => {
        imprimirNaTela(item)
    })
}

function imprimirNaTela(item) {
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


function VerMais(e) {
    const itemID = e.target.id
    const modalItem = document.getElementById('modalItem')
    modalItem.style.display = 'flex'
    MostrarItem(itemID)
}


function MostrarItem(itemID) {
    const containerItens = document.getElementById('InfosItem')
    containerItens.innerHTML = ''

    AllItens.map((item) => {
        if (item.id === itemID) {

            let divIMg = document.createElement('div')
            let img = document.createElement('img')
            img.src = item.img
            divIMg.appendChild(img)

            let NomeItem = document.createElement('p')
            NomeItem.textContent = item.nome

            let PrecoItem = document.createElement('p')
            PrecoItem.textContent = `Preço da unidade: ${item.preco.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}`

            let DescricaoItem = document.createElement('p')
            DescricaoItem.textContent = item.descricao

            let ItemEstoque = document.createElement('p')
            ItemEstoque.textContent = `Itens em estoque ${item.estoque}`

            let Quantidade = document.createElement('p')

            let QuantidadeBtnMenos = document.createElement('button')
            QuantidadeBtnMenos.id = itemID
            QuantidadeBtnMenos.onclick = RemoverUm
            QuantidadeBtnMenos.textContent = "<"

            let QuantidadeNumber = document.createElement('sapn')
            QuantidadeNumber.id = `sapnId${itemID}`
            QuantidadeNumber.textContent = item.quantidade

            let QuantidadeBtnMais = document.createElement('button')
            QuantidadeBtnMais.id = itemID
            QuantidadeBtnMais.onclick = AdicionarverUm
            QuantidadeBtnMais.textContent = ">"

            Quantidade.appendChild(QuantidadeBtnMenos)
            Quantidade.appendChild(QuantidadeNumber)
            Quantidade.appendChild(QuantidadeBtnMais)

            let Total = document.createElement('p')
            Total.textContent = `Total a pagar ${(item.quantidade * item.preco).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}`

            let BtnAddCarrinho = document.createElement('button')
            BtnAddCarrinho.classList.add('BtnItem')
            BtnAddCarrinho.id = itemID
            BtnAddCarrinho.textContent = "Adicionar ao carrinho"


            containerItens.appendChild(divIMg)
            containerItens.appendChild(NomeItem)
            containerItens.appendChild(DescricaoItem)
            containerItens.appendChild(PrecoItem)
            containerItens.appendChild(ItemEstoque)
            containerItens.appendChild(Quantidade)
            containerItens.appendChild(Total)
            containerItens.appendChild(BtnAddCarrinho)
        }
    })
}

function RemoverUm(e) {
    let meuId = e.target.id

    AllItens.map((item) => {
        if (item.id === meuId) {
            if (item.quantidade > 0) {
                item.quantidade--
                console.log(item.quantidade)
                return item.quantidade
            } else {
                return
            }
        }
    })
    MostrarItem(meuId)

}

function AdicionarverUm(e) {
    let meuId = e.target.id

    AllItens.map((item) => {
        if (item.id === meuId) {
            if (item.quantidade < item.estoque) {
                item.quantidade++
                console.log(item.quantidade)
                return item.quantidade
            } else {
                return
            }
        }
    })
    MostrarItem(meuId)

}

const buttonCloseModal = document.getElementById('closeModal')

buttonCloseModal.addEventListener('click', () => {
    const modalItem = document.getElementById('modalItem')
    modalItem.style.display = 'none'
})


lerDados()