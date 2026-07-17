import React from 'react'
import ServiceHeading from './ServiceHeading'
import OurServices from './OurServices'

function Services() {
    return (
        <section className="px-4 md:px-8 lg:px-16 xl:px-24 2xl:px-32 py-30 dark:bg-slate-950">
            <ServiceHeading />
            <OurServices />
        </section>
    )
}

export default Services