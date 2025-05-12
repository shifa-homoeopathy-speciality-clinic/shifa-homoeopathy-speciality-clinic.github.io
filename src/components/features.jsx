export default function Features() {
    return (
        <section id="features" class="bg-white py-16">
            <div class="container mx-auto px-6">
                <div class="flex flex-wrap">
                    <div class="w-full md:w-1/3 p-6 flex flex-col items-center">
                        <div class="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-4">
                            <i class="fas fa-heartbeat text-3xl text-green-600"></i>
                        </div>
                        <h3 class="text-xl font-semibold mb-3">Holistic Approach</h3>
                        <p class="text-gray-600 text-center">We treat the whole person, considering physical, mental, and
                            emotional aspects of your health.</p>
                    </div>
                    <div class="w-full md:w-1/3 p-6 flex flex-col items-center">
                        <div class="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-4">
                            <i class="fas fa-thumbs-up text-3xl text-green-600"></i>
                        </div>
                        <h3 class="text-xl font-semibold mb-3">Natural Remedies</h3>
                        <p class="text-gray-600 text-center">Our treatments use natural substances to stimulate the body's
                            own healing mechanisms.</p>
                    </div>
                    <div class="w-full md:w-1/3 p-6 flex flex-col items-center">
                        <div class="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-4">
                            <i class="fas fa-user-md text-3xl text-green-600"></i>
                        </div>
                        <h3 class="text-xl font-semibold mb-3">Expert Practitioners</h3>
                        <p class="text-gray-600 text-center">Our team consists of certified homeopaths with years of
                            clinical experience.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}