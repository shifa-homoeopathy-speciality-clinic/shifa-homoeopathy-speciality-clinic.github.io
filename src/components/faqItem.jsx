import { useState } from "react"
import { ChevronDown } from "lucide-react"

export default function FaqItem({ question, answer }) {
    const [isOpen, setIsOpen] = useState(false)

    function toggle() {
        setIsOpen(!isOpen)
    }

    return (
        <div class="mb-8 bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden">
            <button class="faq-toggle w-full flex justify-between items-center p-6 focus:outline-none text-left" onClick={toggle}>
                <h3 class="text-xl font-semibold">{question}</h3>
                <ChevronDown
                    className={`text-green-700 transition-transform duration-300 ${isOpen ? "rotate-180" : "rotate-none"}`}
                />
            </button>
            <div className={`overflow-hidden transition-all duration-500 ${isOpen ? "opacity-100 max-h-96" : "opacity-0 max-h-0" }`}>
                <div class="px-6 pb-6">
                    <p class="text-gray-600">
                        {answer}
                    </p>
                </div>
            </div>
        </div>
    )
}