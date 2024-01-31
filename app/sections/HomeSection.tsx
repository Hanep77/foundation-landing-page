import Link from "next/link";
import VerticalDots from "../ui/verticalDots";
import Image from "next/image";
import HeroImages from "../ui/HeroImages";
import GoDownButton from "../ui/GoDownButton";

export default function HomeSection() {
    return (
        <div className="max-w-screen-xl px-4 m-auto flex flex-col justify-center md:flex-row md:justify-between md:items-center gap-2 pt-20 md:pt-16 min-h-screen">
            <div className="lg:w-5/12">
                <h1 className="text-4xl md:text-6xl font-bold text-cyan-800"><span className="font-extrabold text-transparent text-5xl md:text-7xl bg-clip-text bg-gradient-to-r from-blue-800 to-orange-600">Knowledge</span> is power; <span className="font-extrabold text-transparent text-5xl md:text-7xl bg-clip-text bg-gradient-to-r from-blue-800 to-orange-600">education</span> is its source.</h1>
                <p className="tracking-widest text-base md:text-lg text-slate-600 mt-2">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                <div className="flex mt-8 gap-8">
                    <VerticalDots />
                    <GoDownButton />
                </div>
            </div>
            <HeroImages />
        </div>
    )
}