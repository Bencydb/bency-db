import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-gradient-to-r from-[#F5DEB3] to-[#FFDBDB] text-gray-800 py-6">
            <div className="flex justify-end space-x-6 max-w-7xl mx-auto px-6">
                <Link
                    href="https://github.com/Bencydb"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub Profile"
                    className="text-gray-800 hover:text-[#FF5733] transition-colors"
                >
                    <FaGithub className="w-8 h-8 text-black" />
                </Link>

                <Link
                    href="https://www.linkedin.com/in/bency-daniel-binu-804510248/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn Profile"
                    className="text-gray-800 hover:text-[#FF5733] transition-colors"
                >
                    <FaLinkedin className="w-8 h-8 text-blue-500" />
                </Link>

                <Link
                    href="mailto:bency.danielbinu@dcmail.ca"
                    aria-label="Email Address"
                    className="text-gray-800 hover:text-[#FF5733] transition-colors"
                >
                    <FaEnvelope className="w-8 h-8" />
                </Link>
            </div>
        </footer>
    );
}
