var categoria = document.getElementById('categoria')

var unidadeOrigem = document.getElementById('unidadeOrigem')

var unidadeDestino = document.getElementById('unidadeDestino')

var botao = document.getElementById('botao')

var recebeValor = document.getElementById('recebeValor')

var valorConvertido = document.getElementById('valorConvertido')

categoria.addEventListener('change', selecionaCategoria)

function selecionaCategoria() {
    limpaCampos()
    if (categoria.value == 'comprimento') {
        unidadeOrigem.innerHTML = `
        <option value="">Selecione</option>
        <option value="metros">Metros</option>
        <option value="centimetros">Centimetros</option>
        <option value="polegadas">Polegadas</option>
        `
        unidadeOrigem.addEventListener("change", function () {
            if (unidadeOrigem.value == "metros") {
                unidadeDestino.innerHTML = `
                <option value="">Selecione</option>
                <option value="centimetros">Centimetros</option>
                <option value="polegadas">Polegadas</option>
                `
            } else if (unidadeOrigem.value == "centimetros") {
                unidadeDestino.innerHTML = `
                <option value="">Selecione</option>
                <option value="metros">Metros</option>
                <option value="polegadas">Polegadas</option>
                `
            } else if (unidadeOrigem.value == "polegadas") {
                unidadeDestino.innerHTML = `
                <option value="">Selecione</option>
                <option value="metros">Metros</option>
                <option value="centimetros">Centimetros</option>
                `
            }

        })

    }
    if (categoria.value == 'peso') {
        unidadeOrigem.innerHTML = `
        <option value="">Selecione</option>
        <option value="quilograma">Quilograma</option>
        <option value="gramas">Gramas</option>
        <option value="libra">Libra</option>
        `
        unidadeOrigem.addEventListener("change", function () {
            if (unidadeOrigem.value == "quilograma") {
                unidadeDestino.innerHTML = `
                <option value="">Selecione</option>
                <option value="gramas">Gramas</option>
                <option value="libra">Libra</option>
                `
            } else if (unidadeOrigem.value == "gramas") {
                unidadeDestino.innerHTML = `
                <option value="">Selecione</option>
                <option value="quilograma">Quilograma</option>
                <option value="libra">Libra</option>
                `
            } else if (unidadeOrigem.value == "libra") {
                unidadeDestino.innerHTML = `
                <option value="">Selecione</option>
                <option value="quilograma">Quilograma</option>
                <option value="gramas">Gramas</option>
                `
            }
        })
    }
    if (categoria.value == 'temperatura') {
        unidadeOrigem.innerHTML = `
        <option value="">Selecione</option>
        <option value="celsius">Celsius</option>
        <option value="fahrenheit">Fahrenheit</option>
        <option value="kelvin">Kelvin</option>
        `
        unidadeOrigem.addEventListener("change", function () {
            if (unidadeOrigem.value == "celsius") {
                unidadeDestino.innerHTML = `
                <option value="">Selecione</option>
                <option value="fahrenheit">Fahrenheit</option>
                <option value="kelvin">Kelvin</option>
                `
            } else if (unidadeOrigem.value == "fahrenheit") {
                unidadeDestino.innerHTML = `
                <option value="">Selecione</option>
                <option value="celsius">Celsius</option>
                <option value="kelvin">Kelvin</option>
                `
            } else if (unidadeOrigem.value == "kelvin") {
                unidadeDestino.innerHTML = `
                <option value="">Selecione</option>
                <option value="celsius">Celsius</option>
                <option value="fahrenheit">Fahrenheit</option>
                `
            }
        })
    }
}

const conversao = {
    comprimento: {
        metros: {
            centimetros: function (metros) {
                return metros * 100
            },
            polegadas: function (metros) {
                return (metros * 39.37).toFixed(2)
            }
        },
        centimetros: {
            metros: function (centimetros) {
                return centimetros / 100
            },
            polegadas: function (centimetros) {
                return (centimetros / 2.54).toFixed(6)
            }
        },
        polegadas: {
            metros: function (polegadas) {
                return polegadas / 39.37
            },
            centimetros: function (polegadas) {
                return polegadas * 2.54
            }
        },
    },
    peso: {
        quilograma: {
            gramas: function (quilograma) {
                return quilograma * 1000
            },
            libra: function (quilograma) {
                return quilograma * 2.205
            }
        },
        gramas: {
            quilograma: function (gramas) {
                return gramas / 1000
            },
            libra: function (gramas) {
                return (gramas / 456.6).toFixed(6)
            }
        },
        libra: {
            quilograma: function (libra) {
                return (libra / 2.205).toFixed(6)
            },
            gramas: function (libra) {
                return libra * 456.6
            }
        },
    },
    temperatura: {
        celsius: {
            fahrenheit: function (celsius) {
                return (celsius * 9 / 5) + 32
            },
            kelvin: function (celsius) {
                return celsius + 273.15
            }
        },
        fahrenheit: {
            celsius: function (fahrenheit) {
                return ((fahrenheit - 32) * 5 / 9).toFixed(2)
            },
            kelvin: function (fahrenheit) {
                return ((fahrenheit - 32) * 5 / 9 + 273.15).toFixed(2)
            }
        },
        kelvin: {
            celsius: function (kelvin) {
                return kelvin - 273.15
            },
            fahrenheit: function (kelvin) {
                return ((kelvin - 273.15) * 9 / 5 + 32).toFixed(2)
            }
        },
    }

}

botao.addEventListener('click', function (event) {
    event.preventDefault()
    verificaCampos()
    var categoriaSelecionada = categoria.value
    if (categoriaSelecionada && recebeValor.value != "") {
        var valor = recebeValor.value
        valorConvertido.innerHTML = `${conversao[categoriaSelecionada][unidadeOrigem.value][unidadeDestino.value](+valor)}`

    }
})

function limpaCampos() {
    categoria.addEventListener('change', function () {
        unidadeDestino.innerHTML = ""
        recebeValor.value = ""
        valorConvertido.innerHTML = ""
    })
    unidadeOrigem.addEventListener('change', function () {
        recebeValor.value = ""
        valorConvertido.innerHTML = ""
    })
    unidadeDestino.addEventListener('change', function () {
        recebeValor.value = ""
        valorConvertido.innerHTML = ""
    })
}

function verificaCampos() {
    if (unidadeOrigem.value == "" || unidadeDestino.value == "") {
        alert("Por favor, selecione a unidade")
    }
    if (unidadeOrigem.value != "" && unidadeDestino.value != "" && recebeValor.value == "") {
        alert("Por favor, insira o valor")
    }
}