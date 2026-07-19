"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, FilePlus, Heart, User, Briefcase, Users, Clock, ChevronRight, X, FilePlus2, CreditCard, Package } from "lucide-react";
import { authClient } from "@/lib/auth-client";
import { FcManager } from "react-icons/fc";

const MENU_CONFIG = {
    user: [
        { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
        { name: "My Orders", href: "/dashboard/orders", icon: FilePlus },
        { name: "Save Packages", href: "/dashboard/favorites", icon: FilePlus2 },
        { name: "Payments", href: "/dashboard/payments", icon: CreditCard },
        { name: "Profile", href: "/my-profile", icon: User },
    ],
    admin: [
        { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
        { name: "Orders", href: "/admin/orders", icon: Briefcase },
        { name: "Manage Orders", href: "/admin/orders", icon: FcManager },
        { name: "Add Packages", href: "/admin/add-packages", icon: Package },
        { name: "Users", href: "/admin/users", icon: Users },
        { name: "Profile", href: "/my-profile", icon: User },
    ],
};

function DashboardSidebar({ isOpen, closeSidebar }) {
    const pathname = usePathname();
    const { data: session, isPending } = authClient.useSession();

    const user = session?.user;
    const role = user?.role;

    if (isPending) return <div>Loading...</div>;
    if (!user || !role) return null;

    const menuItems = MENU_CONFIG[role] || [];

    return (
        <aside
            className={`fixed inset-y-0 left-0 z-50 flex h-screen w-64 flex-col justify-between border-r border-slate-100 bg-white text-slate-700 transition-all duration-300 dark:border-slate-900 dark:bg-slate-950 dark:text-slate-300 lg:sticky lg:top-0 ${isOpen
                ? "translate-x-0"
                : "-translate-x-full lg:translate-x-0"
                }`}
        >
            <div className="flex flex-1 flex-col overflow-y-auto pt-6">
                <div className="mb-8 flex items-center justify-between px-6">
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

                    <button
                        onClick={() => closeSidebar?.()}
                        className="rounded-lg p-1.5 text-slate-700 transition-all duration-200 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800 lg:hidden"
                    >
                        <X size={20} />
                    </button>
                </div>

                <div className="mb-6 px-4">
                    <div className="flex items-center gap-3 rounded-xl border border-slate-100 bg-slate-50 p-3 transition-colors duration-300 dark:border-slate-900 dark:bg-slate-900">
                        <img
                            src={user.image || "/user.png"}
                            alt={user.name}
                            className="h-10 w-10 rounded-full object-cover"
                        />

                        <div className="min-w-0 flex-1">
                            <h4 className="truncate text-sm font-semibold text-slate-900 dark:text-white">
                                {user.name}
                            </h4>

                            <p className="truncate text-xs text-slate-600 dark:text-slate-400">
                                {user.email}
                            </p>
                        </div>
                    </div>
                </div>

                <nav className="space-y-1 px-3">
                    {menuItems.map((item) => {
                        const Icon = item.icon;

                        const isActive =
                            item.href === "/" + role
                                ? pathname === item.href
                                : pathname.startsWith(item.href + "/") ||
                                pathname === item.href;

                        return (
                            <Link
                                key={item.name}
                                href={item.href}
                                onClick={() => closeSidebar?.()}
                                className={`group flex items-center justify-between rounded-xl px-4 py-3 text-sm font-medium transition-all duration-200 ${isActive
                                    ? "bg-gradient-to-r from-cyan-500 to-blue-400 text-white shadow-lg shadow-cyan-500/20"
                                    : "text-slate-700 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800"
                                    }`}
                            >
                                <div className="flex items-center gap-3">
                                    <Icon
                                        size={18}
                                        className={`transition-transform duration-200 group-hover:scale-110 ${isActive ? "" : "opacity-70"
                                            }`}
                                    />

                                    <span>{item.name}</span>
                                </div>

                                {isActive && (
                                    <ChevronRight
                                        size={14}
                                        className="opacity-80"
                                    />
                                )}
                            </Link>
                        );
                    })}
                </nav>
            </div>

            <div className="border-t border-slate-100 p-4 dark:border-slate-900">
                <div className="rounded-lg bg-slate-50 px-3 py-2 transition-colors duration-300 dark:bg-slate-900">
                    <p className="text-center text-[11px] font-medium capitalize text-slate-700 dark:text-slate-300">
                        Logged in as {user.role?.replace("_", " ")}
                    </p>
                </div>
            </div>
        </aside>
    );
}

export default DashboardSidebar;