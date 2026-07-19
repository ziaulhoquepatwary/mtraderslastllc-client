"use client"
import React, { useState } from "react";
import { Search, Eye, ShieldCheck, Users as UsersIcon, ChevronDown } from "lucide-react";

function Users() {
    const [activeTab, setActiveTab] = useState("all");
    const [searchQuery, setSearchQuery] = useState("");

    const initialUsers = [
        {
            id: 1,
            avatar: "ZH",
            name: "Ziaul Hoque Patwary",
            email: "ziaul@example.com",
            phone: "+880 1712-345678",
            role: "Admin",
            joinedDate: "12 Jan 2026",
        },
        {
            id: 2,
            avatar: "SC",
            name: "Sarah Chen",
            email: "sarah.c@example.com",
            phone: "+1 (555) 234-5678",
            role: "User",
            joinedDate: "15 Jan 2026",
        },
        {
            id: 3,
            avatar: "MJ",
            name: "Mike Johnson",
            email: "mike.j@example.com",
            phone: "+1 (555) 876-5432",
            role: "User",
            joinedDate: "02 Feb 2026",
        },
        {
            id: 4,
            avatar: "AO",
            name: "Amara Okafor",
            email: "amara@example.com",
            phone: "+234 803 123 4567",
            role: "Admin",
            joinedDate: "18 Feb 2026",
        },
        {
            id: 5,
            avatar: "DM",
            name: "David Miller",
            email: "david.m@example.com",
            phone: "+44 20 7946 0192",
            role: "User",
            joinedDate: "01 Mar 2026",
        },
        {
            id: 6,
            avatar: "ER",
            name: "Elena Rostova",
            email: "elena.r@example.com",
            phone: "+7 901 234-56-78",
            role: "User",
            joinedDate: "14 Mar 2026",
        },
        {
            id: 7,
            avatar: "TS",
            name: "Takashi Sato",
            email: "sato@example.com",
            phone: "+81 3 5555 0143",
            role: "Admin",
            joinedDate: "29 Mar 2026",
        },
        {
            id: 8,
            avatar: "ED",
            name: "Emily Davis",
            email: "emily.d@example.com",
            phone: "+1 (555) 432-1098",
            role: "User",
            joinedDate: "08 Apr 2026",
        },
        {
            id: 9,
            avatar: "RS",
            name: "Robert Smith",
            email: "robert.s@example.com",
            phone: "+1 (555) 901-2345",
            role: "User",
            joinedDate: "22 Apr 2026",
        },
        {
            id: 10,
            avatar: "CD",
            name: "Chloe Dupont",
            email: "chloe@example.com",
            phone: "+33 1 42 27 78 89",
            role: "User",
            joinedDate: "03 May 2026",
        },
    ];

    const [usersList, setUsersList] = useState(initialUsers);

    const handleRoleChange = (userId, newRole) => {
        setUsersList(
            usersList.map((user) =>
                user.id === userId ? { ...user, role: newRole } : user
            )
        );
    };

    const filteredUsers = usersList.filter((user) => {
        const matchesTab =
            activeTab === "all" ? true : user.role === "Admin";
        const matchesSearch =
            user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            user.email.toLowerCase().includes(searchQuery.toLowerCase());

        return matchesTab && matchesSearch;
    });

    return (
        <div className="min-h-screen bg-white dark:bg-slate-950 transition-colors duration-200">
            <div className="mx-auto">
                <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
                    <div>
                        <h1 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-3xl">
                            Users
                        </h1>
                        <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
                            View and manage all registered users.
                        </p>
                    </div>

                    <div className="inline-flex rounded-xl bg-slate-100 p-1 dark:bg-slate-900 self-start sm:self-auto">
                        <button
                            onClick={() => setActiveTab("all")}
                            className={`rounded-lg px-4 py-2 text-sm font-semibold transition-all duration-150 ${activeTab === "all"
                                    ? "bg-white text-slate-900 shadow-xs dark:bg-slate-800 dark:text-white"
                                    : "text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
                                }`}
                        >
                            All Users
                        </button>
                        <button
                            onClick={() => setActiveTab("admins")}
                            className={`rounded-lg px-4 py-2 text-sm font-semibold transition-all duration-150 ${activeTab === "admins"
                                    ? "bg-white text-slate-900 shadow-xs dark:bg-slate-800 dark:text-white"
                                    : "text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
                                }`}
                        >
                            Admins
                        </button>
                    </div>
                </div>

                <div className="mb-6 max-w-md">
                    <div className="relative">
                        <Search className="absolute top-1/2 left-3.5 h-4 w-4 -translate-y-1/2 text-slate-400" />
                        <input
                            type="text"
                            placeholder="Search by name or email..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full rounded-xl border border-slate-100 bg-white py-2.5 pr-4 pl-10 text-sm text-slate-900 placeholder-slate-400 shadow-2xs outline-hidden focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 dark:border-slate-900 dark:bg-slate-900 dark:text-white dark:placeholder-slate-500"
                        />
                    </div>
                </div>

                {filteredUsers.length === 0 ? (
                    <div className="flex flex-col items-center justify-center rounded-xl border border-slate-100 bg-white py-16 text-center dark:border-slate-900 dark:bg-slate-900">
                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-50 text-slate-400 dark:bg-slate-800 dark:text-slate-500">
                            <UsersIcon className="h-6 w-6" />
                        </div>
                        <h3 className="mt-4 text-base font-semibold text-slate-900 dark:text-white">
                            No Users Found
                        </h3>
                        <p className="mt-1 text-sm text-slate-600 dark:text-slate-400 max-w-xs px-4">
                            We couldn't find any user matching your current search criteria.
                        </p>
                    </div>
                ) : (
                    <div className="rounded-xl border border-slate-100 bg-white shadow-2xs dark:border-slate-900 dark:bg-slate-900 overflow-hidden">
                        <div className="overflow-x-auto -mx-4 px-4 sm:mx-0 sm:px-0">
                            <table className="w-full text-left text-sm min-w-[750px] table-auto">
                                <thead>
                                    <tr className="border-b border-slate-100 bg-slate-50/50 text-xs font-semibold uppercase tracking-wider text-slate-600 dark:border-slate-800/60 dark:bg-slate-900/50 dark:text-slate-400">
                                        <th className="py-4 px-6 w-[70px] font-semibold">Avatar</th>
                                        <th className="py-4 px-4 font-semibold">User</th>
                                        <th className="py-4 px-4 font-semibold">Phone</th>
                                        <th className="py-4 px-4 font-semibold">Role</th>
                                        <th className="py-4 px-4 font-semibold">Joined Date</th>
                                        <th className="py-4 px-6 text-right font-semibold">Actions</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-100 dark:divide-slate-800/40">
                                    {filteredUsers.map((user) => (
                                        <tr
                                            key={user.id}
                                            className="hover:bg-slate-50/40 dark:hover:bg-slate-800/20 transition-colors duration-150"
                                        >
                                            <td className="py-4 px-6 whitespace-nowrap">
                                                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 text-xs font-semibold text-white shadow-2xs">
                                                    {user.avatar}
                                                </div>
                                            </td>
                                            <td className="py-4 px-4 whitespace-nowrap">
                                                <div className="flex flex-col">
                                                    <span className="font-medium text-slate-900 dark:text-white">
                                                        {user.name}
                                                    </span>
                                                    <span className="text-xs text-slate-600 dark:text-slate-400">
                                                        {user.email}
                                                    </span>
                                                </div>
                                            </td>
                                            <td className="py-4 px-4 text-slate-600 dark:text-slate-400 whitespace-nowrap">
                                                {user.phone}
                                            </td>
                                            <td className="py-4 px-4 whitespace-nowrap">
                                                <span
                                                    className={`inline-flex items-center rounded-lg px-2.5 py-1 text-xs font-medium ${user.role === "Admin"
                                                            ? "bg-cyan-50 text-cyan-600 border border-cyan-100 dark:bg-cyan-950/30 dark:text-cyan-400 dark:border-cyan-900/30"
                                                            : "bg-slate-50 text-slate-600 border border-slate-200 dark:bg-slate-800/40 dark:text-slate-400 dark:border-slate-800"
                                                        }`}
                                                >
                                                    {user.role}
                                                </span>
                                            </td>
                                            <td className="py-4 px-4 text-slate-600 dark:text-slate-400 whitespace-nowrap">
                                                {user.joinedDate}
                                            </td>
                                            <td className="py-4 px-6 text-right whitespace-nowrap">
                                                <div className="flex items-center justify-end gap-2">
                                                    <div className="relative inline-block text-left">
                                                        <select
                                                            value={user.role}
                                                            onChange={(e) =>
                                                                handleRoleChange(user.id, e.target.value)
                                                            }
                                                            className="appearance-none rounded-lg border border-slate-100 bg-white py-1.5 pr-7 pl-3 text-xs font-medium text-slate-600 hover:bg-slate-50 focus:border-cyan-500 outline-hidden dark:border-slate-800 dark:bg-slate-900 dark:text-slate-400 dark:hover:bg-slate-800 transition-colors"
                                                        >
                                                            <option value="User">User</option>
                                                            <option value="Admin">Admin</option>
                                                        </select>
                                                        <ChevronDown className="absolute top-1/2 right-2 h-3.5 w-3.5 -translate-y-1/2 pointer-events-none text-slate-400" />
                                                    </div>
                                                    <button
                                                        title="View Profile"
                                                        className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-cyan-100 bg-cyan-50 text-cyan-600 hover:bg-cyan-100 dark:border-cyan-950/40 dark:bg-cyan-950/30 dark:text-cyan-400 dark:hover:bg-cyan-900/40 transition-colors"
                                                    >
                                                        <Eye className="h-4 w-4" />
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

export default Users;