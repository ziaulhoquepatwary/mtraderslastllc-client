"use client"
import React, { useState } from "react";
import {
    Search,
    Eye,
    ChevronDown,
    MoreVertical,
    ClipboardCopy,
    Filter,
    FileText,
    Trash2,
    CheckCircle2
} from "lucide-react";

function Orders() {
    const [activeTab, setActiveTab] = useState("active");
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedStatus, setSelectedStatus] = useState("All");

    const ordersData = [
        {
            id: 1,
            packageTitle: "E-commerce Platform Development",
            orderId: "ORD-8942",
            clientName: "Ziaul Hoque Patwary",
            email: "ziaul@example.com",
            phone: "+880 1712-345678",
            package: "Enterprise Scaling",
            price: "$4,500",
            status: "In Progress",
            orderDate: "10 Jul 2026",
            deadline: "25 Aug 2026",
            type: "active"
        },
        {
            id: 2,
            packageTitle: "Corporate Website Redesign",
            orderId: "ORD-7321",
            clientName: "Sarah Chen",
            email: "sarah.c@example.com",
            phone: "+1 (555) 234-5678",
            package: "Custom Premium",
            price: "$2,800",
            status: "Completed",
            orderDate: "15 Jun 2026",
            deadline: "10 Jul 2026",
            type: "closed"
        },
        {
            id: 3,
            packageTitle: "Custom CRM Dashboard",
            orderId: "ORD-9104",
            clientName: "Mike Johnson",
            email: "mike.j@example.com",
            phone: "+1 (555) 876-5432",
            package: "SaaS Blueprint",
            price: "$5,400",
            status: "Review",
            orderDate: "02 Jul 2026",
            deadline: "20 Jul 2026",
            type: "active"
        },
        {
            id: 4,
            packageTitle: "Mobile Banking UI System",
            orderId: "ORD-4412",
            clientName: "Amara Okafor",
            email: "amara@example.com",
            phone: "+234 803 123 4567",
            package: "Mobile Core",
            price: "$6,200",
            status: "Discussion",
            orderDate: "18 Jul 2026",
            deadline: "15 Sep 2026",
            type: "active"
        },
        {
            id: 5,
            packageTitle: "Fitness Tracker Mobile App",
            orderId: "ORD-3291",
            clientName: "David Miller",
            email: "david.m@example.com",
            phone: "+44 20 7946 0192",
            package: "MVP Starter",
            price: "$3,500",
            status: "Pending",
            orderDate: "19 Jul 2026",
            deadline: "30 Aug 2026",
            type: "active"
        },
        {
            id: 6,
            packageTitle: "Real Estate Portal Architecture",
            orderId: "ORD-8821",
            clientName: "Elena Rostova",
            email: "elena.r@example.com",
            phone: "+7 901 234-56-78",
            package: "Enterprise Scaling",
            price: "$7,800",
            status: "In Progress",
            orderDate: "28 Jun 2026",
            deadline: "12 Aug 2026",
            type: "active"
        },
        {
            id: 7,
            packageTitle: "AI Analytics Integration",
            orderId: "ORD-1094",
            clientName: "Takashi Sato",
            email: "sato@example.com",
            phone: "+81 3 5555 0143",
            package: "Custom Premium",
            price: "$4,200",
            status: "Completed",
            orderDate: "20 May 2026",
            deadline: "22 Jun 2026",
            type: "closed"
        },
        {
            id: 8,
            packageTitle: "SaaS Landing Page Design",
            orderId: "ORD-5623",
            clientName: "Emily Davis",
            email: "emily.d@example.com",
            phone: "+1 (555) 432-1098",
            package: "MVP Starter",
            price: "$1,900",
            status: "Pending",
            orderDate: "17 Jul 2026",
            deadline: "05 Aug 2026",
            type: "active"
        },
        {
            id: 9,
            packageTitle: "Healthcare Patient Portal",
            orderId: "ORD-6712",
            clientName: "Dr. Robert Smith",
            email: "robert.s@example.com",
            phone: "+1 (555) 901-2345",
            package: "Enterprise Scaling",
            price: "$8,500",
            status: "Discussion",
            orderDate: "14 Jul 2026",
            deadline: "01 Oct 2026",
            type: "active"
        },
        {
            id: 10,
            packageTitle: "Educational LMS Platform",
            orderId: "ORD-2390",
            clientName: "Chloe Dupont",
            email: "chloe@example.com",
            phone: "+33 1 42 27 78 89",
            package: "SaaS Blueprint",
            price: "$5,100",
            status: "Review",
            orderDate: "25 Jun 2026",
            deadline: "30 Jul 2026",
            type: "active"
        }
    ];

    const getStatusStyle = (status) => {
        switch (status) {
            case "Pending":
                return "bg-slate-50 text-slate-600 border border-slate-200 dark:bg-slate-800/40 dark:text-slate-400 dark:border-slate-800";
            case "Discussion":
                return "bg-cyan-50 text-cyan-600 border border-cyan-100 dark:bg-cyan-950/30 dark:text-cyan-400 dark:border-cyan-900/30";
            case "In Progress":
                return "bg-blue-50 text-blue-600 border border-blue-100 dark:bg-blue-950/30 dark:text-blue-400 dark:border-blue-900/30";
            case "Review":
                return "bg-amber-50 text-amber-600 border border-amber-100 dark:bg-amber-950/30 dark:text-amber-400 dark:border-amber-900/30";
            case "Completed":
                return "bg-emerald-50 text-emerald-600 border border-emerald-100 dark:bg-emerald-950/30 dark:text-emerald-400 dark:border-emerald-900/30";
            default:
                return "bg-slate-50 text-slate-600 dark:bg-slate-800/40 dark:text-slate-400";
        }
    };

    const filteredOrders = ordersData.filter((order) => {
        const matchesTab = order.type === activeTab;
        const matchesSearch =
            order.orderId.toLowerCase().includes(searchQuery.toLowerCase()) ||
            order.clientName.toLowerCase().includes(searchQuery.toLowerCase()) ||
            order.packageTitle.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesStatus = selectedStatus === "All" || order.status === selectedStatus;

        return matchesTab && matchesSearch && matchesStatus;
    });

    return (
        <div className="min-h-screen bg-white dark:bg-slate-950 transition-colors duration-200">
            <div className="mx-auto">

                <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
                    <div>
                        <h1 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-3xl">
                            Orders
                        </h1>
                        <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
                            View and monitor all client orders.
                        </p>
                    </div>

                    <div className="inline-flex rounded-xl bg-slate-100 p-1 dark:bg-slate-900 self-start sm:self-auto">
                        <button
                            onClick={() => setActiveTab("active")}
                            className={`rounded-lg px-4 py-2 text-sm font-semibold transition-all duration-150 ${activeTab === "active"
                                ? "bg-white text-slate-900 shadow-sm dark:bg-slate-800 dark:text-white"
                                : "text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
                                }`}
                        >
                            Active Orders
                        </button>
                        <button
                            onClick={() => setActiveTab("closed")}
                            className={`rounded-lg px-4 py-2 text-sm font-semibold transition-all duration-150 ${activeTab === "closed"
                                ? "bg-white text-slate-900 shadow-sm dark:bg-slate-800 dark:text-white"
                                : "text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
                                }`}
                        >
                            Closed Orders
                        </button>
                    </div>
                </div>

                {filteredOrders.length === 0 ? (
                    <div className="flex flex-col items-center justify-center rounded-xl border border-slate-100 bg-white py-16 text-center dark:border-slate-900 dark:bg-slate-900">
                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-50 text-slate-400 dark:bg-slate-800 dark:text-slate-500">
                            <ClipboardCopy className="h-6 w-6" />
                        </div>
                        <h3 className="mt-4 text-base font-semibold text-slate-900 dark:text-white">
                            No Orders Found
                        </h3>
                        <p className="mt-1 text-sm text-slate-600 dark:text-slate-400 max-w-xs">
                            We couldn't find any orders matching your current filters or criteria.
                        </p>
                    </div>
                ) : (
                    <div className="rounded-xl border border-slate-100 bg-white shadow-xs dark:border-slate-900 dark:bg-slate-900 overflow-hidden">
                        <div className="overflow-x-auto -mx-4 px-4 sm:mx-0 sm:px-0">
                            <table className="w-full text-left text-sm min-w-[980px] table-auto">
                                <thead>
                                    <tr className="border-b border-slate-100 bg-slate-50/50 text-xs font-semibold uppercase tracking-wider text-slate-600 dark:border-slate-800/60 dark:bg-slate-900/50 dark:text-slate-400">
                                        <th className="py-4 px-6 font-semibold">Package Title</th>
                                        <th className="py-4 px-4 font-semibold">Order ID</th>
                                        <th className="py-4 px-4 font-semibold">Client</th>
                                        <th className="py-4 px-4 font-semibold">Package details</th>
                                        <th className="py-4 px-4 font-semibold">Status</th>
                                        <th className="py-4 px-4 font-semibold">Ordered</th>
                                        <th className="py-4 px-4 font-semibold">Deadline</th>
                                        <th className="py-4 px-6 text-right font-semibold">Actions</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-100 dark:divide-slate-800/40">
                                    {filteredOrders.map((order) => (
                                        <tr
                                            key={order.id}
                                            className="hover:bg-slate-50/40 dark:hover:bg-slate-800/20 transition-colors duration-150"
                                        >
                                            <td className="py-4 px-6 font-medium text-slate-900 dark:text-white max-w-[200px] truncate">
                                                {order.packageTitle}
                                            </td>
                                            <td className="py-4 px-4 font-mono text-xs font-semibold text-slate-600 dark:text-slate-400 whitespace-nowrap">
                                                {order.orderId}
                                            </td>
                                            <td className="py-4 px-4 whitespace-nowrap">
                                                <div className="flex flex-col">
                                                    <span className="font-medium text-slate-900 dark:text-white">{order.clientName}</span>
                                                    <span className="text-xs text-slate-600 dark:text-slate-400">{order.email}</span>
                                                    <span className="text-xs text-slate-400 dark:text-slate-500 mt-0.5">{order.phone}</span>
                                                </div>
                                            </td>
                                            <td className="py-4 px-4 whitespace-nowrap">
                                                <div className="flex flex-col">
                                                    <span className="text-slate-900 dark:text-white font-medium">{order.package}</span>
                                                    <span className="text-xs font-semibold text-cyan-600 dark:text-cyan-400 mt-0.5">{order.price}</span>
                                                </div>
                                            </td>
                                            <td className="py-4 px-4 whitespace-nowrap">
                                                <span className={`inline-flex items-center rounded-lg px-2.5 py-1 text-xs font-medium ${getStatusStyle(order.status)}`}>
                                                    {order.status}
                                                </span>
                                            </td>
                                            <td className="py-4 px-4 text-slate-600 dark:text-slate-400 whitespace-nowrap">
                                                {order.orderDate}
                                            </td>
                                            <td className="py-4 px-4 text-slate-600 dark:text-slate-400 whitespace-nowrap">
                                                {order.deadline}
                                            </td>
                                            <td className="py-4 px-6 text-right whitespace-nowrap">
                                                <div className="flex items-center justify-end gap-1.5">
                                                    <button
                                                        title="View Details"
                                                        className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-slate-100 bg-white text-slate-600 hover:bg-slate-50 hover:text-slate-900 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-white transition-colors"
                                                    >
                                                        <Eye className="h-4 w-4" />
                                                    </button>
                                                    <button
                                                        title="Change Status"
                                                        className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-slate-100 bg-white text-slate-600 hover:bg-slate-50 hover:text-slate-900 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-white transition-colors"
                                                    >
                                                        <FileText className="h-4 w-4" />
                                                    </button>
                                                    <button
                                                        title="More Actions"
                                                        className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-slate-100 bg-white text-slate-600 hover:bg-slate-50 hover:text-slate-900 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-white transition-colors"
                                                    >
                                                        <MoreVertical className="h-4 w-4" />
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

export default Orders;