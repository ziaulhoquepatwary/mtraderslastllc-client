import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Clock, Tag, CheckCircle2, ArrowLeft, Layers, Users } from 'lucide-react';
import { packageData } from '@/data/package-data';
import BackButton from './BackButton';

export async function generateStaticParams() {
    return packageData.map((pkg) => ({
        id: pkg.id.toString(),
    }));
}

export default async function PackageDetailsPage({ params }) {
    const { id } = await params;
    const pkg = packageData.find((p) => p.id.toString() === id);

    if (!pkg) {
        notFound();
    }

    return (
        <div className="py-25 bg-slate-50 dark:bg-slate-950 transition-colors duration-300 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="mb-8">
                    <BackButton />
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">

                    <div className="lg:col-span-7 relative aspect-[4/3] sm:aspect-[16/10] w-full bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden shadow-sm">
                        {pkg.image ? (
                            <Image
                                src={pkg.image}
                                alt={pkg.title}
                                fill
                                priority
                                className="object-cover"
                            />
                        ) : (
                            <div className="w-full h-full flex items-center justify-center text-slate-400 font-bold">
                                No Image Available
                            </div>
                        )}
                    </div>

                    <div className="lg:col-span-5 space-y-6">
                        <div>
                            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-cyan-50 dark:bg-cyan-950/50 border border-cyan-100 dark:border-cyan-900/50 text-cyan-600 dark:text-cyan-400 text-xs font-bold rounded-full">
                                <Tag className="w-3 h-3" />
                                {pkg.serviceCategory}
                            </span>
                            <h1 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight mt-3">
                                {pkg.title}
                            </h1>
                        </div>

                        <p className="text-slate-600 dark:text-slate-400 font-medium text-base leading-relaxed">
                            {pkg.description}
                        </p>

                        <div className="grid grid-cols-2 gap-4 p-4 bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-xl">
                            <div>
                                <p className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider">
                                    Investment
                                </p>
                                <p className="text-3xl font-black bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent mt-1">
                                    ${pkg.price.toLocaleString()}
                                </p>
                            </div>
                            <div>
                                <p className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider">
                                    Delivery Time
                                </p>
                                <div className="flex items-center gap-1.5 text-slate-800 dark:text-slate-200 font-bold mt-2">
                                    <Clock className="w-4 h-4 text-cyan-500" />
                                    <span>{pkg.deliveryTime}</span>
                                </div>
                            </div>
                        </div>

                        <button className="w-full py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold rounded-xl hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-200">
                            Order Now
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mt-16 pt-12 border-t border-slate-200 dark:border-slate-800">

                    <div className="lg:col-span-7 space-y-8">
                        <div className="space-y-4">
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                                <CheckCircle2 className="w-5 h-5 text-cyan-500" />
                                Package Overview & Deliverables
                            </h3>
                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                {pkg.packageOverview?.map((item, index) => (
                                    <li
                                        key={index}
                                        className="flex items-start gap-2.5 p-3.5 bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-xl text-sm font-medium text-slate-600 dark:text-slate-400"
                                    >
                                        <span className="text-cyan-500 font-bold mt-0.5">•</span>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className="lg:col-span-5 space-y-8">
                        {pkg.technologies && pkg.technologies.length > 0 && (
                            <div className="space-y-3">
                                <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
                                    <Layers className="w-4 h-4 text-cyan-500" />
                                    Technologies Stack
                                </h3>
                                <div className="flex flex-wrap gap-2">
                                    {pkg.technologies.map((tech, index) => (
                                        <span
                                            key={index}
                                            className="px-3 py-1.5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 text-xs font-semibold rounded-lg"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        )}

                        {pkg.whoIsThisFor && pkg.whoIsThisFor.length > 0 && (
                            <div className="space-y-3">
                                <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
                                    <Users className="w-4 h-4 text-cyan-500" />
                                    Target Audience
                                </h3>
                                <div className="flex flex-wrap gap-2">
                                    {pkg.whoIsThisFor.map((target, index) => (
                                        <span
                                            key={index}
                                            className="px-3 py-1.5 bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-400 text-xs font-medium rounded-lg"
                                        >
                                            {target}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>

                </div>

            </div>
        </div>
    );
}