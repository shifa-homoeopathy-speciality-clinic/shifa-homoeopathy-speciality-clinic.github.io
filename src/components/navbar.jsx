import logo from "../assets/logo.svg"
import logoText from "../assets/Logo Text.svg"
import hamburger from "../assets/hamburger.svg"
import home from "../assets/nav_1home.svg"
import about from "../assets/nav_2about.svg"
import diseases from "../assets/nav_3diseases.svg"
import features from "../assets/nav_4features.svg"
import contact from "../assets/nav_5contact.svg"
import whatsapp from "../assets/nav_6whatsapp.svg"
import { useEffect, useRef, useState } from "react"

let menuIsChangingState = false;

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false)
    const menuRef = useRef(null)

    function closeMenu() {
        setMenuOpen(false)
    }

    useEffect(() => {
        function handleClickOutside(event) {
            if (menuOpen) {
                if (!menuIsChangingState) {
                    console.log(menuOpen + " from click outside")
                    setMenuOpen(false)
                    menuIsChangingState = true;
                    setTimeout(() => {
                        menuIsChangingState = false;
                    }, 550);
                }
            }
        }

        document.addEventListener('mousedown', handleClickOutside)
        document.addEventListener('touchstart', handleClickOutside)

        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
            document.removeEventListener('touchstart', handleClickOutside)
        }
    })

    function menuClick() {
        console.log("menu click triggered")
        if (!menuIsChangingState) {
            console.log(menuOpen + " from menu click")
            setMenuOpen(!menuOpen)
            menuIsChangingState = true;
            setTimeout(() => {
                menuIsChangingState = false;
            }, 550);
        }
    }

    return (
        <nav class="bg-white py-4 shadow-md fixed top-0 w-full z-50 h-16 md:h-24">
            <div class="flex flex-row lg:flex-row items-center h-full w-full justify-around">
                <button onClick={() => menuClick()} className="lg:hidden top-8 left-5">
                    <img src={hamburger} alt="" className="h-8 md:h-8" />
                </button>
                <div class="flex items-center gap-[5%] justify-items-end w-full lg:w-auto place-content-end pr-[5vw] max-w-[80vw] lg:pr-0 md:place-content-center">
                    {/* <img src={logo} alt="Logo" className="h-10 md:h-12 pr-5" />
                    <img src={logoText} alt="Logo" className="h-8 md:h-10" /> */}
                    <img src={logo} alt="Logo" className="w-[4vh] md:h-12 md:w-auto" />
                    <img src={logoText} alt="Logo" className="w-[60vw] md:h-10 md:w-auto" />
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

            <div className={`${menuOpen ? "h-[255px]" : "h-0 !p-0"} overflow-hidden bg-green-50 flex flex-col justify-around mt-3 transition-[height] duration-500`}>
                <a onClick={closeMenu} href="#home" class="">
                    <div className="p-2 pl-5 border-t-2 border-green-500 bg-linear-to-br from-green-100 via-green-100 to-green-300 rounded-xl flex items-center gap-4">
                        <img src={home} alt="" className="h-4" />
                        Home
                    </div>
                </a>
                <a onClick={closeMenu} href="#diseases" class="">
                    <div className="p-2 pl-5 border-t-2 border-green-500 bg-linear-to-br from-green-100 via-green-100 to-green-300 rounded-xl flex items-center gap-4">
                        <img src={diseases} alt="" className="h-4" />
                        Diseases
                    </div>
                </a>
                <a onClick={closeMenu} href="#about" class="">
                    <div className="p-2 pl-5 border-t-2 border-green-500 bg-linear-to-br from-green-100 via-green-100 to-green-300 rounded-xl flex items-center gap-4">
                        <img src={about} alt="" className="h-4" />
                        About
                    </div>
                </a>
                <a onClick={closeMenu} href="#features" class="">
                    <div className="p-2 pl-5 border-t-2 border-green-500 bg-linear-to-br from-green-100 via-green-100 to-green-300 rounded-xl flex items-center gap-4">
                        <img src={features} alt="" className="h-4" />
                        Features
                    </div>
                </a>
                <a onClick={closeMenu} href="#contact" class="">
                    <div className="p-2 pl-5 border-t-2 border-green-500 bg-linear-to-br from-green-100 via-green-100 to-green-300 rounded-xl flex items-center gap-4">
                        <img src={contact} alt="" className="h-4" />
                        Contact
                    </div>
                </a>
                <a onClick={closeMenu} href="https://chat.whatsapp.com/IHEK5AOaBUUCku4MOJxUSu" class="">
                    <div className="p-2 pl-5 border-y-2 border-green-500 bg-linear-to-br from-green-100 via-green-100 to-green-300 rounded-xl flex items-center gap-4">
                        <img src={whatsapp} alt="" className="h-4" />
                        Join our WhatsApp group
                    </div>
                </a>
            </div>
        </nav>
    )
}