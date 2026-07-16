import React from 'react'
import WebTechnologies from './WebTechnologies'

function Home() {
    return (
        <section className="flex flex-col md:flex-row items-center justify-between gap-10 md:gap-0 px-4 md:px-8 lg:px-16 xl:px-24 2xl:px-32 py-8 lg:py-30 dark:bg-slate-950">
            <WebTechnologies />
        </section>
    )
}

export default Home