"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";

export default function PortfolioPage() {
    const tags = ["All", "Featured", "Enterprise", "SaaS Platform"];
    const [activeFilter, setActiveFilter] = useState("All");

    const allProjects = [
        {
            title: "Pixer — Digital Multivendor Marketplace",
            description: "A comprehensive digital asset platform engineered for seamless vendor management, instant payouts, and highly optimized product delivery.",
            client: "Pixer LLC, US",
            tools: ["React", "Next.js", "Laravel", "Tailwind CSS", "TypeScript"],
            image: "/portfolio/portfolio-1.png",
            tag: "Featured"
        },
        {
            title: "Pickbazar — High-Performance E-commerce Ecosystem",
            description: "An enterprise-grade headless commerce platform focused on ultra-fast page transitions, dynamic filtering, and complex inventory synchronizations.",
            client: "Pickbazar Global",
            tools: ["Next.js", "React", "GraphQL", "REST API", "Tailwind CSS"],
            image: "/portfolio/portfolio-2.png",
            tag: "Enterprise"
        },
        {
            title: "ChawkBazar — Multi-Tenant SaaS E-Commerce Application",
            description: "A scalable multi-tenant digital marketplace infrastructure operating with distributed REST APIs to serve thousands of concurrent storefronts.",
            client: "ChawkBazar Group",
            tools: ["React", "Next.js", "Laravel API", "Tailwind CSS"],
            image: "/portfolio/portfolio-3.png",
            tag: "SaaS Platform"
        },
        {
            title: "NovaCart — Headless Commerce Storefront",
            description: "A blazing-fast headless storefront built for rapid A/B testing, personalized product recommendations, and frictionless checkout flows.",
            client: "NovaCart Inc, UK",
            tools: ["React", "Next.js", "Node.js", "Tailwind CSS", "TypeScript"],
            image: "/portfolio/portfolio-4.png",
            tag: "E-commerce"
        },
        {
            title: "Vaultly — Secure Fintech Dashboard",
            description: "A real-time financial analytics dashboard with role-based access control, encrypted transactions, and live currency conversion.",
            client: "Vaultly Financial, US",
            tools: ["React", "Redux", "Node.js", "Express", "PostgreSQL"],
            image: "/portfolio/portfolio-5.png",
            tag: "Fintech"
        },
        {
            title: "MedLink — Telehealth Patient Portal",
            description: "A HIPAA-compliant telehealth platform enabling secure video consultations, appointment scheduling, and digital prescription management.",
            client: "MedLink Health Systems",
            tools: ["Next.js", "React", "Node.js", "MongoDB", "WebRTC"],
            image: "/portfolio/portfolio-6.png",
            tag: "Healthcare"
        },
        {
            title: "EduSphere — Interactive Learning Management System",
            description: "A gamified LMS supporting live classrooms, adaptive quizzes, and progress analytics for K-12 and higher education institutions.",
            client: "EduSphere Learning, CA",
            tools: ["React", "Next.js", "GraphQL", "Tailwind CSS", "TypeScript"],
            image: "/portfolio/portfolio-7.png",
            tag: "EdTech"
        },
        {
            title: "RoutEx — Logistics & Fleet Management Platform",
            description: "A real-time fleet tracking system with route optimization, driver performance monitoring, and predictive maintenance alerts.",
            client: "RoutEx Logistics, DE",
            tools: ["React", "Node.js", "Express", "MongoDB", "Socket.io"],
            image: "/portfolio/portfolio-8.png",
            tag: "Logistics"
        },
        {
            title: "Streemly — Live Streaming & Content Platform",
            description: "A low-latency streaming platform with adaptive bitrate delivery, live chat, and monetization tools for independent creators.",
            client: "Streemly Media, US",
            tools: ["Next.js", "React", "Node.js", "Tailwind CSS", "WebSockets"],
            image: "/portfolio/portfolio-9.png",
            tag: "Media"
        },
        {
            title: "PropVista — Real Estate Listing Platform",
            description: "A feature-rich property marketplace with virtual tours, mortgage calculators, and geolocation-based search filtering.",
            client: "PropVista Realty, AU",
            tools: ["React", "Next.js", "Laravel", "Tailwind CSS", "MapBox"],
            image: "/portfolio/portfolio-10.png",
            tag: "Real Estate"
        },
        {
            title: "FreshCrate — Grocery Delivery Application",
            description: "An on-demand grocery delivery app with real-time order tracking, dynamic pricing, and vendor inventory syncing.",
            client: "FreshCrate Inc, US",
            tools: ["React Native", "React", "Node.js", "GraphQL", "MongoDB"],
            image: "/portfolio/portfolio-11.png",
            tag: "On-Demand"
        },
        {
            title: "TaskForge — Project Management SaaS",
            description: "A collaborative project management tool featuring kanban boards, time tracking, and automated workflow triggers.",
            client: "TaskForge Software, CA",
            tools: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Prisma"],
            image: "/portfolio/portfolio-12.png",
            tag: "SaaS Platform"
        },
        {
            title: "Cinemate — Movie Ticket Booking Platform",
            description: "A seamless ticket booking experience with seat selection, showtime filtering, and integrated payment gateways.",
            client: "Cinemate Entertainment",
            tools: ["React", "Next.js", "Laravel API", "Tailwind CSS"],
            image: "/portfolio/portfolio-13.png",
            tag: "Entertainment"
        },
        {
            title: "WorkNest — Remote Team Collaboration Suite",
            description: "An all-in-one workspace combining chat, video calls, file sharing, and task management for distributed teams.",
            client: "WorkNest Technologies",
            tools: ["React", "Node.js", "Socket.io", "MongoDB", "TypeScript"],
            image: "/portfolio/portfolio-14.png",
            tag: "Enterprise"
        },
        {
            title: "TrailBlaze — Travel Booking & Itinerary Planner",
            description: "A comprehensive travel platform for flight and hotel bookings, itinerary building, and personalized destination recommendations.",
            client: "TrailBlaze Travel, UK",
            tools: ["Next.js", "React", "GraphQL", "Tailwind CSS", "TypeScript"],
            image: "/portfolio/portfolio-15.png",
            tag: "Travel"
        },
        {
            title: "FitPulse — Fitness & Wellness Tracking App",
            description: "A health tracking application with workout plans, nutrition logging, and wearable device integration for real-time metrics.",
            client: "FitPulse Health, US",
            tools: ["React Native", "React", "Node.js", "Express", "MongoDB"],
            image: "/portfolio/portfolio-16.png",
            tag: "Health & Fitness"
        },
        {
            title: "BrightBank — Digital Banking Platform",
            description: "A modern online banking solution offering instant transfers, budgeting tools, and multi-factor authentication security.",
            client: "BrightBank Financial",
            tools: ["React", "Next.js", "Node.js", "PostgreSQL", "TypeScript"],
            image: "/portfolio/portfolio-17.png",
            tag: "Fintech"
        },
        {
            title: "ArtisanHub — Handmade Goods Marketplace",
            description: "A curated marketplace connecting independent artisans with buyers, featuring custom storefronts and secure escrow payments.",
            client: "ArtisanHub Collective",
            tools: ["React", "Next.js", "Laravel", "Tailwind CSS"],
            image: "/portfolio/portfolio-18.png",
            tag: "E-commerce"
        },
        {
            title: "SignalStack — Analytics & Business Intelligence Tool",
            description: "A powerful BI dashboard providing real-time data visualization, custom reporting, and predictive trend analysis.",
            client: "SignalStack Analytics",
            tools: ["React", "D3.js", "Node.js", "GraphQL", "TypeScript"],
            image: "/portfolio/portfolio-19.png",
            tag: "SaaS Platform"
        },
        {
            title: "HomeGrid — Smart Home Automation Dashboard",
            description: "A unified control panel for IoT devices, enabling remote automation scheduling, energy monitoring, and voice command integration.",
            client: "HomeGrid Systems, DE",
            tools: ["React", "Next.js", "Node.js", "MQTT", "Tailwind CSS"],
            image: "/portfolio/portfolio-20.png",
            tag: "IoT"
        },
        {
            title: "EventFlow — Event Management & Ticketing Platform",
            description: "An end-to-end event platform supporting ticket sales, attendee check-in via QR codes, and live event analytics.",
            client: "EventFlow Productions",
            tools: ["React", "Next.js", "Laravel API", "Tailwind CSS", "TypeScript"],
            image: "/portfolio/portfolio-21.png",
            tag: "Events"
        }
    ];

    const filteredProjects = activeFilter === "All"
        ? allProjects
        : allProjects.filter(project => project.tag === activeFilter);

    return (
        <section className="w-full min-h-screen py-16 bg-white dark:bg-slate-950 text-slate-800 dark:text-slate-100 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="mb-8">
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 text-xs font-bold text-slate-500 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors uppercase tracking-wider"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        Back to Home
                    </Link>
                </div>

                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 pb-6 border-b border-slate-100 dark:border-slate-900">
                    <div className="space-y-2 max-w-xl">
                        <div className="flex items-center gap-2">
                            <span className="w-6 h-[2px] bg-cyan-500 rounded-full"></span>
                            <span className="text-xs font-bold uppercase tracking-wider text-cyan-600 dark:text-cyan-400">
                                Extended Case Studies
                            </span>
                            <span className="w-6 h-[2px] bg-cyan-500 rounded-full"></span>
                        </div>
                        <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-slate-900 dark:text-white">
                            Our Full <span className="bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">Portfolio</span>
                        </h1>
                    </div>

                    <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                        Showing {filteredProjects.length} of {allProjects.length} Works
                    </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-12">
                    {tags.map((tag) => (
                        <button
                            key={tag}
                            onClick={() => setActiveFilter(tag)}
                            className={`px-4 py-1.5 rounded-full text-xs font-bold tracking-wide transition-all ${activeFilter === tag
                                ? "bg-slate-900 text-white dark:bg-slate-100 dark:text-slate-900 shadow-sm"
                                : "bg-slate-50 dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800"
                                }`}
                        >
                            {tag}
                        </button>
                    ))}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredProjects.map((project, idx) => (
                        <div
                            key={idx}
                            className="flex flex-col space-y-4 bg-transparent group border border-transparent hover:border-slate-100 dark:hover:border-slate-900 rounded-2xl p-2 transition-all duration-300"
                        >
                            <div className="relative w-full aspect-[16/10] rounded-xl overflow-hidden border border-slate-100 dark:border-slate-900 bg-slate-50 dark:bg-slate-900 shadow-sm">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    sizes="(max-w-7xl) 33vw, 100vw"
                                    className="object-cover group-hover:scale-[1.02] transition-transform duration-500"
                                />
                                <div className="absolute top-3 right-3 z-10">
                                    <span className="inline-block bg-blue-600 text-white text-[9px] font-black uppercase tracking-wider px-2 py-0.5 rounded-md shadow-sm">
                                        {project.tag}
                                    </span>
                                </div>
                            </div>

                            <div className="space-y-2 text-left px-1">
                                <div className="flex items-start justify-between gap-2">
                                    <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white tracking-tight leading-snug group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                                        {project.title}
                                    </h3>
                                    <ExternalLink className="w-4 h-4 text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity shrink-0 mt-1" />
                                </div>
                                <p className="text-xs sm:text-sm leading-relaxed text-slate-500 dark:text-slate-400 font-medium line-clamp-3">
                                    {project.description}
                                </p>

                                <div className="pt-2 flex flex-col space-y-2 border-t border-slate-100 dark:border-slate-900">
                                    <div className="flex items-center gap-2">
                                        <span className="inline-block px-1.5 py-0.5 rounded bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 text-[9px] font-black tracking-wider">CLIENT</span>
                                        <span className="text-xs font-bold text-slate-600 dark:text-slate-400">{project.client}</span>
                                    </div>
                                    <div className="flex flex-wrap gap-1.5 pt-1">
                                        {project.tools.map((tool, tIdx) => (
                                            <span
                                                key={tIdx}
                                                className="text-[10px] sm:text-xs font-semibold text-slate-500 dark:text-slate-400 after:content-['/'] last:after:content-[''] after:ml-1.5"
                                            >
                                                {tool}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}