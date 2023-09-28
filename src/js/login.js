function login() {
  let name = document.getElementById("name").value;
  let password = document.getElementById("password").value;

  // Recuperar os usuários do Local Storage
  let usuarios = JSON.parse(localStorage.getItem("usuarios") || "[]");

  // Verificar se não existem usuários
  if (usuarios.length === 0) {
    Swal.fire({
      icon: "info",
      title: "Oops...",
      text: "Não há usuários cadastrados!",
      footer: "Cadastre-se primeiro"
    });
    return;
  }

  for (const user of usuarios) {
    if (user.nome === name && user.senha === password) {
      window.location.href = "./src/html/buscaEndereco.html";
      break;
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Usuário ou Senha incorreta!",
        footer: "tente novamente"
      });
    }
  }
}
