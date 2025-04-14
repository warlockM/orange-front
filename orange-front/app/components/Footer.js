import Link from 'next/link';
import { FaGithub, FaReddit, FaTwitter, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 w-full mt-12">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Column 1 */}
        <div>
          <h3 className="text-lg font-bold text-orange-400 mb-4">Company</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/about" className="hover:text-orange-300 transition">
                About Us
              </Link>
            </li>
            <li>
              <a
                href="mailto:emailmayank@protonmail.com?subject=I am interested in Orange Intelligence"
                className="hover:text-orange-300 transition"
              >
                Contact Us
              </a>
            </li>
            <li>
              <Link href="/privacy" className="hover:text-orange-300 transition">
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 2 */}
        <div>
          <h3 className="text-lg font-bold text-orange-400 mb-4">Resources</h3>
          <ul className="space-y-2">
            <li>
              <a
                href="https://docs.google.com/document/d/1rcuUBJvDBU9wKdhCwsVMctbtlJUr2gNXB9mVJqS3jDQ/edit?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-orange-300 transition"
              >
                White Paper
              </a>
            </li>
            <li>
              <Link href="/neuron-program" className="hover:text-orange-300 transition">
                Become a Member
              </Link>
            </li>
            <li>
              <Link href="/investors" className="hover:text-orange-300 transition">
                For Investors
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h3 className="text-lg font-bold text-orange-400 mb-4">Connect</h3>
          <div className="flex space-x-4 text-xl">
            <a
              href="https://github.com/your-repo"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-orange-300"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.reddit.com/user/your-reddit"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-orange-300"
            >
              <FaReddit />
            </a>
            <a
              href="https://twitter.com/your-twitter"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-orange-300"
            >
              <FaTwitter />
            </a>
            <a
              href="https://linkedin.com/in/your-linkedin"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-orange-300"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>

      <div className="text-center text-sm text-gray-500 pb-4">
        &copy; {new Date().getFullYear()} Orange Intelligence. All rights reserved.
      </div>
    </footer>
  );
}
