import { HashLink } from 'react-router-hash-link'




export const MobileMenu = ({ menuOpen, setMenuOpen }) => {

    return (
        <div className={`fixed top-0 left-0 w-full bg-[rgba(255,245,204,0.9)] z-40 flex flex-col items-center justify-center transition-all duration-300 z-200 ease-in-out ${menuOpen ? "h-screen opacity-100 pointer-events-auto" : "h-0 opacity-0 pointer-events-none"}`}>
            <button className="absolute top-4 right-6 text-black text-3xl focus:outline-none cursor-pointer" onClick={() => setMenuOpen((prev) => !prev)}>
                &times;
            </button>

            <div className="flex flex-col bg-[#fffdd0] p-2 absolute top-12 right-8">
                <HashLink smooth to="/#home" onClick={() => setMenuOpen((prev) => !prev)} className={`text-#3E2C23 hover:text-black hover:underline hover:decoration-orange-600 hover:decoration-1  transition transition-color text-2xl font-semibold   ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}>Home</HashLink>
                <HashLink smooth to="/#about" onClick={() => setMenuOpen((prev) => !prev)} className={`text-#3E2C23 hover:text-black hover:underline hover:decoration-orange-600 hover:decoration-1 transition transition-color text-2xl font-semibold   ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}>About</HashLink>
                <HashLink smooth to="/#product" onClick={() => setMenuOpen((prev) => !prev)} className={`text-#3E2C23 hover:text-black hover:underline hover:decoration-orange-600 hover:decoration-1  transition transition-color text-2xl font-semibold   ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}>Products</HashLink>
                <a href="#" onClick={() => setMenuOpen((prev) => !prev)} className={`text-#3E2C23 hover:text-black hover:underline hover:decoration-orange-600 hover:decoration-1  transition transition-color text-2xl font-semibold   ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}>Order</a>
                <HashLink smooth to="/#contact" onClick={() => setMenuOpen((prev) => !prev)} className={`text-#3E2C23 hover:text-black hover:underline hover:decoration-orange-600 hover:decoration-1  transition transition-color text-2xl font-semibold   ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}>Contact</HashLink>
            </div>

        </div>
    )
}