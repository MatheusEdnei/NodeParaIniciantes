/*

0 Obter usuario
1 Obter o numero de telefone de um usuario a partir de seu ID
2 obter o endereco do usuário pelo Id

*/

/*
  quando der algum problema -> reject(ERRO)
  quando sucess -> RESOLVE
*/
function obterUsuario() {
  return new Promise(function resolvePromise(resolve, reject) {
    setTimeout(function () {
      return resolve({
        id: 1,
        nome: "Aang",
        dataNascimento: new Date(),
      });
    }, 1000);
  });
}

function obterTelefone(idUsuario) {
  return new Promise(function resolverPromise(resolve, reject){
    setTimeout(() => {
      return resolve({
        telefone: "71080702929",
        dd: 71,
      });
    }, 2000);
  }) 
}

function obterEndereco(idUsuario, callback) {
  setTimeout(() => {
    return callback(null, {
      rua: "dos bobos",
      numero: 0,
    });
  }, 2000);
}

/* 
    para manipular o sucesso usamos a função .then
    para manipular erros, usamos o .catch
*/
const usuarioPromise = obterUsuario();
usuarioPromise
  .then(function (usuario) {
    return obterTelefone(usuario.id);
  })
  .then(function (resultado) {
    console.log("resultado ", resultado);
  })
  .catch(function (error) {
    console.error("DEU RUIM", error);
  });

// function resolverUsuario(erro, usuario) {
//     console.log('usuario', usuario);
// }

// obterUsuario( function resolverUsuario(error, usuario) {

//     if (error) {
//         console.error ('DEU RUIM em USUARIO', error);
//         return;
//     }

//     obterTelefone(usuario.id, function resolverTelefone(error1, telefone) {
//         if (error) {
//             console.error ('DEU RUIM em TELEFONE', error1);
//             return;
//         }

//         obterEndereco(usuario.id, function resolverEndereco(error2, endereco) {
//             if (error) {
//                 console.error ('DEU RUIM em ENDERECO', error2);
//                 return;
//             }

//             console.log(`
//                 Nome: ${usuario.nome},
//                 Endereco: ${endereco.rua}, ${endereco.numero},
//                 Telefone: ${telefone.dd}, ${telefone.telefone}
//             `)
//         });
//     });
// });
 ,