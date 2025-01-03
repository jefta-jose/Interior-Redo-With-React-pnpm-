import AboutSection from "@/components/HomePageSections/AboutSection"
import CatalogueSection from "@/components/HomePageSections/CatalogueSection"
import CatalogueSwiperSection from "@/components/HomePageSections/CatalogueSwiperSection"
import CompanySection from "@/components/HomePageSections/CompanySection"
import ContactSection from "@/components/HomePageSections/ContactSection"
import HeroSection from "@/components/HomePageSections/HeroSection"

const Home = () => {
  return (
    <div>
      <HeroSection/>
      <CompanySection/>
      <AboutSection/>
      <CatalogueSection/>
      <CatalogueSwiperSection/>
      <ContactSection/>
    </div>
  )
}

export default Home