import { Itens } from "./Itens.js";
import { closeModal } from "./MostrarItem.js"

let Carrinho = []

export function AdicionarCarrinho() {
    Carrinho = []

    Itens.map((item) => {
        if (item.quantidade > 0) {
            Carrinho.push(item)
        }
    })

    console.log(Carrinho)

    closeModal()
}

