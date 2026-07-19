import { ArrowRight, Calendar, CheckCircle, ChevronDown, ChevronLeft, ChevronRight, Clock, FileText, Filter, LayoutGrid, List, Package, Plus, Search, ShoppingBag, TrendingUp, User, X, } from "lucide-react";
import Link from "next/link";

export default function MyOrders() {
    const stats = [
        {
            id: 1,
            title: "Total Orders",
            value: "24",
            icon: ShoppingBag,
            color: "from-cyan-500 to-blue-600",
        },
        {
            id: 2,
            title: "Active Projects",
            value: "8",
            icon: LayoutGrid,
            color: "from-emerald-500 to-teal-600",
        },
        {
            id: 3,
            title: "Completed",
            value: "12",
            icon: CheckCircle,
            color: "from-violet-500 to-purple-600",
        },
        {
            id: 4,
            title: "Pending",
            value: "4",
            icon: Clock,
            color: "from-amber-500 to-orange-600",
        },
    ];

    const orders = [
        {
            id: 1,
            title: "E-commerce Website",
            category: "Website",
            status: "In Progress",
            progress: 68,
            price: "$3,200",
            deliveryDate: "Aug 24, 2026",
            createdAt: "Jul 18, 2026",
            manager: "Sarah Chen",
            managerInitial: "SC",
        },
        {
            id: 2,
            title: "Restaurant Website",
            category: "Website",
            status: "Completed",
            progress: 100,
            price: "$1,800",
            deliveryDate: "Jul 15, 2026",
            createdAt: "Jul 1, 2026",
            manager: "Mike Johnson",
            managerInitial: "MJ",
        },
        {
            id: 3,
            title: "School Management System",
            category: "CRM",
            status: "Pending",
            progress: 0,
            price: "$5,400",
            deliveryDate: "Sep 12, 2026",
            createdAt: "Jul 12, 2026",
            manager: "Emily Davis",
            managerInitial: "ED",
        },
        {
            id: 4,
            title: "POS Software",
            category: "Software",
            status: "Cancelled",
            progress: 45,
            price: "$2,100",
            deliveryDate: "Jul 10, 2026",
            createdAt: "Jun 28, 2026",
            manager: "David Kim",
            managerInitial: "DK",
        },
        {
            id: 5,
            title: "Hospital Management",
            category: "Software",
            status: "In Progress",
            progress: 82,
            price: "$7,800",
            deliveryDate: "Oct 5, 2026",
            createdAt: "Jul 5, 2026",
            manager: "Lisa Park",
            managerInitial: "LP",
        },
        {
            id: 6,
            title: "CRM Platform",
            category: "CRM",
            status: "Completed",
            progress: 100,
            price: "$4,500",
            deliveryDate: "Jun 30, 2026",
            createdAt: "Jun 10, 2026",
            manager: "James Wilson",
            managerInitial: "JW",
        },
        {
            id: 7,
            title: "Portfolio Website",
            category: "Website",
            status: "Pending",
            progress: 15,
            price: "$1,200",
            deliveryDate: "Aug 18, 2026",
            createdAt: "Jul 20, 2026",
            manager: "Anna Martinez",
            managerInitial: "AM",
        },
        {
            id: 8,
            title: "Corporate Website",
            category: "Website",
            status: "In Progress",
            progress: 55,
            price: "$2,900",
            deliveryDate: "Sep 1, 2026",
            createdAt: "Jul 8, 2026",
            manager: "Robert Chen",
            managerInitial: "RC",
        },
    ];

    const getStatusBadge = (status) => {
        const colors = {
            "In Progress": {
                bg: "bg-blue-50 dark:bg-blue-950/40",
                text: "text-blue-600 dark:text-blue-400",
                dot: "bg-blue-500",
            },
            Completed: {
                bg: "bg-emerald-50 dark:bg-emerald-950/40",
                text: "text-emerald-600 dark:text-emerald-400",
                dot: "bg-emerald-500",
            },
            Pending: {
                bg: "bg-amber-50 dark:bg-amber-950/40",
                text: "text-amber-600 dark:text-amber-400",
                dot: "bg-amber-500",
            },
            Cancelled: {
                bg: "bg-rose-50 dark:bg-rose-950/40",
                text: "text-rose-600 dark:text-rose-400",
                dot: "bg-rose-500",
            },
        };
        return colors[status] || colors["Pending"];
    };

    return (
        <div className="min-h-screen bg-white dark:bg-slate-950 ">
            <div className="mx-auto">
                {/* Page Heading */}
                <div className="mb-8 flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
                    <div>
                        <h1 className="text-3xl font-bold text-slate-900 dark:text-white md:text-4xl">
                            My Orders
                        </h1>
                        <p className="mt-1 text-slate-600 dark:text-slate-400">
                            Track all your website and software development orders in one
                            place.
                        </p>
                    </div>
                    <Link href={'/package'} className="flex items-center gap-2 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 px-5 py-2.5 font-semibold text-white transition-all duration-200 hover:shadow-lg hover:shadow-cyan-500/30 dark:from-cyan-400 dark:to-blue-500">
                        <Plus className="h-5 w-5" />
                        Find New Package
                    </Link>
                </div>

                {/* Statistics Cards */}
                <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    {stats.map((stat) => {
                        const Icon = stat.icon;
                        return (
                            <div
                                key={stat.id}
                                className="group relative overflow-hidden rounded-2xl border border-slate-100 bg-white p-5 transition-all duration-200 hover:shadow-md hover:shadow-slate-200/50 dark:border-slate-900 dark:bg-slate-900 dark:hover:shadow-slate-800/50"
                            >
                                <div className="flex items-start justify-between">
                                    <div>
                                        <p className="text-sm font-medium text-slate-600 dark:text-slate-400">
                                            {stat.title}
                                        </p>
                                        <p className="mt-1 text-2xl font-bold text-slate-900 dark:text-white">
                                            {stat.value}
                                        </p>
                                    </div>
                                    <div
                                        className={`flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br ${stat.color} text-white shadow-lg shadow-${stat.color.split(" ")[1]?.replace("-", "") || "cyan"}-500/20`}
                                    >
                                        <Icon className="h-5 w-5" />
                                    </div>
                                </div>
                                <div className="absolute -right-4 -top-4 h-16 w-16 rounded-full bg-gradient-to-br from-cyan-500/5 to-blue-600/5 blur-2xl transition-all duration-200 group-hover:scale-150 dark:from-cyan-400/5 dark:to-blue-500/5" />
                            </div>
                        );
                    })}
                </div>

                {/* Orders List */}
                <div className="mb-8 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-2">
                    {orders.map((order) => {
                        const statusBadge = getStatusBadge(order.status);
                        return (
                            <div
                                key={order.id}
                                className="group rounded-2xl border border-slate-100 bg-white p-5 transition-all duration-200 hover:shadow-lg hover:shadow-slate-200/50 dark:border-slate-900 dark:bg-slate-900 dark:hover:shadow-slate-800/50"
                            >
                                <div className="flex items-start justify-between">
                                    <div>
                                        <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                                            {order.title}
                                        </h3>
                                        <p className="mt-0.5 text-sm text-slate-500 dark:text-slate-400">
                                            {order.category}
                                        </p>
                                    </div>
                                    <span
                                        className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium ${statusBadge.bg} ${statusBadge.text}`}
                                    >
                                        <span
                                            className={`h-1.5 w-1.5 rounded-full ${statusBadge.dot}`}
                                        />
                                        {order.status}
                                    </span>
                                </div>

                                {/* Progress */}
                                <div className="mt-4">
                                    <div className="flex items-center justify-between text-sm">
                                        <span className="text-slate-600 dark:text-slate-400">
                                            Progress
                                        </span>
                                        <span className="font-medium text-slate-900 dark:text-white">
                                            {order.progress}%
                                        </span>
                                    </div>
                                    <div className="mt-1.5 h-2 w-full overflow-hidden rounded-full bg-slate-100 dark:bg-slate-800">
                                        <div
                                            className="h-full rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 transition-all duration-500 dark:from-cyan-400 dark:to-blue-500"
                                            style={{ width: `${order.progress}%` }}
                                        />
                                    </div>
                                </div>

                                {/* Details */}
                                <div className="mt-4 grid grid-cols-2 gap-2 text-sm">
                                    <div>
                                        <span className="text-slate-500 dark:text-slate-400">
                                            Price
                                        </span>
                                        <p className="font-semibold text-slate-900 dark:text-white">
                                            {order.price}
                                        </p>
                                    </div>
                                    <div>
                                        <span className="text-slate-500 dark:text-slate-400">
                                            Delivery
                                        </span>
                                        <p className="font-medium text-slate-900 dark:text-white">
                                            {order.deliveryDate}
                                        </p>
                                    </div>
                                    <div className="col-span-2">
                                        <span className="text-slate-500 dark:text-slate-400">
                                            Created
                                        </span>
                                        <p className="font-medium text-slate-900 dark:text-white">
                                            {order.createdAt}
                                        </p>
                                    </div>
                                </div>

                                {/* Manager & Action */}
                                <div className="mt-4 flex items-center justify-between border-t border-slate-100 pt-4 dark:border-slate-800">
                                    <div className="flex items-center gap-2">
                                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 text-xs font-medium text-white">
                                            {order.managerInitial}
                                        </div>
                                        <span className="text-sm text-slate-600 dark:text-slate-400">
                                            {order.manager}
                                        </span>
                                    </div>
                                    <button className="flex items-center gap-1.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-4 py-1.5 text-sm font-medium text-white transition-all duration-200 hover:shadow-lg hover:shadow-cyan-500/30 dark:from-cyan-400 dark:to-blue-500">
                                        View Details
                                        <ArrowRight className="h-4 w-4" />
                                    </button>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Pagination */}
                <div className="flex items-center justify-between border-t border-slate-100 pt-6 dark:border-slate-900">
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                        Showing <span className="font-medium text-slate-900 dark:text-white">1-8</span> of{" "}
                        <span className="font-medium text-slate-900 dark:text-white">24</span> orders
                    </p>
                    <div className="flex items-center gap-1">
                        <button className="flex h-9 w-9 items-center justify-center rounded-xl border border-slate-200 text-slate-600 transition-colors hover:bg-slate-50 dark:border-slate-800 dark:text-slate-400 dark:hover:bg-slate-800">
                            <ChevronLeft className="h-4 w-4" />
                        </button>
                        <button className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-sm font-semibold text-white dark:from-cyan-400 dark:to-blue-500">
                            1
                        </button>
                        <button className="flex h-9 w-9 items-center justify-center rounded-xl border border-slate-200 text-sm font-medium text-slate-600 transition-colors hover:bg-slate-50 dark:border-slate-800 dark:text-slate-400 dark:hover:bg-slate-800">
                            2
                        </button>
                        <button className="flex h-9 w-9 items-center justify-center rounded-xl border border-slate-200 text-sm font-medium text-slate-600 transition-colors hover:bg-slate-50 dark:border-slate-800 dark:text-slate-400 dark:hover:bg-slate-800">
                            3
                        </button>
                        <button className="flex h-9 w-9 items-center justify-center rounded-xl border border-slate-200 text-slate-600 transition-colors hover:bg-slate-50 dark:border-slate-800 dark:text-slate-400 dark:hover:bg-slate-800">
                            <ChevronRight className="h-4 w-4" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}