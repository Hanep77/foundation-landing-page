import FooterLinks from "./FooterLinks";
import SocialMediaIcons from "./SocialMediaIcons";
import WebsiteLogo from "./WebsiteLogo";

export default function Footer() {
    return (
        <footer className="bg-slate-900">
            <div className="mx-auto w-full max-w-screen-xl p-4 pb-6 lg:pb-8 pt-40">
                <div className="md:flex md:justify-between">
                    <div className="mb-6 md:mb-0">
                        <WebsiteLogo />
                    </div>
                    <FooterLinks />
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                <div className="sm:flex sm:items-center sm:justify-between">
                    <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 SCH Foundation
                    </span>
                    <SocialMediaIcons />
                </div>
            </div>
        </footer>
    )
}