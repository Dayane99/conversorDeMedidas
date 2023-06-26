// criação de var's: declaração de variaveis utilizadas por todo sistema.

var categoria = document.getElementById('categoria')

var unidadeOrigem = document.getElementById('unidadeOrigem')

var unidadeDestino = document.getElementById('unidadeDestino')

var botao = document.getElementById('botao')

var recebeValor = document.getElementById('recebeValor')

var valorConvertido = document.getElementById('valorConvertido')

// evento de escuta do elemento categoria: toda vez que uma opção for selecionada (ocorrer uma mudança) os campos de unidades de origem e destino mudaram de acordo com a mesma.
categoria.addEventListener('change', function () {
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
})

// cálculos de conversão: armazena os calculos de todas as possibilidades de combinações de conversões requeridas.
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

// evento de escuta do botão de conversão: verifica se os campos estão preenchidos, e então navega pelo objeto baseado na categoria e nas unidades para encontrar a função do cálculo respectivo.
botao.addEventListener('click', function (event) {
    event.preventDefault()
    verificaCampos()
    var categoriaSelecionada = categoria.value
    if (categoriaSelecionada && recebeValor.value != "") {
        var valor = recebeValor.value
        valorConvertido.value = `${conversao[categoriaSelecionada][unidadeOrigem.value][unidadeDestino.value](+valor)}`

    }
})

// função limpa campos: todas as vezes que a categoria ou as unidades forem alteradas, o valor convertido será limpo.
function limpaCampos() {
    categoria.addEventListener('change', function () {
        unidadeDestino.innerHTML = ""
        valorConvertido.value = ""
    })
    unidadeOrigem.addEventListener('change', function () {
        valorConvertido.value = ""
    })
    unidadeDestino.addEventListener('change', function () {
        valorConvertido.value = ""
    })
}

// função de verificação: toda vez que o botão for clicado, irá verificar se todos os campos estão selecionados e se o valor a ser convertido existe, caso não mensagens de aleta correspondentes irão aparecer
function verificaCampos() {
    if (unidadeOrigem.value == "" || unidadeDestino.value == "") {
        alert("Por favor, selecione a unidade")
    }
    if (unidadeOrigem.value != "" && unidadeDestino.value != "" && recebeValor.value == "") {
        alert("Por favor, insira o valor")
    }
}