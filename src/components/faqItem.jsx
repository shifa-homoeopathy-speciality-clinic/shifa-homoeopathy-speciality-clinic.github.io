import { useState } from "react"

export default function FaqItem({ question, answer }) {
    const [isOpen, setIsOpen] = useState(false)

    function toggle() {
        setIsOpen(!isOpen)
    }

    return (
        <div class="mb-8 bg-white rounded-xl shadow-md overflow-hidden">
            <button class="faq-toggle w-full flex justify-between items-center p-6 focus:outline-none" onClick={toggle}>
                <h3 class="text-xl font-bold">{question}</h3>
                <i class="fas fa-chevron-down text-primary transition-transform transform"></i>
            </button>
            {isOpen &&
                <div class="faq-content px-6 pb-6">
                    <p class="text-gray-600">
                        {answer}
                    </p>
                </div>
            }
        </div>
    )
}