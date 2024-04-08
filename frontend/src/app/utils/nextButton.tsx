import Link from "next/link";

export default function NextButton({ step, nextStep, prevStep, label, disabled, event }: any) {

    return (
        <>
            <div className="w-full">
                <Link
                    href={'#'}
                    target={''}
                    onClick={nextStep}
                >
                    <svg className="mx-auto" width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="-0.5" y="0.5" width="47" height="47" rx="23.5" transform="matrix(-1 0 0 1 47 0)" fill="white" />
                        <rect x="-0.5" y="0.5" width="47" height="47" rx="23.5" transform="matrix(-1 0 0 1 47 0)" stroke="#002E38" />
                        <path d="M18.6667 23.3334H26.78L23.0533 19.6067L24 18.6667L29.3333 24.0001L24 29.3334L23.06 28.3934L26.78 24.6667H18.6667V23.3334Z" fill="black" />
                    </svg>
                </Link>
            </div>
        </>
    )
}