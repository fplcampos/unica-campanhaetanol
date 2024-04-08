"use client"

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import YouTubePlayer, { YouTubeProps } from "react-youtube";
import Modal from "../Modal";

export default function BannerHome() {

    const [openModal, setOpenModal] = useState(false);

    const VideoOpts: YouTubeProps["opts"] = {
        height: "100%",
        width: "100%",
        playerVars: {
            autoplay: 1,
        },
    };

    const onPlayerReady: YouTubeProps["onReady"] = (event) => {
        event.target.playVideo();
    };

    return (
        <>
            <section id="banner" className="w-full relative bg-cover h-[700px] bg-no-repeat bg-top mt-24 cursor-pointer" onClick={(e) => { setOpenModal(!openModal); }}>
                <video
                    autoPlay
                    muted
                    loop
                    className="absolute top-0 left-0 w-full h-full object-cover z-0"
                >
                    <source src="/video/video.mp4" type="video/mp4" />
                    Seu navegador não suporta vídeos HTML5.
                </video>

                <div className="absolute top-0 left-0 w-full h-full bg-black opacity-60 z-10"></div>

                <div className="container h-full py-40 px-5 md:px-0 relative z-30 cursor-pointer">

                    <Image
                        src={`/images/logo-campanha.png`}
                        width={417}
                        height={146}
                        alt="#VAI DE ETANOL"
                    />
                    <div className="slogan uppercase text-aqua font-prometo mt-7 ml-34 text-3xl">
                        é bom PRA VOCÊ<br />
                        é bom pro carro<br />
                        é bom pro Brasil<br />
                        é bom pro planeta
                    </div>
                    <div className="btPlay absolute left-1/2 top-1/2 -translate-y-1/2 z-10">
                        <Link
                            href={``}
                            className="absolute top-0 left-0 w-full h-full z-9999">
                            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="55" viewBox="0 0 48 55" fill="none">
                                <path d="M45.4727 23.0591L7.75736 0.705512C4.69299 -1.10984 0 0.651804 0 5.14186V49.8383C0 53.8664 4.36084 56.2941 7.75736 54.2746L45.4727 31.9318C48.8371 29.9446 48.8478 25.0463 45.4727 23.0591Z" fill="white" />
                            </svg>
                        </Link>
                    </div>
                </div>
                <Modal open={openModal} onOpenChange={setOpenModal}>
                    <YouTubePlayer
                        className="w-full h-full"
                        videoId={YouTubeGetID("https://www.youtube.com/embed/6hFtMvYXBWo")}
                        title={"Vai de Etanol"}
                        opts={VideoOpts}
                        onReady={onPlayerReady}
                    />
                </Modal>
            </section>
        </>
    )
}

function YouTubeGetID(url: string) {
    if (!url || typeof url !== 'string') {
        // Retorna um valor padrão ou lança um erro, dependendo do seu caso de uso
        return "";
    }

    const match = url.match(/(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/);
    return match ? match[1] : "";
}