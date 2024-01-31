import Image from "next/image";

export default function ContactSection() {
    return (
        <div className="bg-cyan-800 text-slate-300 px-4 py-12 md:p-20 mx-4 rounded absolute -bottom-28 flex flex-col gap-8 md:flex-row justify-between">
            <div className="flex md:flex-col gap-5 items-center md:w-60">
                <Image src="/icons/address-svgrepo-com.svg" className="w-12 lg:w-16" alt="" width={60} height={60} />
                <p>Jl. Lorem IV No. 8 Jayapura, Sumatra Barat</p>
            </div>
            <div className="flex md:flex-col gap-5 items-center w-20 md:w-60">
                <Image src="/icons/email-svgrepo-com.svg" className="w-12 lg:w-16" alt="" width={60} height={60} />
                <p>scfoundation@gmail.com</p>
            </div>
            <div className="flex md:flex-col gap-5 items-center w-20 md:w-60">
                <Image src="/icons/telephone-svgrepo-com.svg" className="w-12 lg:w-16" alt="" width={60} height={60} />
                <p>0812345678</p>
            </div>
        </div>
    )
}