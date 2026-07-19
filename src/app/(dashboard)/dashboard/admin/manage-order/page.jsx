"use client"
import React, { useState } from "react";
import {
    Search,
    Plus,
    Eye,
    Edit2,
    Trash2,
    Layers,
    Package,
    ExternalLink
} from "lucide-react";

function ManagePackages() {
    const [searchQuery, setSearchQuery] = useState("");

    const initialPackages = [
        {
            id: 1,
            image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=150&auto=format&fit=crop&q=60",
            title: "MVP Starter Kit",
            type: "Mobile & Web",
            price: "$2,500",
            deliveryTime: "14 Days",
            createdAt: "12 Jan 2026"
        },
        {
            id: 2,
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=150&auto=format&fit=crop&q=60",
            title: "E-commerce Scale Platform",
            type: "Web Application",
            price: "$5,800",
            deliveryTime: "30 Days",
            createdAt: "20 Jan 2026"
        },
        {
            id: 3,
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=150&auto=format&fit=crop&q=60",
            title: "SaaS Blueprint Dashboard",
            type: "Frontend Systems",
            price: "$4,200",
            deliveryTime: "21 Days",
            createdAt: "05 Feb 2026"
        },
        {
            id: 4,
            image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=150&auto=format&fit=crop&q=60",
            title: "Custom CRM Infrastructure",
            type: "Full-Stack System",
            price: "$7,500",
            deliveryTime: "45 Days",
            createdAt: "18 Feb 2026"
        },
        {
            id: 5,
            image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=150&auto=format&fit=crop&q=60",
            title: "Corporate Identity Redesign",
            type: "UI/UX & Web",
            price: "$1,900",
            deliveryTime: "10 Days",
            createdAt: "01 Mar 2026"
        },
        {
            id: 6,
            image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=150&auto=format&fit=crop&q=60",
            title: "Fintech Core Integration",
            type: "API Backend",
            price: "$8,200",
            deliveryTime: "40 Days",
            createdAt: "14 Mar 2026"
        },
        {
            id: 7,
            image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=150&auto=format&fit=crop&q=60",
            title: "LMS Platform Architecture",
            type: "Web Application",
            price: "$6,100",
            deliveryTime: "28 Days",
            createdAt: "29 Mar 2026"
        },
        {
            id: 8,
            image: "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=150&auto=format&fit=crop&q=60",
            title: "High-Conversion Landing Package",
            type: "Optimization Marketing",
            price: "$1,200",
            deliveryTime: "07 Days",
            createdAt: "08 Apr 2026"
        },
        {
            id: 9,
            image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=150&auto=format&fit=crop&q=60",
            title: "Healthcare Portal Interface",
            type: "Mobile Ecosystem",
            price: "$9,400",
            deliveryTime: "50 Days",
            createdAt: "22 Apr 2026"
        },
        {
            id: 10,
            image: "https://images.unsplash.com/photo-1558655146-d09347e92766?w=150&auto=format&fit=crop&q=60",
            title: "Real Estate System Architecture",
            type: "Full-Stack System",
            price: "$6,800",
            deliveryTime: "35 Days",
            createdAt: "03 May 2026"
        }
    ];

    const [packages, setPackages] = useState(initialPackages);

    const handleDelete = (id) => {
        setPackages(packages.filter((pkg) => pkg.id !== id));
    };

    const filteredPackages = packages.filter((pkg) =>
        pkg.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        pkg.type.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="min-h-screen bg-white dark:bg-slate-950 transition-colors duration-200">
            <div className="mx-auto">

                <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
                    <div>
                        <h1 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-3xl">
                            Manage Packages
                        </h1>
                        <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
                            View, edit and manage all service packages.
                        </p>
                    </div>
                    <button className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-5 py-2.5 font-semibold text-white transition-all duration-200 hover:shadow-lg hover:shadow-cyan-500/30 dark:from-cyan-400 dark:to-blue-500 self-start sm:self-auto">
                        <Plus className="h-4 w-4" />
                        Add New Package
                    </button>
                </div>

                <div className="mb-6 max-w-md">
                    <div className="relative">
                        <Search className="absolute top-1/2 left-3.5 h-4 w-4 -translate-y-1/2 text-slate-400" />
                        <input
                            type="text"
                            placeholder="Search package..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full rounded-xl border border-slate-100 bg-white py-2.5 pr-4 pl-10 text-sm text-slate-900 placeholder-slate-400 shadow-2xs outline-hidden focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 dark:border-slate-900 dark:bg-slate-900 dark:text-white dark:placeholder-slate-500"
                        />
                    </div>
                </div>

                {filteredPackages.length === 0 ? (
                    <div className="flex flex-col items-center justify-center rounded-xl border border-slate-100 bg-white py-16 text-center dark:border-slate-900 dark:bg-slate-900">
                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-50 text-slate-400 dark:bg-slate-800 dark:text-slate-500">
                            <Package className="h-6 w-6" />
                        </div>
                        <h3 className="mt-4 text-base font-semibold text-slate-900 dark:text-white">
                            No Packages Found
                        </h3>
                        <p className="mt-1 text-sm text-slate-600 dark:text-slate-400 max-w-xs px-4">
                            Try adjusting your lookup terms or add a completely new system offering right now.
                        </p>
                        <button className="mt-6 flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-4 py-2 text-sm font-semibold text-white transition-all hover:shadow-md dark:from-cyan-400 dark:to-blue-500">
                            <Plus className="h-4 w-4" />
                            Add New Package
                        </button>
                    </div>
                ) : (
                    <div className="rounded-xl border border-slate-100 bg-white shadow-2xs dark:border-slate-900 dark:bg-slate-900 overflow-hidden">
                        <div className="overflow-x-auto -mx-4 px-4 sm:mx-0 sm:px-0">
                            <table className="w-full text-left text-sm min-w-[850px] table-auto">
                                <thead>
                                    <tr className="border-b border-slate-100 bg-slate-50/50 text-xs font-semibold uppercase tracking-wider text-slate-600 dark:border-slate-800/60 dark:bg-slate-900/50 dark:text-slate-400">
                                        <th className="py-4 px-6 w-[80px] font-semibold">Image</th>
                                        <th className="py-4 px-4 font-semibold">Package Title</th>
                                        <th className="py-4 px-4 font-semibold">Type</th>
                                        <th className="py-4 px-4 font-semibold">Price</th>
                                        <th className="py-4 px-4 font-semibold">Delivery Time</th>
                                        <th className="py-4 px-4 font-semibold">Created Date</th>
                                        <th className="py-4 px-6 text-right font-semibold">Actions</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-100 dark:divide-slate-800/40">
                                    {filteredPackages.map((pkg) => (
                                        <tr
                                            key={pkg.id}
                                            className="hover:bg-slate-50/40 dark:hover:bg-slate-800/20 transition-colors duration-150"
                                        >
                                            <td className="py-4 px-6 whitespace-nowrap">
                                                <div className="h-10 w-12 rounded-lg bg-slate-100 dark:bg-slate-800 overflow-hidden border border-slate-100 dark:border-slate-800">
                                                    <img
                                                        src={pkg.image}
                                                        alt={pkg.title}
                                                        className="h-full w-full object-cover"
                                                        onError={(e) => {
                                                            e.target.style.display = 'none';
                                                            e.target.nextSibling.style.display = 'flex';
                                                        }}
                                                    />
                                                    <div className="hidden h-full w-full items-center justify-center text-slate-400">
                                                        <Layers className="h-4 w-4" />
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="py-4 px-4 font-medium text-slate-900 dark:text-white max-w-[220px] truncate">
                                                {pkg.title}
                                            </td>
                                            <td className="py-4 px-4 text-slate-600 dark:text-slate-400 whitespace-nowrap">
                                                {pkg.type}
                                            </td>
                                            <td className="py-4 px-4 font-semibold text-slate-900 dark:text-white whitespace-nowrap">
                                                {pkg.price}
                                            </td>
                                            <td className="py-4 px-4 text-slate-600 dark:text-slate-400 whitespace-nowrap">
                                                {pkg.deliveryTime}
                                            </td>
                                            <td className="py-4 px-4 text-slate-600 dark:text-slate-400 whitespace-nowrap">
                                                {pkg.createdAt}
                                            </td>
                                            <td className="py-4 px-6 text-right whitespace-nowrap">
                                                <div className="flex items-center justify-end gap-1.5">
                                                    <button
                                                        title="View Details"
                                                        className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-cyan-100 bg-cyan-50 text-cyan-600 hover:bg-cyan-100 dark:border-cyan-950/40 dark:bg-cyan-950/30 dark:text-cyan-400 dark:hover:bg-cyan-900/40 transition-colors"
                                                    >
                                                        <Eye className="h-4 w-4" />
                                                    </button>
                                                    <button
                                                        title="Edit"
                                                        className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-slate-100 bg-white text-slate-600 hover:bg-slate-50 hover:text-slate-900 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-white transition-colors"
                                                    >
                                                        <Edit2 className="h-3.5 w-3.5" />
                                                    </button>
                                                    <button
                                                        onClick={() => handleDelete(pkg.id)}
                                                        title="Delete"
                                                        className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-red-100 bg-red-50 text-red-600 hover:bg-red-100 dark:border-red-950/40 dark:bg-red-950/30 dark:text-red-400 dark:hover:bg-red-900/40 transition-colors"
                                                    >
                                                        <Trash2 className="h-4 w-4" />
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                )}

            </div>
        </div>
    );
}

export default ManagePackages;