function cadastrar(event) {
    event.preventDefault();

    var user = document.getElementById('user').value;
    var senha = document.getElementById('senha').value;
    var confime = document.getElementById('confirmSenha').value;
    var email = document.getElementById('email').value;

    if (user == 'admin' && senha == 123456 && senha == confime && email != "") {
        Swal.fire({
            title: 'Cadastro realizado!',
            text: 'Bem-vindo, ' + user + '!',
            icon: 'success',
            confirmButtonText: 'OK'
        }).then(() => {
            setTimeout(() => {
                location.href = "./html/login.html";
            }, 100); 
        });
    } else {
        Swal.fire({
            title: 'Erro!',
            text: 'Usuário ou senha incorretos.',
            icon: 'error',
            confirmButtonText: 'Tentar novamente'
        });
    }
}