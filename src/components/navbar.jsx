// import navlogo from "../assets/navlogo.png"
import logo from "../assets/logo.svg"
import logoText from "../assets/Logo Text.svg"
import hamburger from "../assets/hamburger.svg"
import home from "../assets/nav_1home.svg"
import about from "../assets/nav_2about.svg"
import diseases from "../assets/nav_3diseases.svg"
import features from "../assets/nav_4features.svg"
import contact from "../assets/nav_5contact.svg"
import whatsapp from "../assets/nav_6whatsapp.svg"
import { useState } from "react"

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false)

    function closeMenu() {
        setMenuOpen(false)
    }

    return (
        <nav class="bg-white py-4 shadow-md fixed top-0 w-full z-50 h-24">
            <div class="flex flex-row lg:flex-row items-center h-full w-full justify-around">
                <button onClick={() => setMenuOpen(!menuOpen)} className="lg:hidden absolute top-8 left-5">
                    <img src={hamburger} alt="" className="h-8 md:h-8" />
                </button>
                <div class="flex items-center">
                    <img src={logo} alt="Logo" className="h-10 md:h-12 pr-5" />
                    <img src={logoText} alt="Logo" className="h-8 md:h-10" />
                </div>
                <div class="hidden lg:flex space-x-8">
                    <a href="#home" class="text-green-600 hover:text-green-800 font-medium">Home</a>
                    <a href="#about" class="hover:text-green-600 font-medium">About</a>
                    <a href="#diseases" class="hover:text-green-600 font-medium">Diseases</a>
                    <a href="#features" class="hover:text-green-600 font-medium">Features</a>
                    <a href="#contact" class="hover:text-green-600 font-medium">Contact</a>
                </div>
                <div class="hidden lg:block">
                    <a
                        href="https://chat.whatsapp.com/IHEK5AOaBUUCku4MOJxUSu"
                        class="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out transform hover:scale-105">
                        Join our WhatsApp group
                    </a>
                </div>
            </div>

            <div className={`${menuOpen ? "h-70" : "h-0 !p-0"} overflow-hidden bg-green-100 flex flex-col justify-around mt-3 transition-[height] duration-500`}>
                <div className="p-2 pl-4 flex items-center gap-4">
                    <img src={home} alt="" className="h-4" />
                    <a onClick={closeMenu} href="#home" class="">Home</a>
                </div>
                <div className="p-2 pl-4 border-t-2 border-green-300 flex items-center gap-4">
                    <img src={diseases} alt="" className="h-4" />
                    <a onClick={closeMenu} href="#diseases" class="">Diseases</a>
                </div>
                <div className="p-2 pl-4 border-t-2 border-green-300 flex items-center gap-4">
                    <img src={about} alt="" className="h-4" />
                    <a onClick={closeMenu} href="#about" class="">About</a>
                </div>
                <div className="p-2 pl-4 border-t-2 border-green-300 flex items-center gap-4">
                    <img src={features} alt="" className="h-4" />
                    <a onClick={closeMenu} href="#features" class="">Features</a>
                </div>
                <div className="p-2 pl-4 border-t-2 border-green-300 flex items-center gap-4">
                    <img src={contact} alt="" className="h-4" />
                    <a onClick={closeMenu} href="#contact" class="">Contact</a>
                </div>
                <div className="p-2 pl-4 border-t-2 border-green-300 flex items-center gap-4">
                    <img src={whatsapp} alt="" className="h-4" />
                    <a onClick={closeMenu} href="https://chat.whatsapp.com/IHEK5AOaBUUCku4MOJxUSu" class="">Join our WhatsApp group</a>
                </div>
            </div>
        </nav>
    )
}