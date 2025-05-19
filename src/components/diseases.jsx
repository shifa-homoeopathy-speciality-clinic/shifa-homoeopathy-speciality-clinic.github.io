import { diseasesData } from '../assets/data'
import about_clinic from '../assets/disease.jpg'
import DiseaseComponent from './diseaseComponent'

export default function Diseases() {
    return (
        <section id="diseases" class="py-16 scroll-mt-20">
            <div class="container mx-auto px-6">
                <div class="flex flex-col text-center mb-12">
                    <h2 class="text-3xl font-bold mb-4">Experienced in Diseases</h2>
                    <p class="text-gray-600 max-w-2xl mx-auto">We offer comprehensive homeopathic care for a wide range of
                        health concerns, with personalized treatment plans for each patient.</p>
                </div>

                <div class="flex flex-wrap -mx-4 justify-center">
                    {
                        diseasesData.map((item) => (
                            <DiseaseComponent disease={item.disease} smallDescription={item.smallDescription} largeDescription={item.largeDescription} />
                        ))
                    }

                    {/* <DiseaseComponent disease={"Allergy"} smallDescription={"Comprehensive assessment of your health history and current concerns to develop a personalized treatment plan."} />
                    <DiseaseComponent disease={"Allergy"} smallDescription={"Comprehensive assessment of your health history and current concerns to develop a personalized treatment plan."} />
                    <DiseaseComponent disease={"Allergy"} smallDescription={"Comprehensive assessment of your health history and current concerns to develop a personalized treatment plan."} />

                    <div class="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
                        <div class="service-card bg-white rounded-lg shadow-md overflow-hidden h-full">
                            <img src={about_clinic} alt="Chronic Disease Management"
                                class="w-full h-48 object-cover" />
                            <div class="p-6">
                                <h3 class="text-xl font-bold mb-3 text-gray-800">Asthma</h3>
                                <p class="text-gray-600">Long-term care for chronic conditions like allergies, asthma,
                                    arthritis, and digestive disorders.</p>
                            </div>
                        </div>
                    </div>

                    <div class="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
                        <div class="service-card bg-white rounded-lg shadow-md overflow-hidden h-full">
                            <img src={about_clinic} alt="Pediatric Care" class="w-full h-48 object-cover" />
                            <div class="p-6">
                                <h3 class="text-xl font-bold mb-3 text-gray-800">PCOD</h3>
                                <p class="text-gray-600">Gentle, effective treatments for children's health issues, from
                                    colic to behavioral concerns.</p>
                            </div>
                        </div>
                    </div>

                    <div class="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
                        <div class="service-card bg-white rounded-lg shadow-md overflow-hidden h-full">
                            <img src={about_clinic} alt="Women's Health" class="w-full h-48 object-cover" />
                            <div class="p-6">
                                <h3 class="text-xl font-bold mb-3 text-gray-800">Migrane</h3>
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
                                <h3 class="text-xl font-bold mb-3 text-gray-800">Rheumatoid Arthritis</h3>
                                <p class="text-gray-600">Homeopathic approaches to anxiety, depression, stress, and other
                                    emotional concerns.</p>
                            </div>
                        </div>
                    </div>

                    <div class="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
                        <div class="service-card bg-white rounded-lg shadow-md overflow-hidden h-full">
                            <img src={about_clinic} alt="Acute Care" class="w-full h-48 object-cover" />
                            <div class="p-6">
                                <h3 class="text-xl font-bold mb-3 text-gray-800">Irritable Bowel Syndrome (IBS)</h3>
                                <p class="text-gray-600">Relief from colds, flu, injuries, and other acute conditions with
                                    rapid-acting remedies.</p>
                            </div>
                        </div>
                    </div>

                    <div class="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
                        <div class="service-card bg-white rounded-lg shadow-md overflow-hidden h-full">
                            <img src={about_clinic} alt="Acute Care" class="w-full h-48 object-cover" />
                            <div class="p-6">
                                <h3 class="text-xl font-bold mb-3 text-gray-800">Sinusitis</h3>
                                <p class="text-gray-600">Relief from colds, flu, injuries, and other acute conditions with
                                    rapid-acting remedies.</p>
                            </div>
                        </div>
                    </div>

                    <div class="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
                        <div class="service-card bg-white rounded-lg shadow-md overflow-hidden h-full">
                            <img src={about_clinic} alt="Acute Care" class="w-full h-48 object-cover" />
                            <div class="p-6">
                                <h3 class="text-xl font-bold mb-3 text-gray-800">Tonsillitis</h3>
                                <p class="text-gray-600">Relief from colds, flu, injuries, and other acute conditions with
                                    rapid-acting remedies.</p>
                            </div>
                        </div>
                    </div>

                    <div class="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
                        <div class="service-card bg-white rounded-lg shadow-md overflow-hidden h-full">
                            <img src={about_clinic} alt="Acute Care" class="w-full h-48 object-cover" />
                            <div class="p-6">
                                <h3 class="text-xl font-bold mb-3 text-gray-800">Depression</h3>
                                <p class="text-gray-600">Relief from colds, flu, injuries, and other acute conditions with
                                    rapid-acting remedies.</p>
                            </div>
                        </div>
                    </div>

                    <div class="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
                        <div class="service-card bg-white rounded-lg shadow-md overflow-hidden h-full">
                            <img src={about_clinic} alt="Acute Care" class="w-full h-48 object-cover" />
                            <div class="p-6">
                                <h3 class="text-xl font-bold mb-3 text-gray-800">Anxiety</h3>
                                <p class="text-gray-600">Relief from colds, flu, injuries, and other acute conditions with
                                    rapid-acting remedies.</p>
                            </div>
                        </div>
                    </div>

                    <div class="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
                        <div class="service-card bg-white rounded-lg shadow-md overflow-hidden h-full">
                            <img src={about_clinic} alt="Acute Care" class="w-full h-48 object-cover" />
                            <div class="p-6">
                                <h3 class="text-xl font-bold mb-3 text-gray-800">Insomnia</h3>
                                <p class="text-gray-600">Relief from colds, flu, injuries, and other acute conditions with
                                    rapid-acting remedies.</p>
                            </div>
                        </div>
                    </div>

                    <div class="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
                        <div class="service-card bg-white rounded-lg shadow-md overflow-hidden h-full">
                            <img src={about_clinic} alt="Acute Care" class="w-full h-48 object-cover" />
                            <div class="p-6">
                                <h3 class="text-xl font-bold mb-3 text-gray-800">Thyroid Disorders</h3>
                                <p class="text-gray-600">Relief from colds, flu, injuries, and other acute conditions with
                                    rapid-acting remedies.</p>
                            </div>
                        </div>
                    </div>

                    <div class="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
                        <div class="service-card bg-white rounded-lg shadow-md overflow-hidden h-full">
                            <img src={about_clinic} alt="Acute Care" class="w-full h-48 object-cover" />
                            <div class="p-6">
                                <h3 class="text-xl font-bold mb-3 text-gray-800">Recurrent Urinary Tract Infections (UTI)</h3>
                                <p class="text-gray-600">Relief from colds, flu, injuries, and other acute conditions with
                                    rapid-acting remedies.</p>
                            </div>
                        </div>
                    </div>

                    <div class="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
                        <div class="service-card bg-white rounded-lg shadow-md overflow-hidden h-full">
                            <img src={about_clinic} alt="Acute Care" class="w-full h-48 object-cover" />
                            <div class="p-6">
                                <h3 class="text-xl font-bold mb-3 text-gray-800">Menstrual Disorders</h3>
                                <p class="text-gray-600">Relief from colds, flu, injuries, and other acute conditions with
                                    rapid-acting remedies.</p>
                            </div>
                        </div>
                    </div>

                    <div class="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
                        <div class="service-card bg-white rounded-lg shadow-md overflow-hidden h-full">
                            <img src={about_clinic} alt="Acute Care" class="w-full h-48 object-cover" />
                            <div class="p-6">
                                <h3 class="text-xl font-bold mb-3 text-gray-800">Gastritis</h3>
                                <p class="text-gray-600">Relief from colds, flu, injuries, and other acute conditions with
                                    rapid-acting remedies.</p>
                            </div>
                        </div>
                    </div>

                    <div class="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
                        <div class="service-card bg-white rounded-lg shadow-md overflow-hidden h-full">
                            <img src={about_clinic} alt="Acute Care" class="w-full h-48 object-cover" />
                            <div class="p-6">
                                <h3 class="text-xl font-bold mb-3 text-gray-800">Constipation</h3>
                                <p class="text-gray-600">Relief from colds, flu, injuries, and other acute conditions with
                                    rapid-acting remedies.</p>
                            </div>
                        </div>
                    </div>

                    <div class="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
                        <div class="service-card bg-white rounded-lg shadow-md overflow-hidden h-full">
                            <img src={about_clinic} alt="Acute Care" class="w-full h-48 object-cover" />
                            <div class="p-6">
                                <h3 class="text-xl font-bold mb-3 text-gray-800">Hyperacidity</h3>
                                <p class="text-gray-600">Relief from colds, flu, injuries, and other acute conditions with
                                    rapid-acting remedies.</p>
                            </div>
                        </div>
                    </div>

                    <div class="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
                        <div class="service-card bg-white rounded-lg shadow-md overflow-hidden h-full">
                            <img src={about_clinic} alt="Acute Care" class="w-full h-48 object-cover" />
                            <div class="p-6">
                                <h3 class="text-xl font-bold mb-3 text-gray-800">Sciatica</h3>
                                <p class="text-gray-600">Relief from colds, flu, injuries, and other acute conditions with
                                    rapid-acting remedies.</p>
                            </div>
                        </div>
                    </div>

                    <div class="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
                        <div class="service-card bg-white rounded-lg shadow-md overflow-hidden h-full">
                            <img src={about_clinic} alt="Acute Care" class="w-full h-48 object-cover" />
                            <div class="p-6">
                                <h3 class="text-xl font-bold mb-3 text-gray-800">Back Pain</h3>
                                <p class="text-gray-600">Relief from colds, flu, injuries, and other acute conditions with
                                    rapid-acting remedies.</p>
                            </div>
                        </div>
                    </div>

                    <div class="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
                        <div class="service-card bg-white rounded-lg shadow-md overflow-hidden h-full">
                            <img src={about_clinic} alt="Acute Care" class="w-full h-48 object-cover" />
                            <div class="p-6">
                                <h3 class="text-xl font-bold mb-3 text-gray-800">Cervical Spondylosis</h3>
                                <p class="text-gray-600">Relief from colds, flu, injuries, and other acute conditions with
                                    rapid-acting remedies.</p>
                            </div>
                        </div>
                    </div>

                    <div class="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
                        <div class="service-card bg-white rounded-lg shadow-md overflow-hidden h-full">
                            <img src={about_clinic} alt="Acute Care" class="w-full h-48 object-cover" />
                            <div class="p-6">
                                <h3 class="text-xl font-bold mb-3 text-gray-800">Kidney Stones</h3>
                                <p class="text-gray-600">Relief from colds, flu, injuries, and other acute conditions with
                                    rapid-acting remedies.</p>
                            </div>
                        </div>
                    </div>

                    <div class="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
                        <div class="service-card bg-white rounded-lg shadow-md overflow-hidden h-full">
                            <img src={about_clinic} alt="Acute Care" class="w-full h-48 object-cover" />
                            <div class="p-6">
                                <h3 class="text-xl font-bold mb-3 text-gray-800">Cold and Cough</h3>
                                <p class="text-gray-600">Relief from colds, flu, injuries, and other acute conditions with
                                    rapid-acting remedies.</p>
                            </div>
                        </div>
                    </div>

                    <div class="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
                        <div class="service-card bg-white rounded-lg shadow-md overflow-hidden h-full">
                            <img src={about_clinic} alt="Acute Care" class="w-full h-48 object-cover" />
                            <div class="p-6">
                                <h3 class="text-xl font-bold mb-3 text-gray-800">Bedwetting</h3>
                                <p class="text-gray-600">Relief from colds, flu, injuries, and other acute conditions with
                                    rapid-acting remedies.</p>
                            </div>
                        </div>
                    </div>

                    <div class="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
                        <div class="service-card bg-white rounded-lg shadow-md overflow-hidden h-full">
                            <img src={about_clinic} alt="Acute Care" class="w-full h-48 object-cover" />
                            <div class="p-6">
                                <h3 class="text-xl font-bold mb-3 text-gray-800">Mouth Ulcers</h3>
                                <p class="text-gray-600">Relief from colds, flu, injuries, and other acute conditions with
                                    rapid-acting remedies.</p>
                            </div>
                        </div>
                    </div>

                    <div class="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
                        <div class="service-card bg-white rounded-lg shadow-md overflow-hidden h-full">
                            <img src={about_clinic} alt="Acute Care" class="w-full h-48 object-cover" />
                            <div class="p-6">
                                <h3 class="text-xl font-bold mb-3 text-gray-800">Warts</h3>
                                <p class="text-gray-600">Relief from colds, flu, injuries, and other acute conditions with
                                    rapid-acting remedies.</p>
                            </div>
                        </div>
                    </div>

                    <div class="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
                        <div class="service-card bg-white rounded-lg shadow-md overflow-hidden h-full">
                            <img src={about_clinic} alt="Acute Care" class="w-full h-48 object-cover" />
                            <div class="p-6">
                                <h3 class="text-xl font-bold mb-3 text-gray-800">Motion Sickness</h3>
                                <p class="text-gray-600">Relief from colds, flu, injuries, and other acute conditions with
                                    rapid-acting remedies.</p>
                            </div>
                        </div>
                    </div>

                    <div class="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
                        <div class="service-card bg-white rounded-lg shadow-md overflow-hidden h-full">
                            <img src={about_clinic} alt="Acute Care" class="w-full h-48 object-cover" />
                            <div class="p-6">
                                <h3 class="text-xl font-bold mb-3 text-gray-800">Recurrent Fevers</h3>
                                <p class="text-gray-600">Relief from colds, flu, injuries, and other acute conditions with
                                    rapid-acting remedies.</p>
                            </div>
                        </div>
                    </div>

                    <div class="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
                        <div class="service-card bg-white rounded-lg shadow-md overflow-hidden h-full">
                            <img src={about_clinic} alt="Acute Care" class="w-full h-48 object-cover" />
                            <div class="p-6">
                                <h3 class="text-xl font-bold mb-3 text-gray-800">Anemia</h3>
                                <p class="text-gray-600">Relief from colds, flu, injuries, and other acute conditions with
                                    rapid-acting remedies.</p>
                            </div>
                        </div>
                    </div>

                    <div class="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
                        <div class="service-card bg-white rounded-lg shadow-md overflow-hidden h-full">
                            <img src={about_clinic} alt="Acute Care" class="w-full h-48 object-cover" />
                            <div class="p-6">
                                <h3 class="text-xl font-bold mb-3 text-gray-800">Menopausal Symptoms</h3>
                                <p class="text-gray-600">Relief from colds, flu, injuries, and other acute conditions with
                                    rapid-acting remedies.</p>
                            </div>
                        </div>
                    </div>

                    <div class="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
                        <div class="service-card bg-white rounded-lg shadow-md overflow-hidden h-full">
                            <img src={about_clinic} alt="Acute Care" class="w-full h-48 object-cover" />
                            <div class="p-6">
                                <h3 class="text-xl font-bold mb-3 text-gray-800">Lactation Issues</h3>
                                <p class="text-gray-600">Relief from colds, flu, injuries, and other acute conditions with
                                    rapid-acting remedies.</p>
                            </div>
                        </div>
                    </div>

                    <div class="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
                        <div class="service-card bg-white rounded-lg shadow-md overflow-hidden h-full">
                            <img src={about_clinic} alt="Acute Care" class="w-full h-48 object-cover" />
                            <div class="p-6">
                                <h3 class="text-xl font-bold mb-3 text-gray-800">Measles</h3>
                                <p class="text-gray-600">Relief from colds, flu, injuries, and other acute conditions with
                                    rapid-acting remedies.</p>
                            </div>
                        </div>
                    </div>

                    <div class="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
                        <div class="service-card bg-white rounded-lg shadow-md overflow-hidden h-full">
                            <img src={about_clinic} alt="Acute Care" class="w-full h-48 object-cover" />
                            <div class="p-6">
                                <h3 class="text-xl font-bold mb-3 text-gray-800">Chickenpox</h3>
                                <p class="text-gray-600">Relief from colds, flu, injuries, and other acute conditions with
                                    rapid-acting remedies.</p>
                            </div>
                        </div>
                    </div>

                    <div class="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
                        <div class="service-card bg-white rounded-lg shadow-md overflow-hidden h-full">
                            <img src={about_clinic} alt="Acute Care" class="w-full h-48 object-cover" />
                            <div class="p-6">
                                <h3 class="text-xl font-bold mb-3 text-gray-800">Eye Strain</h3>
                                <p class="text-gray-600">Relief from colds, flu, injuries, and other acute conditions with
                                    rapid-acting remedies.</p>
                            </div>
                        </div>
                    </div>

                    <div class="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
                        <div class="service-card bg-white rounded-lg shadow-md overflow-hidden h-full">
                            <img src={about_clinic} alt="Acute Care" class="w-full h-48 object-cover" />
                            <div class="p-6">
                                <h3 class="text-xl font-bold mb-3 text-gray-800">Styes</h3>
                                <p class="text-gray-600">Relief from colds, flu, injuries, and other acute conditions with
                                    rapid-acting remedies.</p>
                            </div>
                        </div>
                    </div>

                    <div class="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
                        <div class="service-card bg-white rounded-lg shadow-md overflow-hidden h-full">
                            <img src={about_clinic} alt="Acute Care" class="w-full h-48 object-cover" />
                            <div class="p-6">
                                <h3 class="text-xl font-bold mb-3 text-gray-800">Exam Stress / Performance Anxiety</h3>
                                <p class="text-gray-600">Relief from colds, flu, injuries, and other acute conditions with
                                    rapid-acting remedies.</p>
                            </div>
                        </div>
                    </div>

                    <div class="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
                        <div class="service-card bg-white rounded-lg shadow-md overflow-hidden h-full">
                            <img src={about_clinic} alt="Acute Care" class="w-full h-48 object-cover" />
                            <div class="p-6">
                                <h3 class="text-xl font-bold mb-3 text-gray-800">Sleep Disorders</h3>
                                <p class="text-gray-600">Relief from colds, flu, injuries, and other acute conditions with
                                    rapid-acting remedies.</p>
                            </div>
                        </div>
                    </div>

                    <div class="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
                        <div class="service-card bg-white rounded-lg shadow-md overflow-hidden h-full">
                            <img src={about_clinic} alt="Acute Care" class="w-full h-48 object-cover" />
                            <div class="p-6">
                                <h3 class="text-xl font-bold mb-3 text-gray-800">Depression due to Relationship Issues</h3>
                                <p class="text-gray-600">Relief from colds, flu, injuries, and other acute conditions with
                                    rapid-acting remedies.</p>
                            </div>
                        </div>
                    </div>

                    <div class="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
                        <div class="service-card bg-white rounded-lg shadow-md overflow-hidden h-full">
                            <img src={about_clinic} alt="Acute Care" class="w-full h-48 object-cover" />
                            <div class="p-6">
                                <h3 class="text-xl font-bold mb-3 text-gray-800">Grief and Emotional Trauma</h3>
                                <p class="text-gray-600">Relief from colds, flu, injuries, and other acute conditions with
                                    rapid-acting remedies.</p>
                            </div>
                        </div>
                    </div>

                    <div class="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
                        <div class="service-card bg-white rounded-lg shadow-md overflow-hidden h-full">
                            <img src={about_clinic} alt="Acute Care" class="w-full h-48 object-cover" />
                            <div class="p-6">
                                <h3 class="text-xl font-bold mb-3 text-gray-800">Post-Traumatic Stress Disorder (PTSD)</h3>
                                <p class="text-gray-600">Relief from colds, flu, injuries, and other acute conditions with
                                    rapid-acting remedies.</p>
                            </div>
                        </div>
                    </div>

                    <div class="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
                        <div class="service-card bg-white rounded-lg shadow-md overflow-hidden h-full">
                            <img src={about_clinic} alt="Acute Care" class="w-full h-48 object-cover" />
                            <div class="p-6">
                                <h3 class="text-xl font-bold mb-3 text-gray-800">Irritability and Mood Swings</h3>
                                <p class="text-gray-600">Relief from colds, flu, injuries, and other acute conditions with
                                    rapid-acting remedies.</p>
                            </div>
                        </div>
                    </div>

                    <div class="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
                        <div class="service-card bg-white rounded-lg shadow-md overflow-hidden h-full">
                            <img src={about_clinic} alt="Acute Care" class="w-full h-48 object-cover" />
                            <div class="p-6">
                                <h3 class="text-xl font-bold mb-3 text-gray-800">Post-Traumatic Ailments</h3>
                                <p class="text-gray-600">!IMPRTNT Homeopathy can help relieve long-standing pain, stiffness, or nerve damage resulting from old injuries or accidents—even if they occurred years ago—by stimulating the body's natural healing response.</p>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
        </section>
    )
}