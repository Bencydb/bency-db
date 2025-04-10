import Image from "next/image";
import Navbar from "@/app/navbar";
import type { Metadata } from "next";
import Footer from "@/app/footer";
import { FaReact } from "react-icons/fa6";
import { RiTailwindCssFill, RiNextjsFill } from "react-icons/ri";
import { FaNodeJs, FaBootstrap } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { TbBrandCSharp } from "react-icons/tb";
import { SiDotnet } from "react-icons/si";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Projects - Bency",
    description: "Software Developer Portfolio",
    icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function Projects() {
    return (
        <>
            <Navbar/>
            <main className="min-h-screen bg-gradient-to-r from-[#F5DEB3] to-[#FFDBDB] text-gray-900 pt-16">
                <div className="max-w-7xl mx-auto px-6 lg:px-8 py-8">
                    <h1 className="text-5xl font-extrabold text-center text-gray-900 mb-8">Projects</h1>
                    <br />

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <Link href="/">
                            <div className="bg-gradient-to-r from-[#F5DEB3] to-[#FFDBDB] rounded-lg shadow-lg
                             overflow-hidden hover:shadow-2xl hover:scale-105 transition-transform">
                                <div className="relative w-full h-48">
                                    <Image
                                        src="/portfolio.jpg"
                                        alt="Portfolio Website"
                                        fill
                                        className="object-cover"
                                        priority
                                    />
                                </div>
                                <div className="p-6">
                                    <h2 className="text-2xl font-bold text-[#FF5733] mb-2">Portfolio Website</h2>
                                    <p className="text-gray-700 mb-4">
                                        Designed and developed a responsive personal portfolio showcasing skills
                                        and projects using React and Tailwind CSS.
                                    </p>
                                    <div className="flex flex-wrap gap-4 items-center">
                                    <span className="flex items-center justify-center px-3 py-2 rounded-full shadow-sm">
                                        <FaReact className="text-[#61DBFB] w-10 h-10" />
                                    </span>
                                        <span className="flex items-center justify-center px-3 py-2 rounded-full shadow-sm">
                                        <RiTailwindCssFill className="text-[#38B2AC] w-10 h-10" />
                                    </span>
                                        <span className="flex items-center justify-center px-3 py-2 rounded-full shadow-sm">
                                        <RiNextjsFill className="text-black w-10 h-10" />
                                    </span>
                                    </div>
                                </div>
                            </div>
                        </Link>

                        <a
                            href="https://aunt-rossie.onrender.com/"
                            rel="noopener noreferrer"
                            className="bg-gradient-to-r from-[#F5DEB3] to-[#FFDBDB] rounded-lg shadow-lg
                            overflow-hidden hover:shadow-2xl hover:scale-105 transition-transform "
                        >
                            <div className="relative w-full h-48">
                                <Image
                                    src="/bakery.jpg"
                                    alt="Inventory & Label Automation Web App"
                                    fill
                                    className="object-cover"
                                    priority
                                />
                            </div>
                            <div className="p-6">
                                <h2 className="text-2xl font-bold text-[#FF5733] mb-2">Inventory & Label Automation Web App</h2>
                                <p className="text-gray-700 mb-4">
                                    Developed a responsive website for Aunt Rosie’s Homemade Pies and Preserves using Bootstrap, MongoDB, and Node.js to streamline inventory, automate labeling, and enhance customer engagement.
                                </p>
                                <div className="flex flex-wrap gap-4 items-center">
                                    <span className="flex items-center justify-center px-3 py-2 rounded-full shadow-sm">
                                        <FaBootstrap className="text-[#7952B3] w-10 h-10" />
                                    </span>
                                    <span className="flex items-center justify-center px-3 py-2 rounded-full shadow-sm">
                                        <FaNodeJs className="text-[#68A063] w-10 h-10" />
                                    </span>
                                    <span className="flex items-center justify-center px-3 py-2 rounded-full shadow-sm">
                                        <SiMongodb className="text-[#47A248] w-10 h-10" />
                                    </span>
                                </div>
                            </div>
                        </a>

                        <a
                            href="https://durham-pharmacy.onrender.com/"
                            rel="noopener noreferrer"
                            className="bg-gradient-to-r from-[#F5DEB3] to-[#FFDBDB] rounded-lg shadow-lg
                            overflow-hidden hover:shadow-2xl hover:scale-105 transition-transform "
                        >
                            <div className="relative w-full h-48">
                                <Image
                                    src="/pharmacy.jpg"
                                    alt="Durham Pharmacy"
                                    fill
                                    className="object-cover"
                                    priority
                                />
                            </div>
                            <div className="p-6">
                                <h2 className="text-2xl font-bold text-[#FF5733] mb-2">Durham Pharmacy</h2>
                                <p className="text-gray-700 mb-4">
                                    Built a Pharmacy Management Website using React.js, Node.js, Express, and PostgreSQL to streamline prescription refills, notifications, and doctor communications.
                                </p>
                                <div className="flex flex-wrap gap-4 items-center">
                                    <span className="flex items-center justify-center px-3 py-2 rounded-full shadow-sm">
                                        <FaReact className="text-[#61DBFB] w-10 h-10" />
                                    </span>
                                    <span className="flex items-center justify-center px-3 py-2 rounded-full shadow-sm">
                                        <FaNodeJs className="text-[#68A063] w-10 h-10" />
                                    </span>
                                    <span className="flex items-center justify-center px-3 py-2 rounded-full shadow-sm">
                                        <BiLogoPostgresql className="text-[#336791] w-10 h-10" />
                                    </span>
                                </div>
                            </div>
                        </a>


                        <a
                            href="https://github.com/Bencydb/Hearts"
                            rel="noopener noreferrer"
                            className="bg-gradient-to-r from-[#F5DEB3] to-[#FFDBDB] rounded-lg shadow-lg
                            overflow-hidden hover:shadow-2xl hover:scale-105 transition-transform "
                        >
                            <div className="relative w-full h-48">
                                <Image
                                    src="/card.jpg"
                                    alt="Hearts"
                                    fill
                                    className="object-cover"
                                    priority
                                />
                            </div>
                            <div className="p-6">
                                <h2 className="text-2xl font-bold text-[#FF5733] mb-2">Hearts</h2>
                                <p className="text-gray-700 mb-4">
                                    Developed a digital version of the classic Hearts card game using C# and .NET Framework.
                                </p>
                                <div className="flex flex-wrap gap-4 items-center">
                                    <span className="flex items-center justify-center px-3 py-2 rounded-full shadow-sm">
                                        <TbBrandCSharp className="text-[#239120] w-10 h-10" />
                                    </span>
                                    <span className="flex items-center justify-center px-3 py-2 rounded-full shadow-sm">
                                        <SiDotnet className="text-[#512BD4] w-10 h-10" />
                                    </span>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}