/*
  0 Obter usuario
  1 Obter o numero de telefone de um usuario a partir de seu ID
  2 obter o endereco do usuário pelo Id
*/

/*
  quando der algum problema -> reject(ERRO)
  quando sucess -> RESOLVE
*/

// importamos um modulo interno do node.js
import util from 'util';

const obterEnderecoAsync = util.promisify(obterEndereco);

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
        ddd: 71,
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
  1º passo - adicionar a palavra async na função e ela automaticamente retornará uma Promise
*/
async function main() {
  try {

    console.time('medida-promise');

    const usuario = await obterUsuario();

    const resultado = await Promise.all([
      obterTelefone(usuario.id),
      obterEnderecoAsync(usuario.id),
    ]);

    const [ telefone, endereco ] = [...resultado];

    console.log(`
      Nome: ${usuario.nome}
      Telefone: (${telefone.ddd} ${telefone.telefone})
      Endereço: ${endereco.rua}, ${endereco.numero}
    `);

    console.timeEnd('medida-promise');

  } catch (error) {
    console.log('error', error);
  }
}

main();

