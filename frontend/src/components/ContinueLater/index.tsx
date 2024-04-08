import Link from "next/link";

export default function ContinueLater() {

    return (
        <>
            <div className="w-full">
                <Link href={'#'} className="font-prometo underline text-blue text-base">
                    Continuar depois
                </Link>
            </div>
        </>
    )
}