import { useEffect } from 'react'
import { HashLink } from 'react-router-hash-link'
import LogoImage from '../assets/logoImages/NXJP3034.PNG'


export const Navbar = ({ menuOpen, setMenuOpen }) => {
    useEffect(() => {
        document.body.style.overflow = menuOpen ? "hidden" : "";
    }, [menuOpen])
    return <nav className="fixed top-0 w-full z-100 bg-cream shadow-lg backdrop-blur-lg border-b border-white/10">
        <div className="max-w-5xl mx-auto px-4">
            <div className="flex justify-between items-center h-15">
                <HashLink smooth to="/#home"><img alt="logo image" src={LogoImage} className="w-1/10 rounded-full" /></HashLink>
                <div onClick={() => setMenuOpen((prev) => !prev)} className="w-7 h-5 relative cursor-pointer z-40 md:hidden">
                    &#9776;
                </div>
                <div className="hidden md:flex items-center space-x-8">
                    <HashLink smooth to="/#home" className="text-gray-600 hover:text-black transition-color">Home</HashLink>
                    <HashLink smooth to="/#about" className="text-gray-600 hover:text-black transition-color">About</HashLink>
                    <HashLink smooth to="/#product" className="text-gray-600 hover:text-black transition-color">Products</HashLink>
                    <a href="#" className="text-gray-600 hover:text-black transition-color">Order</a>
                    <HashLink smooth to="/#contact" className="text-gray-600 hover:text-black transition-color">Contact</HashLink>
                </div>
            </div>
        </div>
    </nav>
}
