"use client"

import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const registerFormSchema = z.object({
    gasTankQuantity: z
        .string()
        .nonempty('Campo obrigatório!')
});

type CalculatorFormData = z.infer<typeof registerFormSchema>

interface EmissionData {
    ethanolEmission: number;
    annualEthanolEmission: number;
    gasolineEmission: number;
    annualGasolineEmission: number;
    avoidedEmisson: number;
    annualAvoidedEmission: number;
    gasolineEmissionTon: number;
}


export default function Calculator() {

    const [showResult, setShowResult] = useState(false);
    const [results, setResults] = useState<EmissionData>();
    const [isLoading, setIsLoading] = useState(false);

    const [tooltip, setTooltip] = useState(false);

    const resetCalculate = () => {
        setShowResult(false);
    }

    const [showModal, setShowModal] = useState(false);

    const closeModal = () => {
        setTooltip(false);
    };

    const showToolTip = () => {
        setTooltip(true);
    }

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm<CalculatorFormData>({
        resolver: zodResolver(registerFormSchema)
    });

    const calculate = async (data: CalculatorFormData) => {
        setIsLoading(true)

        fetch('/api/calculator', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then((response) => response.json())
            .then((data) => {
                setIsLoading(false)
                setResults(data)
                setShowResult(true);
                reset({ gasTankQuantity: '' });
            })
            .catch((error) => {
                setIsLoading(false)
                console.error(error)
            });
    }



    return (
        <>
            {
                tooltip &&
                <>
                    <div className="fixed top-[15%] w-[600px] max-w-full mx-auto left-0 right-0 bg-[#aaf9de] z-[999] p-5 rounded-md border-[#006A80] border-2">
                        <h2 className="font-bold text-[#006A80]">METODOLOGIA DE CÁLCULO</h2>
                        <ul className="my-2 text-sm">
                            <li>O usuário deverá informar a quantidade de tanques de combustível (cuja capacidade padrão assumimos ser 55 litros) consumido por mês. (1 - INPUT).</li>
                            <li>Utilizando os parâmetros de conteúdo energético de cada combustível (MJ / Litro) podemos calcular quantos MJ o consumo de combustível (em litros) representa, e utilizando a intensidade de carbono (g CO2 / MJ), qual a emissão em CO2 equivalente total por ano dessa demanda (2 - CÁLCULOS).</li>
                            <li>Considerando as emissões de cada combustível, calculamos a diferença entre aquela incorrida pelo uso de Gasolina C e de Etanol Hidratado. (3 - RESULTADOS).</li>
                        </ul>

                        <h2 className="font-bold text-[#006A80]">PREMISSAS DE CÁLCULO</h2>
                        <ul className="my-2 text-sm">
                            <li>O conteúdo energético de cada combustível tem como fonte a Agência Nacional de Petróleo e Biocombustíveis do Brasil.</li>
                            <li>A intensidade de carbono da gasolina A corresponde ao valor de referência utilizado pela Política Nacional de Biocombustíveis do Brasil - RenovaBio (cerca de 87,4 gCO2/MJ). A intensidade de carbono do etanol corresponde a média das certificações para etanol anidro e hidratado dos produtores brasileiros no RenovaBio. Todas as intensidades de carbono são calculadas considerando o ciclo de vida dos combustíveis.</li>
                        </ul>
                        <span onClick={closeModal} className="px-4 py-2 bg-blue-500 text-black text-base font-medium rounded-md w-full block m-auto text-center cursor-pointer">
                            Fechar
                        </span>
                    </div>
                </>

            }
            <section id="calculadora" className="py-20 px-4 md:px-0 bg-gradient-to-b from-[#FFF5A200] to-[#FFF5A299]">
                <div className="container relative">
                    <h2 className="text-center text-[26px] md:text-[56px] uppercase font-prometo text-[#006A80] mb-1">
                        <strong>Calcule e veja</strong> como a qualidade <br className="hidden md:block" />
                        do ar pode melhorar.
                    </h2>
                    <p className="md:text-[24px] text-[18px] font-prometo text-black text-center mb-10">
                        Ao escolher ETANOL, você colabora com o meio ambiente.
                    </p>

                    {!showResult ? (
                        <div className="flex justify-center flex-wrap lg:flex-nowrap">
                            <div className={`bg-[#006A80] rounded-t-3xl rounded-s-none lg:rounded-l-full w-full lg:w-6/12 px-4 py-10 lg:pl-20 lg:pr-10 flex flex-col items-end justify-end`}>
                                <p className="text-3xl text-white font-prometo font-normal mb-2 whitespace-pre-wrap">Quantos tanques de combustível você consome por mês?</p>
                                <p className="text-[#FFF5A2] text-[16px] font-prometo">*Com Etanol, as emissões de gases que agravam o efeito estufa podem ser até 4 vezes menores em relação a gasolina.</p>
                            </div>

                            <div className="bg-[#00BCB8] rounded-b-3xl md:rounded-b-none md:rounded-r-full w-full md:w-5/12 px-4 py-10 md:px-12 flex flex-col justify-center">
                                <form
                                    onSubmit={handleSubmit(calculate)}
                                    className="w-full"
                                >
                                    <div className="relative w-full mb-2">
                                        <input
                                            type="number"
                                            className="px-2 h-[65px] w-full text-center rounded-[20px] font-prometo text-[32px] placeholder:text-[32px] font-bold transition-all duration-150 ease-linear bg-white placeholder:text-black placeholder-neutral-300 text-black focus:outline-none placeholder:pb-0  md:w-[301px]"
                                            defaultValue=""
                                            spellCheck="false"
                                            placeholder="0"
                                            data-ms-editor="true"
                                            {...register('gasTankQuantity')}
                                        />
                                        {errors.gasTankQuantity && <ErrorField>{errors.gasTankQuantity.message}</ErrorField>}
                                    </div>

                                    <div className="w-full mt-4">
                                        <button
                                            disabled={isLoading ? true : false}
                                            className=" px-6 py-3 text-base font-prometo font-bold bg-[#FFF5A2] rounded-full text-[#002E38]  hover:scale-105 duration-200 w-full md:w-[171px] mt-4 mb:mt-0"
                                            type="submit"
                                        >
                                            {isLoading ? (
                                                <p>Calculando...</p>
                                            ) : (
                                                <p>Calcular</p>
                                            )}
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    ) : (
                        <div className="flex justify-center flex-wrap lg:flex-nowrap">
                            <div className={`bg-[#006A80] rounded-t-3xl rounded-s-none lg:rounded-l-full w-full lg:w-5/12 px-4 py-10 lg:px-12 flex flex-col items-center justify-start`}>
                                <div>
                                    <p className="text-[24px] text-white font-prometo font-normal mb-2">
                                        Com base no seu consumo <br className="hidden lg:block" />
                                        mensal você emitiria
                                    </p>
                                    <p className="text-[#FFF5A2] text-[16px] font-medium font-prometo">
                                        <strong className="text-[32px] font-bold mr-1">
                                            {results?.gasolineEmissionTon ?? '0.000'}
                                        </strong>
                                        toneladas de CO2
                                    </p>
                                    <div className="w-full mt-2">
                                        <button
                                            className=" px-6 py-3 text-base font-prometo font-bold bg-[#FFF5A2] rounded-full text-[#002E38]  hover:scale-105 duration-200 w-full md:w-[171px] mt-4 mb:mt-0"
                                            type="button"
                                            onClick={resetCalculate}
                                        >
                                            Refazer Cálculo
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-[#00BCB8] rounded-b-3xl lg:rounded-b-none lg:rounded-r-full w-full lg:w-6/12 px-4 py-10 lg:px-12 relative">
                                <table className="w-full text-[#002E38] font-prometo">
                                    <thead>
                                        <tr className="font-bold text-[18px] md:text-[22px] text-center">
                                            <th></th>
                                            <th>MENSAL</th>
                                            <th>ANUAL</th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-[12px] md:text-[22px] text-right">
                                        <tr>
                                            <td>
                                                <span>Etanol Hidratado</span>
                                            </td>
                                            <td className="relative pr-4">
                                                <div className="absolute border-r border-[#002E38] pb-1 right-0 w-full h-[20px] top-2"></div>
                                                <strong className="text-[#FFF5A2]">
                                                    {results?.ethanolEmission ?? '00,0'}<span className="text-[8px]">kg de CO2 eq.</span>
                                                </strong>
                                            </td>
                                            <td className="pl-4">
                                                <strong className="text-[#FFF5A2]">
                                                    {results?.annualEthanolEmission ?? '0.000,00'}<span className="text-[8px]">kg de CO2 eq.</span>
                                                </strong>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <span>Gasolina C</span>
                                            </td>
                                            <td className="relative pr-4">
                                                <div className="absolute border-r border-[#002E38] right-0 w-full h-[20px] top-2"></div>
                                                <strong className="text-[#FFF5A2]">
                                                    {results?.gasolineEmission ?? '00,0'}<span className="text-[8px]">kg de CO2 eq.</span>
                                                </strong>

                                            </td>
                                            <td className="pl-4">
                                                <strong className="text-[#FFF5A2]">
                                                    {results?.annualGasolineEmission ?? '0.000,00'}<span className="text-[8px]">kg de CO2 eq.</span>
                                                </strong>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <span>Emissão evitada</span>
                                            </td>
                                            <td className="relative pr-4">
                                                <div className="absolute border-r border-[#002E38] right-0 w-full h-[20px] top-2"></div>
                                                <strong className="text-[#FFF5A2]">
                                                    {results?.avoidedEmisson ?? '000,0'}<span className="text-[8px]">kg de CO2 eq.</span>
                                                </strong>

                                            </td>
                                            <td className="pl-4">
                                                <strong className="text-[#FFF5A2]">
                                                    {results?.annualAvoidedEmission ?? '0.000,00'}<span className="text-[8px]">kg de CO2 eq.</span>
                                                </strong>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                <h3 className="absolute bottom-3 text-[#FFF5A2] underline font-bold cursor-pointer" onClick={showToolTip}>Entenda o metodo de cálculo aqui.</h3>
                            </div>

                        </div>
                    )}
                </div>
            </section>
        </>

    )
}

const ErrorField = ({ children }: any) => {
    return (
        <span className="absolute p-2 py-1 text-xs text-[#006A80] bg-[#A9F9DD] rounded-full right-1 md:right-20 z-10 -bottom-2">
            {children}
        </span>
    )
}