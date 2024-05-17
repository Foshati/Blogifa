"use client";
import { BookOpen, PlayIcon } from "lucide-react";
import { Search } from "lucide-react";
import { Fingerprint } from "lucide-react";

import Link from "next/link";
import { usePathname } from "next/navigation";

import MusicIco from "@/components/PlayMusic/playMusic";

export const Navbar = () => {
  const PathName = usePathname();

  return (
    <>
      <header className="fixed top-0 left-0 z-50 w-full bg-black bg-opacity-50 navbar">
        <div className="mx-auto navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
              className="menu menu-sm dropdown-content  mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li className="hover:text-red-500">
                <Link
                  href="/"
                  className={PathName == "/" ? "text-red-500" : ""}
                >
                  Home
                </Link>
              </li>
              <li className="hover:text-red-500">
                <Link
                  href="/about"
                  className={PathName == "/about" ? "text-red-500" : ""}
                >
                  About
                </Link>
              </li>
              <li className="hover:text-red-500">
                <Link
                  href="/contact"
                  className={PathName == "/contact" ? "text-red-500" : ""}
                >
                  Contact
                </Link>
              </li>
              <li className="hover:text-red-500">
                <Link
                  href="/blog"
                  className={PathName == "/blog" ? "text-red-500" : ""}
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
              <Link href="/" className={PathName == "/" ? "text-red-500" : ""}>
                Home
              </Link>
            </li>
            <li className="hover:text-red-500">
              <Link
                href="/about"
                className={PathName == "/about" ? "text-red-500" : ""}
              >
                About
              </Link>
            </li>
            <li className="hover:text-red-500">
              <Link
                href="/contact"
                className={PathName == "/contact" ? "text-red-500" : ""}
              >
                Contact
              </Link>
            </li>
            <li className="hover:text-red-500">
              <Link
                href="/blog"
                className={PathName == "/blog" ? "text-red-500" : ""}
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
      </header>
    </>
  );
};
