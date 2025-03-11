function login(event) {
    event.preventDefault();

    var user = document.getElementById('user').value;
    var senha = document.getElementById('senha').value;
    var email = document.getElementById('email').value;


    if (user == 'admin' && senha == 123456 && email != "") {
        Swal.fire({
            title: 'Login realizado!',
            text: 'Bem-vindo, ' + user + '!',
            icon: 'success',
            confirmButtonText: 'OK'
        })
    } else {
        Swal.fire({
            title: 'Erro!',
            text: 'Usuário ou senha incorretos.',
            icon: 'error',
            confirmButtonText: 'Tentar novamente'
        });
    }
}