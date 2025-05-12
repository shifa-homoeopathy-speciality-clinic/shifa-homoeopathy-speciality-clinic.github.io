import navlogo from "../assets/navlogo.png"

export default function Navbar() {
    return (
        <nav class="bg-white py-4 shadow-md fixed w-full z-50 h-24">
            <div class="container mx-auto flex flex-col md:flex-row items-center justify-between px-6">
                <div class="flex items-center">
                    {/* <span class="text-2xl font-semibold text-green-600">
                        Shifa Homoeopathy Speciality Clinic
                    </span> */}
                    <img src={navlogo} alt="Logo" className="h-18" />
                </div>
                <div class="hidden md:flex space-x-8">
                    <a href="#home" class="text-green-600 hover:text-green-800 font-medium">Home</a>
                    <a href="#about" class="hover:text-green-600 font-medium">About</a>
                    <a href="#services" class="hover:text-green-600 font-medium">Services</a>
                    <a href="#testimonials" class="hover:text-green-600 font-medium">Testimonials</a>
                    <a href="#doctors" class="hover:text-green-600 font-medium">Our Doctors</a>
                    <a href="#contact" class="hover:text-green-600 font-medium">Contact</a>
                </div>
                <div class="md:hidden">
                    <button class="text-gray-500 hover:text-green-600 focus:outline-none">
                        <i class="fas fa-bars text-xl"></i>
                    </button>
                </div>
                <div class="hidden md:block">
                    <button
                        class="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out transform hover:scale-105">
                        Book Appointment
                    </button>
                </div>
            </div>
        </nav>
    )
}