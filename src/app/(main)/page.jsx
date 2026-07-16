import AboutAgency from "@/components/AboutAgency"
import Benner from "@/components/Benner"
import ContactSection from "@/components/ContactSection"
import HowItWorks from "@/components/HowItWorks"
import Testimonials from "@/components/Testimonials"
import WhyChooseUs from "@/components/WhyChooseUs"

function Home() {
    return (
        <div>
            <Benner />
            <AboutAgency />
            <WhyChooseUs />
            <HowItWorks />
            <Testimonials />
            <ContactSection />
        </div>
    )
}

export default Home