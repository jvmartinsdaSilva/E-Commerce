import { Itens } from "./Itens.js";
import { AdicionarCarrinho } from "./Carrinho.js";
import { FecharCarrinho } from "./Carrinho.js";


export function VerMais(e) {
    const itemID = e.target.id
    const modalItem = document.getElementById('modalItem')
    modalItem.style.display = 'flex'
    FecharCarrinho()
    MostrarItem(itemID)
}


function MostrarItem(itemID) {
    const ContainerInfos = document.getElementById('InfosItem')
    const ContainerItem = document.getElementById('ContainerItem')
    ContainerInfos.innerHTML = ''

    Itens.map((item) => {
        if (item.id === itemID) {

            let divIMg = document.createElement('div')
            divIMg.classList.add('InfosImg')
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
            BtnAddCarrinho.textContent = "Salvar no carrinho"


            ContainerInfos.appendChild(divIMg)
            ContainerInfos.appendChild(NomeItem)
            ContainerInfos.appendChild(DescricaoItem)
            ContainerInfos.appendChild(PrecoItem)
            ContainerInfos.appendChild(ItemEstoque)
            ContainerInfos.appendChild(Quantidade)
            ContainerInfos.appendChild(Total)
            ContainerInfos.appendChild(BtnAddCarrinho)
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


const buttonCloseModal = document.getElementById('closeModalItem')
buttonCloseModal.addEventListener('click', closeModal)

 export function closeModal() {
    const modalItem = document.getElementById('modalItem')
    modalItem.style.display = 'none'
}