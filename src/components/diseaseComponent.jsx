import { useState } from "react"
import DiseaseModal from "./diseaseModal";

export default function DiseaseComponent({ disease, smallDescription, largeDescription }) {
    const [isModalOpen, setModalOpen] = useState(false);

    return (
        <div class="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
            <div class={`${isModalOpen ? null : "service-card"} bg-green-50 rounded-lg shadow-md overflow-hidden h-full`}>
                {/* <img src={about_clinic} alt="Consultation" class="w-full h-48 object-cover" /> */}
                <button
                    onClick={() => setModalOpen(true)}
                    className=" text-black px-6 py-3 rounded"
                >
                    <div className="p-6">
                        <h3 class="text-xl font-bold mb-3 text-gray-800">{disease}</h3>
                        <p class="text-gray-600">{smallDescription}</p>
                        <p className="bg-green-700 text-white p-2 mt-2 rounded-3xl">More Details</p>
                    </div>
                </button>

                <DiseaseModal isOpen={isModalOpen} onClose={() => setModalOpen(false)}>
                    <div className="">
                        <h2 className="text-3xl font-bold mb-4">{disease}</h2>
                        <p className="text-lg text-gray-700 mb-6">
                            {largeDescription}
                        </p>
                        <button
                            onClick={() => setModalOpen(false)}
                            className="mt-4 px-6 py-2 bg-red-500 text-white rounded-2xl hover:bg-red-600"
                        >
                            Close
                        </button>
                    </div>
                </DiseaseModal>
            </div>
        </div>
    )
}