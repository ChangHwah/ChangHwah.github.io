export default function CallButton () {
    return (
        <a
            href="tel:1234567890"
            className="fixed bottom-6 right-6 z-50 bg-green-600 text-white p-4 rounded-full shadow-lg md:hidden"
            aria-label="Call Grey Techs"
            >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h2l3.6 7.59-1.35 2.45A1 1 0 008 17h12v-2H8.42a.25.25 0 01-.23-.14l.03-.06L9.1 13h7.45a1 1 0 00.95-.68L21 4H6" />
            </svg>
        </a>
    )
};