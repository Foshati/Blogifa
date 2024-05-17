"use client";
import { useEffect, useState } from "react";
import { BookOpen, PlayIcon, Search, Fingerprint } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import MusicIco from "@/components/PlayMusic/playMusic";

export const Navbar = () => {
  const pathname = usePathname();
  const [isSticky, setIsSticky] = useState(false);

  const handleScroll = () => {
    if (window.scrollY >= 20) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* pathname === "/" || =>>  With this condition, the navbar will be placed on the main page banner   */}
      <header
        className={`w-full mx-auto bg-black z-40 bg-opacity-50 rounded-b-2xl transition-all  duration-300 ease-in-out transform 
        ${pathname === "/" || isSticky ? "fixed top-0  left-0 z-50" : ""}`}
      >
        <div className="navbar">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li className="hover:text-red-500">
                  <Link
                    href="/"
                    className={pathname === "/" ? "text-red-500" : ""}
                  >
                    Home
                  </Link>
                </li>
                <li className="hover:text-red-500">
                  <Link
                    href="/about"
                    className={pathname === "/about" ? "text-red-500" : ""}
                  >
                    About
                  </Link>
                </li>
                <li className="hover:text-red-500">
                  <Link
                    href="/contact"
                    className={pathname === "/contact" ? "text-red-500" : ""}
                  >
                    Contact
                  </Link>
                </li>
                <li className="hover:text-red-500">
                  <Link
                    href="/blog"
                    className={pathname === "/blog" ? "text-red-500" : ""}
                  >
                    Blog
                  </Link>
                </li>
              </ul>
            </div>
            <BookOpen className="m-3 text-yellow-500 size-7" />
          </div>
          <div className="hidden navbar-center lg:flex">
            <ul className="px-1 menu menu-horizontal">
              <li className="hover:text-red-500">
                <Link
                  href="/"
                  className={pathname === "/" ? "text-red-500" : ""}
                >
                  Home
                </Link>
              </li>
              <li className="hover:text-red-500">
                <Link
                  href="/about"
                  className={pathname === "/about" ? "text-red-500" : ""}
                >
                  About
                </Link>
              </li>
              <li className="hover:text-red-500">
                <Link
                  href="/contact"
                  className={pathname === "/contact" ? "text-red-500" : ""}
                >
                  Contact
                </Link>
              </li>
              <li className="hover:text-red-500">
                <Link
                  href="/blog"
                  className={pathname === "/blog" ? "text-red-500" : ""}
                >
                  Blog
                </Link>
              </li>
            </ul>
          </div>
          <div className="navbar-end">
            <div className="btn btn-ghost btn-circle">
              <MusicIco />
            </div>
            <button className="hidden btn btn-ghost btn-circle lg:flex">
              <Search />
            </button>
            <button className="btn btn-ghost btn-circle">
              <Fingerprint />
            </button>
          </div>
        </div>
      </header>
    </>
  );
};
