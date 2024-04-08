import Link from "next/link";

export default function PrevButton({ step, nextStep, prevStep }: any) {

    return (
        <>
            <div className="w-full">
                <Link
                    href={'#'}
                    target={''}
                    onClick={prevStep}
                >
                    <svg className="mx-auto" width="49" height="48" viewBox="0 0 49 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="1" y="0.5" width="47" height="47" rx="23.5" fill="white" />
                        <rect x="1" y="0.5" width="47" height="47" rx="23.5" stroke="#002E38" />
                        <path d="M29.8332 23.3334H21.7198L25.4465 19.6067L24.4998 18.6667L19.1665 24.0001L24.4998 29.3334L25.4398 28.3934L21.7198 24.6667H29.8332V23.3334Z" fill="black" />
                    </svg>

                </Link>
            </div>
        </>
    )
}



