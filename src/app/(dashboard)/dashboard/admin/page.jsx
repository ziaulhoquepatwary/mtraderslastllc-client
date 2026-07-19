import { Users, ShoppingBag, FolderOpen, DollarSign, Calendar, Plus } from "lucide-react";

function AdminDashboard() {
    const stats = [
        {
            id: 1,
            title: "Total Users",
            value: "1,284",
            icon: Users,
            growth: "+12%",
            color: "from-cyan-500 to-blue-600",
        },
        {
            id: 2,
            title: "Total Orders",
            value: "342",
            icon: ShoppingBag,
            growth: "+8%",
            color: "from-emerald-500 to-teal-600",
        },
        {
            id: 3,
            title: "Active Projects",
            value: "47",
            icon: FolderOpen,
            growth: "+5%",
            color: "from-violet-500 to-purple-600",
        },
        {
            id: 4,
            title: "Total Revenue",
            value: "$48,290",
            icon: DollarSign,
            growth: "+18%",
            color: "from-amber-500 to-orange-600",
        },
    ];

    const recentOrders = [
        {
            id: 1,
            customer: "Ziaul Haque",
            project: "E-commerce Website",
            status: "In Progress",
            price: "$3,200",
            date: "18 Jul 2026",
        },
        {
            id: 2,
            customer: "Sarah Chen",
            project: "CRM Platform",
            status: "Completed",
            price: "$4,500",
            date: "15 Jul 2026",
        },
        {
            id: 3,
            customer: "Mike Johnson",
            project: "School Management",
            status: "Pending",
            price: "$5,400",
            date: "12 Jul 2026",
        },
        {
            id: 4,
            customer: "Emily Davis",
            project: "POS Software",
            status: "Cancelled",
            price: "$2,100",
            date: "10 Jul 2026",
        },
        {
            id: 5,
            customer: "David Kim",
            project: "Hospital Management",
            status: "In Progress",
            price: "$7,800",
            date: "8 Jul 2026",
        },
    ];

    const recentUsers = [
        {
            id: 1,
            name: "Ziaul Haque",
            email: "ziaul@example.com",
            avatar: "ZH",
            joinDate: "18 Jul 2026",
        },
        {
            id: 2,
            name: "Sarah Chen",
            email: "sarah@example.com",
            avatar: "SC",
            joinDate: "15 Jul 2026",
        },
        {
            id: 3,
            name: "Mike Johnson",
            email: "mike@example.com",
            avatar: "MJ",
            joinDate: "12 Jul 2026",
        },
        {
            id: 4,
            name: "Emily Davis",
            email: "emily@example.com",
            avatar: "ED",
            joinDate: "10 Jul 2026",
        },
    ];

    const recentPayments = [
        {
            id: "INV-0042",
            customer: "Ziaul Haque",
            amount: "$3,200",
            status: "Paid",
        },
        {
            id: "INV-0041",
            customer: "Sarah Chen",
            amount: "$4,500",
            status: "Paid",
        },
        {
            id: "INV-0040",
            customer: "Mike Johnson",
            amount: "$5,400",
            status: "Pending",
        },
        {
            id: "INV-0039",
            customer: "Emily Davis",
            amount: "$2,100",
            status: "Failed",
        },
    ];

    const getStatusBadge = (status) => {
        const colors = {
            "In Progress": "bg-blue-50 text-blue-600 dark:bg-blue-950/40 dark:text-blue-400",
            Completed: "bg-emerald-50 text-emerald-600 dark:bg-emerald-950/40 dark:text-emerald-400",
            Pending: "bg-amber-50 text-amber-600 dark:bg-amber-950/40 dark:text-amber-400",
            Cancelled: "bg-rose-50 text-rose-600 dark:bg-rose-950/40 dark:text-rose-400",
            Paid: "bg-emerald-50 text-emerald-600 dark:bg-emerald-950/40 dark:text-emerald-400",
            Failed: "bg-rose-50 text-rose-600 dark:bg-rose-950/40 dark:text-rose-400",
        };
        return colors[status] || "bg-slate-50 text-slate-600 dark:bg-slate-800/40 dark:text-slate-400";
    };

    const getStatusDot = (status) => {
        const colors = {
            "In Progress": "bg-blue-500",
            Completed: "bg-emerald-500",
            Pending: "bg-amber-500",
            Cancelled: "bg-rose-500",
            Paid: "bg-emerald-500",
            Failed: "bg-rose-500",
        };
        return colors[status] || "bg-slate-500";
    };

    return (
        <div className="min-h-screen dark:bg-slate-950">
            <div className="mx-auto">
                {/* Header */}
                <div className="mb-8 flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
                    <div>
                        <h1 className="text-3xl font-bold text-slate-900 dark:text-white md:text-4xl">
                            Admin Dashboard
                        </h1>
                        <p className="mt-1 text-slate-600 dark:text-slate-400">
                            Monitor your agency's performance and manage operations.
                        </p>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
                            <Calendar className="h-4 w-4" />
                            <span>{new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}</span>
                        </div>
                        <button className="flex items-center gap-2 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 px-5 py-2.5 font-semibold text-white transition-all duration-200 hover:shadow-lg hover:shadow-cyan-500/30 dark:from-cyan-400 dark:to-blue-500">
                            <Plus className="h-5 w-5" />
                            Add Package
                        </button>
                    </div>
                </div>

                {/* Stats */}
                <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    {stats.map((stat) => {
                        const Icon = stat.icon;
                        return (
                            <div
                                key={stat.id}
                                className="group relative overflow-hidden rounded-xl border border-slate-100 bg-white p-5 transition-all duration-200 hover:shadow-md dark:border-slate-800/50 dark:bg-slate-900"
                            >
                                <div className="flex items-start justify-between">
                                    <div>
                                        <p className="text-sm font-medium text-slate-600 dark:text-slate-400">
                                            {stat.title}
                                        </p>
                                        <p className="mt-1 text-2xl font-bold text-slate-900 dark:text-white">
                                            {stat.value}
                                        </p>
                                        <p className="mt-1 text-xs font-medium text-emerald-600 dark:text-emerald-400">
                                            {stat.growth} vs last month
                                        </p>
                                    </div>
                                    <div
                                        className={`flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br ${stat.color} text-white shadow-lg`}
                                    >
                                        <Icon className="h-5 w-5" />
                                    </div>
                                </div>
                                <div className="absolute -right-4 -top-4 h-16 w-16 rounded-full bg-gradient-to-br from-cyan-500/5 to-blue-600/5 blur-2xl transition-all duration-200 group-hover:scale-150 dark:from-cyan-400/5 dark:to-blue-500/5" />
                            </div>
                        );
                    })}
                </div>

                {/* Tables Row */}
                <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
                    {/* Recent Orders */}
                    <div className="rounded-xl border border-slate-100 bg-white p-5 dark:border-slate-800/50 dark:bg-slate-900 flex flex-col">
                        <div className="mb-4 flex items-center justify-between">
                            <h2 className="text-lg font-semibold text-slate-900 dark:text-white">
                                Recent Orders
                            </h2>
                            <button className="text-sm font-medium text-cyan-600 transition-colors hover:text-cyan-700 dark:text-cyan-400 dark:hover:text-cyan-300">
                                View All
                            </button>
                        </div>
                        <div className="overflow-x-auto -mx-5 px-5">
                            <table className="w-full text-sm min-w-[550px] table-auto">
                                <thead>
                                    <tr className="border-b border-slate-100 text-left text-xs font-medium uppercase tracking-wider text-slate-500 dark:border-slate-800 dark:text-slate-400">
                                        <th className="pb-3 pr-4 font-medium">Customer</th>
                                        <th className="pb-3 pr-4 font-medium">Project</th>
                                        <th className="pb-3 pr-4 font-medium">Status</th>
                                        <th className="pb-3 pr-4 font-medium">Price</th>
                                        <th className="pb-3 text-right font-medium">Date</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-100 dark:divide-slate-800/40">
                                    {recentOrders.map((order) => (
                                        <tr
                                            key={order.id}
                                            className="hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors"
                                        >
                                            <td className="py-3.5 pr-4 font-medium text-slate-900 dark:text-white whitespace-nowrap">
                                                {order.customer}
                                            </td>
                                            <td className="py-3.5 pr-4 text-slate-600 dark:text-slate-400 max-w-[150px] truncate">
                                                {order.project}
                                            </td>
                                            <td className="py-3.5 pr-4 whitespace-nowrap">
                                                <span
                                                    className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-xs font-medium ${getStatusBadge(order.status)}`}
                                                >
                                                    <span
                                                        className={`h-1.5 w-1.5 rounded-full ${getStatusDot(order.status)}`}
                                                    />
                                                    {order.status}
                                                </span>
                                            </td>
                                            <td className="py-3.5 pr-4 font-semibold text-slate-900 dark:text-white whitespace-nowrap">
                                                {order.price}
                                            </td>
                                            <td className="py-3.5 text-right text-slate-600 dark:text-slate-400 whitespace-nowrap">
                                                {order.date}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* Recent Users */}
                    <div className="rounded-xl border border-slate-100 bg-white p-5 dark:border-slate-800/50 dark:bg-slate-900 flex flex-col">
                        <div className="mb-4 flex items-center justify-between">
                            <h2 className="text-lg font-semibold text-slate-900 dark:text-white">
                                Recent Users
                            </h2>
                            <button className="text-sm font-medium text-cyan-600 transition-colors hover:text-cyan-700 dark:text-cyan-400 dark:hover:text-cyan-300">
                                View All
                            </button>
                        </div>
                        <div className="overflow-x-auto -mx-5 px-5">
                            <table className="w-full text-sm min-w-[420px] table-auto">
                                <thead>
                                    <tr className="border-b border-slate-100 text-left text-xs font-medium uppercase tracking-wider text-slate-500 dark:border-slate-800 dark:text-slate-400">
                                        <th className="pb-3 pr-4 font-medium">User</th>
                                        <th className="pb-3 pr-4 font-medium">Email</th>
                                        <th className="pb-3 text-right font-medium">Joined</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-100 dark:divide-slate-800/40">
                                    {recentUsers.map((user) => (
                                        <tr
                                            key={user.id}
                                            className="hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors"
                                        >
                                            <td className="py-3.5 pr-4 whitespace-nowrap">
                                                <div className="flex items-center gap-2.5">
                                                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 text-xs font-medium text-white">
                                                        {user.avatar}
                                                    </div>
                                                    <span className="font-medium text-slate-900 dark:text-white">
                                                        {user.name}
                                                    </span>
                                                </div>
                                            </td>
                                            <td className="py-3.5 pr-4 text-slate-600 dark:text-slate-400 max-w-[180px] truncate">
                                                {user.email}
                                            </td>
                                            <td className="py-3.5 text-right text-slate-600 dark:text-slate-400 whitespace-nowrap">
                                                {user.joinDate}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                {/* Recent Payments */}
                <div className="mt-6 rounded-xl border border-slate-100 bg-white p-5 dark:border-slate-800/50 dark:bg-slate-900 flex flex-col">
                    <div className="mb-4 flex items-center justify-between">
                        <h2 className="text-lg font-semibold text-slate-900 dark:text-white">
                            Recent Payments
                        </h2>
                        <button className="text-sm font-medium text-cyan-600 transition-colors hover:text-cyan-700 dark:text-cyan-400 dark:hover:text-cyan-300">
                            View All
                        </button>
                    </div>
                    <div className="overflow-x-auto -mx-5 px-5">
                        <table className="w-full text-sm min-w-[500px] table-auto">
                            <thead>
                                <tr className="border-b border-slate-100 text-left text-xs font-medium uppercase tracking-wider text-slate-500 dark:border-slate-800 dark:text-slate-400">
                                    <th className="pb-3 pr-4 font-medium">Invoice</th>
                                    <th className="pb-3 pr-4 font-medium">Customer</th>
                                    <th className="pb-3 pr-4 font-medium">Amount</th>
                                    <th className="pb-3 font-medium">Status</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100 dark:divide-slate-800/40">
                                {recentPayments.map((payment) => (
                                    <tr
                                        key={payment.id}
                                        className="hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors"
                                    >
                                        <td className="py-3.5 pr-4 font-medium text-slate-900 dark:text-white whitespace-nowrap">
                                            {payment.id}
                                        </td>
                                        <td className="py-3.5 pr-4 text-slate-600 dark:text-slate-400 whitespace-nowrap">
                                            {payment.customer}
                                        </td>
                                        <td className="py-3.5 pr-4 font-semibold text-slate-900 dark:text-white whitespace-nowrap">
                                            {payment.amount}
                                        </td>
                                        <td className="py-3.5 whitespace-nowrap">
                                            <span
                                                className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-xs font-medium ${getStatusBadge(payment.status)}`}
                                            >
                                                <span
                                                    className={`h-1.5 w-1.5 rounded-full ${getStatusDot(payment.status)}`}
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
    );
}

export default AdminDashboard;