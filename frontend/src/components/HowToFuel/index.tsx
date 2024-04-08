import Image from "next/image";

export default function HowToFuel() {

    return (
        <>
            <section id="sobre" className="py-14">
                <div className="container w-full xl:w-7/12 justify-center flex flex-col px-4 md:px-0">
                    <div className="title flex mb-11 justify-center items-center flex-wrap md:flex-nowrap gap-4">
                        <Image
                            src={`/images/vai-de-etanol.gif`}
                            width={400}
                            height={400}
                            quality={100}
                            alt={"Rafael Portugal #VaideEtanol"}
                        />
                        <h2 className="font-prometo text-blue uppercase font-bold text-3xl md:leading-[65px] md:text-[48px] mt-1 md:mt-0">Por que abastecer com Etanol?</h2>
                    </div>
                    <div className="content flex flex-wrap justify-center md:flex-nowrap">
                        <Image
                            src={`/images/bomba.svg`}
                            width={324}
                            height={328}
                            quality={100}
                            alt={"Bomba de combustível"}
                        />
                        <div className="font-prometo font-normal text-blue mt-8 md:mt-0 md:ml-8">
                            <h3 className=" text-green uppercase font-bold text-base mb-6">Porque é o combustível do presente e futuro da mobilidade sustentável</h3>
                            <p className="mb-4">O Etanol faz bem para você. Quando comparadas as emissões, hoje, o Etanol já é o <strong>combustível mais limpo do mundo.</strong> Assim, o uso do biocombustível representa redução de até 90% nas emissões de gases que agravam o efeito estufa, respeitando todas as normas de qualidade do ar, o que é bom para todo mundo, no planeta inteiro.</p>
                            <p className="mb-4">O Etanol faz bem para o carro, ao aumentar a potência e deixar o motor limpo por mais tempo.</p>
                            <p className="mb-4">É bom para o Brasil, por movimentar a economia do país, gerando emprego e renda para milhares de pessoas. Por ser a opção mais barata na hora de abastecer, é bom para o seu bolso.</p>
                            <p>E é bom para o Planeta. Produzido de forma sustentável, o Etanol protege o meio ambiente.</p>
                        </div>
                    </div>
                </div>
            </section >
        </>
    )
}