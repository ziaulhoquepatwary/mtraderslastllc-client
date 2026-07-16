"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(true);
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
        <nav className="w-full fixed top-0 left-0 z-50 border-b transition-colors duration-300 bg-white/80 dark:bg-slate-950/80 backdrop-blur-md border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">

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

                    <div className="flex items-center gap-3 sm:gap-4">

                        <button
                            onClick={() => setIsDarkMode(!isDarkMode)}
                            type="button"
                            className="p-2.5 rounded-lg text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-900 transition-colors"
                            aria-label="Toggle Theme"
                        >
                            {isDarkMode ? (
                                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m0 13.5V21M4.22 4.22l1.59 1.59m12.38 12.38l1.59 1.59M3 12h2.25m13.5 0H21M4.22 19.78l1.59-1.59M18.24 5.76l1.59-1.59M12 7.5a4.5 4.5 0 100 9 4.5 4.5 0 000-9z" />
                                </svg>
                            ) : (
                                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 12.83A9.54 9.54 0 0112 21.75c-5.16 0-9.42-4.09-9.5-9.22a9.55 9.55 0 0110.87-8.62 9.53 9.53 0 004.88 1.48c.36 0 .72-.02 1.07-.07a9.54 9.54 0 014.43 7.51z" />
                                </svg>
                            )}
                        </button>

                        <Link
                            href="/login"
                            className="hidden sm:inline-flex items-center justify-center px-5 py-2.5 text-sm font-semibold text-white bg-linear-to-r from-cyan-500 via-blue-600 to-cyan-500 bg-size-[200%_auto] bg-position-[0%_center] rounded-lg hover:bg-position-[100%_center] transition-all duration-500 shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/30 active:scale-95"
                        >
                            Get Started
                        </Link>

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

            <div
                className={`lg:hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-screen opacity-100 visible" : "max-h-0 opacity-0 invisible overflow-hidden"
                    }`}
                id="mobile-menu"
            >
                <div className="px-4 pt-2 pb-6 space-y-1 border-b bg-white/95 dark:bg-slate-950/95 border-slate-200 dark:border-slate-800 backdrop-blur-lg">
                    {navLinks.map((link) => {
                        const active = isActive(link.href);
                        return (
                            <Link
                                key={link.name}
                                href={link.href}
                                onClick={() => setIsOpen(false)}
                                className={`block px-3 py-3 rounded-md text-base font-medium transition-colors ${active
                                    ? "text-cyan-500 dark:text-cyan-400 bg-slate-50 dark:bg-slate-900/60"
                                    : "text-slate-700 dark:text-slate-300 hover:text-cyan-500 dark:hover:text-cyan-400 hover:bg-slate-50 dark:hover:bg-slate-900/60"
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