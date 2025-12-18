import logo from "../assets/logo.svg"
import logoText from "../assets/Logo Text.svg"

export default function Footer() {
    return (

        <footer class="bg-green-100 text-gray-500 pt-16 pb-8">
            <div class="container mx-auto px-6">
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-20 mb-12">
                    <div>
                        <a href="#" class="text-2xl font-bold text-white flex items-center mb-6 max-w-[100vw] gap-[4%]">
                            <img src={logo} alt="." className="w-[12%]" />
                            <img src={logoText} alt="" className="w-[80%]" />
                        </a>
                        <p class="text-black mb-6">
                            Providing gentle, effective natural healing through classical homeopathy since 2020.
                        </p>
                    </div>

                    <div>
                        <h4 class="text-xl font-bold mb-6">Quick Links</h4>
                        <ul class="space-y-3">
                            <li><a href="#home" class="text-gray-500 hover:text-black transition-colors">Home</a></li>
                            <li><a href="#about" class="text-gray-500 hover:text-black transition-colors">About the Clinic</a></li>
                            <li><a href="#diseases" class="text-gray-500 hover:text-black transition-colors">Diseases Experienced In</a>
                            </li>
                            <li><a href="https://chat.whatsapp.com/IHEK5AOaBUUCku4MOJxUSu"
                                class="text-gray-500 hover:text-black transition-colors">Join our WhatsApp Group</a></li>
                        </ul>
                    </div>
                </div>

                <div class="border-t border-gray-400 pt-8">
                    <div class="flex flex-col md:flex-row justify-between items-center">
                        <p class="text-gray-500 mb-4 md:mb-0">
                            &copy; 2025 Shifa Homoeopathy Speciality Clinic. All rights reserved.
                        </p>
                        {/* <div class="flex space-x-6">
                            <a href="#" class="text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
                            <a href="#" class="text-gray-400 hover:text-white transition-colors">Terms of Service</a>
                            <a href="#" class="text-gray-400 hover:text-white transition-colors">Sitemap</a>
                        </div> */}
                    </div>
                </div>
            </div>
        </footer>
    )
}