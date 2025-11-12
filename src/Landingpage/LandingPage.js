import React from 'react'
import HeroSection from './Herosection'
import BodySection from './BodySection'
import ServicesSection from './ServicesSection'
import AppointmentSection from './AppointmentSection'
import FeedbackSection from './FeedbackSection'
const LandingPage = () => {
    return (
        <div>
            <HeroSection />
            <BodySection />
            <ServicesSection />
            <AppointmentSection />
            <FeedbackSection />
        </div>
    )
}

export default LandingPage
