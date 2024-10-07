let proximoId = 1

function adicionarLinha () {
    // entrada de valores do formulário
    const id = document.getElementById('id').value;
    const produto = document.getElementById('produto').value;
    const segmento = document.getElementById('segmento').value;
    const marca = document.getElementById('marca').value;
    const valor = document.getElementById('valor').value;
    const data = document.getElementById('data').value;

    // se for preenchido vazio
    if(id === '' || produto === '' || segmento === '' || marca === '' || valor === '' || data === '') {
        alert("Todos os campos precisam ser preenchidos!")
    } else { 
        // cria uma linha da tabela se não existir
        const tabela = document.getElementById('tabelaDados').getElementsByTagName ('tbody') [0];
    
        // inserindo uma nova linha
        const novaLinha = tabela.insertRow();
        
        // inserindo os valores da linha
        const celid = novaLinha.insertCell(0);
        const celproduto = novaLinha.insertCell(1);
        const celsegmento = novaLinha.insertCell(2);
        const celmarca = novaLinha.insertCell(3);
        const celvalor = novaLinha.insertCell(4);
        const celdata = novaLinha.insertCell(4);
    
        // inserindo os valores das celulas
        celid.innerHTML = id;
        celproduto.innerHTML = produto;
        celsegmento.innerHTML = segmento;
        celmarca.innerHTML = marca;
        celvalor.innerHTML = valor;
        celdata.innerHTML = data;
    
        proximoId++
    
        // limpar formulario
        document.getElementById('linhaForm').reset();
    
        }
    }
                