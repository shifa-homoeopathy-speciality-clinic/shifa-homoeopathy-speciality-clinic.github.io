import about_clinic from '../assets/about-clinic.webp'

export default function About() {
    return (
        <section id="about" class="py-16 bg-gray-50 scroll-mt-20">
            <div class="container mx-auto px-6">
                <div class="flex flex-col md:flex-row">
                    <div class="md:w-1/2 mb-10 md:mb-0">
                        <img src={about_clinic} alt="About Our Clinic" class="rounded-lg shadow-lg" />
                    </div>
                    <div class="md:w-1/2 md:pl-12 flex flex-col justify-center">
                        <h2 class="text-3xl font-bold mb-6 text-gray-800">About Shifa Homeopathic Speciality Clinic</h2>
                        <p class="text-gray-600 mb-6 leading-relaxed">
                            Founded in 2020, Shifa Homeopathic Speciality Clinic has been at the forefront of providing gentle,
                            effective homeopathic care. Our mission is to help patients achieve optimal health through
                            individualized homeopathic treatments that address the root cause of illness.
                        </p>
                        <p class="text-gray-600 mb-6 leading-relaxed">
                            We believe in the body's innate ability to heal itself when given the right support. Our
                            approach combines classical homeopathy with modern medical knowledge to provide comprehensive
                            care for a wide range of acute and chronic conditions.
                        </p>
                        <div class="flex items-center">
                            <span class="bg-green-100 text-green-800 font-semibold px-4 py-2 rounded-full mr-4">4+ Years
                                Experience</span>
                            <span class="bg-green-100 text-green-800 font-semibold px-4 py-2 rounded-full">4000+ Happy
                                Patients</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}