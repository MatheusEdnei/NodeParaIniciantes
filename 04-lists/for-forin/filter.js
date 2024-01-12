import { obterPessoas } from './service.js';

Array.prototype.meuFilter = function (callback) {
    const list = [];
    for(item in this) {
        const result = callback(item, index, this);
        if(!result) continue;
        list.push(item);
    }
    return list;
}

async function main() {
    try {
        const { results } = await obterPessoas('a');

        const familyLars = results.filter((item) => {
            /*
                Por padrão precisamos retornar um booleano 
                para informar se devemos manter ou remover o elemento da nova lista
                false -> remove da lista
                true -> mantém
                não encontrou o item = -1
                encontrou = posicao no array;
            */

            const result = item.name.toLowerCase().indexOf('lars') !== -1;
            return result;
        });
        const names = familyLars.map(pessoa => pessoa.name);

        const family = result.meuFilter((item, index, list) => { 
            console.log(`index: ${index}`, list.length);
            item.name.toLowerCase().indexOf('lars') !== -1;
        });

        console.log(names);
    } catch (error) {
        console.error(`Error ${error}`);
    }
}

main();