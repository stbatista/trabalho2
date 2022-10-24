const enviar = () =>{
    let email = document.getElementById("email").value
    let senha = document.getElementById("senha").value

    if (email !== '' && senha !== ''){
        alert ('Login Realizado com Sucesso!')
    }else{
        alert ('Por gentilza, preencha todos os campos!')
    }

    }