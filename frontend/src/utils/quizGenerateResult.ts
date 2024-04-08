export default async function quizGenerateResult(req:any){
    const respostasCorretas:any = {
        quiz_1: 'Etanol',
        quiz_2: 'Etanol',
        quiz_3: 'Etanol',
        quiz_4: 'Sim',
        quiz_5: 'Gasolina',
        quiz_6: 'Combustível', 
        quiz_7: 'Brasil',
        quiz_8: 'Petróleo',
    };

    let contadorRespostasCorretas = 0;

    Object.keys(req).forEach(chave => {
        if (chave.startsWith('quiz_')) {
            if (req[chave] === respostasCorretas[chave]) {
                    contadorRespostasCorretas++;
            }
        }
    });   

    return contadorRespostasCorretas;
}
