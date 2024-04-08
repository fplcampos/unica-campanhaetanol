"use client"

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import YouTubePlayer, { YouTubeProps } from "react-youtube";
import Modal from "../Modal";

export default function VideoGallery() {

    const dataGallery = [
        {
            "url": "https://www.youtube.com/embed/2Dq_Q1m6ad8",
            "img": "/images/02_thumb_idosos.png",
            "text": "Mais barato e muito mais"
        },
        {
            "url": "https://www.youtube.com/embed/zf77GtEzWgE",
            "img": "/images/03_thumb_potencia.png",
            "text": "Etanol é mais potência"
        },
        {
            "url": "https://www.youtube.com/embed/RO2lou92i6o",
            "img": "/images/04_thumb_taxista.png",
            "text": "Taxista prefere Etanol"
        },
        {
            "url": "https://www.youtube.com/embed/rYRPxRw9H84",
            "img": "/images/05_thumb_mulher.png",
            "text": "Pode misturar?"
        },
        {
            "url": "https://www.youtube.com/embed/yxM_NarMslw",
            "img": "/images/06_thumb_universitarias.png",
            "text": "Etanol é biocombustível"
        },
        {
            "url": "https://www.youtube.com/embed/5xa8Td6G37E",
            "img": "/images/07_thumb_jovem.png",
            "text": "Etanol é 100% nacional"
        },
        {
            "url": "https://www.youtube.com/embed/NT6rPXWDJr8",
            "img": "/images/08_thumb_rapazes.png",
            "text": "O que é melhor pra saúde?"
        },
        {
            "url": "https://www.youtube.com/embed/TV7qQTny0Fg",
            "img": "/images/09_thumb_executiva.png",
            "text": "Etanol é bom pro Brasil"
        },
        {
            "url": "https://www.youtube.com/embed/G160BrlKHOA",
            "img": "/images/10_thumb_frentistas.png",
            "text": "Com a palavra os frentistas"
        },
    ]

    const [openModal, setOpenModal] = useState(false);
    const [selectedVideoUrl, setSelectedVideoUrl] = useState('');
    const [selectedVideoTitle, setSelectedVideoTitle] = useState('');

    const handleVideoClick = (videoUrl: string, videoTitle: string) => {
        setSelectedVideoUrl(videoUrl);
        setSelectedVideoTitle(videoTitle);
        setOpenModal(true);
    };

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
        <section id="videos" className="py-20 px-4 md:px-0 bg-gradient-to-b from-[white] to-[#A9F9DD99]">
            <div className="container">
                <h2 className="text-center text-[26px] md:text-[56px] uppercase font-prometo text-[#006A80] mb-10">
                    <strong>Assista os vídeos</strong> e saiba tudo <br className="hidden md:block" />
                    a respeito e… <strong className="text-[#00BCB8]">#VAIDEETANOL!</strong>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">

                    {Object.values(dataGallery).map((gallery, idx) => {
                        return (
                            <div key={idx} >
                                <Link
                                    href={'#'}
                                    target="_blank"
                                    className="flex justify-center"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        setOpenModal(!openModal);
                                        handleVideoClick(gallery.url, gallery.text)
                                    }}>
                                    <div className="rounded-2xl relative">
                                        <Image
                                            className="max-w-full"
                                            src={gallery.img}
                                            alt=""
                                            width={363}
                                            height={205}
                                        />
                                        <div className="absolute bottom-14 left-4">
                                            <svg width="25" height="28" viewBox="0 0 25 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M23.2363 11.7392L4.37868 0.35917C2.84649 -0.565011 0.5 0.331827 0.5 2.61767V25.3722C0.5 27.4229 2.68042 28.6588 4.37868 27.6307L23.2363 16.2562C24.9185 15.2445 24.9239 12.7509 23.2363 11.7392Z" fill="white" />
                                            </svg>
                                        </div>
                                        <div className="max-w-[300px] absolute bg-[#A9F9DD] rounded-full bottom-4 left-3 py-1 px-6">
                                            <p className="font-prometo text-sm text-[#006A80] font-bold uppercase">
                                                {gallery.text}
                                            </p>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        )
                    })}
                    <Modal open={openModal} onOpenChange={setOpenModal}>
                        <YouTubePlayer
                            className="w-full h-full"
                            videoId={YouTubeGetID(selectedVideoUrl)}
                            title={selectedVideoTitle}
                            opts={VideoOpts}
                            onReady={onPlayerReady}
                        />
                    </Modal>
                </div>
            </div>
        </section>
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