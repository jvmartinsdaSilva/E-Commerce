import { Itens } from "./Itens.js";
import { closeModal } from "./MostrarItem.js"
import { VerMais } from "./MostrarItem.js";

const BtnCloseCarrinho = document.getElementById('CloseCarrinho')
const CarrinhoModal = document.getElementById('modalCarrinho')

let Carrinho = []

BtnCloseCarrinho.addEventListener('click', FecharCarrinho)

export function AdicionarCarrinho() {
    Carrinho = []

    Itens.map((item) => {
        if (item.quantidade > 0) {
            Carrinho.push(item)
        }
    })

    console.log(Carrinho)
    MostratItensCarrinho()
    closeModal()
}

export function MostrarCarrinho () {
    CarrinhoModal.style.display = 'flex'
}

export function FecharCarrinho () {
    CarrinhoModal.style.display = 'none'
}

function MostratItensCarrinho(){
    const CarrinhoItens = document.getElementById('CarrinhoItens')
    CarrinhoItens.innerHTML = ''

    Carrinho.map((item) => {
        let ItemCarrinho = document.createElement('div')
        ItemCarrinho.classList.add('CarrinhoItem')

        let DivImg = document.createElement('div')
        DivImg.classList.add('CarrinhoItemImg')
        let itemImg = document.createElement('img')
        itemImg.src = item.img

        DivImg.appendChild(itemImg)
        ItemCarrinho.appendChild(DivImg)   

        let itemInfos = document.createElement('div')
        itemInfos.classList.add('CarrinhoItemInfos')

        let itemNome = document.createElement('h2')
        itemNome.textContent = item.nome

        let itemQuantidade = document.createElement('p')
        itemQuantidade.textContent = `${item.quantidade} unidades`

        let itemTotal = document.createElement('p')
        itemTotal.textContent = (item.quantidade * item.preco).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })

        itemInfos.appendChild(itemNome)
        itemInfos.appendChild(itemQuantidade)
        itemInfos.appendChild(itemTotal)
        ItemCarrinho.appendChild(itemInfos)
   
        
        let itemMenu = document.createElement('div')
        itemMenu.classList.add('CarrinhoItemMenu')
        
        let BtnEdit = document.createElement('button')
        BtnEdit.classList.add('BtnEdit')
        BtnEdit.id = item.id
        BtnEdit.onclick = VerMais
        let BtnExc = document.createElement('button')
        BtnExc.classList.add('BtnExc')
        BtnExc.id = item.id
        
        itemMenu.appendChild(BtnEdit)
        itemMenu.appendChild(BtnExc)

        ItemCarrinho.appendChild(itemMenu)

        CarrinhoItens.appendChild(ItemCarrinho)
        
    })
}