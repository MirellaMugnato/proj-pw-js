let proximoId = 1

function adicionarLinha () {
    // entrada de valores do formulário
    const nome = document.getElementById ("Nome").value;
    const idade = document.getElementById ("Idade").value;
    const admissao = document.getElementById ("Admissão").value;
    const demissao = document.getElementById ("Demissão").value;

    // se for preenchido vazio
    if(nome === '' || idade === '' || admissao === '') {
        alert("Preencha todos os campos")
    }

    // cria uma linha da tabela se não existir
    const tabela = document.getElementById("tabelaDados").getElementsByTagName ('tbody') [0];

    // inserindo uma nova linha
    const novaLinha = tabela.insertRow();
    
    // inserindo os valores da linha
    const celulaId = novaLinha.insertCell(0);
    const celNome = novaLinha.insertCell(1);
    const celIdade = novaLinha.insertCell(2);
    const celAdmissao = novaLinha.insertCell(3);
    const celDemissao = novaLinha.insertCell(4);

    // inserindo os valores das celulas
    celulaId.innerHTML = proximoId;
    celNome.innerHTML = nome;
    celIdade.innerHTML = idade;
    celAdmissao.innerHTML = admissao;
    celDemissao.innerHTML = demissao;

    proximoId++

    // limpar formulario
    document.getElementById("linhaForm").reset();
}