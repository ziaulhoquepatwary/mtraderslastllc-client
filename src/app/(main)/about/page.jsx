import React from 'react'
import AboutMission from './AboutMission'
import AboutUs from './AboutUs'

function About() {
    return (
        <section className="px-4 md:px-8 lg:px-16 xl:px-24 2xl:px-32 py-25 lg:py-30 dark:bg-slate-950">
            <AboutMission />
            <AboutUs />
        </section>
    )
}

export default About