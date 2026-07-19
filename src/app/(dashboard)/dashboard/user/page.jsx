import { ArrowRight, Calendar, CheckCircle, ChevronRight, Clock, CreditCard, FolderOpen, Gift, Layers, LayoutGrid, Package, Plus, Rocket, ShoppingBag, Star, TrendingUp, Users, Zap, } from "lucide-react";
import Link from "next/link";

function DashboardOverview() {
    const stats = [
        {
            id: 1,
            title: "Total Orders",
            value: "24",
            icon: ShoppingBag,
            growth: "+12.5%",
            trend: "up",
            color: "from-cyan-500 to-blue-600",
        },
        {
            id: 2,
            title: "Active Projects",
            value: "8",
            icon: Layers,
            growth: "+3.2%",
            trend: "up",
            color: "from-emerald-500 to-teal-600",
        },
        {
            id: 3,
            title: "Saved Packages",
            value: "14",
            icon: Gift,
            growth: "+5.8%",
            trend: "up",
            color: "from-violet-500 to-purple-600",
        },
        {
            id: 4,
            title: "Total Payments",
            value: "$48,250",
            icon: CreditCard,
            growth: "+18.3%",
            trend: "up",
            color: "from-amber-500 to-orange-600",
        },
    ];

    const activeProject = {
        name: "E-Commerce Platform Pro",
        stage: "Development",
        progress: 68,
        delivery: "Aug 24, 2026",
        manager: "Sarah Chen",
        status: "In Progress",
        statusColor: "bg-blue-500",
    };

    const recentOrders = [
        {
            id: 1,
            name: "AI Chatbot Integration",
            date: "Jul 18, 2026",
            status: "In Progress",
            price: "$3,200",
            statusColor: "bg-amber-500",
            statusTextColor: "text-amber-600 dark:text-amber-400",
            statusBg: "bg-amber-50 dark:bg-amber-950/40",
        },
        {
            id: 2,
            name: "SaaS Dashboard UI Kit",
            date: "Jul 15, 2026",
            status: "Completed",
            price: "$1,800",
            statusColor: "bg-emerald-500",
            statusTextColor: "text-emerald-600 dark:text-emerald-400",
            statusBg: "bg-emerald-50 dark:bg-emerald-950/40",
        },
        {
            id: 3,
            name: "Mobile App MVP",
            date: "Jul 12, 2026",
            status: "Pending",
            price: "$5,400",
            statusColor: "bg-slate-400",
            statusTextColor: "text-slate-600 dark:text-slate-400",
            statusBg: "bg-slate-50 dark:bg-slate-800/50",
        },
        {
            id: 4,
            name: "API Gateway Setup",
            date: "Jul 10, 2026",
            status: "Cancelled",
            price: "$2,100",
            statusColor: "bg-rose-500",
            statusTextColor: "text-rose-600 dark:text-rose-400",
            statusBg: "bg-rose-50 dark:bg-rose-950/40",
        },
    ];

    const savedPackages = [
        {
            id: 1,
            name: "Starter Pro",
            price: "$2,400",
            category: "Website",
            icon: LayoutGrid,
            saved: true,
        },
        {
            id: 2,
            name: "Growth Stack",
            price: "$4,800",
            category: "Full Stack",
            icon: Rocket,
            saved: true,
        },
        {
            id: 3,
            name: "Enterprise Suite",
            price: "$9,200",
            category: "Enterprise",
            icon: Package,
            saved: false,
        },
        {
            id: 4,
            name: "Mobile Launch",
            price: "$3,600",
            category: "Mobile",
            icon: Layers,
            saved: true,
        },
    ];

    const recentPayments = [
        {
            id: "INV-0042",
            amount: "$3,200.00",
            method: "Stripe",
            date: "Jul 18, 2026",
            status: "Paid",
        },
        {
            id: "INV-0041",
            amount: "$1,800.00",
            method: "PayPal",
            date: "Jul 15, 2026",
            status: "Paid",
        },
        {
            id: "INV-0040",
            amount: "$5,400.00",
            method: "Stripe",
            date: "Jul 12, 2026",
            status: "Pending",
        },
        {
            id: "INV-0039",
            amount: "$2,100.00",
            method: "Bank Transfer",
            date: "Jul 10, 2026",
            status: "Paid",
        },
    ];

    const activities = [
        {
            id: 1,
            text: "Payment of $3,200.00 received for AI Chatbot Integration",
            time: "2 hours ago",
            icon: CheckCircle,
            iconColor: "text-emerald-500",
            bgColor: "bg-emerald-50 dark:bg-emerald-950/30",
        },
        {
            id: 2,
            text: "Order #INV-0041 marked as completed",
            time: "5 hours ago",
            icon: CheckCircle,
            iconColor: "text-emerald-500",
            bgColor: "bg-emerald-50 dark:bg-emerald-950/30",
        },
        {
            id: 3,
            text: "E-Commerce Platform Pro moved to Development stage",
            time: "1 day ago",
            icon: Rocket,
            iconColor: "text-blue-500",
            bgColor: "bg-blue-50 dark:bg-blue-950/30",
        },
        {
            id: 4,
            text: "Revision requested for SaaS Dashboard UI Kit",
            time: "2 days ago",
            icon: Clock,
            iconColor: "text-amber-500",
            bgColor: "bg-amber-50 dark:bg-amber-950/30",
        },
    ];

    return (
        <div className="min-h-screen bg-white dark:bg-slate-950">
            <div className="mx-auto">
                {/* Welcome Hero */}
                <div className="relative mb-8 overflow-hidden rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-400 p-6 sm:p-8 lg:p-12 dark:from-cyan-400 dark:to-blue-400">
                    <div className="relative z-10 flex flex-col xl:flex-row items-start justify-between gap-4 md:gap-6">
                        <div>
                            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
                                Hello, Ziaul 👋
                            </h1>
                            <p className="mt-2 text-base sm:text-lg text-white/80">
                                Welcome back! Manage your projects, orders and payments from one
                                place.
                            </p>
                        </div>
                        <Link href={'/package'} className="flex items-center gap-2 rounded-2xl bg-white/20 px-4 sm:px-6 py-2.5 sm:py-3.5 font-semibold text-white backdrop-blur-sm transition-all duration-200 hover:bg-white/30 hover:shadow-lg hover:shadow-cyan-500/30 dark:bg-white/10 dark:hover:bg-white/20 w-full sm:w-auto justify-center sm:justify-start">
                            <Plus className="h-5 w-5" />
                            Find New Package
                        </Link>
                    </div>
                    <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/5 blur-3xl" />
                    <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-white/5 blur-3xl" />
                </div>

                {/* Statistics Cards */}
                <div className="mb-8 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
                    {stats.map((stat) => {
                        const Icon = stat.icon;
                        return (
                            <div
                                key={stat.id}
                                className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-4 sm:p-6 transition-all duration-200 hover:shadow-lg hover:shadow-slate-200/50 dark:border-slate-900 dark:bg-slate-900 dark:hover:shadow-slate-800/50"
                            >
                                <div className="flex flex-col gap-4">
                                    <div className="flex items-start justify-between">
                                        <div className="flex-1">
                                            <p className="text-xs sm:text-sm font-medium text-slate-600 dark:text-slate-400">
                                                {stat.title}
                                            </p>
                                            <p className="mt-2 text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
                                                {stat.value}
                                            </p>
                                        </div>
                                        {/* Icon hidden on smaller screens */}
                                        <div
                                            className={`hidden lg:flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${stat.color} text-white shadow-lg`}
                                        >
                                            <Icon className="h-6 w-6" />
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-1.5">
                                        <span className="inline-flex items-center gap-0.5 text-xs font-medium text-emerald-600 dark:text-emerald-400">
                                            <TrendingUp className="h-3 w-3" />
                                            {stat.growth}
                                        </span>
                                        <span className="text-xs text-slate-400 dark:text-slate-500">
                                            vs last month
                                        </span>
                                    </div>
                                </div>
                                <div className="absolute -right-6 -top-6 h-20 w-20 rounded-full bg-gradient-to-br from-cyan-500/5 to-blue-600/5 blur-2xl transition-all duration-200 group-hover:scale-150 dark:from-cyan-400/5 dark:to-blue-500/5" />
                            </div>
                        );
                    })}
                </div>

                <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
                    {/* Active Project */}
                    <div className="xl:col-span-2">
                        <div className="rounded-2xl border border-slate-200 bg-white p-4 sm:p-6 transition-all duration-200 hover:shadow-lg hover:shadow-slate-200/50 dark:border-slate-900 dark:bg-slate-900 dark:hover:shadow-slate-800/50">
                            <div className="mb-4 sm:mb-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                                <h2 className="text-base sm:text-lg font-semibold text-slate-900 dark:text-white">
                                    Active Project
                                </h2>
                                <span
                                    className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 w-fit`}
                                >
                                    <span
                                        className={`h-1.5 w-1.5 rounded-full bg-blue-500`}
                                    />
                                    {activeProject.status}
                                </span>
                            </div>

                            <div className="flex flex-col gap-4">
                                <div>
                                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
                                        {activeProject.name}
                                    </h3>
                                    <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                                        Stage: {activeProject.stage}
                                    </p>
                                </div>

                                <div>
                                    <div className="flex items-center justify-between text-sm mb-1.5">
                                        <span className="text-slate-600 dark:text-slate-400">
                                            Progress
                                        </span>
                                        <span className="font-medium text-slate-900 dark:text-white">
                                            {activeProject.progress}%
                                        </span>
                                    </div>
                                    <div className="h-2 w-full overflow-hidden rounded-full bg-slate-100 dark:bg-slate-800">
                                        <div
                                            className="h-full rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 transition-all duration-500 dark:from-cyan-400 dark:to-blue-500"
                                            style={{ width: `${activeProject.progress}%` }}
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm pt-2 border-t border-slate-200 dark:border-slate-800">
                                    <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400">
                                        <Calendar className="h-4 w-4 flex-shrink-0" />
                                        <span>Due {activeProject.delivery}</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400">
                                        <Users className="h-4 w-4 flex-shrink-0" />
                                        <span>PM: {activeProject.manager}</span>
                                    </div>
                                </div>

                                <button className="mt-2 flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 px-5 py-2.5 text-sm font-semibold text-white transition-all duration-200 hover:shadow-lg hover:shadow-cyan-500/30 dark:from-cyan-400 dark:to-blue-500 w-full sm:w-auto">
                                    View Details
                                    <ChevronRight className="h-4 w-4" />
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Recent Activity */}
                    <div className="xl:col-span-1">
                        <div className="rounded-2xl border border-slate-200 bg-white p-4 sm:p-6 transition-all duration-200 hover:shadow-lg hover:shadow-slate-200/50 dark:border-slate-900 dark:bg-slate-900 dark:hover:shadow-slate-800/50 h-full">
                            <h2 className="mb-4 sm:mb-5 text-base sm:text-lg font-semibold text-slate-900 dark:text-white">
                                Recent Activity
                            </h2>
                            <div className="space-y-4 sm:space-y-5">
                                {activities.map((activity) => {
                                    const Icon = activity.icon;
                                    return (
                                        <div key={activity.id} className="flex gap-3">
                                            <div
                                                className={`flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full ${activity.bgColor}`}
                                            >
                                                <Icon className={`h-4 w-4 ${activity.iconColor}`} />
                                            </div>
                                            <div className="min-w-0 flex-1">
                                                <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                                                    {activity.text}
                                                </p>
                                                <span className="text-xs text-slate-400 dark:text-slate-500">
                                                    {activity.time}
                                                </span>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Recent Orders */}
                <div className="mt-6">
                    <div className="rounded-2xl border border-slate-200 bg-white p-4 sm:p-6 transition-all duration-200 hover:shadow-lg hover:shadow-slate-200/50 dark:border-slate-900 dark:bg-slate-900 dark:hover:shadow-slate-800/50">
                        <div className="mb-4 sm:mb-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                            <h2 className="text-base sm:text-lg font-semibold text-slate-900 dark:text-white">
                                Recent Orders
                            </h2>
                            <button className="text-sm font-medium text-cyan-600 transition-colors hover:text-cyan-700 dark:text-cyan-400 dark:hover:text-cyan-300 self-start sm:self-auto">
                                View All
                            </button>
                        </div>
                        <div className="divide-y divide-slate-100 dark:divide-slate-800 overflow-x-auto">
                            <div>
                                {recentOrders.map((order) => (
                                    <div
                                        key={order.id}
                                        className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-4 py-3 sm:py-3.5 transition-colors hover:bg-slate-50/50 dark:hover:bg-slate-800/30"
                                    >
                                        <div className="flex flex-col gap-1 flex-1 min-w-0">
                                            <span className="truncate text-sm sm:text-base font-medium text-slate-900 dark:text-white">
                                                {order.name}
                                            </span>
                                            <span className="text-xs sm:text-sm text-slate-400 dark:text-slate-500">
                                                {order.date}
                                            </span>
                                        </div>
                                        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3">
                                            <span
                                                className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${order.statusBg} ${order.statusTextColor} w-fit`}
                                            >
                                                {order.status}
                                            </span>
                                            <span className="font-semibold text-slate-900 dark:text-white text-sm sm:text-base min-w-fit">
                                                {order.price}
                                            </span>
                                            <button className="rounded-full p-1.5 text-slate-400 transition-colors hover:bg-slate-100 hover:text-slate-600 dark:hover:bg-slate-800 dark:hover:text-slate-300 flex-shrink-0">
                                                <ArrowRight className="h-4 w-4" />
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Saved Packages */}
                <div className="mt-6">
                    <div className="rounded-2xl border border-slate-200 bg-white p-4 sm:p-6 transition-all duration-200 hover:shadow-lg hover:shadow-slate-200/50 dark:border-slate-900 dark:bg-slate-900 dark:hover:shadow-slate-800/50">
                        <div className="mb-4 sm:mb-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                            <h2 className="text-base sm:text-lg font-semibold text-slate-900 dark:text-white">
                                Saved Packages
                            </h2>
                            <button className="text-sm font-medium text-cyan-600 transition-colors hover:text-cyan-700 dark:text-cyan-400 dark:hover:text-cyan-300 self-start sm:self-auto">
                                View All
                            </button>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
                            {savedPackages.map((pkg) => {
                                const Icon = pkg.icon;
                                return (
                                    <div
                                        key={pkg.id}
                                        className="flex flex-col rounded-2xl border border-slate-200 bg-white p-4 transition-all duration-200 hover:shadow-md hover:shadow-slate-200/50 dark:border-slate-800 dark:bg-slate-900/50 dark:hover:shadow-slate-800/30"
                                    >
                                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500/10 to-blue-600/10 dark:from-cyan-400/20 dark:to-blue-500/20 mb-3">
                                            <Icon className="h-5 w-5 text-cyan-600 dark:text-cyan-400" />
                                        </div>
                                        <div className="flex-1">
                                            <div className="flex items-center gap-2 mb-1">
                                                <span className="truncate font-medium text-sm text-slate-900 dark:text-white">
                                                    {pkg.name}
                                                </span>
                                                {pkg.saved && (
                                                    <Star className="h-3.5 w-3.5 flex-shrink-0 fill-amber-400 text-amber-400" />
                                                )}
                                            </div>
                                            <div className="flex flex-col gap-1 text-xs mb-3">
                                                <span className="font-semibold text-slate-900 dark:text-white">
                                                    {pkg.price}
                                                </span>
                                                <span className="text-slate-400 dark:text-slate-500">
                                                    {pkg.category}
                                                </span>
                                            </div>
                                        </div>
                                        <button className="w-full rounded-lg py-2 px-3 text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors">
                                            View Package
                                        </button>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>

                {/* Recent Payments */}
                <div className="mt-6 mb-8">
                    <div className="rounded-2xl border border-slate-200 bg-white p-4 sm:p-6 transition-all duration-200 hover:shadow-lg hover:shadow-slate-200/50 dark:border-slate-900 dark:bg-slate-900 dark:hover:shadow-slate-800/50">
                        <div className="mb-4 sm:mb-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                            <h2 className="text-base sm:text-lg font-semibold text-slate-900 dark:text-white">
                                Recent Payments
                            </h2>
                            <button className="text-sm font-medium text-cyan-600 transition-colors hover:text-cyan-700 dark:text-cyan-400 dark:hover:text-cyan-300 self-start sm:self-auto">
                                View All
                            </button>
                        </div>
                        <div className="overflow-x-auto -mx-4 sm:mx-0">
                            <table className="w-full text-sm">
                                <thead>
                                    <tr className="border-b border-slate-200 text-left text-xs font-medium uppercase tracking-wider text-slate-400 dark:border-slate-800 dark:text-slate-500">
                                        <th className="pb-3 pr-4 font-medium px-4 sm:px-0">Invoice</th>
                                        <th className="pb-3 pr-4 font-medium hidden sm:table-cell">Amount</th>
                                        <th className="pb-3 pr-4 font-medium hidden md:table-cell">Method</th>
                                        <th className="pb-3 pr-4 font-medium hidden lg:table-cell">Date</th>
                                        <th className="pb-3 font-medium">Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {recentPayments.map((payment) => (
                                        <tr
                                            key={payment.id}
                                            className="border-b border-slate-200 last:border-0 dark:border-slate-800"
                                        >
                                            <td className="py-3 sm:py-3.5 pr-4 font-medium text-slate-900 dark:text-white text-xs sm:text-sm px-4 sm:px-0">
                                                {payment.id}
                                            </td>
                                            <td className="py-3 sm:py-3.5 pr-4 font-semibold text-slate-900 dark:text-white text-xs sm:text-sm hidden sm:table-cell">
                                                {payment.amount}
                                            </td>
                                            <td className="py-3 sm:py-3.5 pr-4 text-slate-600 dark:text-slate-400 text-xs sm:text-sm hidden md:table-cell">
                                                {payment.method}
                                            </td>
                                            <td className="py-3 sm:py-3.5 pr-4 text-slate-600 dark:text-slate-400 text-xs sm:text-sm hidden lg:table-cell">
                                                {payment.date}
                                            </td>
                                            <td className="py-3 sm:py-3.5">
                                                <span
                                                    className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium ${payment.status === "Paid"
                                                        ? "bg-emerald-50 text-emerald-600 dark:bg-emerald-950/40 dark:text-emerald-400"
                                                        : "bg-amber-50 text-amber-600 dark:bg-amber-950/40 dark:text-amber-400"
                                                        }`}
                                                >
                                                    <span
                                                        className={`h-1.5 w-1.5 rounded-full ${payment.status === "Paid"
                                                            ? "bg-emerald-500"
                                                            : "bg-amber-500"
                                                            }`}
                                                    />
                                                    {payment.status}
                                                </span>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashboardOverview;