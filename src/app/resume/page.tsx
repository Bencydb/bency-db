import Navbar from "@/app/navbar";
import type { Metadata } from "next";
import Footer from "@/app/footer";
import {
    FaGithub,
    FaLinkedin,
    FaHome,
    FaLink,
    FaPython,
    FaJava,
    FaDatabase,
    FaNodeJs,
    FaHtml5
} from "react-icons/fa";
import {SiJavascript, SiTypescript, SiYoutubemusic} from "react-icons/si";
import { IoIosFootball } from "react-icons/io";
import Image from "next/image";
import {FaReact} from "react-icons/fa6";
import {TbBrandCSharp} from "react-icons/tb";
import {CiCircleCheck} from "react-icons/ci";


export const metadata: Metadata = {
    title: "Resume - Bency Daniel Binu",
    description: "Software Developer Portfolio",
    icons: [{ rel: "icon", url: "/favicon.ico" }],
};


export default function Resume() {
    return (
        <>
            <Navbar />

            <main className="flex min-h-screen flex-col bg-gradient-to-r from-[#F5DEB3] to-[#FFDBDB] text-gray-900 pt-16">
                <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 md:px-12 lg:px-24 py-8">

                    <section className="text-center mb-8 sm:mb-12">
                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#FF5733]">BENCY DANIEL BINU</h1>
                        <section>
                            <br className="hidden sm:block"/>
                            <hr/>
                            <div className="flex flex-wrap justify-center items-center gap-x-4 gap-y-2 mt-4">
                                <div className="flex items-center gap-2 whitespace-nowrap">
                                    <FaHome className="text-sm sm:text-base"/>
                                    <span className="text-sm sm:text-lg text-gray-700">Oshawa</span>
                                </div>
                                <a href="mailto:bency.danielbinu@dcmail.ca"
                                   className="text-sm sm:text-lg text-[#FF5733] hover:underline whitespace-nowrap">
                                    bency.danielbinu@dcmail.ca
                                </a>
                                <div className="flex gap-4">
                                    <a href="https://github.com/your-github-profile" target="_blank"
                                       rel="noopener noreferrer">
                                        <FaGithub className="w-6 h-6 sm:w-8 sm:h-8 text-black"/>
                                    </a>
                                    <a href="https://www.linkedin.com/in/your-linkedin-profile" target="_blank"
                                       rel="noopener noreferrer">
                                        <FaLinkedin className="w-6 h-6 sm:w-8 sm:h-8 text-blue-500"/>
                                    </a>
                                </div>
                            </div>
                            <br className="hidden sm:block"/>
                            <hr/>
                        </section>
                    </section>


                    <div className="flex flex-col lg:flex-row gap-4 mt-8">
                        {/* Left Side */}
                        <div className="w-full lg:w-[70%] space-y-4">
                            <div className="bg-gradient-to-r from-[#F5DEB3] to-[#FFDBDB] p-4 rounded-lg shadow-md">
                                <h2 className="text-lg font-bold text-[#FF5733] text-center">Personal Profile</h2>
                                <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
                                    A passionate and detail-oriented software developer with a strong foundation in
                                    full-stack development. I am a recent graduate of Durham College, holding a 3-year
                                    Advanced Diploma in Computer Programming & Analysis with a stellar GPA of 4.2. I
                                    thrive on building scalable and user-friendly applications, while continuously
                                    learning and growing alongside the tech industry.
                                </p>
                            </div>
                            <div className="bg-gradient-to-r from-[#F5DEB3] to-[#FFDBDB] p-4 shadow-md rounded-lg">
                                <h2 className="text-lg font-bold text-[#FF5733] text-center">Professional Experience</h2>
                                <table className="min-w-full border-collapse">
                                    <tbody>
                                    <tr>
                                        <td className="py-4 px-2 sm:px-6 font-bold text-gray-800 flex items-center gap-2 sm:gap-3">
                                            <Image
                                                src="/logo.png"
                                                alt="Kuwota Logo"
                                                width={40}
                                                height={40}
                                                className="rounded"
                                            />
                                            <span className="text-sm sm:text-base">Kuwota</span>
                                            <a
                                                href="https://kuwota.com/"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-blue-500 hover:text-blue-700"
                                            >
                                                <FaLink className="w-4 h-4 sm:w-5 sm:h-5"/>
                                            </a>
                                        </td>
                                        <td className="py-4 px-2 sm:px-6 text-right text-sm sm:text-base text-gray-600">April 2025 - May 2025</td>
                                    </tr>

                                    <tr>
                                        <td className="pb-4 px-2 sm:px-6 text-sm sm:text-base text-gray-700" colSpan={2}>Software Developer Intern</td>
                                    </tr>
                                    <tr>
                                        <td className="pb-4 px-2 sm:px-6 text-sm sm:text-base text-gray-700" colSpan={2}>
                                            <ul className="list-disc ml-4 sm:ml-5 mt-2 space-y-1">
                                                <li>Assisted in developing web solutions, ensuring clean and optimized code.</li>
                                                <li>Collaborated with cross-functional teams to integrate new features.</li>
                                            </ul>
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="bg-gradient-to-r from-[#F5DEB3] to-[#FFDBDB] p-4 shadow-md rounded-lg">
                                <h2 className="text-lg font-bold text-[#FF5733] text-center mb-4">Education</h2>
                                <table className="min-w-full border-collapse">
                                    <tbody>
                                    <tr>
                                        <td className="py-4 px-2 sm:px-6 font-bold text-gray-800 flex items-center gap-2 sm:gap-3">
                                            <Image
                                                src="https://durhamcollege.ca/wp-content/uploads/dc-logos-2020-shield-341.svg"
                                                alt="Durham College Logo"
                                                width={40}
                                                height={40}
                                                className="rounded"
                                            />
                                            <span className="text-sm sm:text-base">Durham College</span>
                                            <a
                                                href="https://durhamcollege.ca/programs/computer-programming-analyst-three-year#tabOverview"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-blue-500 hover:text-blue-700"
                                            >
                                                <FaLink className="w-4 h-4 sm:w-5 sm:h-5"/>
                                            </a>
                                        </td>
                                        <td className="py-4 px-2 sm:px-6 text-right text-sm sm:text-base text-gray-600">Sep 2022 - May 2025</td>
                                    </tr>
                                    <tr>
                                        <td className="pb-4 px-2 sm:px-6 text-sm sm:text-base text-gray-700 font-medium" colSpan={2}>
                                            Advanced Diploma in Computer Programming and Analysis
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="pb-4 px-2 sm:px-6 text-sm sm:text-base text-gray-700 leading-relaxed" colSpan={2}>
                                            This program offers comprehensive study in information technology, systems
                                            development methodologies, and application programming built on a solid
                                            foundation of business expertise. The curriculum includes in-depth
                                            instruction and the practical application of structured, mainframe,
                                            and object-oriented programming languages.
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <div className="w-full lg:w-[30%] space-y-4">
                            <div className="bg-gradient-to-r from-[#F5DEB3] to-[#FFDBDB] p-4 shadow-md rounded-lg">
                                <h2 className="text-lg font-bold text-[#FF5733] text-center">Skills</h2>
                                <ul className="space-y-2 text-sm sm:text-base">
                                    <li className="flex items-center gap-2">
                                        <CiCircleCheck className="text-[#FF5733]"/>
                                        <span>Full Stack Web Development</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <CiCircleCheck className="text-[#FF5733]"/>
                                        <span>Agile Development</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <CiCircleCheck className="text-[#FF5733]"/>
                                        <span>Oral and Written Communication</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <CiCircleCheck className="text-[#FF5733]"/>
                                        <span>Object Oriented Programming</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <CiCircleCheck className="text-[#FF5733]"/>
                                        <span>Analytical Thinking</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <CiCircleCheck className="text-[#FF5733]"/>
                                        <span>Problem Solving</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <CiCircleCheck className="text-[#FF5733]"/>
                                        <span>Creativity</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <CiCircleCheck className="text-[#FF5733]"/>
                                        <span>Team Work</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="bg-gradient-to-r from-[#F5DEB3] to-[#FFDBDB] p-4 shadow-md rounded-lg">
                                <h2 className="text-lg font-bold text-[#FF5733] text-center mb-4">Primary Stack</h2>
                                <div className="grid grid-cols-3 sm:grid-cols-4 gap-4 sm:gap-6 text-center">
                                    <div className="flex flex-col items-center">
                                        <SiJavascript className="w-6 h-6 sm:w-8 sm:h-8 text-yellow-500"/>
                                        <p className="text-xs sm:text-sm md:text-base text-gray-700 font-medium mt-1 sm:mt-2">JavaScript</p>
                                    </div>
                                    <div className="flex flex-col items-center">
                                        <TbBrandCSharp className="w-6 h-6 sm:w-8 sm:h-8 text-blue-700"/>
                                        <p className="text-xs sm:text-sm md:text-base text-gray-700 font-medium mt-1 sm:mt-2">C#</p>
                                    </div>
                                    <div className="flex flex-col items-center">
                                        <FaHtml5 className="w-6 h-6 sm:w-8 sm:h-8 text-orange-500"/>
                                        <p className="text-xs sm:text-sm md:text-base text-gray-700 font-medium mt-1 sm:mt-2">HTML</p>
                                    </div>
                                    <div className="flex flex-col items-center">
                                        <SiTypescript className="w-6 h-6 sm:w-8 sm:h-8 text-blue-500"/>
                                        <p className="text-xs sm:text-sm md:text-base text-gray-700 font-medium mt-1 sm:mt-2">TypeScript</p>
                                    </div>
                                    <div className="flex flex-col items-center">
                                        <FaNodeJs className="w-6 h-6 sm:w-8 sm:h-8 text-green-500"/>
                                        <p className="text-xs sm:text-sm md:text-base text-gray-700 font-medium mt-1 sm:mt-2">NodeJS</p>
                                    </div>
                                    <div className="flex flex-col items-center">
                                        <FaReact className="w-6 h-6 sm:w-8 sm:h-8 text-blue-500"/>
                                        <p className="text-xs sm:text-sm md:text-base text-gray-700 font-medium mt-1 sm:mt-2">React</p>
                                    </div>
                                    <div className="flex flex-col items-center">
                                        <FaDatabase className="w-6 h-6 sm:w-8 sm:h-8 text-purple-500"/>
                                        <p className="text-xs sm:text-sm md:text-base text-gray-700 font-medium mt-1 sm:mt-2">SQL</p>
                                    </div>
                                    <div className="flex flex-col items-center">
                                        <FaJava className="w-6 h-6 sm:w-8 sm:h-8 text-red-500"/>
                                        <p className="text-xs sm:text-sm md:text-base text-gray-700 font-medium mt-1 sm:mt-2">Java</p>
                                    </div>

                                    <div className="flex flex-col items-center">
                                        <FaPython className="w-6 h-6 sm:w-8 sm:h-8 text-blue-400"/>
                                        <p className="text-xs sm:text-sm md:text-base text-gray-700 font-medium mt-1 sm:mt-2">Python</p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-gradient-to-r from-[#F5DEB3] to-[#FFDBDB] p-4 shadow-md rounded-lg">
                                <h2 className="text-lg font-bold text-[#FF5733] text-center mb-4">Interests &
                                    Hobbies</h2>
                                <ul className="space-y-3">
                                    <li className="flex items-center gap-2">
                                        <IoIosFootball className="w-5 h-5 sm:w-6 sm:h-6 text-[#FF5733]"/>
                                        <span className="text-sm sm:text-base text-gray-700 font-medium">Football</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <SiYoutubemusic className="w-5 h-5 sm:w-6 sm:h-6 text-[#FF5733]"/>
                                        <span className="text-sm sm:text-base text-gray-700 font-medium">Music</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="bg-gradient-to-r from-[#F5DEB3] to-[#FFDBDB] p-4 shadow-md rounded-lg">
                                <h2 className="text-lg font-bold text-[#FF5733] text-center mb-4">Projects</h2>
                                <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
                                    Visit my Projects Page. <a href="/projects"
                                                               className="text-[#FF5733] hover:underline">Click Here</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <Footer/>
        </>
    );
}
