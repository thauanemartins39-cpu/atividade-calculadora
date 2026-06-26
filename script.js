// Armazena o elemento do visor para não precisar buscá-lo toda vez
const visor = document.getElementById('visor');

function adicionar(valor) {
    // Se o valor for o operador de divisão, inserimos o símbolo visual ÷
    // Caso contrário, inserimos o valor normal.
    if (valor === '/') { // Divisão
        visor.value += '÷';
    } else if (valor === '*') { // Multiplicação
        visor.value += '×';
    } else {
        visor.value += valor;
    }
}

function limparTudo() {
    visor.value = '';
}

function apagar() {
    // Remove o último caractere do visor
    visor.value = visor.value.slice(0, -1);
}

function calcular() {
    try {
        let expressao = visor.value.replace(/÷/g, '/').replace(/×/g, '*');
        visor.value = eval(expressao);
    } catch {
        visor.value = "Erro";
    }
}

// Funções Científicas
function calcCientifico(operacao) {
    let valorAtual = parseFloat(visor.value);
    
    switch(operacao) {
        case 'sin': visor.value = Math.sin(valorAtual).toFixed(4); break;
        case 'cos': visor.value = Math.cos(valorAtual).toFixed(4); break;
        case 'tan': visor.value = Math.tan(valorAtual).toFixed(4); break;
        case 'sqrt': visor.value = Math.sqrt(valorAtual); break;
        case 'pow': visor.value += '**'; break; // Prepara para potência (ex: 2**)
    }
}