"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

function Testimonials() {
    const reviews = [
        {
            id: 1,
            name: "Alex Rivera",
            role: "Founder, Apex Digital",
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
            rating: 5,
            comment: "Working with this team was an absolute game-changer for our platform. They delivered a high-performance Next.js site that loaded instantly and boosted our conversion rate by 40% in the first month."
        },
        {
            id: 2,
            name: "Sarah Jenkins",
            role: "Product Manager, SaaSify",
            image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face",
            rating: 5,
            comment: "Their attention to detail and clean architecture code exceeded our expectations. Not only did they complete the project ahead of schedule, but the support post-launch was phenomenal."
        },
        {
            id: 3,
            name: "Marcus Chen",
            role: "CTO, FinTech Global",
            image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
            rating: 5,
            comment: "We needed a highly secure and scalable web application with zero compromise on speed. They built an optimized MERN stack solution that handles thousands of concurrent users flawlessly."
        },
        {
            id: 4,
            name: "Emily Watson",
            role: "Marketing Director, Horizon Media",
            image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
            rating: 5,
            comment: "The UI/UX transitions are incredibly smooth, and the Tailwind CSS styling is pixel-perfect across all screen sizes. Our clients consistently compliment the new layout and speed."
        }
    ];

    // Duplicating reviews to make the infinite horizontal loop seamless and smooth
    const duplicatedReviews = [...reviews, ...reviews];

    return (
        <section className="w-full py-10 overflow-hidden bg-white dark:bg-slate-950 text-slate-800 dark:text-slate-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Section Header */}
                <div className="flex flex-col items-center text-center space-y-4 mb-16">
                    <div className="flex items-center gap-2">
                        <span className="w-6 h-[2px] bg-cyan-500 rounded-full"></span>
                        <span className="text-xs font-bold uppercase tracking-wider text-cyan-600 dark:text-cyan-400">
                            Client Testimonials
                        </span>
                        <span className="w-6 h-[2px] bg-cyan-500 rounded-full"></span>
                    </div>

                    <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-slate-900 dark:text-white">
                        What our clients say
                    </h2>

                    <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-2xl leading-relaxed">
                        Don't just take our word for it — hear from the companies and founders we've helped scale online.
                    </p>
                </div>

            </div>

            {/* Infinite Horizontal Scrolling Slider Container */}
            <div className="relative w-full flex items-center overflow-hidden py-4 mask-gradient">
                {/* Faded edges effect for slicker visual styling */}
                <div className="absolute inset-y-0 left-0 w-16 sm:w-32 bg-linear-to-r from-white dark:from-slate-950 to-transparent z-10 pointer-events-none"></div>
                <div className="absolute inset-y-0 right-0 w-16 sm:w-32 bg-linear-to-l from-white dark:from-slate-950 to-transparent z-10 pointer-events-none"></div>

                <motion.div
                    className="flex gap-6 pr-6 flex-nowrap"
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{
                        ease: "linear",
                        duration: reviews.length > 3 ? reviews.length * 10 : 30, // Adjusted speed to make text easily readable
                        repeat: Infinity,
                    }}
                    whileHover={{ animationPlayState: "paused" }}
                    style={{ display: "flex", width: "max-content" }}
                >
                    {duplicatedReviews.map((review, index) => (
                        <div
                            key={`${review.id}-${index}`}
                            className="w-[350px] sm:w-[420px] shrink-0 p-8 rounded-3xl border border-slate-100 dark:border-slate-900 bg-slate-50/50 dark:bg-slate-900/40 backdrop-blur-xs flex flex-col justify-between space-y-6 transition-all duration-300 hover:border-cyan-500/30 dark:hover:border-cyan-500/20"
                        >
                            {/* Review Card Header */}
                            <div className="space-y-4">
                                <div className="flex justify-between items-center">
                                    <div className="flex gap-1">
                                        {[...Array(review.rating)].map((_, i) => (
                                            <Star key={i} className="w-4 h-4 fill-amber-500 text-amber-500" />
                                        ))}
                                    </div>
                                    <Quote className="w-8 h-8 text-cyan-500/10 dark:text-cyan-500/5 rotate-180" />
                                </div>

                                <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400 font-medium">
                                    "{review.comment}"
                                </p>
                            </div>

                            {/* Review Card Author Info */}
                            <div className="flex items-center gap-4 pt-4 border-t border-slate-100 dark:border-slate-900/60">
                                <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-cyan-500/20">
                                    <img
                                        src={review.image}
                                        alt={review.name}
                                        className="w-full h-full object-cover"
                                        loading="lazy"
                                    />
                                </div>
                                <div>
                                    <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                                        {review.name}
                                    </h4>
                                    <p className="text-xs text-slate-400 font-medium mt-0.5">
                                        {review.role}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}

export default Testimonials;