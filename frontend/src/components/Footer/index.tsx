import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-[#A9F9DD] py-10 px-4 md:px-0">
            <div className="container flex items-center justify-between flex-wrap md:flex-nowrap gap-8 md:gap-0">
                <div className="flex items-center gap-7 flex-wrap md:flex-nowrap">
                    <Image
                        src={`/images/logo.png`}
                        height={'32'}
                        width={'127'}
                        alt={'Unica'}
                    />

                    <div>
                        <p className="text-sm text-blue">2024 UNICA. Todos os Direitos Reservados</p>
                    </div>

                    {/* <div>
                        <Link className="text-sm text-blue underline" href={''}>
                            <p>Configurações de cookies</p>
                        </Link>
                    </div> */}
                </div>

                <div className="flex items-center gap-3">
                    <Link href={'https://www.facebook.com/unica.cana'} target="_blank">
                        <Image
                            src={`/images/facebook.svg`}
                            height={'24'}
                            width={'24'}
                            alt={'Facebook'}
                        />
                    </Link>

                    <Link href={'https://www.instagram.com/unica.cana/'} target="_blank">
                        <Image
                            src={`/images/instagram.svg`}
                            height={'24'}
                            width={'24'}
                            alt={'Instagram'}
                        />
                    </Link>

                    <Link href={'https://twitter.com/UNICA_cana'} target="_blank">
                        <Image
                            src={`/images/x.svg`}
                            height={'24'}
                            width={'24'}
                            alt={'X'}
                        />
                    </Link>

                    <Link href={'https://www.linkedin.com/company/unicacana/'} target="_blank">
                        <Image
                            src={`/images/linkedin.svg`}
                            height={'24'}
                            width={'24'}
                            alt={'LinkedIn'}
                        />
                    </Link>
                </div>
            </div>
        </footer>
    )
}