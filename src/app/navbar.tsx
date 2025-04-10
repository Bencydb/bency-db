"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Navbar() {
    const pathname = usePathname();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const links = [
        { name: "Home", href: "/" },
        { name: "Projects", href: "/projects" },
        { name: "Resume", href: "/resume" },
    ];

    return (
        <nav className="sticky top-0 z-50 bg-gradient-to-r from-[#F5DEB3] to-[#FFDBDB] backdrop-blur-md border-b border-gray-300 shadow-lg">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="flex justify-between h-16 items-center">
                    {/* Logo */}
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
                                        ? "text-[#FF5733] font-bold "
                                        : "text-gray-800 hover:text-[#FF5733] hover:underline"
                                } transition-all duration-300`}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>

                    <div className="md:hidden">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="text-[#FF5733] hover:text-gray-900 focus:outline-none"
                        >
                            {/* Hamburger Icon */}
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            </svg>
                        </button>
                    </div>
                </div>

                {isMenuOpen && (
                    <div className="md:hidden mt-2 space-y-2 bg-gradient-to-r from-[#F5DEB3] to-[#FFDBDB] p-4 rounded-lg shadow-md">
                        {links.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className={`block text-lg ${
                                    pathname === link.href
                                        ? "text-[#FF5733] font-bold "
                                        : "text-gray-800 hover:text-[#FF5733] hover:underline"
                                } transition-all duration-300`}
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>
                )}
            </div>
        </nav>
    );
}
