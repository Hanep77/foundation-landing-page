"use client"

import Image from "next/image"
import { Lusitana } from "next/font/google";
import Link from "next/link";
import { useState } from "react";

const lusitana = Lusitana({ weight: ["400", "700"], subsets: ["latin"] })

export default function Navbar() {
    const [navDrop, setNavDrop] = useState(false)
    const links = [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Contact', href: '#contact' }
    ]

    function handleNavDrop() {
        setNavDrop(!navDrop)
    }

    return (
        <nav className="fixed w-full bg-slate-100 bg-opacity-60 shadow backdrop-blur z-30">
            <div className="h-16 flex justify-between items-center max-w-screen-xl m-auto px-4">
                <div className="flex items-center gap-2">
                    <Image src="/logo.png" alt="logo" width={50} height={45}></Image>
                    <h2 className={`${lusitana.className} text-xl text-cyan-950`}>SCH Foundation</h2>
                </div>
                <div className={`${navDrop ? 'flex' : 'hidden md:flex'} flex-col md:flex-row fixed md:static top top-20 left-8 right-8 border border-slate-300 md:border-none rounded md:rounded-none bg-slate-100 md:bg-inherit p-4 md:p-0 md:gap-5 items-center`}>
                    {links.map(link => {
                        return <Link key={link.name} href={link.href} className="font-medium text-slate-700 hover:text-slate-900 py-2 border-b md:border-none w-full md:w-auto text-center md:text-start">{link.name}</Link>
                    })}
                    <button type="button" className="bg-cyan-700 hover:bg-cyan-800 h-8 my-2 px-2 text-slate-100 rounded shadow">Join Us!</button>
                </div>
                <button type="button" className="flex flex-col gap-2 md:hidden" onClick={handleNavDrop}>
                    <div className="h-1 w-8 bg-slate-950 rounded"></div>
                    <div className="h-1 w-8 bg-slate-950 rounded"></div>
                    <div className="h-1 w-8 bg-slate-950 rounded"></div>
                </button>
            </div>
        </nav >
    )
}