import { obterPessoas } from './service';

Array.prototype.meuReduce = function (callback, valorInicial) {
    let valorFinal = typeof valorInicial !== undefined ? valorInicial : this[0];
    for (let index = 0; index <= this.length; index++) {
        valorFinal = callback(valorFinal, this[index], this);
    }
    return valorFinal;
}
async function main() {
    try {
        const { results } = await obterPessoas('a');
        const pesos = results.map((item) => parseInt(item.height));
        const total = pesos.reduce((anterior, proximo) => {
            return anterior + proximo;
        }, 0);

        console.log(`total ${total}`);

        const minhaLista = [
            ['Mathues', 'Souza'],
            ['NodeBR', 'Java'],
        ];

        const total = minhaLista.reduce((anterior, proximo) => {
            return anterior.concat(proximo)
        }, []).join(', ');
    } catch (error) {
        console.error(`error ${error}`);
    }
}

main();