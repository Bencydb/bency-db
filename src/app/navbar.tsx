"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
    const pathname = usePathname();

    const links = [
        { name: "Home", href: "/" },
        { name: "Projects", href: "projects" },
        { name: "Resume", href: "resume" },
    ];

    return (
        <nav className="sticky top-0 z-50 bg-gradient-to-r from-[#F5DEB3] to-[#FFDBDB] backdrop-blur-md border-b border-gray-300 shadow-lg">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="flex justify-between h-16 items-center">
                    <div className="text-[#FF5733] font-bold text-xl tracking-wide hover:opacity-90 transition-opacity">
                        <Link href="/">
                            Bency Daniel Binu
                        </Link>
                    </div>


                    <div className="hidden md:flex items-center space-x-6">
                        {links.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className={`${
                                    pathname === link.href
                                        ? "text-[#FF5733] font-bold underline"
                                        : "text-gray-800 hover:text-[#FF5733] hover:underline"
                                } transition-all duration-300`}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </nav>
    );
}
