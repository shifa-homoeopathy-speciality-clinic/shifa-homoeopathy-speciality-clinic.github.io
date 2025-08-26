import FaqItem from "./faqItem"

export default function Faq() {

    const qa = [
        {
            question: "What is homeopathy and how does it work? ",
            answer: `Homeopathy is a natural system of medicine that uses highly diluted substances to stimulate
                                the body's own healing ability. It works on the principle of "like cures like" – that a
                                substance that causes symptoms in a healthy person can treat similar symptoms in a sick
                                person when prepared as a homeopathic remedy. Homeopathic remedies are prepared through a
                                specific process of dilution and succussion (vigorous shaking) that enhances their healing
                                properties while removing potential toxicity.`},
        {
            question: "Is homeopathy safe? ",
            answer: `Homeopathy is generally considered very safe. The remedies are prepared at such high
                                dilutions that they contain minimal to no molecules of the original substance, making them
                                non-toxic and suitable for people of all ages, including infants, pregnant women, and
                                elderly individuals.` },
        {
            question: "How long does homeopathic treatment take to work? ",
            answer: `The timeline for improvement varies based on the condition being treated, its severity, and
                                how long you've had it. Acute conditions like colds or injuries may respond within hours or
                                days. Chronic conditions that have been present for years typically take longer to resolve
                                and may require several months of treatment. However, many patients report feeling some
                                improvement in their overall wellbeing soon after starting treatment, even if the specific
                                condition takes longer to resolve completely.` },
        {
            question: "What conditions can homeopathy treat? ",
            answer: `Homeopathy can address a wide range of acute and chronic conditions. It's particularly
                                effective for allergies, digestive disorders, hormonal imbalances, autoimmune conditions,
                                skin issues, anxiety, depression, and recurring infections. Rather than focusing solely on
                                disease labels, homeopathy treats the individual person, taking into account their unique
                                symptom pattern, constitution, and overall health picture.` },
    ]

    return (
        <section id="faq" class="py-20">
            <div class="container mx-auto px-6">
                <div class="text-center max-w-3xl mx-auto mb-16">
                    <span class="text-primary font-semibold mb-4 block uppercase tracking-wider">Have Doubts?</span>
                    <h2 class="text-3xl md:text-4xl font-bold mb-6">Frequently Asked Questions</h2>
                    <p class="text-gray-600">
                        Find answers to common questions about homeopathy and our approach to treatment.
                    </p>
                </div>


                <div class="max-w-4xl mx-auto">
                    {
                        qa.map(item => {
                            return (
                                <FaqItem question={item.question} answer={item.answer}></FaqItem>
                            )
                        })
                    }

                </div>

                <div class="mt-10 text-center">
                    <a href="https://wa.me/+918075899030"
                        class="inline-block bg-white border border-primary text-primary hover:bg-green-100 hover:text-green-900 font-medium py-3 px-8 rounded-full transition-colors">
                        Have More Questions? Contact Us
                    </a>
                </div>
            </div>
        </section>
    )
}