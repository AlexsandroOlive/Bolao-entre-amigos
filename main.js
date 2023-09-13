function adicionarNomes() {
    if (nomes.length >= 20) {
        alert("Você já adicionou 20 nomes. Não é possível adicionar mais.");
        return;
    }
    
    for (var i = 1; i <= 20; i++) {
        var nome = document.getElementById('nome' + i).value;
        if (nome !== '') {
            nomes.push(nome);
            document.getElementById('nome' + i).value = '';
        }
    }
}

var nomes = [];

function adicionarNome() {
    if (nomes.length >= 20) {
        alert("Você já adicionou 20 nomes. Não é possível adicionar mais.");
        return;
    }
    
    var nome = document.getElementById('nome').value;
    nomes.push(nome);
    document.getElementById('nome').value = '';
}

function sorteiarNomes(nomes) {
    var indice = Math.floor(Math.random() * nomes.length);
    return nomes[indice];
}

function exibirNomeSorteado() {
    if (nomes.length === 0) {
        alert("Não há nomes para sortear.");
        return;
    }
    
    var nomeSorteado = sorteiarNomes(nomes);
    document.getElementById('nomeSorteado').innerText = 'Parabéns, o nome ' + nomeSorteado + ' foi sorteado.';
}

