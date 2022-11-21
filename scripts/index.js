import { Itens } from "./Itens.js"


const Vitrine = document.getElementById('VitrinePrincipal')

let Carrinho = []

/* Lê e imprimi os dados na tela */


function lerDados() {
    Itens.map((item) => {
        imprimirNaTela(item)
    })
}

const Pesquisa = document.querySelector('#pesquisaNome')
const BtnPesquisa = document.querySelector('#BtnPesquisa')

BtnPesquisa.addEventListener('click', PesquisarItem)


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

/*    Parte responsavél para mostrar o item escolhido */

function MostrarItem(itemID) {
    const containerItens = document.getElementById('InfosItem')
    containerItens.innerHTML = ''

    Itens.map((item) => {
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
            Quantidade.classList.add('InfosQuantidade')

            let QuantidadeBtnMenos = document.createElement('button')
            QuantidadeBtnMenos.classList.add('BtnQuantidade')
            QuantidadeBtnMenos.id = itemID
            QuantidadeBtnMenos.onclick = RemoverUm
            QuantidadeBtnMenos.textContent = "<"

            let QuantidadeNumber = document.createElement('sapn')

            QuantidadeNumber.id = `sapnId${itemID}`
            QuantidadeNumber.textContent = item.quantidade

            let QuantidadeBtnMais = document.createElement('button')
            QuantidadeBtnMais.classList.add('BtnQuantidade')
            QuantidadeBtnMais.id = itemID
            QuantidadeBtnMais.onclick = AdicionarUm
            QuantidadeBtnMais.textContent = ">"

            Quantidade.appendChild(QuantidadeBtnMenos)
            Quantidade.appendChild(QuantidadeNumber)
            Quantidade.appendChild(QuantidadeBtnMais)



            let Total = document.createElement('p')
            Total.textContent = `Total a pagar ${(item.quantidade * item.preco).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}`

            let BtnAddCarrinho = document.createElement('button')
            BtnAddCarrinho.classList.add('BtnItem')
            BtnAddCarrinho.id = itemID
            BtnAddCarrinho.onclick = AdicionarCarrinho
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

    Itens.map((item) => {
        if (item.id === meuId) {
            if (item.quantidade > 0) {
                item.quantidade--
                return item.quantidade
            } else {
                return
            }
        }
    })
    MostrarItem(meuId)
}

function AdicionarUm(e) {
    let meuId = e.target.id

    Itens.map((item) => {
        if (item.id === meuId) {
            if (item.quantidade < item.estoque) {
                item.quantidade++
                return item.quantidade
            } else {
                return
            }
        }
    })
    MostrarItem(meuId)
}


function AdicionarCarrinho() {
    Carrinho = []

    Itens.map((item) => {
        if(item.quantidade > 0){
            Carrinho.push(item)
        }
    })
    
    
    closeModal()  
}


function PesquisarItem() {
    const PesquisaItem = Pesquisa.value.toLocaleLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")
    Vitrine.innerHTML = ''
    
    Itens.map((item) => {
        if (item.nome.toLocaleLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").indexOf(PesquisaItem) != -1) {
            console.log('Achou')
            imprimirNaTela(item)
        } else {
            console.log('Não Achou')
        }
    })

}


const buttonCloseModal = document.getElementById('closeModal')

buttonCloseModal.addEventListener('click', closeModal)

function closeModal () {
    const modalItem = document.getElementById('modalItem')
    modalItem.style.display = 'none'   
}


lerDados()