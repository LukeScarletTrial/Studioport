import React from 'react'

function Header() {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 w-full h-20 bg-red-600 text-white px-10 shadow-lg flex items-center justify-between">
            <div className="flex items-center gap-3">
                <img 
                    src="https://i.ibb.co/1tdVfq3D/scarlet-s-Studios.png" 
                    alt="Logo" 
                    className="w-10 h-10 object-contain rounded-full bg-white p-1"
                />
                <span className="text-xl font-black tracking-tight uppercase">Scarlet's Studio</span>
            </div>

            <nav className='flex gap-2'>
                <a href="#projects" className="px-5 py-2 bg-red-500 hover:bg-red-800 rounded-full transition-colors font-semibold">Projects</a>
                <a href="#about" className="px-5 py-2 bg-red-500 hover:bg-red-800 rounded-full transition-colors font-semibold">About</a>
                <a href="#contact" className="px-5 py-2 bg-red-500 hover:bg-red-800 rounded-full transition-colors font-semibold">Contact</a>
            </nav>
        </header>
    )
}

export default Header
