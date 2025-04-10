import Navbar from "@/app/navbar";
import type { Metadata } from "next";
import Footer from "@/app/footer";
import {FaGithub, FaLinkedin, FaHome, FaLink, FaPython, FaJava, FaDatabase, FaNodeJs, FaHtml5} from "react-icons/fa";
import {SiJavascript, SiYoutubemusic} from "react-icons/si";
import { IoIosFootball } from "react-icons/io";
import Image from "next/image";
import {FaReact} from "react-icons/fa6";
import {TbBrandCSharp} from "react-icons/tb";

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
                <div className="w-full max-w-6xl mx-auto px-6 md:px-12 lg:px-24 py-8">

                    {/* Name Section */}
                    <section className="text-center mb-12">
                        <h1 className="text-6xl font-extrabold text-[#FF5733]">BENCY DANIEL BINU</h1>
                        <section>
                            <br /><hr />
                            <div className="flex justify-center items-center space-x-6 mt-4">
                                <FaHome />
                                <span className="text-lg text-gray-700">Oshawa</span>
                                <a href="mailto:bency.danielbinu@dcmail.ca"
                                   className="text-lg text-[#FF5733] hover:underline">
                                    bency.danielbinu@dcmail.ca
                                </a>
                                <a href="https://github.com/your-github-profile" target="_blank" rel="noopener noreferrer">
                                    <FaGithub className="w-8 h-8 text-black" />
                                </a>
                                <a href="https://www.linkedin.com/in/your-linkedin-profile" target="_blank" rel="noopener noreferrer">
                                    <FaLinkedin className="w-8 h-8 text-blue-500" />
                                </a>
                            </div>
                            <br /><hr />
                        </section>
                    </section>

                    {/* Left and Right Div Sections */}
                    <div className="flex gap-4 mt-8">
                        {/* Left Side (70% Width) */}
                        <div className="w-[70%] space-y-4 bg-cl ">
                            <div className=" bg-gradient-to-r from-[#F5DEB3] to-[#FFDBDB] p-4 rounded-lg shadow-md">
                                <h2 className="text-lg font-bold text-[#FF5733] text-center">Personal Profile</h2>
                                <p className="text-lg text-gray-700 leading-relaxed">
                                    A passionate and detail-oriented software developer with a strong foundation in
                                    full-stack development. I am a recent graduate of Durham College, holding a 3-year
                                    Advanced Diploma in Computer Programming & Analysis with a stellar GPA of 4.2. I
                                    thrive on building scalable and user-friendly applications, while continuously
                                    learning and growing alongside the tech industry.
                                </p>
                            </div>
                            <div className="bg-gradient-to-r from-[#F5DEB3] to-[#FFDBDB] p-4 shadow-md rounded-lg">
                                <h2 className="text-lg font-bold text-[#FF5733] text-center">Professional
                                    Experience</h2>
                                <table className="min-w-full border-collapse">
                                    <tbody>
                                    <tr>
                                        <td className="py-4 px-6 font-bold text-gray-800 flex items-center gap-3">
                                            <Image
                                                src="/logo.png"
                                                alt="Kuwota Logo"
                                                width={50}
                                                height={50}
                                                className="rounded"
                                            />
                                            <span>Kuwota</span>
                                            <a
                                                href="https://kuwota.com/"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-blue-500 hover:text-blue-700"
                                            >
                                                <FaLink className="w-5 h-5"/>
                                            </a>
                                        </td>
                                        <td className="py-4 px-6 text-right text-gray-600">April 2025 - May 2025</td>
                                    </tr>

                                    <tr>
                                        <td className="pb-4 px-6 text-gray-700" colSpan={2}>Software Developer Intern
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="pb-4 px-6 text-gray-700" colSpan={2}>
                                            <ul className="list-disc ml-5 mt-2">
                                                <li>Assisted in developing web solutions, ensuring clean and optimized
                                                    code.
                                                </li>
                                                <li>Collaborated with cross-functional teams to integrate new
                                                    features.
                                                </li>
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
                                        <td className="py-4 px-6 font-bold text-gray-800 flex items-center gap-3">
                                            <Image
                                                src="https://durhamcollege.ca/wp-content/uploads/dc-logos-2020-shield-341.svg"
                                                alt="Durham College Logo"
                                                width={50}
                                                height={50}
                                                className="rounded"
                                            />
                                            <span>Durham College</span>
                                            <a
                                                href="https://durhamcollege.ca/programs/computer-programming-analyst-three-year#tabOverview"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-blue-500 hover:text-blue-700"
                                            >
                                                <FaLink className="w-5 h-5"/>
                                            </a>
                                        </td>
                                        <td className="py-4 px-6 text-right text-gray-600">Sep 2022 - May
                                            2025</td>
                                    </tr>
                                    <tr>
                                        <td className="pb-4 px-6 text-gray-700 font-medium" colSpan={2}>
                                            Advanced Diploma in Computer Programming and Analysis
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="pb-4 px-6 text-gray-700 leading-relaxed" colSpan={2}>
                                            This program offers comprehensive study in information technology, systems
                                            development methodologies,
                                            and application programming built on a solid foundation of business
                                            expertise. The curriculum includes
                                            in-depth instruction and the practical application of structured, mainframe,
                                            and object-oriented programming languages.
                                        </td>
                                    </tr>

                                    </tbody>
                                </table>
                            </div>


                        </div>

                        {/* Right Side (30% Width) */}
                        <div className="w-[30%] space-y-4">
                            <div className="bg-gradient-to-r from-[#F5DEB3] to-[#FFDBDB] p-4 shadow-md rounded-lg">
                                <h2 className="text-lg font-bold text-[#FF5733] text-center">Skills</h2>
                                <ul>
                                    <li>Full Stack Web Development</li>
                                    <li>Agile Development</li>
                                    <li>Oral and Written Communication</li>
                                    <li>Object Oriented Programming</li>
                                    <li>Analytical Thinking</li>
                                    <li>Problem Solving</li>
                                    <li>Creativity</li>
                                    <li>Team Work</li>
                                </ul>
                            </div>
                            <div className="bg-gradient-to-r from-[#F5DEB3] to-[#FFDBDB] p-4 shadow-md rounded-lg">
                                <h2 className="text-lg font-bold text-[#FF5733] text-center mb-4">Primary Stack</h2>
                                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 text-center">
                                    <div className="flex flex-col items-center">
                                        <SiJavascript className="w-8 h-8 text-yellow-500" />
                                        <p className="text-gray-700 font-medium mt-2">JavaScript</p>
                                    </div>
                                    <div className="flex flex-col items-center">
                                        <TbBrandCSharp className="w-8 h-8 text-blue-700" />
                                        <p className="text-gray-700 font-medium mt-2">C#</p>
                                    </div>
                                    <div className="flex flex-col items-center">
                                        <FaHtml5 className="w-8 h-8 text-orange-500" />
                                        <p className="text-gray-700 font-medium mt-2">HTML</p>
                                    </div>
                                    <div className="flex flex-col items-center">
                                        <FaNodeJs className="w-8 h-8 text-green-500" />
                                        <p className="text-gray-700 font-medium mt-2">NodeJS</p>
                                    </div>
                                    <div className="flex flex-col items-center">
                                        <FaReact className="w-8 h-8 text-blue-500" />
                                        <p className="text-gray-700 font-medium mt-2">React</p>
                                    </div>
                                    <div className="flex flex-col items-center">
                                        <FaDatabase className="w-8 h-8 text-purple-500" />
                                        <p className="text-gray-700 font-medium mt-2">SQL</p>
                                    </div>
                                    <div className="flex flex-col items-center">
                                        <FaJava className="w-8 h-8 text-red-500" />
                                        <p className="text-gray-700 font-medium mt-2">Java</p>
                                    </div>
                                    <div className="flex flex-col items-center">
                                        <FaPython className="w-8 h-8 text-blue-400" />
                                        <p className="text-gray-700 font-medium mt-2">Python</p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-gradient-to-r from-[#F5DEB3] to-[#FFDBDB] p-4 shadow-md rounded-lg">
                                <h2 className="text-lg font-bold text-[#FF5733] text-center mb-4">Interests &
                                    Hobbies</h2>
                                <ul className="space-y-4">
                                    <li className="flex items-center gap-2">
                                        <IoIosFootball className="w-6 h-6 text-[#FF5733]"/>
                                        <span className="text-gray-700 font-medium">Football</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <SiYoutubemusic className="w-6 h-6 text-[#FF5733]"/>
                                        <span className="text-gray-700 font-medium">Music</span>
                                    </li>
                                </ul>
                            </div>

                        </div>
                    </div>
                </div>
            </main>

            <Footer/>
        </>
    );
}
