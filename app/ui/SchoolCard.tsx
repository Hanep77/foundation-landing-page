import Image from "next/image";

export default function SchoolCard({ name, iconSrc }: { name: string, iconSrc: string }) {
    return (
        <div className="bg-gradient-to-r from-slate-200 to-gray-300 w-80 p-5 border border-slate-400 flex flex-col items-center text-center rounded">
            <Image src={iconSrc} alt="school" width={80} height={80} />
            <h5 className="text-xl text-slate-800 font-medium tracking-wide py-2">{name}</h5>
            <p className="text-slate-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde amet nobis, ipsa commodi corrupti suscipit.</p>
        </div>
    )
}