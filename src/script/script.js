var categoria = document.getElementById('categoria')

var unidadeOrigem = document.getElementById('unidadeOrigem')

// var unidadeDestino = document.getElementById('unidadeDestino')

function selecionaCategoria() {
    if (categoria.value == 'comprimento') {
        unidadeOrigem.innerHTML = `
        <option value="metros">Metros</option>
        <option value="centimetros">Centimetros</option>
        <option value="polegadas">Polegadas</option>
        `
    }
    if (categoria.value == 'peso') {
        unidadeOrigem.innerHTML = `
        <option value="quilograma">Quilograma</option>
        <option value="gramas">Gramas</option>
        <option value="libras">Libras</option>
        `
    }
    if (categoria.value == 'temperatura') {
        unidadeOrigem.innerHTML = `
        <option value="celsius">Celsius</option>
        <option value="fahrenheint">Fahrenheint</option>
        <option value="kelvin">Kelvin</option>
        `
    }
}

categoria.addEventListener('change', selecionaCategoria)