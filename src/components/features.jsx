import f_leaf from "../assets/features_1leaf.svg"
import f_seed from "../assets/features_2seedling.svg"
import f_bust from "../assets/features_3bust.svg"
import f_tick from "../assets/features_4tick.svg"
import f_baby from "../assets/features_5baby.svg"
import f_star from "../assets/features_6star.svg"
import f_hands from "../assets/features_7hands.svg"
import f_infinite from "../assets/features_8infinite.svg"

export default function Features() {
    return (
        <section id="features" class="bg-white py-16 scroll-mt-10">
            <div class="container mx-auto px-6">
                <div class="flex flex-wrap justify-center">
                    <div class="w-full md:w-1/3 p-6 flex flex-col items-center">
                        <div class="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-4">
                            {/* <span className="text-4xl">🌿</span> */}
                            <img src={f_leaf} alt="" className="h-10" />
                        </div>
                        <h3 class="text-xl font-semibold mb-3">Holistic Approach</h3>
                        <p class="text-gray-600 text-center">We treat the whole person, considering physical, mental, and
                            emotional aspects of your health.</p>
                    </div>
                    <div class="w-full md:w-1/3 p-6 flex flex-col items-center">
                        <div class="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-4">
                            <img src={f_seed} alt="" className="h-10" />
                        </div>
                        <h3 class="text-xl font-semibold mb-3">Natural Remedies</h3>
                        <p class="text-gray-600 text-center">Our treatments use natural substances to stimulate the body's
                            own healing mechanisms.</p>
                    </div>
                    <div class="w-full md:w-1/3 p-6 flex flex-col items-center">
                        <div class="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-4">
                            <img src={f_bust} alt="" className="h-10" />
                        </div>
                        <h3 class="text-xl font-semibold mb-3">Individualized Treatment</h3>
                        <p class="text-gray-600 text-center">Every person is unique, so we tailor remedies specifically to your symptoms, lifestyle, overall constitution, including mental and emotional states, ensuring personalized care.</p>
                    </div>
                    <div class="w-full md:w-1/3 p-6 flex flex-col items-center">
                        <div class="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-4">
                            <img src={f_tick} alt="" className="h-10" />
                        </div>
                        <h3 class="text-xl font-semibold mb-3">No Side Effects</h3>
                        <p class="text-gray-600 text-center">Homeopathic remedies are completely natural and non-toxic, offering healing without any side effects or adverse reactions.</p>
                    </div>
                    <div class="w-full md:w-1/3 p-6 flex flex-col items-center">
                        <div class="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-4">
                            <img src={f_baby} alt="" className="h-10" />
                        </div>
                        <h3 class="text-xl font-semibold mb-3">Safe for All Ages</h3>
                        <p class="text-gray-600 text-center">Homeopathic treatments are safe for infants, pregnant women, and the elderly, offering a non-toxic option for all age groups.</p>
                    </div>
                    <div class="w-full md:w-1/3 p-6 flex flex-col items-center">
                        <div class="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-4">
                            <img src={f_star} alt="" className="h-10" />
                        </div>
                        <h3 class="text-xl font-semibold mb-3">Stimulates Self-Healing</h3>
                        <p class="text-gray-600 text-center">Homeopathy works by activating the body’s innate healing response, encouraging natural recovery and balance.</p>
                    </div>
                    <div class="w-full md:w-1/3 p-6 flex flex-col items-center">
                        <div class="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-4">
                            <img src={f_hands} alt="" className="h-10" />
                        </div>
                        <h3 class="text-xl font-semibold mb-3">Non-Invasive Treatment</h3>
                        <p class="text-gray-600 text-center">Homeopathic remedies are administered without injections or surgical procedures, making treatment gentle and stress-free.</p>
                    </div>
                    <div class="w-full md:w-1/3 p-6 flex flex-col items-center">
                        <div class="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-4">
                            <img src={f_infinite} alt="" className="h-10" />
                        </div>
                        <h3 class="text-xl font-semibold mb-3">Long-Lasting Results</h3>
                        <p class="text-gray-600 text-center">By addressing the root cause of illness rather than just symptoms, homeopathy often provides deeper and longer-lasting relief.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}