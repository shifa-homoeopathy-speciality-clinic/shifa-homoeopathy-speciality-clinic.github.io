export default function Footer() {
    return (

        <footer class="bg-gray-900 text-white pt-16 pb-8">
            <div class="container mx-auto px-6">
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
                    <div>
                        <a href="#" class="text-2xl font-bold text-white flex items-center mb-6">
                            <i class="fas fa-seedling mr-3 text-3xl"></i>
                            <span>Vitalis<span class="font-light">Homeopathy</span></span>
                        </a>
                        <p class="text-gray-400 mb-6">
                            Providing gentle, effective natural healing through classical homeopathy since 2008.
                        </p>
                        <div class="flex space-x-4">
                            <a href="#" class="text-gray-400 hover:text-white transition-colors">
                                <i class="fab fa-facebook-f"></i>
                            </a>
                            <a href="#" class="text-gray-400 hover:text-white transition-colors">
                                <i class="fab fa-instagram"></i>
                            </a>
                            <a href="#" class="text-gray-400 hover:text-white transition-colors">
                                <i class="fab fa-twitter"></i>
                            </a>
                            <a href="#" class="text-gray-400 hover:text-white transition-colors">
                                <i class="fab fa-linkedin-in"></i>
                            </a>
                        </div>
                    </div>

                    <div>
                        <h4 class="text-xl font-bold mb-6">Quick Links</h4>
                        <ul class="space-y-3">
                            <li><a href="#home" class="text-gray-400 hover:text-white transition-colors">Home</a></li>
                            <li><a href="#about" class="text-gray-400 hover:text-white transition-colors">About Us</a></li>
                            <li><a href="#services" class="text-gray-400 hover:text-white transition-colors">Services</a>
                            </li>
                            <li><a href="#treatments"
                                class="text-gray-400 hover:text-white transition-colors">Treatments</a></li>
                            <li><a href="#practitioners" class="text-gray-400 hover:text-white transition-colors">Our
                                Team</a></li>
                            <li><a href="#testimonials"
                                class="text-gray-400 hover:text-white transition-colors">Testimonials</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 class="text-xl font-bold mb-6">Our Services</h4>
                        <ul class="space-y-3">
                            <li><a href="#" class="text-gray-400 hover:text-white transition-colors">Initial
                                Consultation</a></li>
                            <li><a href="#" class="text-gray-400 hover:text-white transition-colors">Chronic Disease
                                Care</a></li>
                            <li><a href="#" class="text-gray-400 hover:text-white transition-colors">Pediatric
                                Homeopathy</a></li>
                            <li><a href="#" class="text-gray-400 hover:text-white transition-colors">Women's Health</a></li>
                            <li><a href="#" class="text-gray-400 hover:text-white transition-colors">Mental Health
                                Support</a></li>
                            <li><a href="#" class="text-gray-400 hover:text-white transition-colors">Allergies &
                                Sensitivities</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 class="text-xl font-bold mb-6">Working Hours</h4>
                        <ul class="space-y-3">
                            <li class="flex justify-between">
                                <span class="text-gray-400">Monday - Friday:</span>
                                <span class="text-white">9:00 AM - 6:00 PM</span>
                            </li>
                            <li class="flex justify-between">
                                <span class="text-gray-400">Saturday:</span>
                                <span class="text-white">10:00 AM - 4:00 PM</span>
                            </li>
                            <li class="flex justify-between">
                                <span class="text-gray-400">Sunday:</span>
                                <span class="text-white">Closed</span>
                            </li>
                        </ul>
                        <div class="mt-6">
                            <a href="#appointment"
                                class="bg-primary hover:bg-opacity-90 text-white font-medium py-2 px-6 rounded-full transition-colors inline-block">
                                Book an Appointment
                            </a>
                        </div>
                    </div>
                </div>

                <div class="border-t border-gray-800 pt-8">
                    <div class="flex flex-col md:flex-row justify-between items-center">
                        <p class="text-gray-400 mb-4 md:mb-0">
                            &copy; 2025 Shifa Homoeopathy. All rights reserved.
                        </p>
                        <div class="flex space-x-6">
                            <a href="#" class="text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
                            <a href="#" class="text-gray-400 hover:text-white transition-colors">Terms of Service</a>
                            <a href="#" class="text-gray-400 hover:text-white transition-colors">Sitemap</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}