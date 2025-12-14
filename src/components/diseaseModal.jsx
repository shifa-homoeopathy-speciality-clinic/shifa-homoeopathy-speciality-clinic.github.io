import React, { useEffect } from "react";

const DiseaseModal = ({ isOpen, onClose, children }) => {
    // Close modal on ESC key press
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === "Escape") onClose();
        };

        const handlePopState = () => {
            onClose();
        }


        if (isOpen) {
            document.addEventListener("keydown", handleKeyDown);
            window.addEventListener("popstate", handlePopState);
            history.pushState(null, document.title, location.href);
            document.body.style.overflow = 'hidden';
            const scrollContainer = document.getElementById('modal-scroll-container')
            if (scrollContainer) {
                scrollContainer.scrollTop = 0
            }
        }

        return () => {
            document.removeEventListener("keydown", handleKeyDown);
            window.removeEventListener("popstate", handlePopState);
            document.body.style.overflow = 'unset';
        };
    }, [isOpen, onClose]);

    // if (!isOpen) return null;

    return (
        <div
            // className={`fixed inset-0 w-screen z-50 flex items-center justify-center bg-black bg-opacity-50 transition-opacity duration-500 ease-in-out ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"} `}
            className={`fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 transition-all duration-700
                ${isOpen
                    ? "w-screen opacity-100 pointer-events-auto"
                    : "invisible opacity-0 pointer-events-none"
                }`}
            onClick={onClose}
        >
            <div
                className="bg-white w-full h-full p-6 md:p-12 relative shadow-xl rounded-none md:rounded-lg transition-transform transform scale-100 flex flex-col"
                onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
            >
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-600 hover:text-black text-4xl z-10"
                >
                    &times;
                </button>

                {/* Modal Content */}
                <div id="modal-scroll-container" className="w-full flex-1 overflow-y-auto flex text-center"
                    style={{ scrollbarWidth: "none" }}>
                    <div className="p-0.5 m-auto">
                        {children}
                    </div>
                </div>

            </div>
        </div>
    );
};

export default DiseaseModal;
