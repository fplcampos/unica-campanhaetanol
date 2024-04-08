"use client"

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import TagManager from "react-gtm-module";

export default function Header() {

    useEffect(() => {
        TagManager.initialize({ gtmId: 'GTM-P5WQV4DN' });
    }, []);

    const [isMenuOpen, setMenuOpen] = useState(false);

    const scrollToTop = (e: any) => {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <>
            <header id="header" className={`bg-aqua fixed top-0 left-0 right-0 z-50 h-24`}>
                <nav className="container flex flex-wrap h-full items-center justify-between mx-auto lg:px-0">
                    <Link href={'/'}>
                        <Image
                            className="pl-3 md:pl-0"
                            src={`/images/logo.png`}
                            height={'32'}
                            width={'127'}
                            alt={'Unica'}
                        />
                    </Link>
                    <button
                        onClick={() => setMenuOpen(!isMenuOpen)}
                        data-collapse-toggle="navbar-default"
                        type="button"
                        className=" p-2 w-10 h-10 justify-center flex items-end flex-col text-sm text-gray-500 rounded-lg lg:hidden space-y-2 focus:outline-none mr-2"
                        aria-controls="navbar-default"
                        aria-expanded={isMenuOpen ? "true" : "false"}
                    >
                        <div className="w-8 h-0.5 bg-gray-600"></div>
                        <div className="w-8 h-0.5 bg-gray-600"></div>
                        <div className="w-8 h-0.5 bg-gray-600"></div>
                    </button>
                    <div
                        className={`${isMenuOpen ? "block" : "hidden"
                            } w-full lg:flex md:w-auto md:h-full items-center`}
                        id="navbar-default"
                    >
                        <ul className={`flex justify-center items-center flex-col p-4 md:p-0 mt-4 md:flex-row md:space-x-8 md:mt-0 bg-aqua md:bg-transparent text-center gap-4 md:gap-0 rounded-b-3xl md:rounded-none text-blue text-[14px] font-medium h-full`}>
                            <li
                                className="border-b md:border-0 border-blue w-full h-full md:w-fit pb-4 block  md:flex py-2 pl-3 pr-4 text-blue text-header rounded hover:bg-gray-100 md:hover:bg-menu-hover md:px-2 uppercase items-center"
                                onClick={() => {
                                    setMenuOpen(false)
                                }}>
                                <Link href="" onClick={(e) => scrollToTop(e)}>Home</Link>
                            </li>
                            <li
                                className="border-b md:border-0 border-blue w-full h-full md:w-fit pb-4 block  md:flex py-2 pl-3 pr-4 text-blue text-header rounded hover:bg-gray-100 md:hover:bg-menu-hover md:px-2 uppercase items-center"
                                onClick={() => {
                                    setMenuOpen(false)
                                }}>
                                <Link href="#sobre">Sobre<br />a Campanha</Link>
                            </li>
                            <li
                                className="border-b md:border-0 border-blue w-full h-full md:w-fit pb-4 block  md:flex py-2 pl-3 pr-4 text-blue text-header rounded hover:bg-gray-100 md:hover:bg-menu-hover md:px-2 uppercase items-center"
                                onClick={() => {
                                    setMenuOpen(false)
                                }}>
                                <Link href="#mentiras-e-verdades">Mentiras e Verdades<br />sobre o Etanol</Link>
                            </li>
                            <li
                                className="border-b md:border-0 border-blue w-full h-full md:w-fit pb-4 block  md:flex py-2 pl-3 pr-4 text-blue text-header rounded hover:bg-gray-100 md:hover:bg-menu-hover md:px-2 uppercase items-center"
                                onClick={() => {
                                    setMenuOpen(false)
                                }}>
                                <Link href="#videos">Vídeos</Link>
                            </li>
                            <li
                                className="border-b md:border-0 border-blue w-full h-full md:w-fit pb-4 block  md:flex py-2 pl-3 pr-4 text-blue text-header rounded hover:bg-gray-100 md:hover:bg-menu-hover md:px-2 uppercase items-center"
                                onClick={() => {
                                    setMenuOpen(false)
                                }}>
                                <Link href="#quiz">Quiz do Etanol</Link>
                            </li>
                            <li
                                className="border-b md:border-0 border-blue w-full h-full md:w-fit pb-4 block  md:flex py-2 pl-3 pr-4 text-blue text-header rounded hover:bg-gray-100 md:hover:bg-menu-hover md:px-2 uppercase items-center"
                                onClick={() => {
                                    setMenuOpen(false)
                                }}>
                                <Link href="#calculadora">Calculadora<br />do Meio Ambiente</Link>
                            </li>
                            <li
                                className="w-full h-full md:w-fit pb-4 block  md:flex py-2 pl-3 pr-4 text-blue text-header rounded hover:bg-gray-100 md:hover:bg-menu-hover md:px-2 uppercase items-center"
                                onClick={() => {
                                    setMenuOpen(false)
                                }}>
                                <Link href="https://unica.com.br/setor-sucroenergetico/etanol/" target="_blank">Saiba Mais<br />sobre o Etanol</Link>
                            </li>
                        </ul>
                    </div>

                </nav>
            </header>
        </>
    )
}