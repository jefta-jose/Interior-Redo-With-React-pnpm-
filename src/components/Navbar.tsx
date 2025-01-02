import { useLocation , Link } from "react-router-dom"
import {motion} from 'framer-motion'


// define the type for the link
type LinkType = {
    path:string,
    name:string
}
const links : LinkType[] = [
    { path: '/', name: 'home' },
    { path: '/about', name: 'about' },
    { path: '/gallery', name: 'gallery' },
    { path: '/projects', name: 'projects' },
    { path: '/contact', name: 'contact' },
];

// define the types for the stylings
type NavbarProps = {
    containerStyles: string;
    linkStyles: string;
    underLineStyles: string;
  };

const Navbar : React.FC<NavbarProps> = ({containerStyles , linkStyles , underLineStyles }) => {
    const location = useLocation();
    const path = location.pathname;


  return (
    <nav className={`${containerStyles}`}>
        {
            links.map((link , index)=>{
                return(
                <Link to={link.path} className={`uppercase ${linkStyles}`} key={index} >
                        {link.path === path && (
                            <motion.span
                            initial={{ y: '-100%' }}
                            animate={{ y: 0 }}
                            transition={{ type: 'tween' }}
                            layoutId='underline'
                            className={`${underLineStyles}`} 
                            />
                        )}
                    {link.name}
                </Link>
                )
            })
        }
    </nav>
  )
}

export default Navbar