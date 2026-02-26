import React, { useState } from 'react'
import Card from './components/Card'
import Header from './components/Header'

const projects = [
  {
    title: "Welcome to My Studio's Portfolio :)",
    span: "hi there, ",
    paragraph: "Welcome to my portfolio! I'm excited to share my projects and experiences with you. Feel free to explore and learn more about my work. If you have any questions or want to connect, don't hesitate to reach out!"
  },
  {
    title: "Scarlet's Studio Website",
    span: "Project 1: ",
    paragraph: "This project involved creating a visually appealing and user-friendly website for Scarlet's Studio, showcasing their portfolio and services. The website was built using React for the frontend, with a focus on responsive design and smooth user experience."
  },
    {
    title: "Lemonade AI Studio",
    span: "Project 2: ",
    paragraph: "This project was about developing an AI-powered platform called Lemonade AI Studio, which provides tools and resources for artists and creators to enhance their creative processes. The platform includes features such as AI-generated art, collaborative workspaces, and a marketplace for digital assets."
  },
    {
    title: " Reveal Soon...",
    span: "Project 3: ",
    paragraph: "Reveal Soon... This project is currently under development and will be unveiled in the near future. Stay tuned for updates and exciting new features that will be added to the portfolio!"
  },
]

function App() {
  const [index, setIndex] = useState(0)
  const current = projects[index]

  const handleNext = () => {
    if (index < projects.length - 1) {
      setIndex(index + 1)
    } else {
      setIndex(0)
    }
  }

  return (
    <div className="App min-h-screen bg-gray-100 flex flex-col items-center justify-center p-10 relative overflow-hidden">
      <Header />
      
      <div key={index} className="animate-project-card mt-20">
        <Card 
          width="w-[700px]"
          height="h-[400px]"
          titlesize="text-3xl"
          spanh2color="text-red-600"
          spanfont="font-black italic"
          h2txt={current.title} 
          spantxt={current.span} 
          h2font="font-medium"
          ptxt={current.paragraph}
          psize="text-sm"
          pcolor="text-gray-500" 
          pfont="font-medium"
          bgcolor="bg-white" 
          textcolor="text-slate-900" 
          taskbarcolor="bg-slate-100"
          nextAction={handleNext}
        />
      </div>
    </div>
  )
}

export default App
