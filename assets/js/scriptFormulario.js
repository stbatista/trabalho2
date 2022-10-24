//API CEP

const preencherEndereco = (endereco) =>{
    document.getElementById('estado').value = endereco.uf
    document.getElementById('cidade').value = endereco.localidade
    document.getElementById('bairro').value = endereco.bairro
    document.getElementById('rua').value = endereco.logradouro
}

const pesquisarCEP = async () =>{
    let cep = document.getElementById('cep').value
    let viacep = `http://viacep.com.br/ws/${cep}/json/`
    let dados = await fetch(viacep)
    let endereco = await dados.json()
    if (endereco.hasOwnProperty('erro')){
        alert('CEP Inválido')
    }else{
    preencherEndereco(endereco)
    }
}

document.getElementById('cep').addEventListener('focusout', pesquisarCEP)


//Confirmando Senha
let senha = document.getElementById("senha"), confirm_senha = document.getElementById("confirmSenha");

const validarSenha = () =>{
  if(senha.value != confirm_senha.value) {
    confirm_senha.setCustomValidity("As senhas são diferentes!");
  } else {
    confirm_senha.setCustomValidity('');
  }
}

senha.onchange = validarSenha;
confirm_senha.onkeyup = validarSenha;


//Botão
const cadastro = () =>{
  let nome = document.getElementById("nomeCompleto").value
  let rg = document.getElementById("rg").value
  let email = document.getElementById("email").value
  let senha = document.getElementById("senha").value
  let confirmSenha = document.getElementById("confirmSenha").value
  let cep = document.getElementById("cep").value
  let estado = document.getElementById("estado").value
  let cidade = document.getElementById("cidade").value
  let bairro = document.getElementById("bairro").value
  let rua = document.getElementById("rua").value
  let numero = document.getElementById("numero").value


  if (nome !== '' && rg !== '' && email !== '' && senha !== '' && confirmSenha !== '' && cep !== '' && estado !== '' && cidade !== '' && bairro !== '' && rua !== '' && numero !== ''){
      alert ('Cadastro Realizado com Sucesso')
  }else{
      alert ('Por gentilza, preencha todos os campos corretamente!')
  }

  }