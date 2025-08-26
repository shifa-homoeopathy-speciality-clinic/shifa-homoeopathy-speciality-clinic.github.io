import location from "../assets/location.svg"
import phone from "../assets/phone.svg"
import hours from "../assets/hours.svg"

export default function Contact() {
    return (
        <section id="contact" class="py-16 bg-gray-50 scroll-mt-20">
            <div class="container mx-auto px-6">
                <div class="flex flex-col md:flex-row">
                    <div class="md:w-1/2 mb-10 md:mb-0">
                        <h2 class="text-3xl font-bold mb-6">Contact Us</h2>
                        <p class="text-gray-600 mb-8">Have questions or ready to start your healing journey? Reach out to
                            schedule a consultation or learn more about our services.</p>

                        <div class="mb-6 flex items-start">
                            <div class="bg-green-200 p-1 rounded-full mr-4">
                                <img src={location} alt="" className="h-6" />
                            </div>
                            <div>
                                <h4 class="font-bold mb-1">Location</h4>
                                <p class="text-gray-600">Verumpulakkal: <a
                                    href="https://maps.app.goo.gl/WCwCYECn2Q3KfMs36"
                                    className="underline"
                                >
                                    Click to open in Google Maps
                                </a></p> 
                                {/* <br />
                                <p class="text-gray-600">Kadannamanna: <a
                                    href="https://maps.app.goo.gl/YNt5jZjoPE4qP6DM9"
                                    className="underline"
                                >
                                    Click to open in Google Maps
                                </a>
                                </p> */}
                            </div>
                        </div>

                        <div class="mb-6 flex items-start">
                            <div class="bg-green-200 p-1 rounded-full mr-4">
                                <img src={phone} alt="" className="h-6" />
                            </div>
                            <div>
                                <h4 class="font-bold mb-1">Phone and WhatsApp</h4>
                                <p class="text-gray-600">(+91) 8075-899-030</p>
                            </div>
                        </div>

                        <div class="mb-6 flex items-start">
                            <div class="bg-green-200 p-1 rounded-full mr-4">
                                <img src={hours} alt="" className="h-6" />
                            </div>
                            <div>
                                <h4 class="font-bold mb-1">Hours</h4>
                                <table className="text-gray-600">
                                    <tr>
                                        <td className="pr-4">Monday - Saturday:</td>
                                        <td>10:00 AM - 1:00 PM </td>
                                    </tr>
                                    <tr>
                                        <td></td>
                                        <td>4:30 PM - 6:30 PM</td>
                                    </tr>
                                    <tr>
                                        <td className="text-right pr-4">Sunday:</td>
                                        <td>Holiday</td>
                                    </tr>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}