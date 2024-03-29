import EventEmitter from 'events';

class MeuEmissor extends EventEmitter {

}

const meuEmissor = new MeuEmissor();
const nomeEvento = 'usuario:click';

meuEmissor.on(nomeEvento, (click) => {
    console.log('um usuario clicou', click);
});

const stdin = process.openStdin();
stdin.addListener('data', (value) => {
    console.log(`Voce digitou: ${value.toString().trim()}`);
}); 

/*
meuEmissor.emit(nomeEvento, 'na brra de rolagem');
meuEmissor.emit(nomeEvento, 'no ok');

let count = 0;
setInterval(() => {
    meuEmissor.emit(nomeEvento, 'no ok ' + (count++));
}, 1000);
*/