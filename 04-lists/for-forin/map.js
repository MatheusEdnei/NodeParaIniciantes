import { obterPessoas } from './service';

Array.prototype.meuMap = function (callback) {
    const novoArrayMapeado = [];
    for (let index = 0; index <= this.length - 1; index++) {
        const result = callback(this[index], index);
        novoArrayMapeado.push(result);
    }
    return novoArrayMapeado;
}

async function main() {
    try {
        const results = await obterPessoas('a');
        const names = [];

        results.results.array.forEach((element) => {
            names.push(element.name);
        });
        console.log(`Names: ${names}`);

        const namesMap = results.results.map((pessoa) => {
            return pessoa.name;
        });
        console.log(namesMap);

        const namesMeuMap = results.results.meuMap((pessoa, indice) => {
            return `[${indice}]${pessoa.name}`;
        })
    } catch (error) {
        console.error('Error: ', error);
    }
}

main();