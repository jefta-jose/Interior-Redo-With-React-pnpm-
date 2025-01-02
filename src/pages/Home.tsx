import AboutSection from "@/components/PageSections/AboutSection"
import CatalogueSection from "@/components/PageSections/CatalogueSection"
import CompanySection from "@/components/PageSections/CompanySection"
import HeroSection from "@/components/PageSections/HeroSection"

const Home = () => {
  return (
    <div>
      <HeroSection/>
      <CompanySection/>
      <AboutSection/>
      <CatalogueSection/>
    </div>
  )
}

export default Home