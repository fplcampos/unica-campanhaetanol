"use client"

import Link from "next/link";

export default function QuizResult({ result, onResetQuiz }: any) {
    let message = "";
    let message_comp = "";
    console.log(result);

    if (result <= 2) {
        message = `Puxa. Você realmente precisa de uma inspeção urgente no seu conhecimento.`

        message_comp = `Deixe o Etanol entrar mais na sua vida, no seu coração e no seu carro e não deixe de ler mais em nosso site sobre os mitos e verdades em torno destes combustíveis.
        
        Boa leitura!`;
    } else if (result >= 3 && result <= 5) {
        message = `Você já sabe um pouco sobre o Etanol, mas você ainda tem um potencial de ser um futuro expert. A gente está te esperando.`

        message_comp = `Mas, calma lá. Você precisa antes dar uma paradinha no posto, abastecer com o Etanol e ver como é bom para você, para seu carro, para o Brasil e para o meio ambiente.`;
    } else if (result >= 6) {
        message = `Uau. Você é realmente um especialista em Etanol.`

        message_comp = `Que orgulho <3 Agora é hora de colocar em prática e contar aos 4 cantos todos os benefícios que envolvem o Etanol brasileiro.
        
        A gente conta com você, agora que já sabemos que é nosso embaixador(a).        
        Vem com a gente.`;
    }


    return (
        <>
            <div className={`${result < 5 ? 'bg-light-yellow' : 'bg-green-result'} rounded-xl w-full h-full md:max-w-[752px] md:max-h-[472px] md:w-[752px] md:h-[472px] font-prometo text-xl md:text-2xl font-bold text-center relative md:absolute top-0 md:top-7 left-1/2 -translate-x-1/2 py-4`}>
                <div className="w-9/12 md:mt-[45px] m-auto mb-6">
                    <h4 className="mb-6 whitespace-pre-line">{message}</h4>
                    <p className="whitespace-pre-line">{message_comp}</p>
                </div>
                <div className="flex flex-col">
                    <Link href={'https://unica.com.br/setor-sucroenergetico/etanol/'} className="rounded-full bg-white font-normal font-prometo text-base px-6 py-3 mb-5 w-8/12 md:w-3/12 m-auto" target="_blank">
                        Saiba mais
                    </Link>
                    <Link onClick={onResetQuiz} href={'#'} className="font-normal font-prometo text-base">
                        Refazer quiz
                    </Link>
                </div>
            </div>
        </>
    )

}

