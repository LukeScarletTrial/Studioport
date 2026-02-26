import React from 'react'
import { ArrowRight } from "lucide-react"

function Card({ 
    h2txt, spantxt, ptxt, pcolor, bgcolor, textcolor, taskbarcolor, 
    spanh2color, width, height, psize, titlesize, spanfont, h2font, pfont, nextAction 
}) {
    return (
        <div className={`card shadow-2xl rounded-2xl overflow-hidden transition-all duration-500 hover:shadow-[0_20px_50px_rgba(0,0,0,0.15)] hover:-translate-y-1 ${bgcolor} ${width} ${height}`}>
            <div className={`flex items-center gap-1.5 px-4 h-10 ${taskbarcolor}`}>
                <div className='w-3 h-3 rounded-full bg-red-500'></div>
                <div className='w-3 h-3 rounded-full bg-yellow-400'></div>
                <div className='w-3 h-3 rounded-full bg-green-500'></div>
            </div>
            
            <div className="p-10">
                <h2 className={`${titlesize} ${textcolor}`}>
                    <span className={`${spanh2color} ${spanfont}`}>{spantxt}</span>
                    <span className={h2font}>{h2txt}</span>
                </h2>
                <p className={`mt-6 ${pcolor} ${psize} ${pfont} leading-relaxed`}>{ptxt}</p>
                
                <button 
                    onClick={nextAction}
                    className="mt-10 flex items-center gap-2 px-8 py-3 bg-red-600 text-white rounded-full hover:bg-red-700 active:scale-95 transition-all duration-200 shadow-lg font-bold"
                >
                    Next Project 
                    <ArrowRight className="w-5 h-5" />
                </button>
            </div>
        </div>
    )
}

export default Card
