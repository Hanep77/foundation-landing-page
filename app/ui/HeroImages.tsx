import Image from "next/image";
import HorizontalDots from "./HorizontalDots";

export default function HeroImages() {
    return (
        <div className="hidden lg:flex gap-2 relative mt-8">
            <HorizontalDots />
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
    )
}