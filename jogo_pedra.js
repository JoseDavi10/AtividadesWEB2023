const PEDRA = "Pedra";
const PAPEL = "Papel";
const TESOURA = "Tesoura";

function escolharandomica() {
    return [PEDRA, PAPEL, TESOURA][Math.floor(Math.random() * 3)];
}

class Jogador {
    constructor(nome = "npc"){
    this.nome = nome;
    this.vitorias = 0;
    this._escolha = null;
    }


get escolha() { return this._escolha};

set escolha(valor) { this._escolha = [PEDRA, PAPEL, TESOURA].includes(valor) ? valor : PEDRA};
}

const p1 = new Jogador("LUL22");
const npc = new Jogador();

npc.escolher = function(){
    this.escolha = escolharandomica();
};

((nome = "Chico") => console.log(`Seja bem-vindes ${nome}. A partida vai começar`))(p1.nome);

console.log("é sua vez. Digite: ");
console.log("P - > Pedra");
console.log("T -> Tesoura");
console.log("L - > Papel");

function verifica_escolha(escolha){
    switch (escolha){
        case 'P':
            return PEDRA;
        case 'T':
            return TESOURA;
        case 'L':
            return PAPEL;
        default:
            return false;
    }
}

const deuEmpate = (escolhaJogador, escolhaNPC) => escolhaJogador == escolhaNPC;

const venceu = function (escolhaJogador, escolhaNPC){
    if (
        (escolhaJogador == PEDRA && escolhaNPC == TESOURA) ||
        (escolhaJogador == TESOURA && escolhaNPC == PAPEL) ||
        (escolhaJogador == PAPEL && escolhaNPC == PEDRA)
    ){
    return true;
}
    return false;
}

const imprimeResultado = (vitoriasJogador, vitoriasNPC) => {
    if(vitoriasJogador > vitoriasNPC) {
        console.log(`Parabuiens vc venceu a melhor de 3, por ${vitoriasJogador} a ${vitoriasNPC}`);
    }else {
        console.log(`infelizmente vc perdeu a melhor de 3, de ${vitoriasNPC} a ${vitoriasJogador}`);
    }
}

do{
    p1.escolha = PEDRA;
    npc.escolher();

    if (deuEmpate(p1.escolha, npc.escolha)){
        console.log(`Empate. VC e o computador escolheram ${p1.escolha}`);
    }
    else{
        console.log(`infelizmente vc perdeu a melhor de 3, de ${vitoriasNPC} a ${vitoriasJogador}`);
    }
}

do{
    p1.escolha = PEDRA;
    npc.escolher();

    if(deuEmpate(p1.escolha, npc.escolha)){
        console.log(`Empate. Vc e o computador escolheram ${p1.escolha}`);
    }else{
        const venci = venceu(p1.escolha, npc.escolha);
        const resultado = venci ? "venceu" : "perdeu";
        venci ? p1.vitorias++ : npc.vitorias++;
        console.log(`Vc ${resultado}. Vc escolheu ${p1.escolha}e o computador escolheu ${npc.escolha}.`);

    }
} while (Math.max(p1.vitorias, npc.vitorias) < 3);

imprimeResultado(p1.vitorias, npc.vitorias);

