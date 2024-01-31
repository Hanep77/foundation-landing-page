import Image from "next/image";
import Link from "next/link";
import Navbar from "./ui/navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="">
        <section id="home" className="bg-gradient-to-r from-slate-100 to-gray-200">
          <div className="max-w-screen-xl px-4 m-auto flex flex-col justify-center md:flex-row md:justify-between md:items-center gap-2 pt-20 md:pt-16 min-h-screen">
            <div className="lg:w-5/12">
              <h1 className="text-4xl md:text-6xl font-bold text-cyan-800"><span className="font-extrabold text-transparent text-5xl md:text-7xl bg-clip-text bg-gradient-to-r from-blue-800 to-orange-600">Knowledge</span> is power; <span className="font-extrabold text-transparent text-5xl md:text-7xl bg-clip-text bg-gradient-to-r from-blue-800 to-orange-600">education</span> is its source.</h1>
              <p className="tracking-widest text-base md:text-lg text-slate-600 mt-2">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
              <div className="flex mt-8 gap-8">
                <div className="flex flex-col gap-2">
                  <div className="w-2 h-2 rounded-full bg-blue-900"></div>
                  <div className="w-2 h-2 rounded-full bg-blue-600"></div>
                  <div className="w-2 h-2 rounded-full bg-blue-400"></div>
                  <div className="w-2 h-2 rounded-full bg-red-500"></div>
                  <div className="w-2 h-2 rounded-full bg-orange-500"></div>
                  <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                </div>
                <div className="flex flex-col items-center gap-1">
                  <Link href="#about" className="w-16 h-16 flex justify-center items-center bg-cyan-800 rounded-full animate-bounce">
                    <img src="/icons/down-lg.svg" className="w-6" />
                  </Link>
                  <p className="tracking-wider text-xs text-slate-600">Let's Discover</p>
                </div>
              </div>
              {/* <Link href="#about">Discover more</Link> */}
            </div>
            <div className="hidden lg:flex gap-2 relative mt-8">
              <div>
                <div className="flex gap-2 mt-5 absolute z-10 -top-14 right-0">
                  <div className="w-2 h-2 rounded-full bg-blue-900"></div>
                  <div className="w-2 h-2 rounded-full bg-blue-600"></div>
                  <div className="w-2 h-2 rounded-full bg-blue-400"></div>
                  <div className="w-2 h-2 rounded-full bg-red-500"></div>
                  <div className="w-2 h-2 rounded-full bg-orange-500"></div>
                  <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                </div>
              </div>
              <div>
                <Image src="/school1.jpg" alt="anak-anak sekolah rebutan laptop" width="210" height="400"
                  className="rounded-md grayscale-[50%] hover:grayscale-0" />
              </div>
              <div>
                <Image src="/school2.jpg" alt="anak-anak sekolah rebutan laptop" width="250" height="400"
                  className="rounded-md grayscale-[50%] hover:grayscale-0" />
              </div>
              <div>
                <Image src="/school3.jpg" alt="anak-anak sekolah rebutan laptop" width="200" height="400"
                  className="rounded-md grayscale-[50%] hover:grayscale-0" />
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
