import Image from "next/image";
import Link from "next/link";
import LineVector from "./ui/lineVector";

export default function Home() {
  return (
    <>
      <main className="bg-gradient-to-r from-slate-100 to-gray-200">
        <section id="home" className="">
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
                    <Image src="/icons/down-lg.svg" alt="go down" width={24} height={24} />
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

        <section id="about">
          <div className="max-w-screen-xl min-h-screen py-20 m-auto px-4">
            <h2 className="text-3xl text-center font-semibold text-cyan-800">About Us</h2>

            <div className="px-4 sm:px-8 md:px-20 lg:px-40 xl:px-60 pt-8 pb-20 md:py-20 bg-cyan-700 rounded text-lg text-slate-100 mt-5 md:flex gap-5 md:mx-0 relative">
              <div className="absolute -bottom-40 md:-bottom-20 right-0 md:right-5 lg:right-24 xl:right-40 border-b border-l border-orange-700 pl-5 pb-5 rounded-bl-md">
                <Image src="/red-buildings.jpg" alt="bangunan warna merah" width={300} height={250} className="rounded" />
              </div>
              {/* <LineVector /> */}
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
                <div className="bg-gradient-to-r from-slate-200 to-gray-300 w-80 p-5 border border-slate-400 flex flex-col items-center text-center rounded">
                  <Image src="/icons/elementary.svg" alt="college" width={80} height={80} />
                  <h5 className="text-xl text-slate-800 font-medium tracking-wide pb-2">Elementary School</h5>
                  <p className="text-slate-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde amet nobis, ipsa commodi corrupti suscipit.</p>
                </div>
                <div className="bg-gradient-to-r from-slate-200 to-gray-300 w-80 p-5 border border-slate-400 flex flex-col items-center text-center rounded">
                  <Image src="/icons/school.svg" alt="college" width={80} height={80} />
                  <h5 className="text-xl text-slate-800 font-medium tracking-wide py-2">Middle School</h5>
                  <p className="text-slate-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde amet nobis, ipsa commodi corrupti suscipit.</p>
                </div>
                <div className="bg-gradient-to-r from-slate-200 to-gray-300 w-80 p-5 border border-slate-400 flex flex-col items-center text-center rounded">
                  <Image src="/icons/college.svg" alt="college" width={80} height={80} />
                  <h5 className="text-xl text-slate-800 font-medium tracking-wide pb-2">College</h5>
                  <p className="text-slate-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde amet nobis, ipsa commodi corrupti suscipit.</p>
                </div>
              </div>
            </div>

            <div className="flex justify-center md:justify-end items-center gap-8 mt-8">
              <div className="flex gap-8 text-xl sm:text-2xl md:text-3xl lg:text-4xl tracking-widest">
                <div className="text-center">
                  <p className="text-slate-700 tracking-tight font-light">2500+</p>
                  <h5 className="font-semibold text-slate-900">Murid</h5>
                </div>
                <div className="text-center">
                  <p className="text-slate-700 tracking-tight font-light">300+</p>
                  <h5 className="font-semibold text-slate-900">Guru</h5>
                </div>
                <div className="text-center">
                  <p className="text-slate-700 tracking-tight font-light">5000+</p>
                  <h5 className="font-semibold text-slate-900">Alumni</h5>
                </div>
              </div>
              <div className="hidden md:block">
                <LineVector />
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
