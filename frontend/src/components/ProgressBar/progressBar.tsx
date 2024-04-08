export default function ProgressBar({ progress, step }: any) {

    return (
        <>
            <div className="w-full bg-white rounded-full">
                <div className="h-2 bg-blue rounded-full" style={{ width: `${progress}%` }}></div>
            </div>
            <div className="w-full text-end text-sm font-bold font-prometo"><span className="text-blue">{step}</span> / 8</div>
        </>
    )
}