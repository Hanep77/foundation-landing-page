import Image from "next/image";
import LineVector from "../ui/lineVector";
import SchoolCard from "../ui/SchoolCard";
import FoundationStats from "../ui/FoundationStats";

export default function AboutSection() {
    return (
        <div className="max-w-screen-xl min-h-screen py-20 m-auto px-4">
            <h2 className="text-3xl text-center font-semibold text-cyan-800">About Us</h2>

            <div className="px-4 sm:px-8 md:px-20 lg:px-40 xl:px-60 pt-8 pb-20 md:py-20 bg-cyan-700 rounded text-lg text-slate-100 mt-5 md:flex gap-5 md:mx-0 relative">
                <div className="absolute -bottom-40 md:-bottom-20 right-0 md:right-5 lg:right-24 xl:right-40 border-b border-l border-orange-700 pl-5 pb-5 rounded-bl-md">
                    <Image src="/red-buildings.jpg" alt="bangunan warna merah" width={300} height={250} className="rounded" />
                </div>
                <div>
                    <h3 className="text-xl md:text-2xl font-semibold">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem nesciunt reiciendis porro quasi corrupti libero ea.</h3>
                    <p className="text-slate-200 text-sm md:text-base md:mr-64 mt-5">
                        Kami adalah Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores tempore sint a sed dolor inventore! Explicabo nulla et, doloremque itaque repellat assumenda quae dignissimos eaque, accusantium dolor in magnam.
                    </p>
                </div>
            </div>

            <div className="pt-48 md:pt-28">
                <h3 className="text-center font-semibold text-xl mb-5 text-slate-800">Kami Menaungi :</h3>
                <div className="flex justify-center flex-wrap gap-4">
                    <SchoolCard iconSrc="/icons/elementary.svg" name="Elementary School" />
                    <SchoolCard iconSrc="/icons/school.svg" name="Middle School" />
                    <SchoolCard iconSrc="/icons/college.svg" name="College" />
                </div>
            </div>

            <div className="flex justify-center md:justify-end items-center gap-8 mt-8">
                <FoundationStats />
                <div className="hidden md:block">
                    <LineVector />
                </div>
            </div>
        </div>
    )
}