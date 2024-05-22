// A função principal
function calculaRank(vitorias, derrotas) {
    let ranking = vitorias - derrotas;
    let rankName = "(não rankeado)";
    if (ranking < 10) {
        rankName = "Ferro";
    } else if (ranking >= 11 && ranking <= 20) {
        rankName = "Bronze";
    } else if (ranking >= 21 && ranking <= 50) {
        rankName = "Prata";
    } else if (ranking >= 51 && ranking <= 80) {
        rankName = "Ouro";
    } else if (ranking >= 81 && ranking <= 90) {
        rankName = "Diamante";
    } else if (ranking >= 91 && ranking <= 100) {
        rankName = "Lendário";
    } else if (ranking >= 101) {
        rankName = "Imortal";
    }     
    return rankName;
};

// Daos a entrar
let vitoriasHeroi = 55;
let derrotasHeroi = 22;

// Mostrar a saída
const rank = calculaRank(vitoriasHeroi, derrotasHeroi);
const saldo = vitoriasHeroi - derrotasHeroi;
console.log(`O Herói tem de saldo de ${saldo} está no nível de ${rank}`);