'use client'
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

export default function MythsTruths() {

    return (
        <>
            <section id="mentiras-e-verdades" className="relative overflow-hidden">

                <div className="bg-aqua-light hidden md:block rounded-l-lg h-[543px] w-full absolute -z-10 top-[78px] left-[150px]"></div>
                <div className="container z-20">
                    <div className="flex flex-col md:flex-row mx-auto justify-center border-b-2 border-slate-400 border-collapse mb-8 md:border-b-0 md:mb-0">
                        <h2 className="font-prometo text-blue uppercase font-bold text-5xl md:w-7/12 text-center z-20 mb-12">Mentiras e Verdades <span className="font-normal">sobre o Etanol</span></h2>
                        <Image
                            className='mx-auto mb-8 md:mx-0 md:mb-0'
                            src={'/images/seloVaideEtanol.svg'}
                            width={140}
                            height={140}
                            quality={100}
                            alt='VAI DE ETANOL'
                        />
                    </div>

                    <Swiper
                        className='md:h-[300px] md:mb-[105px]'
                        pagination={{ clickable: true }}
                        modules={[Pagination]}
                        breakpoints={{}}
                    >
                        <SwiperSlide>
                            <div className="grid grid-cols-1 md:grid-cols-3 md:h-full">
                                <div className='font-prometo text-center relative'>
                                    <p className=''>“Etanol é ruim para o motor.”</p>
                                    <Image
                                        className='mx-auto mt-8 md:mt-10'
                                        src={'/images/icon-mito.svg'}
                                        width={113}
                                        height={87}
                                        quality={100}
                                        alt='MENTIRA'
                                    />
                                </div>
                                <div className=''>
                                    <Image
                                        className='m-auto'
                                        src={'/images/img-motor.png'}
                                        width={268}
                                        height={231}
                                        quality={100}
                                        alt='Imagem de motor.'
                                    />
                                </div>
                                <div className='font-prometo text-center relative'>
                                    <h4 className='text-green font-bold'></h4>
                                    <p className='font-bold h-auto'>Por ter uma queima mais limpa, o Etanol impede a formação de depósitos de sujeira. Com o uso do lubrificante indicado mantém seu motor com características de novo por mais tempo e economiza nas manutenções.</p>
                                    <Image
                                        className='mx-auto mt-8 md:mt-10'
                                        src={'/images/icon-verdade.svg'}
                                        width={113}
                                        height={87}
                                        quality={100}
                                        alt='Verdade'
                                    />
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="grid grid-cols-1 md:grid-cols-3 md:h-full">
                                <div className='font-prometo text-center relative'>
                                    <p className=''>“Etanol rende muito menos que a gasolina.”</p>
                                    <Image
                                        className='mx-auto mt-8 md:mt-10'
                                        src={'/images/icon-mito.svg'}
                                        width={113}
                                        height={87}
                                        quality={100}
                                        alt='MENTIRA'
                                    />
                                </div>
                                <div>
                                    <Image
                                        className='m-auto mb-4 md:mb-0 h-auto'
                                        src={'/images/img-abastecimento.png'}
                                        width={268}
                                        height={231}
                                        quality={100}
                                        alt='Carro sendo abastecido.'
                                    />
                                </div>
                                <div className='font-prometo text-center relative'>
                                    <h4 className='text-green font-bold'></h4>
                                    <p className='font-bold h-auto'>Hoje em dia a diferença é muito pequena e cada carro traz as informações de rendimento na etiqueta do Inmetro. Considerando o preço então, o Etanol vale muito mais a pena!</p>
                                    <Image
                                        className='mx-auto mt-8 md:mt-10'
                                        src={'/images/icon-verdade.svg'}
                                        width={113}
                                        height={87}
                                        quality={100}
                                        alt='Verdade'
                                    />
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="grid grid-cols-1 md:grid-cols-3 md:h-full">
                                <div className='font-prometo text-center relative'>
                                    <p className=''>“Etanol é pior para o meio ambiente do que a gasolina.”</p>
                                    <Image
                                        className='mx-auto mt-8 md:mt-10'
                                        src={'/images/icon-mito.svg'}
                                        width={113}
                                        height={87}
                                        quality={100}
                                        alt='MENTIRA'
                                    />
                                </div>
                                <div>
                                    <Image
                                        className='m-auto mb-4 md:mb-0 h-auto'
                                        src={'/images/img-etanol.png'}
                                        width={268}
                                        height={231}
                                        quality={100}
                                        alt='Etanol em um recipiente químico.'
                                    />
                                </div>
                                <div className='font-prometo text-center relative'>
                                    <h4 className='text-green font-bold'>Nem de perto!</h4>
                                    <p className='font-bold h-auto'>O Etanol é um combustível renovável, produzido da cana ou milho. Já a gasolina vem de fonte fóssil, o petróleo, não renovável. Levando em consideração o ciclo completo de vida dos combustíveis – da produção até o consumo nos carros – o Etanol reduz as emissões em até 90%.</p>
                                    <Image
                                        className='mx-auto mt-8 md:mt-10'
                                        src={'/images/icon-verdade.svg'}
                                        width={113}
                                        height={87}
                                        quality={100}
                                        alt='Verdade'
                                    />
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="grid grid-cols-1 md:grid-cols-3 md:h-full">
                                <div className='font-prometo text-center relative'>
                                    <p className=''>“Etanol é ruim para o carro flex.”</p>
                                    <Image
                                        className='mx-auto mt-8 md:mt-10'
                                        src={'/images/icon-mito.svg'}
                                        width={113}
                                        height={87}
                                        quality={100}
                                        alt='MENTIRA'
                                    />
                                </div>
                                <div>
                                    <Image
                                        className='m-auto mb-4 md:mb-0 h-auto'
                                        src={'/images/img-frentista.png'}
                                        width={268}
                                        height={231}
                                        quality={100}
                                        alt='Imagem de uma frentista.'
                                    />
                                </div>
                                <div className='font-prometo text-center relative'>
                                    <h4 className='text-green font-bold'></h4>
                                    <p className='font-bold h-auto'>Com a tecnologia flex, os carros são preparados para rodar com qualquer tipo de combustível. Então, por manter o motor mais limpo e mais potente, o Etanol é a melhor escolha.</p>
                                    <Image
                                        className='mx-auto mt-8 md:mt-10'
                                        src={'/images/icon-verdade.svg'}
                                        width={113}
                                        height={87}
                                        quality={100}
                                        alt='Verdade'
                                    />
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="grid grid-cols-1 md:grid-cols-3 md:h-full">
                                <div className='font-prometo text-center relative'>
                                    <p className=''>“No inverno, carro a Etanol é difícil de ligar de manhã.”</p>
                                    <Image
                                        className='mx-auto mt-8 md:mt-10'
                                        src={'/images/icon-mito.svg'}
                                        width={113}
                                        height={87}
                                        quality={100}
                                        alt='MENTIRA'
                                    />
                                </div>
                                <div>
                                    <Image
                                        className='m-auto mb-4 md:mb-0 h-auto'
                                        src={'/images/img-chave.png'}
                                        width={268}
                                        height={231}
                                        quality={100}
                                        alt='Imagem de uma chave de carro na ignição do carro.'
                                    />
                                </div>
                                <div className='font-prometo text-center relative'>
                                    <h4 className='text-green font-bold'></h4>
                                    <p className='font-bold h-auto'>Com o avanço da tecnologia, não existe mais esse tipo de problema.</p>
                                    <Image
                                        className='mx-auto mt-8 md:mt-10'
                                        src={'/images/icon-verdade.svg'}
                                        width={113}
                                        height={87}
                                        quality={100}
                                        alt='MENTIRA'
                                    />
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </section >
        </>
    )
}