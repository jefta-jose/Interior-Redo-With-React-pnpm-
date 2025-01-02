import { Sheet , SheetContent, SheetTrigger } from "./ui/sheet"
import Navbar from "./Navbar"
import { AlignJustify } from "lucide-react"
import Logo from "./Logo"


const MobileNav = () => {
  return (
    <Sheet>
        <SheetTrigger asChild>
            <AlignJustify className="cursor-pointer"/>
        </SheetTrigger>

        <SheetContent>
            <div className="h-full py-8 ">
                <div className="flex flex-col items-center gap-y-12">
                    <Logo/>
                    <Navbar  
                        containerStyles="flex flex-col gap-6 items-center"
                        linkStyles="text:1xl font-semibold"
                    />
                </div>
            </div>
        </SheetContent>
    </Sheet>
  )
}

export default MobileNav