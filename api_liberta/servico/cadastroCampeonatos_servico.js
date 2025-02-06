import poll from "./conexao.js";

export async function cadastraCampeonato(campeao, vice, ano) {
    const conexao = await poll.getConnection();

    const resposta = await conexao.query(
        'INSERT INTO campeonatos (campeao, vice, ano) VALUES (?, ?, ?)' ,
        [campeao, vice, ano]);
        console.log(resposta);
        conexao.release();
}