const btnSubmit = document.getElementById('btnSubmit');
// console.log(btnSubmit);

const usuarios = [];

btnSubmit.addEventListener('click', (e) => {
     e.preventDefault();
     //console.log(e.target.form[0].value);

     const email = e.target.form[0].value;
     const senha = e.target.form[1].value;

     if(email === '' && senha === '') {
          alert('Preencha o formulário!');
     } else {
          const user = {
               email: email,
               senha: senha
          }

          salvarDados(user);
          limparCampos();

          alert('Formulário preenchido com sucesso!');
     }
});

function salvarDados(user) {
     usuarios.push(user);
     console.log(usuarios);
}

function limparCampos() {
     document.getElementById('emailUser').value = '';
     document.getElementById('passwordUser').value = '';
}

function valida() {

}