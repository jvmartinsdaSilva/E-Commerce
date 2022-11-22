import { Itens } from "./Itens.js";
import { MostrarProduto } from "./MostrarProdutos.js";
import { MostrarCarrinho } from "./Carrinho.js";

const Vitrine = document.getElementById('VitrinePrincipal')
const Pesquisa = document.querySelector('#pesquisaNome')
const BtnPesquisa = document.querySelector('#BtnPesquisa')
const BtnCarrinho = document.getElementById('BtnCarrinho')


BtnPesquisa.addEventListener('click', PesquisarItem)
BtnCarrinho.addEventListener('click', MostrarCarrinho)



function lerDados() {
    Itens.map((item) => {
        MostrarProduto(item)
    })
}


function PesquisarItem() {
    const PesquisaItem = Pesquisa.value.toLocaleLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")
    Vitrine.innerHTML = ''

    Itens.map((item) => {
        if (item.nome.toLocaleLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").indexOf(PesquisaItem) != -1) {
            
            MostrarProduto(item)
        } else {
            
        }
    })

}

lerDados()

