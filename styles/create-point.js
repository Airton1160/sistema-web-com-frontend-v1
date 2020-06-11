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
        citySelect.innerHTML = "<option>Escolha sua Cidade</option>"//aquii colocar para limpar antes
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
        .addEventListener("change", getCities)

/* AGORA FAZENDO A PARTE DO ITENS DE COLETA MANIPULACAO DE ICONES E BOTÕES*/



        
        


