import Link from "next/link";

export default function FooterLinks() {
    return (
        <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Resources</h2>
                <ul className="text-gray-500 dark:text-gray-400 font-medium flex flex-col gap-2">
                    <li>
                        <Link href="#home" className="hover:underline">Home</Link>
                    </li>
                    <li>
                        <Link href="#about" className="hover:underline">About</Link>
                    </li>
                    <li>
                        <Link href="#contact" className="hover:underline">Contact</Link>
                    </li>
                </ul>
            </div>
            <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Follow us</h2>
                <ul className="text-gray-500 dark:text-gray-400 font-medium flex flex-col gap-2">
                    <li>
                        <a href="" className="hover:underline">Facebook</a>
                    </li>
                    <li>
                        <a href="" className="hover:underline">Instagram</a>
                    </li>
                    <li>
                        <a href="" className="hover:underline">Twitter</a>
                    </li>
                </ul>
            </div>
            <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Legal</h2>
                <ul className="text-gray-500 dark:text-gray-400 font-medium flex flex-col gap-2">
                    <li>
                        <a href="#" className="hover:underline">Privacy Policy</a>
                    </li>
                    <li>
                        <a href="#" className="hover:underline">Terms &amp; Conditions</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}