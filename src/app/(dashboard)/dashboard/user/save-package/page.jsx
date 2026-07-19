import { Package, Plus, Search, Clock, DollarSign, Calendar, ArrowRight } from "lucide-react";

function SavedPackages() {
    const packages = [
        {
            id: 1,
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=60&h=60&fit=crop&crop=center",
            title: "Business Website",
            category: "Website",
            deliveryTime: "7 Days",
            price: "$499",
            savedDate: "18 Jul 2026",
        },
        {
            id: 2,
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=60&h=60&fit=crop&crop=center",
            title: "E-commerce Platform",
            category: "E-commerce",
            deliveryTime: "15 Days",
            price: "$1,299",
            savedDate: "15 Jul 2026",
        },
        {
            id: 3,
            image: "https://images.unsplash.com/photo-1556157382-97eda2f9e2bf?w=60&h=60&fit=crop&crop=center",
            title: "POS Software",
            category: "Software",
            deliveryTime: "10 Days",
            price: "$899",
            savedDate: "12 Jul 2026",
        },
        {
            id: 4,
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=60&h=60&fit=crop&crop=center",
            title: "CRM System",
            category: "Software",
            deliveryTime: "21 Days",
            price: "$1,599",
            savedDate: "10 Jul 2026",
        },
        {
            id: 5,
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=60&h=60&fit=crop&crop=center",
            title: "Portfolio Website",
            category: "Website",
            deliveryTime: "5 Days",
            price: "$299",
            savedDate: "8 Jul 2026",
        },
        {
            id: 6,
            image: "https://images.unsplash.com/photo-1556157382-97eda2f9e2bf?w=60&h=60&fit=crop&crop=center",
            title: "Inventory Management",
            category: "Software",
            deliveryTime: "14 Days",
            price: "$749",
            savedDate: "5 Jul 2026",
        },
        {
            id: 7,
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=60&h=60&fit=crop&crop=center",
            title: "Food Delivery App",
            category: "Mobile",
            deliveryTime: "20 Days",
            price: "$2,199",
            savedDate: "2 Jul 2026",
        },
        {
            id: 8,
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=60&h=60&fit=crop&crop=center",
            title: "Corporate Website",
            category: "Website",
            deliveryTime: "10 Days",
            price: "$699",
            savedDate: "28 Jun 2026",
        },
    ];

    return (
        <div className="min-h-screen bg-white dark:bg-slate-950 ">
            <div className="mx-auto">
                {/* Page Header */}
                <div className="mb-8 flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
                    <div>
                        <h1 className="text-3xl font-bold text-slate-900 dark:text-white md:text-4xl">
                            Saved Packages
                        </h1>
                        <p className="mt-1 text-slate-600 dark:text-slate-400">
                            View all packages you have saved for future purchase.
                        </p>
                    </div>
                    <button className="flex items-center gap-2 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 px-5 py-2.5 font-semibold text-white transition-all duration-200 hover:shadow-lg hover:shadow-cyan-500/30 dark:from-cyan-400 dark:to-blue-500">
                        <Plus className="h-5 w-5" />
                        Browse Packages
                    </button>
                </div>

                {/* Search */}
                <div className="mb-6">
                    <div className="relative max-w-md">
                        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                        <input
                            type="text"
                            placeholder="Search packages..."
                            className="w-full rounded-xl border border-slate-200 bg-slate-50 py-2.5 pl-9 pr-4 text-sm text-slate-900 placeholder-slate-400 focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 dark:border-slate-800 dark:bg-slate-900 dark:text-white dark:placeholder-slate-500"
                        />
                    </div>
                </div>

                {/* Table */}
                <div className="overflow-hidden rounded-2xl border border-slate-100 bg-white dark:border-slate-900 dark:bg-slate-900">
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm">
                            <thead>
                                <tr className="border-b border-slate-100 bg-slate-50 text-left text-xs font-medium uppercase tracking-wider text-slate-500 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-400">
                                    <th className="px-4 py-3.5 font-medium">Package</th>
                                    <th className="px-4 py-3.5 font-medium">Category</th>
                                    <th className="px-4 py-3.5 font-medium">Delivery Time</th>
                                    <th className="px-4 py-3.5 font-medium">Price</th>
                                    <th className="px-4 py-3.5 font-medium">Saved Date</th>
                                    <th className="px-4 py-3.5 text-right font-medium">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {packages.map((pkg) => (
                                    <tr
                                        key={pkg.id}
                                        className="border-b border-slate-100 transition-colors hover:bg-slate-50/50 dark:border-slate-800 dark:hover:bg-slate-800/30"
                                    >
                                        <td className="px-4 py-3.5">
                                            <div className="flex items-center gap-3">
                                                <img
                                                    src={pkg.image}
                                                    alt={pkg.title}
                                                    className="h-10 w-10 rounded-lg object-cover"
                                                />
                                                <span className="font-medium text-slate-900 dark:text-white">
                                                    {pkg.title}
                                                </span>
                                            </div>
                                        </td>
                                        <td className="px-4 py-3.5 text-slate-600 dark:text-slate-400">
                                            {pkg.category}
                                        </td>
                                        <td className="px-4 py-3.5">
                                            <div className="flex items-center gap-1.5 text-slate-600 dark:text-slate-400">
                                                <Clock className="h-3.5 w-3.5" />
                                                {pkg.deliveryTime}
                                            </div>
                                        </td>
                                        <td className="px-4 py-3.5 font-semibold text-slate-900 dark:text-white">
                                            {pkg.price}
                                        </td>
                                        <td className="px-4 py-3.5">
                                            <div className="flex items-center gap-1.5 text-slate-600 dark:text-slate-400">
                                                <Calendar className="h-3.5 w-3.5" />
                                                {pkg.savedDate}
                                            </div>
                                        </td>
                                        <td className="px-4 py-3.5 text-right">
                                            <button className="inline-flex items-center gap-1.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-4 py-1.5 text-sm font-medium text-white transition-all duration-200 hover:shadow-lg hover:shadow-cyan-500/30 dark:from-cyan-400 dark:to-blue-500">
                                                View Details
                                                <ArrowRight className="h-3.5 w-3.5" />
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Empty State (hidden by default) */}
                {false && (
                    <div className="flex flex-col items-center justify-center rounded-2xl border border-slate-100 bg-white py-16 dark:border-slate-900 dark:bg-slate-900">
                        <div className="mb-4 rounded-full bg-slate-100 p-4 dark:bg-slate-800">
                            <Package className="h-12 w-12 text-slate-400 dark:text-slate-600" />
                        </div>
                        <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
                            No Saved Packages
                        </h3>
                        <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
                            You haven't saved any packages yet.
                        </p>
                        <button className="mt-4 flex items-center gap-2 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 px-5 py-2.5 font-semibold text-white transition-all duration-200 hover:shadow-lg hover:shadow-cyan-500/30 dark:from-cyan-400 dark:to-blue-500">
                            <Plus className="h-5 w-5" />
                            Browse Packages
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default SavedPackages;