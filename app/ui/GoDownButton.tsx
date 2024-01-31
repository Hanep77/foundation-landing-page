import Image from "next/image";
import Link from "next/link";

export default function GoDownButton() {
    return (
        <div className="flex flex-col items-center gap-1">
            <Link href="#about" className="w-16 h-16 flex justify-center items-center bg-cyan-800 rounded-full animate-bounce">
                <Image src="/icons/down-lg.svg" alt="go down" width={24} height={24} />
            </Link>
            <p className="tracking-wider text-xs text-slate-600">Discover More</p>
        </div>
    )
}