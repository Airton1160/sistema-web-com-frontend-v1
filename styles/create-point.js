/*  AQUI USADO O JS PARA INTEGRACAO DE UMA API PARA ESCOLHA AUTOMATICA DE ESTADOS/CIDADES*/

function populateUFs() {/*criar uma funcao para popular as Ufs*/
    const ufSelect = document.querySelector("select[name=uf]")
    fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados").then( (res) => {return res.json() } )
    .then( states => { 
         for(const state of states){
         ufSelect.innerHTML += `<option value="${state.id}">${state.nome}</option>`/*crase para inserir html >>${}interpolacao sempre olhar os nomes corretos na api*/
    }   
    } )
}
populateUFs()
function getCities(event) {
    const citySelect = document.querySelector("select[name=cidade]")
    const stateInput = document.querySelector("input[name=state]")
        const ufValue = event.target.value
        const indexOfSelectedState = event.target.selectedIndex
        stateInput.value = event.target.options[indexOfSelectedState].text
        const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${ufValue}/municipios`
        citySelect.innerHTML = "<option value>Escolha sua Cidade</option>"//aquii colocar para limpar antes
        citySelect.disabled = true

            fetch(url).then( (res) => { return res.json() } )
            .then( cities => {
                    
                for(const city of cities) {
                    citySelect.innerHTML += `<option value="${city.nome}">${city.nome}</option>`
                }
                citySelect.disabled = false//aqui deve se habilitar para funcionar
            })

        }

document.querySelector("select[name=uf]")
        document.addEventListener("change", getCities)

/* AGORA FAZENDO A PARTE DO ITENS DE COLETA MANIPULACAO DE ICONES E BOTÕES*/
/* PEGAR TODOS OS LI'S E COLOCA O ITENSTOCOLLECTION*/

const itensToCollection = document.querySelectorAll(".itens-grid li")/*aqio para listar todos os dentro de .itens-grid li*/
for(const item of itensToCollection) {/*para cada um deles ira fazer alguma coisa no itens*/
    item.addEventListener("click", handlerSelectedItem)/*evento de clike, qdo clica acontece algo*/
}

const collectableItens = document.querySelector("input[name=items")

var selectedItems = []
function handlerSelectedItem(event){
    const itemLi = event.target
    const itemId = itemLi.dataset.id/* ADICIONAR E REMOVER UMA CLASSE NO JAVASCRIPT, SELECIONAR E DESSELECIONAR ICONES*/
    itemLi.classList.toggle("selected")/* AQUI CLICA E DESCLICA*/

// verificar se existem itens selecionados, se sim pegar os itens selecionados
const alreadySelected = selectedItems.findIndex( function(item) {
    const itemencontrado = item == itemId// aqui faz um comparativo para ver se encontra
    return itemencontrado
})
// se já tiver selecionado, 
if( alreadySelected >= 0) {
//tirar a selecao
const itensfiltrados = selectedItems.filter( item => {
    const itemIsDifferent = item != itemId//compara se for diferente exclui
    return itemIsDifferent
})
selectedItems = itensfiltrados
} else {
// se não estiver selecionado, adicionar a seleção
selectedItems.push(itemId)
}
// atualizar o campo escondido com os itens selecionados
collectableItens.value = selectedItems

}
