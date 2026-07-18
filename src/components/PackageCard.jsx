import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function PackageCard({ packageData }) {
    return (
        <div className="group bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-xl overflow-hidden hover:border-cyan-400 dark:hover:border-cyan-500 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10 flex flex-col h-full">

            {/* packageData Image Section */}
            <div className="relative w-full h-48 bg-slate-100 dark:bg-slate-800 overflow-hidden">
                {packageData.image ? (
                    <Image
                        src={packageData.image}
                        alt={packageData.title}
                        fill
                        sizes="(max-w-7xl) 33vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                ) : (
                    <div className="w-full h-full flex items-center justify-center text-slate-400 dark:text-slate-600 font-bold text-sm">
                        No Image Available
                    </div>
                )}

                {/* Category Badge overlay on image */}
                <div className="absolute top-3 left-3">
                    <span className="inline-block px-3 py-1 bg-white/95 dark:bg-slate-950/95 backdrop-blur-sm text-cyan-600 dark:text-cyan-400 text-xs font-bold rounded-full shadow-sm">
                        {packageData.serviceCategory}
                    </span>
                </div>
            </div>

            <div className="p-6 flex flex-col flex-1">
                {/* Title */}
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-2 line-clamp-2">
                    {packageData.title}
                </h3>

                {/* Description */}
                <p className="text-slate-600 dark:text-slate-400 text-sm font-medium mb-4 line-clamp-3 flex-1">
                    {packageData.description}
                </p>

                {/* Price & Delivery */}
                <div className="flex gap-4 mb-6 py-4 border-y border-slate-100 dark:border-slate-800">
                    <div className="flex-1">
                        <p className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wide mb-1">
                            Price
                        </p>
                        <p className="text-2xl font-black bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
                            ${packageData.price.toLocaleString()}
                        </p>
                    </div>
                    <div className="flex-1">
                        <p className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wide mb-1">
                            Delivery
                        </p>
                        <p className="text-sm font-bold text-slate-900 dark:text-white mt-1">
                            {packageData.deliveryTime}
                        </p>
                    </div>
                </div>

                {/* Details Button */}
                <Link
                    href={`/package/${packageData.id}`}
                    className="w-full px-4 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold rounded-lg hover:shadow-lg hover:shadow-cyan-500/30 transition-all duration-200 flex items-center justify-center gap-2 group/btn"
                >
                    View Details
                </Link>
            </div>
        </div>
    )
}

export default PackageCard