"use client"
import Navigation from "@/components/navigation"
import HeroSection from "@/components/hero-section"
import PlatformOverview from "@/components/platform-overview"
import PipelineSection from "@/components/pipeline-section"
import ModulesSection from "@/components/modules-section"
import AIAssistantSection from "@/components/ai-assistant-section"
import SampleProjects from "@/components/sample-projects"
import TeamSection from "@/components/team-section"
import FundingSection from "@/components/funding-section"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <HeroSection />
        <PlatformOverview />
        <PipelineSection />
        <ModulesSection />
        <AIAssistantSection />
        <SampleProjects />
        <TeamSection />
        <FundingSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}
