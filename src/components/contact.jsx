export default function Contact() {
    return (
        <section id="contact" class="py-16 bg-gray-50">
            <div class="container mx-auto px-6">
                <div class="flex flex-col md:flex-row">
                    <div class="md:w-1/2 mb-10 md:mb-0">
                        <h2 class="text-3xl font-bold mb-6">Contact Us</h2>
                        <p class="text-gray-600 mb-8">Have questions or ready to start your healing journey? Reach out to
                            schedule a consultation or learn more about our services.</p>

                        <div class="mb-6 flex items-start">
                            <div class="bg-green-100 p-3 rounded-full mr-4">
                                <i class="fas fa-map-marker-alt text-green-600"></i>
                            </div>
                            <div>
                                <h4 class="font-bold mb-1">Location</h4>
                                <p class="text-gray-600">123 Healing Way, Wellness District<br />Greenville, CA 90210</p>
                            </div>
                        </div>

                        <div class="mb-6 flex items-start">
                            <div class="bg-green-100 p-3 rounded-full mr-4">
                                <i class="fas fa-phone-alt text-green-600"></i>
                            </div>
                            <div>
                                <h4 class="font-bold mb-1">Phone</h4>
                                <p class="text-gray-600">(555) 123-4567</p>
                            </div>
                        </div>

                        <div class="mb-6 flex items-start">
                            <div class="bg-green-100 p-3 rounded-full mr-4">
                                <i class="fas fa-envelope text-green-600"></i>
                            </div>
                            <div>
                                <h4 class="font-bold mb-1">Email</h4>
                                <p class="text-gray-600">info@harmonyhomeopathic.com</p>
                            </div>
                        </div>

                        <div class="mb-6 flex items-start">
                            <div class="bg-green-100 p-3 rounded-full mr-4">
                                <i class="fas fa-clock text-green-600"></i>
                            </div>
                            <div>
                                <h4 class="font-bold mb-1">Hours</h4>
                                <p class="text-gray-600">
                                    Monday - Friday: 9am - 6pm<br />
                                    Saturday: 10am - 2pm<br />
                                    Sunday: Closed
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}