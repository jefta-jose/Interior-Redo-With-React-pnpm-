import Logo from "./Logo"
import MobileNav from "./MobileNav"
import Navbar from "./Navbar"
import ThemeToggler from "./ThemeToggler"
import { useEffect , useState } from "react"
import { useLocation } from "react-router-dom"

const Header = () => {
  const location = useLocation();
  const path = location.pathname;

  const [header, setHeader] = useState(false);

  useEffect(() => {
      const scrollYPos = window.addEventListener('scroll', () => {
          window.scrollY > 50 ? setHeader(true) : setHeader(false);
      });

      //remove Events
      return () => window.removeEventListener('scroll', scrollYPos);
  });


  return (
    <header
    className={`${header? 'py-4 bg-tertiary shadow-lg dark:bg-accent': 'py-6 dark:bg-transparent'}
              sticky top-0 z-30 transition-all
              ${path === '/' && 'bg-[#ffff]'}
    `}
    >
      <div className="container mx-auto md:px-5" >
        <div className="flex justify-between items-center" >
          {/**Logo */}
          <Logo/>
          <div className="flex items-center gap-6">
            {/**Nav Section */}
            <Navbar
              containerStyles="hidden xl:flex gap-x-8 items-center "
              linkStyles="relative hover:text-primary transition-all font-semibold"
              underLineStyles="absolute left-0 top-full h-[2px] bg-primary w-full"
            />

            {/**Theme Toggler */}
            <ThemeToggler/>

            {/**Mobile Nav */}
            <div className="xl:hidden">
              <MobileNav/>
            </div>

          </div>
        </div>
      </div>
    </header>
  )
}

export default Header