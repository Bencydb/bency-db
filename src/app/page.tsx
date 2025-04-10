import Navbar from "src/app/navbar";
import type { Metadata } from "next";
import Image from "next/image";
import Footer from "@/app/footer";

export const metadata: Metadata = {
  title: "Home - Bency",
  description: "Software Developer Portfolio",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function Home() {
  return (
      <>
        <Navbar />

        <main className="flex min-h-screen flex-col bg-gradient-to-r from-[#F5DEB3] to-[#FFDBDB] text-gray-900 pt-16">
          <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-24 py-8">
            {/* Home Section */}
            <section className="mb-16" id="home">
              <div className="flex flex-wrap items-center gap-6 sm:gap-8">
                {/* Name and Title */}
                <div className="flex-1">
                  <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight">
                    Hey there, I&apos;m <span className="text-[#FF5733]">Bency</span>
                  </h1>
                  <p className="text-base sm:text-xl text-gray-700 mt-4 leading-relaxed">
                    A <span className="font-bold text-gray-900">recent graduate</span> from Durham College with a
                    <span className="font-bold text-gray-900"> 3-year Advanced Diploma</span> in Computer Programming & Analysis (GPA: 4.2).
                    Passionate about creating stunning web applications and fixing bugs to perfection!
                  </p>
                </div>

                {/* Profile Image */}
                <div className="relative w-32 h-32 sm:w-48 sm:h-48 rounded-full overflow-hidden border-4 border-[#FF5733] shadow-xl transform hover:scale-105 transition-transform duration-300">
                  <Image
                      src="/bency.jpg"
                      alt="Bency's profile picture"
                      fill
                      className="object-cover"
                      priority
                  />
                </div>
              </div>
            </section>

            {/* About Me Section */}
            <section className="mb-16" id="about">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 border-b-4 border-[#FF5733] inline-block">
                About Me
              </h2>
              <p className="text-sm sm:text-lg text-gray-700 leading-relaxed">
                As a fresh graduate, I’ve developed over <span className="font-bold text-[#FF5733]">20+ projects</span>,
                ranging from interactive frontends to RESTful backends. Writing clean code, testing extensively, and
                delivering user-friendly solutions are my strongest assets.
              </p>
              <p className="text-sm sm:text-lg text-gray-700 leading-relaxed mt-4">
                Currently sharpening my skills in <span className="font-bold text-[#FF5733]">React</span>,
                <span className="font-bold text-[#FF5733]">Node.js</span>, and <span className="font-bold text-[#FF5733]">modern testing frameworks</span>.
                The tech industry moves fast—and I’m eager to grow alongside it.
              </p>
            </section>

            {/* Work Experience Section */}
            <section id="experience">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 border-b-4 border-[#FF5733] inline-block">
                Work Experience
              </h2>
              <div className="overflow-x-auto shadow-lg rounded-lg">
                <table className="min-w-full border-collapse">
                  <tbody>
                  {/* Work Experience Row */}
                  <tr className="border-b border-gray-300">
                    <td className="py-4 px-4 sm:px-6 font-bold text-gray-800 flex items-center gap-3">
                      <Image
                          src="/logo.png" // Ensure the logo file is in the public folder
                          alt="Kuwota Logo"
                          width={40}
                          height={40}
                          className="rounded"
                      />
                      Kuwota
                    </td>
                    <td className="py-4 px-4 sm:px-6 text-right text-gray-600">
                      April 2025 - May 2025
                    </td>
                  </tr>
                  <tr>
                    <td className="pb-4 px-4 sm:px-6 text-gray-700">
                      Software Developer Intern
                    </td>
                    <td></td>
                  </tr>
                  </tbody>
                </table>
              </div>
            </section>
          </div>

          <Footer />
        </main>
      </>
  );
}
