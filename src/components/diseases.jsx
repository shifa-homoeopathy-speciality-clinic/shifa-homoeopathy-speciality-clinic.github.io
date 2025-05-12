import about_clinic from '../assets/disease.jpg'

export default function Diseases() {
    return (
        <section id="services" class="py-16">
            <div class="container mx-auto px-6">
                <div class="flex flex-col text-center mb-12">
                    <h2 class="text-3xl font-bold mb-4">Specialised in Diseases</h2>
                    <p class="text-gray-600 max-w-2xl mx-auto">We offer comprehensive homeopathic care for a wide range of
                        health concerns, with personalized treatment plans for each patient.</p>
                </div>

                <div class="flex flex-wrap -mx-4">
                    <div class="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
                        <div class="service-card bg-white rounded-lg shadow-md overflow-hidden h-full">
                            <img src={about_clinic} alt="Consultation" class="w-full h-48 object-cover" />
                            <div class="p-6">
                                <h3 class="text-xl font-bold mb-3 text-gray-800">Homeopathic Consultation</h3>
                                <p class="text-gray-600">Comprehensive assessment of your health history and current
                                    concerns to develop a personalized treatment plan.</p>
                                <p className="text-green-800 underline">Learn More</p>
                            </div>
                        </div>
                    </div>

                    <div class="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
                        <div class="service-card bg-white rounded-lg shadow-md overflow-hidden h-full">
                            <img src={about_clinic} alt="Chronic Disease Management"
                                class="w-full h-48 object-cover" />
                            <div class="p-6">
                                <h3 class="text-xl font-bold mb-3 text-gray-800">Chronic Disease Management</h3>
                                <p class="text-gray-600">Long-term care for chronic conditions like allergies, asthma,
                                    arthritis, and digestive disorders.</p>
                            </div>
                        </div>
                    </div>

                    <div class="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
                        <div class="service-card bg-white rounded-lg shadow-md overflow-hidden h-full">
                            <img src={about_clinic} alt="Pediatric Care" class="w-full h-48 object-cover" />
                            <div class="p-6">
                                <h3 class="text-xl font-bold mb-3 text-gray-800">Pediatric Care</h3>
                                <p class="text-gray-600">Gentle, effective treatments for children's health issues, from
                                    colic to behavioral concerns.</p>
                            </div>
                        </div>
                    </div>

                    <div class="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
                        <div class="service-card bg-white rounded-lg shadow-md overflow-hidden h-full">
                            <img src={about_clinic} alt="Women's Health" class="w-full h-48 object-cover" />
                            <div class="p-6">
                                <h3 class="text-xl font-bold mb-3 text-gray-800">Women's Health</h3>
                                <p class="text-gray-600">Support for hormonal balance, reproductive health, pregnancy, and
                                    menopause-related concerns.</p>
                            </div>
                        </div>
                    </div>

                    <div class="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
                        <div class="service-card bg-white rounded-lg shadow-md overflow-hidden h-full">
                            <img src={about_clinic} alt="Mental Health Support"
                                class="w-full h-48 object-cover" />
                            <div class="p-6">
                                <h3 class="text-xl font-bold mb-3 text-gray-800">Mental Health Support</h3>
                                <p class="text-gray-600">Homeopathic approaches to anxiety, depression, stress, and other
                                    emotional concerns.</p>
                            </div>
                        </div>
                    </div>

                    <div class="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
                        <div class="service-card bg-white rounded-lg shadow-md overflow-hidden h-full">
                            <img src={about_clinic} alt="Acute Care" class="w-full h-48 object-cover" />
                            <div class="p-6">
                                <h3 class="text-xl font-bold mb-3 text-gray-800">Acute Care</h3>
                                <p class="text-gray-600">Relief from colds, flu, injuries, and other acute conditions with
                                    rapid-acting remedies.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}