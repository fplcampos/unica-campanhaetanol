'use client'
import NextButton from "@/app/utils/nextButton";
import PrevButton from "@/app/utils/prevButton";
import Image from "next/image";
import { useState } from "react";
import swal from 'sweetalert';
import { z } from "zod";
import ProgressBar from "../ProgressBar/progressBar";
import QuizResult from "../QuizResult";

export default function Quiz() {

    const initialFormData = {
        quiz_1: '',
        quiz_2: '',
        quiz_3: '',
        quiz_4: '',
        quiz_5: '',
        quiz_6: '',
        quiz_7: '',
        quiz_8: '',
    };

    const resetQuiz = (event: React.MouseEvent) => {
        event.preventDefault();
        setStep(1);
        setCurrentStep(1);
        setFormData(initialFormData)
    }

    const [step, setStep] = useState(1);
    const [resultData, setResultData] = useState("");
    const [currentStep, setCurrentStep] = useState(1);
    const [formData, setFormData] = useState(initialFormData);

    // para testar
    // const [formData, setFormData] = useState({
    //     quiz_1: 'Teste',
    //     quiz_2: 'Teste',
    //     quiz_3: 'Teste',
    //     quiz_4: 'Teste',
    //     quiz_5: 'Teste',
    //     quiz_6: 'Teste ',
    //     quiz_7: 'Teste',
    //     quiz_8: 'Teste',
    // });
    const handleChange = async (e: any) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.type === 'checkbox' ? e.target.checked : typeof e.target.value === 'string' ? e.target.value : JSON.stringify(e.target.value),
        });

    }

    const nextStep = (event: React.MouseEvent) => {
        event.preventDefault();
        const isStepValid = validateStep({ step: currentStep, formData: formData });
        if (isStepValid) {
            if (step === 8) {
                sendData();
            } else {
                if (step >= 1) {
                    setStep(step + 1);
                    setCurrentStep(currentStep + 1);
                    return;
                }
            }
        }
    };

    const prevStep = (event: React.MouseEvent) => {
        event.preventDefault();
        if (step >= 2) {
            setStep(step - 1);
            setCurrentStep(currentStep - 1);
            return;
        }
    };

    const sendData = async () => {
        // setLoading(true);

        try {
            const response = await fetch('/api/quiz', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
            if (!response.ok) {
                const returnMessage = await response.text();
                console.log(returnMessage);
            } else {
                const returnMessage = await response.text();
                console.log(JSON.parse(returnMessage))
                setResultData(JSON.parse(returnMessage));
                setStep(9);
            }
        } catch (error) {
            console.error('Erro ao fazer a requisição:', error);
        } finally {
            // setLoading(false);
        }
    }

    const validateStep = ({ step, formData }: any) => {
        const fieldsToValidate = stepFields[step];

        if (fieldsToValidate) {
            // @ts-ignore
            const stepSchema = FormSchema.pick(Object.fromEntries(fieldsToValidate.map(field => [field, true])));
            const validationResult = stepSchema.safeParse(formData);
            if (validationResult.success) {
                return true;
            } else {
                // console.error(validationResult.error.flatten().fieldErrors);
                swal({
                    title: "Atenção!",
                    text: JSON.parse(validationResult.error.message)[0].message,
                    icon: "warning",
                });
                return false;
            }
        } else {
            return true;
        }
    };

    const stepFields: any = {
        1: ['quiz_1'],
        2: ['quiz_2'],
        3: ['quiz_3'],
        4: ['quiz_4'],
        5: ['quiz_5'],
        6: ['quiz_6'],
        7: ['quiz_7'],
        8: ['quiz_8']
    };

    const FormSchema = z.object({
        quiz_1: z
            .string()
            .nonempty('Campo obrigatório!'),
        quiz_2: z
            .string()
            .nonempty('Campo obrigatório!'),
        quiz_3: z
            .string()
            .nonempty('Campo obrigatório!'),
        quiz_4: z
            .string()
            .nonempty('Campo obrigatório!'),
        quiz_5: z
            .string()
            .nonempty('Campo obrigatório!'),
        quiz_6: z
            .string()
            .nonempty('Campo obrigatório!'),
        quiz_7: z
            .string()
            .nonempty('Campo obrigatório!'),
        quiz_8: z
            .string()
            .nonempty('Campo obrigatório!')
    });

    return (
        <>
            <section id={`quiz`} className="md:mt-[125px]">
                <div className="container text-center">
                    <h2 className="font-prometo text-blue uppercase font-bold text-3xl md:leading-[65px] md:text-5xl mt-6 mb-4 md:mt-0 md:mb-8">Quiz do Etanol</h2>
                    <div className="relative">
                        <Image
                            className="m-auto hidden md:block"
                            src={'/images/quiz.png'}
                            width={752}
                            height={439}
                            alt=''
                        />
                        <Image
                            className="absolute -bottom-12 left-30 z-20 hidden md:block"
                            src={'/images/imgRafaelPortugal.png'}
                            width={149}
                            height={449}
                            alt=''
                        />
                        <div className={`bg-aqua rounded-xl w-full h-[410px] block ${step === 9 ? 'hidden' : ''} md:hidden pt-8`}></div>
                        {/* TELAS 1 A 8 DO QUIZ */}
                        <div className="absolute z-40 top-4 md:top-0 left-1/2 w-full p-4 md:w-6/12 md:pt-14 -translate-x-1/2">
                            {step === 1 && (
                                <fieldset>
                                    <ProgressBar progress={12.5} step={1} />
                                    <h3 className="font-prometo font-bold text-dark-green md:text-2xl md:leading-7 mt-6 mb-6 md:w-8/12 m-auto md:h-14">Qual o combustível mais barato para um carro flex?</h3>
                                    <div className="flex justify-between font-prometo w-9/12 md:w-5/12 m-auto md:mb-6 mb-4 text-dark-green">
                                        <label className="flex justify-center align-middle items-center flex-col hover-item cursor-pointer" htmlFor="opt1_quiz1">
                                            <Image
                                                src={'/images/opt1.png'}
                                                width={84}
                                                height={84}
                                                alt=""
                                                className="mb-4"
                                            />
                                            <p className={`hover-paragraph py-2 px-4 ${formData.quiz_1 === 'Etanol' ? 'active' : ''}`}>Etanol</p>
                                        </label>
                                        <label className="flex justify-center align-middle items-center flex-col hover-item cursor-pointer" htmlFor="opt2_quiz1">
                                            <Image
                                                src={'/images/opt2.png'}
                                                width={84}
                                                height={84}
                                                alt=""
                                                className="mb-4"
                                            />
                                            <p className={`hover-paragraph py-2 px-4 ${formData.quiz_1 === 'Gasolina' ? 'active' : ''}`}>Gasolina</p>
                                        </label>
                                        <input type="radio" name="quiz_1" id="opt1_quiz1" onChange={handleChange} className="hidden" value="Etanol" />
                                        <input type="radio" name="quiz_1" id="opt2_quiz1" onChange={handleChange} className="hidden" value="Gasolina" />
                                    </div>
                                </fieldset>
                            )}
                            {step === 2 && (
                                <fieldset>
                                    <ProgressBar progress={25} step={2} />
                                    <h3 className="font-prometo font-bold text-dark-green md:text-2xl md:leading-7 mt-6 mb-6 md:w-9/12 m-auto md:h-14">Qual combustível gera mais potência?</h3>
                                    <div className="flex justify-between font-prometo w-9/12 md:w-5/12 m-auto md:mb-6 mb-4 text-dark-green">
                                        <label className="flex justify-center align-middle items-center flex-col hover-item cursor-pointer" htmlFor="opt1_quiz2">
                                            <Image
                                                src={'/images/opt1.png'}
                                                width={84}
                                                height={84}
                                                alt=""
                                                className="mb-4"
                                            />
                                            <p className={`hover-paragraph py-2 px-4 ${formData.quiz_2 === 'Etanol' ? 'active' : ''}`}>Etanol</p>
                                        </label>
                                        <label className="flex justify-center align-middle items-center flex-col hover-item cursor-pointer" htmlFor="opt2_quiz2">
                                            <Image
                                                src={'/images/opt2.png'}
                                                width={84}
                                                height={84}
                                                alt=""
                                                className="mb-4"
                                            />
                                            <p className={`hover-paragraph py-2 px-4 ${formData.quiz_2 === 'Gasolina' ? 'active' : ''}`}>Gasolina</p>
                                        </label>
                                        <input type="radio" name="quiz_2" id="opt1_quiz2" onChange={handleChange} className="hidden" value="Etanol" />
                                        <input type="radio" name="quiz_2" id="opt2_quiz2" onChange={handleChange} className="hidden" value="Gasolina" />
                                    </div>
                                </fieldset>
                            )}
                            {step === 3 && (
                                <fieldset>
                                    <ProgressBar progress={37.5} step={3} />
                                    <h3 className="font-prometo font-bold text-dark-green md:text-2xl md:leading-7 mt-6 mb-6 md:w-9/12 m-auto md:h-14">Qual combustível é melhor para o meio ambiente?</h3>
                                    <div className="flex justify-between font-prometo w-9/12 md:w-5/12 m-auto md:mb-6 mb-4 text-dark-green">
                                        <label className="flex justify-center align-middle items-center flex-col hover-item cursor-pointer" htmlFor="opt1_quiz3">
                                            <Image
                                                src={'/images/opt1.png'}
                                                width={84}
                                                height={84}
                                                alt=""
                                                className="mb-4"
                                            />
                                            <p className={`hover-paragraph py-2 px-4 ${formData.quiz_3 === 'Etanol' ? 'active' : ''}`}>Etanol</p>
                                        </label>
                                        <label className="flex justify-center align-middle items-center flex-col hover-item cursor-pointer" htmlFor="opt2_quiz3">
                                            <Image
                                                src={'/images/opt2.png'}
                                                width={84}
                                                height={84}
                                                alt=""
                                                className="mb-4"
                                            />
                                            <p className={`hover-paragraph py-2 px-4 ${formData.quiz_3 === 'Gasolina' ? 'active' : ''}`}>Gasolina</p>
                                        </label>
                                        <input type="radio" name="quiz_3" id="opt1_quiz3" onChange={handleChange} className="hidden" value="Etanol" />
                                        <input type="radio" name="quiz_3" id="opt2_quiz3" onChange={handleChange} className="hidden" value="Gasolina" />
                                    </div>
                                </fieldset>
                            )}
                            {step === 4 && (
                                <fieldset>
                                    <ProgressBar progress={50} step={4} />
                                    <h3 className="font-prometo font-bold text-dark-green md:text-2xl md:leading-7 mt-6 mb-6 md:w-9/12 m-auto md:h-14">Pode misturar Etanol e gasolina no tanque de um carro flex?</h3>
                                    <div className="flex justify-between font-prometo md:w-6/12 m-auto md:mb-6 mb-4 text-dark-green">
                                        <label className="flex justify-center align-middle items-center flex-col hover-item cursor-pointer" htmlFor="opt1_quiz4">
                                            <Image
                                                src={'/images/opt1.png'}
                                                width={84}
                                                height={84}
                                                alt=""
                                                className="mb-4"
                                            />
                                            <p className={`hover-paragraph py-2 px-4 ${formData.quiz_4 === 'Sim' ? 'active' : ''}`}>Sim</p>
                                        </label>
                                        <label className="flex justify-center align-middle items-center flex-col hover-item cursor-pointer" htmlFor="opt2_quiz4">
                                            <Image
                                                src={'/images/opt2.png'}
                                                width={84}
                                                height={84}
                                                alt=""
                                                className="mb-4"
                                            />
                                            <p className={`hover-paragraph py-2 px-4 ${formData.quiz_4 === 'Não' ? 'active' : ''}`}>Não</p>
                                        </label>
                                        <label className="flex justify-center align-middle items-center flex-col hover-item cursor-pointer" htmlFor="opt3_quiz4">
                                            <Image
                                                src={'/images/opt2.png'}
                                                width={84}
                                                height={84}
                                                alt=""
                                                className="mb-4"
                                            />
                                            <p className={`hover-paragraph py-2 px-4 ${formData.quiz_4 === 'Depende' ? 'active' : ''}`}>Depende</p>
                                        </label>
                                        <input type="radio" name="quiz_4" id="opt1_quiz4" onChange={handleChange} className="hidden" value="Sim" />
                                        <input type="radio" name="quiz_4" id="opt2_quiz4" onChange={handleChange} className="hidden" value="Não" />
                                        <input type="radio" name="quiz_4" id="opt3_quiz4" onChange={handleChange} className="hidden" value="Depende" />
                                    </div>
                                </fieldset>
                            )}
                            {step === 5 && (
                                <fieldset>
                                    <ProgressBar progress={62.5} step={5} />
                                    <h3 className="font-prometo font-bold text-dark-green md:text-2xl md:leading-7 mt-6 mb-6 md:w-8/12 m-auto md:h-14">Qual combustível deixa o motor mais “sujo”?</h3>
                                    <div className="flex justify-between font-prometo w-9/12 md:w-5/12 m-auto md:mb-6 mb-4 text-dark-green">
                                        <label className="flex justify-center align-middle items-center flex-col hover-item cursor-pointer" htmlFor="opt1_quiz5">
                                            <Image
                                                src={'/images/opt1.png'}
                                                width={84}
                                                height={84}
                                                alt=""
                                                className="mb-4"
                                            />
                                            <p className={`hover-paragraph py-2 px-4 ${formData.quiz_5 === 'Etanol' ? 'active' : ''}`}>Etanol</p>
                                        </label>
                                        <label className="flex justify-center align-middle items-center flex-col hover-item cursor-pointer" htmlFor="opt2_quiz5">
                                            <Image
                                                src={'/images/opt2.png'}
                                                width={84}
                                                height={84}
                                                alt=""
                                                className="mb-4"
                                            />
                                            <p className={`hover-paragraph py-2 px-4 ${formData.quiz_5 === 'Gasolina' ? 'active' : ''}`}>Gasolina</p>
                                        </label>
                                        <input type="radio" name="quiz_5" id="opt1_quiz5" onChange={handleChange} className="hidden" value="Etanol" />
                                        <input type="radio" name="quiz_5" id="opt2_quiz5" onChange={handleChange} className="hidden" value="Gasolina" />
                                    </div>
                                </fieldset>
                            )}
                            {step === 6 && (
                                <fieldset>
                                    <ProgressBar progress={75} step={6} />
                                    <h3 className="font-prometo font-bold text-dark-green md:text-2xl md:leading-7 mt-6 mb-6 md:w-9/12 m-auto md:h-14">O que é biocombustível?</h3>
                                    <div className="flex justify-between font-prometo w-full m-auto md:mb-6 text-dark-green">
                                        <label className="flex justify-center align-middle items-center flex-col hover-item cursor-pointer" htmlFor="opt1_quiz6">
                                            <Image
                                                src={'/images/opt1.png'}
                                                width={84}
                                                height={84}
                                                alt=""
                                                className="mb-4"
                                            />
                                            <p className={`hover-paragraph py-2 px-4 ${formData.quiz_6 === 'Etanol' ? 'active' : ''} whitespace-pre-line`}>Combustível derivado de biomassa renovável (cana-de-açúcar, milho, entre outros)</p>
                                        </label>
                                        <label className="flex md:justify-center flex-start align-middle items-center flex-col hover-item cursor-pointer" htmlFor="opt2_quiz6">
                                            <Image
                                                src={'/images/opt2.png'}
                                                width={84}
                                                height={84}
                                                alt=""
                                                className="mb-4"
                                            />
                                            <p className={`hover-paragraph py-2 px-4 ${formData.quiz_6 === 'Gasolina' ? 'active' : ''}`}>Combustível de origem fóssil</p>
                                        </label>
                                        <input type="radio" name="quiz_6" id="opt1_quiz6" onChange={handleChange} className="hidden" value="Etanol" />
                                        <input type="radio" name="quiz_6" id="opt2_quiz6" onChange={handleChange} className="hidden" value="Gasolina" />
                                    </div>
                                </fieldset>
                            )}
                            {step === 7 && (
                                <fieldset>
                                    <ProgressBar progress={87.5} step={7} />
                                    <h3 className="font-prometo font-bold text-dark-green md:text-2xl md:leading-7 mt-6 mb-6 md:w-9/12 m-auto md:h-14">Onde é produzido a maior parte do Etanol que usamos?</h3>
                                    <div className="flex justify-between font-prometo w-9/12 md:w-6/12 m-auto md:mb-6 mb-4 text-dark-green">
                                        <label className="flex justify-center align-middle items-center flex-col hover-item cursor-pointer" htmlFor="opt1_quiz7">
                                            <Image
                                                src={'/images/opt1.png'}
                                                width={84}
                                                height={84}
                                                alt=""
                                                className="mb-4"
                                            />
                                            <p className={`hover-paragraph py-2 px-4 ${formData.quiz_7 === 'Brasil' ? 'active' : ''}`}>Brasil</p>
                                        </label>
                                        <label className="flex justify-center align-middle items-center flex-col hover-item cursor-pointer" htmlFor="opt2_quiz7">
                                            <Image
                                                src={'/images/opt2.png'}
                                                width={84}
                                                height={84}
                                                alt=""
                                                className="mb-4"
                                            />
                                            <p className={`hover-paragraph py-2 px-4 ${formData.quiz_7 === 'Estados Unidos' ? 'active' : ''}`}>Estados Unidos</p>
                                        </label>
                                        <input type="radio" name="quiz_7" id="opt1_quiz7" onChange={handleChange} className="hidden" value="Brasil" />
                                        <input type="radio" name="quiz_7" id="opt2_quiz7" onChange={handleChange} className="hidden" value="Estados Unidos" />
                                    </div>
                                </fieldset>
                            )}
                            {step === 8 && (
                                <fieldset>
                                    <ProgressBar progress={100} step={8} />
                                    <h3 className="font-prometo font-bold text-dark-green md:text-2xl md:leading-7 mt-6 mb-6 md:w-9/12 m-auto md:h-14">De onde vem a maioria da gasolina que usamos?</h3>
                                    <div className="flex justify-between font-prometo md:w-8/12 m-auto md:mb-6 text-dark-green">
                                        <label className="flex justify-center align-middle items-center flex-col hover-item cursor-pointer" htmlFor="opt1_quiz8">
                                            <Image
                                                src={'/images/opt1.png'}
                                                width={84}
                                                height={84}
                                                alt=""
                                                className="mb-4"
                                            />
                                            <p className={`hover-paragraph py-2 px-4 ${formData.quiz_8 === 'Etanol' ? 'active' : ''}`}>Cana-de-açúcar e Milho</p>
                                        </label>
                                        <label className="flex justify-center align-middle items-center flex-col hover-item cursor-pointer" htmlFor="opt2_quiz8">
                                            <Image
                                                src={'/images/opt2.png'}
                                                width={84}
                                                height={84}
                                                alt=""
                                                className="mb-4"
                                            />
                                            <p className={`hover-paragraph py-2 px-4 ${formData.quiz_8 === 'Gasolina' ? 'active' : ''}`}>Petróleo</p>
                                        </label>
                                        <input type="radio" name="quiz_8" id="opt1_quiz8" onChange={handleChange} className="hidden" value="Etanol" />
                                        <input type="radio" name="quiz_8" id="opt2_quiz8" onChange={handleChange} className="hidden" value="Gasolina" />
                                    </div>
                                </fieldset>
                            )}
                            {/* Tela Form Lead */}
                            <div className="m-auto flex w-full  md:w-6/12">
                                {/* Botão de retornar o quiz, é exibido entre os steps 2 a 7 */}
                                {(step > 1 && step < 8) && (
                                    <PrevButton step={step} prevStep={prevStep} />

                                )}
                                {/* Caso o step seja menor ou igual a 7, é apresentado o botão de próximo */}
                                {step <= 7 && (
                                    <NextButton step={step} nextStep={nextStep} />
                                )}
                            </div>
                        </div>
                        {/* Validação para saber qual step do quiz o usuário está, se estiver na última etapa, apresenta o footer do quiz */}
                        {(step === 8) && (
                            <div className="bg-moss-green m-auto w-full md:max-w-[752px] md:w-[752px] rounded-b-[30px] h-24 absolute -bottom-2 md:bottom-0 left-1/2 -translate-x-1/2 z-10 pt-5 px-2 md:py-7 md:px-0">
                                <div className="container flex justify-between md:w-8/12 items-center self-end">
                                    <PrevButton step={step} prevStep={prevStep} />
                                    <span onClick={nextStep} className="font-prometo font-bold text-xl md:text-2xl text-white w-full cursor-pointer">Ver Resultado →</span>
                                </div>
                            </div>
                        )}
                        {/* Tela Resultado */}
                        {step === 9 && (
                            <>
                                <QuizResult result={resultData} onResetQuiz={resetQuiz} />
                            </>
                        )}
                    </div>
                </div>
            </section>
        </>
    )
}