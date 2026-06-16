function entrar(){
    let email, senha;
    let message;
  
   
    email =( document.getElementById( "email" ).value );
    senha =( document.getElementById( "senha" ).value );
    message =( document.getElementById( "message" ).value );

    if (senha == "123" && email == "igor@gmail.com"){
        document.getElementById("message").innerHTML = "Email e senha corretos! Redirecionando..."
    }else{
          document.getElementById("message").innerHTML = "Email e senha incorretos!"
    }
}

function entrando(){
    return entrar;
}