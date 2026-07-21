'use client';

import { useState } from 'react';
import { X, Phone, Link as LinkIcon, ArrowUpRight } from 'lucide-react';

export default function OrderPackageModal({ packageId, packageTitle }) {
    const [isOpen, setIsOpen] = useState(false);
    const [emergencyPhone, setEmergencyPhone] = useState('');
    const [resourceLink, setResourceLink] = useState('');
    const [submitting, setSubmitting] = useState(false);

    const canSubmit = emergencyPhone.trim().length > 0 && resourceLink.trim().length > 0;

    const handleClose = () => {
        if (submitting) return;
        setIsOpen(false);
    };

    const handleConfirm = async () => {
        if (!canSubmit) return;
        setSubmitting(true);
        try {
            // TODO: replace with your real server action, e.g.
            // await createOrder({ packageId, emergencyPhone, resourceLink });
            await new Promise((resolve) => setTimeout(resolve, 600));
            console.log('Order confirmed', { packageId, emergencyPhone, resourceLink });
            setIsOpen(false);
            setEmergencyPhone('');
            setResourceLink('');
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <>
            <button
                onClick={() => setIsOpen(true)}
                className="group w-full flex items-center justify-center gap-2 py-4 px-6 rounded-full text-base font-semibold text-white bg-linear-to-r from-cyan-500 via-blue-600 to-cyan-500 bg-size-[200%_auto] bg-position-[0%_center] hover:bg-position-[100%_center] transition-all duration-500"
            >
                Order This Package
                <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>

            {isOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                    <div
                        className="absolute inset-0 bg-[#14181F]/70 backdrop-blur-sm"
                        onClick={handleClose}
                    />

                    <div className="relative w-full max-w-md bg-[#FAF8F4] rounded-[28px] p-8 sm:p-10 shadow-2xl">
                        <button
                            onClick={handleClose}
                            aria-label="Close"
                            className="absolute top-6 right-6 text-[#6B6459] hover:text-[#14181F] transition-colors"
                        >
                            <X className="w-5 h-5" />
                        </button>

                        <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#0E6E63] mb-3">
                            Confirm your order
                        </p>
                        <h3 className="text-2xl font-semibold text-[#14181F] leading-snug mb-1.5 pr-6">
                            {packageTitle}
                        </h3>
                        <p className="text-sm text-[#6B6459] mb-8">
                            Two details before we start the work.
                        </p>

                        <div className="space-y-6">
                            <div>
                                <label className="block text-xs font-semibold uppercase tracking-wide text-[#14181F] mb-2">
                                    Emergency phone number
                                </label>
                                <div className="flex items-center gap-2.5 border-b border-[#D8D4C8] focus-within:border-[#0E6E63] transition-colors">
                                    <Phone className="w-4 h-4 text-[#9A9488] shrink-0" />
                                    <input
                                        type="tel"
                                        value={emergencyPhone}
                                        onChange={(e) => setEmergencyPhone(e.target.value)}
                                        placeholder="+1 555 000 1234"
                                        className="w-full py-2.5 bg-transparent text-sm text-[#14181F] placeholder:text-[#A8A296] outline-none"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-xs font-semibold uppercase tracking-wide text-[#14181F] mb-2">
                                    Resource drive link
                                </label>
                                <div className="flex items-center gap-2.5 border-b border-[#D8D4C8] focus-within:border-[#0E6E63] transition-colors">
                                    <LinkIcon className="w-4 h-4 text-[#9A9488] shrink-0" />
                                    <input
                                        type="url"
                                        value={resourceLink}
                                        onChange={(e) => setResourceLink(e.target.value)}
                                        placeholder="https://drive.google.com/..."
                                        className="w-full py-2.5 bg-transparent text-sm text-[#14181F] placeholder:text-[#A8A296] outline-none"
                                    />
                                </div>
                            </div>
                        </div>

                        <button
                            onClick={handleConfirm}
                            disabled={!canSubmit || submitting}
                            className="w-full mt-9 py-3.5 rounded-full text-base font-semibold text-white bg-linear-to-r from-cyan-500 via-blue-600 to-cyan-500 bg-size-[200%_auto] bg-position-[0%_center] rounded-lg hover:bg-position-[100%_center] transition-all duration-500 disabled:cursor-not-allowed disabled:hover:bg-[#14181F] cursor-pointer"
                        >
                            {submitting ? 'Placing order…' : 'Confirm Order'}
                        </button>

                        <p className="text-center text-[11px] text-[#9A9488] mt-4">
                            We'll only use these to coordinate your delivery.
                        </p>
                    </div>
                </div>
            )}
        </>
    );
}