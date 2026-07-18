'use client';

import { useState, useMemo } from 'react';
import { Search, ArrowUpDown } from 'lucide-react';
import { packageData } from '@/data/package-data';
import PackageCard from '@/components/PackageCard';

const SORT_OPTIONS = [
    { value: 'price-asc', label: 'Price: Low to High' },
    { value: 'price-desc', label: 'Price: High to Low' },
    { value: 'category', label: 'By Category' },
    { value: 'delivery', label: 'Delivery Time: Shortest' },
    { value: 'title', label: 'Alphabetically' },
];

const SERVICE_CATEGORIES = [
    "Web Development",
    "Search Engine Optimization",
    "Software Development",
    "Business Automation",
    "IT Infrastructure Development",
    "ERP Solution",
    "Mobile App Development",
    "E-commerce Solution",
    "Cloud Service"
];

export default function PackagePage() {
    const [searchQuery, setSearchQuery] = useState('');
    const [activeSearch, setActiveSearch] = useState('');
    const [sortBy, setSortBy] = useState('price-asc');
    const [selectedCategory, setSelectedCategory] = useState('');

    // Filter packages based on activeSearch and category
    const filteredPackages = useMemo(() => {
        return packageData.filter(pkg => {
            const matchesSearch =
                pkg.title.toLowerCase().includes(activeSearch.toLowerCase()) ||
                pkg.description.toLowerCase().includes(activeSearch.toLowerCase()) ||
                pkg.serviceCategory.toLowerCase().includes(activeSearch.toLowerCase());

            const matchesCategory = !selectedCategory || pkg.serviceCategory === selectedCategory;

            return matchesSearch && matchesCategory;
        });
    }, [activeSearch, selectedCategory]);

    // Sort packages
    const sortedPackages = useMemo(() => {
        const sorted = [...filteredPackages];

        switch (sortBy) {
            case 'price-asc':
                sorted.sort((a, b) => a.price - b.price);
                break;
            case 'price-desc':
                sorted.sort((a, b) => b.price - a.price);
                break;
            case 'category':
                sorted.sort((a, b) => a.serviceCategory.localeCompare(b.serviceCategory));
                break;
            case 'delivery':
                sorted.sort((a, b) => {
                    const timeA = parseInt(a.deliveryTime);
                    const timeB = parseInt(b.deliveryTime);
                    return timeA - timeB;
                });
                break;
            case 'title':
                sorted.sort((a, b) => a.title.localeCompare(b.title));
                break;
            default:
                break;
        }

        return sorted;
    }, [filteredPackages, sortBy]);

    const handleSearch = (e) => {
        e.preventDefault();
        setActiveSearch(searchQuery);
    };

    const clearFilters = () => {
        setSearchQuery('');
        setActiveSearch('');
        setSelectedCategory('');
    };

    return (
        <div className="min-h-screen pt-20 bg-white dark:bg-slate-950 transition-colors duration-300">
            <section className="bg-white dark:bg-slate-950 border-b border-slate-100 dark:border-slate-900 relative z-10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                    <div className="flex flex-col gap-2 mb-8">
                        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600 dark:from-cyan-400 dark:to-blue-500 mb-3">
                            Our Services
                        </h1>
                        <p className="text-slate-600 dark:text-slate-400 text-lg font-medium max-w-2xl">
                            Explore our comprehensive range of IT solutions and services tailored for your business needs
                        </p>
                    </div>

                    {/* Filter & Search Bar */}
                    <div className="space-y-4">
                        <div className="flex flex-col lg:flex-row gap-4">
                            {/* Search Input */}
                            <form onSubmit={handleSearch} className="flex-1 flex gap-2">
                                <div className="flex-1 relative">
                                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 pointer-events-none" />
                                    <input
                                        type="text"
                                        placeholder="Search by package name, category, or keywords..."
                                        value={searchQuery}
                                        onChange={(e) => setSearchQuery(e.target.value)}
                                        className="w-full pl-10 pr-4 py-3 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 dark:focus:ring-cyan-400 focus:border-transparent transition-all duration-200"
                                    />
                                </div>
                                <button
                                    type="submit"
                                    className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold rounded-lg hover:shadow-lg hover:shadow-cyan-500/30 transition-all duration-200 whitespace-nowrap"
                                >
                                    Search
                                </button>
                            </form>

                            {/* Sort Dropdown */}
                            <div className="flex gap-2 items-center">
                                <ArrowUpDown className="w-5 h-5 text-slate-600 dark:text-slate-400 hidden sm:block" />
                                <select
                                    value={sortBy}
                                    onChange={(e) => setSortBy(e.target.value)}
                                    className="px-4 py-3 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg text-slate-900 dark:text-white font-medium focus:outline-none focus:ring-2 focus:ring-cyan-500 dark:focus:ring-cyan-400 focus:border-transparent transition-all duration-200"
                                >
                                    {SORT_OPTIONS.map(option => (
                                        <option key={option.value} value={option.value}>
                                            {option.label}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>

                        {/* Category Filter Tabs */}
                        <div className="flex flex-wrap gap-2">
                            <button
                                onClick={() => setSelectedCategory('')}
                                className={`px-4 py-2 rounded-full font-bold text-sm transition-all duration-200 ${selectedCategory === ''
                                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white'
                                    : 'bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-800'
                                    }`}
                            >
                                All Services
                            </button>
                            {SERVICE_CATEGORIES.map(category => (
                                <button
                                    key={category}
                                    onClick={() => setSelectedCategory(category)}
                                    className={`px-4 py-2 rounded-full font-bold text-sm transition-all duration-200 whitespace-nowrap ${selectedCategory === category
                                        ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white'
                                        : 'bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-800'
                                        }`}
                                >
                                    {category}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {/* Package Grid */}
                {sortedPackages.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {sortedPackages.map(pkg => (
                            <PackageCard key={pkg.id} packageData={pkg} />
                        ))}
                    </div>
                ) : (
                    <div className="col-span-full flex flex-col items-center justify-center py-16 text-center">
                        <div className="mb-4">
                            <Search className="w-16 h-16 text-slate-300 dark:text-slate-700 mx-auto" />
                        </div>
                        <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                            No packages found
                        </h3>
                        <p className="text-slate-600 dark:text-slate-400 max-w-sm">
                            Try adjusting your search criteria or browse all categories to find the perfect package for your needs.
                        </p>
                        <button
                            onClick={clearFilters}
                            className="mt-6 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold rounded-lg hover:shadow-lg hover:shadow-cyan-500/30 transition-all duration-200"
                        >
                            Clear Filters
                        </button>
                    </div>
                )}
            </section>
        </div>
    );
}