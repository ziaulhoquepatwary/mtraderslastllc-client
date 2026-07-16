import ContactSection from '@/components/ContactSection'
import React from 'react'

function Contact() {
    return (
        <section className="flex flex-col md:flex-row items-center justify-between gap-10 md:gap-0 px-4 md:px-8 lg:px-16 xl:px-24 2xl:px-32 py-15 dark:bg-slate-950">
            <ContactSection />
        </section>
    )
}

export default Contact