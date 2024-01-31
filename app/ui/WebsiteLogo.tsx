import Image from "next/image";
import { Lusitana } from "next/font/google";

const lusitana = Lusitana({ weight: ["400", "700"], subsets: ["latin"] })

export default function WebsiteLogo() {
    return (
        <div className="flex items-center gap-2">
            <Image src="/logo.png" alt="logo" width={50} height={45}></Image>
            <h2 className={`${lusitana.className} text-xl text-slate-100`}>SCH Foundation</h2>
        </div>
    )
}