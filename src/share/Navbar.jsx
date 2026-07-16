"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeToggle from "@/components/ThemeToggle";

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "Services", href: "/services" },
        { name: "Technology", href: "/technology" },
        { name: "About", href: "/about" },
        { name: "Contact", href: "/contact" },
    ];

    const isActive = (path) => pathname === path;

    return (
        <nav className="w-full fixed top-0 left-0 z-50 border-b transition-colors duration-300 bg-white/80 dark:bg-slate-950 backdrop-blur-md dark:backdrop-blur-none border-slate-200 dark:border-slate-900 text-slate-800 dark:text-slate-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">

                    {/* Logo Section */}
                    <div className="flex items-center">
                        <Link href="/" className="flex items-center gap-2 group">
                            <img
                                src="/logo.png"
                                alt="Logo"
                                className="h-8 w-8 sm:h-10 sm:w-10 object-contain"
                            />
                            <span className="text-2xl font-black tracking-wider uppercase bg-clip-text text-transparent bg-linear-to-r from-cyan-500 to-blue-600 dark:from-cyan-400 dark:to-blue-500">
                                TRADERS
                            </span>
                        </Link>
                    </div>

                    {/* Desktop Navigation Links */}
                    <div className="hidden lg:flex items-center justify-center space-x-8">
                        {navLinks.map((link) => {
                            const active = isActive(link.href);
                            return (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className={`font-medium transition-colors duration-200 relative group py-2 ${active
                                        ? "text-cyan-500 dark:text-cyan-400"
                                        : "text-slate-600 dark:text-slate-400 hover:text-cyan-500 dark:hover:text-cyan-400"
                                        }`}
                                >
                                    {link.name}
                                    <span className={`absolute bottom-0 left-0 h-0.5 bg-cyan-500 dark:bg-cyan-400 transition-all duration-300 ${active ? "w-full" : "w-0 group-hover:w-full"
                                        }`}></span>
                                </Link>
                            );
                        })}
                    </div>

                    {/* Right Side Buttons */}
                    <div className="flex items-center gap-3 sm:gap-4">
                        <ThemeToggle />

                        <Link
                            href="/login"
                            className="hidden sm:inline-flex items-center justify-center px-5 py-2.5 text-sm font-semibold text-white bg-linear-to-r from-cyan-500 via-blue-600 to-cyan-500 bg-size-[200%_auto] bg-position-[0%_center] rounded-lg hover:bg-position-[100%_center] transition-all duration-500 shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/30 active:scale-95"
                        >
                            Get Started
                        </Link>

                        {/* Hamburger Menu Icon */}
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            type="button"
                            className="inline-flex lg:hidden items-center justify-center p-2 rounded-lg text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-900 focus:outline-none"
                            aria-controls="mobile-menu"
                            aria-expanded={isOpen}
                        >
                            <span className="sr-only">Open main menu</span>
                            {!isOpen ? (
                                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                </svg>
                            ) : (
                                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            )}
                        </button>

                    </div>
                </div>
            </div>

            {/* Mobile Menu Panel */}
            <div
                className={`lg:hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-screen opacity-100 visible" : "max-h-0 opacity-0 invisible overflow-hidden"
                    }`}
                id="mobile-menu"
            >
                <div className="px-4 pt-2 pb-6 space-y-1 border-b bg-white/95 dark:bg-slate-950 border-slate-200 dark:border-slate-900">
                    {navLinks.map((link) => {
                        const active = isActive(link.href);
                        return (
                            <Link
                                key={link.name}
                                href={link.href}
                                onClick={() => setIsOpen(false)}
                                className={`block px-3 py-3 rounded-md text-base font-medium transition-colors ${active
                                    ? "text-cyan-500 dark:text-cyan-400 bg-slate-50 dark:bg-slate-900/40"
                                    : "text-slate-700 dark:text-slate-300 hover:text-cyan-500 dark:hover:text-cyan-400 hover:bg-slate-50 dark:hover:bg-slate-900/40"
                                    }`}
                            >
                                {link.name}
                            </Link>
                        );
                    })}

                    <div className="pt-4 px-3 sm:hidden">
                        <Link
                            href="/login"
                            onClick={() => setIsOpen(false)}
                            className="w-full flex items-center justify-center px-4 py-3 text-base font-semibold text-white bg-linear-to-r from-cyan-500 via-blue-600 to-cyan-500 bg-size-[200%_auto] bg-position-[0%_center] rounded-lg hover:bg-position-[100%_center] transition-all duration-500"
                        >
                            Get Started
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;