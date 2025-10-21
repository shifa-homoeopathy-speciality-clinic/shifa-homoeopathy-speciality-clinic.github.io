export default function Hero() {
    return (
        <section id="home" class="pt-24 hero-pattern">
            <div class="container mx-auto px-6 py-16 flex flex-col md:flex-row items-center justify-center">
                <div class="md:w-1/2 flex flex-col items-start">
                    <h1 class="text-4xl md:text-5xl font-bold leading-tight mb-6 text-center">A Complete Solution for your Health Problems</h1>
                    <div className="bg-green-100 py-6 border border-red-700">
                        <ul class="ml-10">
                            <li className="class-2xl md:text-4xl font-bold w-full list-disc">
                                Homoeopathic Physician
                            </li>
                            <li className="class-2xl md:text-4xl font-bold w-full list-disc">
                                Certified ACCESS BAR practitioner
                                <a class="text-sm italic font-normal">(Read More)</a>
                            </li>
                            <li className="class-2xl md:text-4xl font-bold w-full list-disc">
                                Certified ACCESS FACELIFT practitioner
                                <a class="text-sm italic font-normal">(Read More)</a>
                            </li>
                            <li className="class-2xl md:text-4xl font-bold w-full list-disc">
                                EFT practitioner
                                <a class="text-sm italic font-normal">(Read More)</a>
                            </li>
                        </ul>
                    </div>
                    <p class="text-xl mb-8 text-gray-600 text-center">Discover the gentle, effective, complete approach to wellness with our
                        personalized homeopathic treatments.</p>
                    <div class="flex flex-col sm:flex-row w-full justify-around">
                        <a href="#features"
                            class="bg-green-600 hover:bg-green-700 text-white font-bold text-center py-3 px-6 rounded-full mb-4 sm:mb-0 sm:mr-4 transition duration-300 ease-in-out transform hover:scale-105">
                            Know our methods
                        </a>
                        <a
                            href="#contact"
                            class="bg-transparent hover:bg-green-50 text-green-600 font-semibold py-3 px-6 border border-green-500 rounded-full transition duration-300 ease-in-out text-center">
                            Contact Us
                        </a>
                    </div>
                </div>
                {/* <div class="md:w-1/2 mt-10 md:mt-0">
                    <img src="/api/placeholder/600/450" alt="Homeopathic Medicine" class="rounded-lg shadow-xl" />
                </div> */}
            </div>
        </section>
    )
}