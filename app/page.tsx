import { Lusitana } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

const lusitana = Lusitana({ weight: ["400", "700"], subsets: ["latin"] })

export default function Home() {
  const links = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' }
  ]
  return (
    <>
      <nav className="fixed w-full bg-slate-100 bg-opacity-60 shadow backdrop-blur-sm z-30">
        <div className="h-16 flex justify-between items-center max-w-screen-xl m-auto px-4">
          <div className="flex items-center gap-2">
            <Image src="/logo.png" alt="logo" width={50} height={45}></Image>
            <h2 className={`${lusitana.className} text-xl text-cyan-950`}>SCH Foundation</h2>
          </div>
          <div className="flex gap-5 items-center">
            {links.map(link => {
              return <Link key={link.name} href={link.href} className="font-medium text-slate-700 hover:text-slate-900">{link.name}</Link>
            })}
            <button type="button" className="bg-cyan-700 hover:bg-cyan-800 h-8 px-2 text-slate-100 rounded shadow">Join Us!</button>
          </div>
        </div>
      </nav >

      <main className="">
        <section id="home" className="bg-gradient-to-r from-slate-100 to-gray-200">
          <div className="max-w-screen-xl px-4 m-auto flex justify-between items-center gap-2 pt-16 min-h-screen">
            <div className="w-5/12">
              <h1 className="text-6xl font-bold text-cyan-800"><span className="font-extrabold text-transparent text-7xl bg-clip-text bg-gradient-to-r from-blue-800 to-orange-600">Knowledge</span> is power; <span className="font-extrabold text-transparent text-7xl bg-clip-text bg-gradient-to-r from-blue-800 to-orange-600">education</span> is its source.</h1>
              <p className="tracking-widest text-lg text-slate-700 mt-2">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
              <div>
                <div className="flex flex-col gap-2 mt-5">
                  <div className="w-2 h-2 rounded-full bg-blue-800"></div>
                  <div className="w-2 h-2 rounded-full bg-blue-400"></div>
                  <div className="w-2 h-2 rounded-full bg-red-500"></div>
                  <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                </div>
              </div>
              {/* <Link href="#about">Discover more</Link> */}
            </div>
            <div className="flex gap-2 relative">
              <div>
                <div className="flex gap-2 mt-5 absolute z-10 -top-14 right-0">
                  <div className="w-2 h-2 rounded-full bg-blue-900"></div>
                  <div className="w-2 h-2 rounded-full bg-blue-600"></div>
                  <div className="w-2 h-2 rounded-full bg-blue-300"></div>
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
