"use client"
import { motion } from "framer-motion"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { useState } from "react"

const PacotesSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const pacotes = [
    {
      id: 1,
      title: "Passaporte",
      tags: ["Basic", "Premium"],
      image: "/passaporte.png",
      atendimento: "On-line",
      tempo: "45 dias",
      preco: "R$ 890,00",
    },
    {
      id: 2,
      title: "Passaporte + Visto",
      tags: ["Basic", "Premium"],
      image: "/passaporte-visto.png",
      atendimento: "On-line + Presencial",
      tempo: "25 dias",
      preco: "R$ 1.290,00",
    },
    {
      id: 3,
      title: "Consultoria Completa",
      tags: ["Basic", "Premium"],
      image: "/consultoria.png",
      atendimento: "Presencial Completo",
      tempo: "10 dias",
      preco: "R$ 1.890,00",
    },
    {
      id: 4,
      title: "Visto Americano",
      tags: ["Basic", "Premium"],
      image: "/passaporte.png",
      atendimento: "Presencial",
      tempo: "15 dias",
      preco: "R$ 1.590,00",
    },
    {
      id: 5,
      title: "Visto Europeu",
      tags: ["Basic", "Premium"],
      image: "/passaporte.png",
      atendimento: "On-line + Presencial",
      tempo: "20 dias",
      preco: "R$ 1.390,00",
    },
    {
      id: 6,
      title: "Renovação Express",
      tags: ["Basic", "Premium"],
      image: "/passaporte.png",
      atendimento: "On-line",
      tempo: "7 dias",
      preco: "R$ 690,00",
    },
    {
      id: 7,
      title: "Visto Canadense",
      tags: ["Basic", "Premium"],
      image: "/passaporte-visto.png",
      atendimento: "Presencial",
      tempo: "30 dias",
      preco: "R$ 1.790,00",
    },
    {
      id: 8,
      title: "Assessoria Jurídica",
      tags: ["Basic", "Premium"],
      image: "/passaporte-visto.png",
      atendimento: "Presencial Completo",
      tempo: "5 dias",
      preco: "R$ 2.290,00",
    },
    {
      id: 9,
      title: "Pacote Família",
      tags: ["Basic", "Premium"],
      image: "/passaporte-visto.png",
      atendimento: "On-line + Presencial",
      tempo: "35 dias",
      preco: "R$ 3.890,00",
    },
  ]

  const cardsPerSlide = 3
  const totalSlides = Math.ceil(pacotes.length / cardsPerSlide)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides)
  }

  const getCurrentCards = () => {
    const startIndex = currentSlide * cardsPerSlide
    return pacotes.slice(startIndex, startIndex + cardsPerSlide)
  }

  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-12">
          <div>
            <span className="inline-block bg-yellow-400 text-black text-base font-semibold px-4 py-2 rounded-full mb-4">
              Pacotes
            </span>
            <h2 className="text-5xl lg:text-6xl font-bold text-black">Confira nossos pacotes</h2>
          </div>
          <div className="flex space-x-3">
            <button
              onClick={prevSlide}
              className="w-12 h-12 rounded-full border-2 border-gray-300 flex items-center justify-center text-gray-400 hover:border-gray-400 transition-colors disabled:opacity-50"
              disabled={currentSlide === 0}
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextSlide}
              className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center text-white hover:bg-gray-700 transition-colors disabled:opacity-50"
              disabled={currentSlide === totalSlides - 1}
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {getCurrentCards().map((pacote, index) => (
            <motion.div
              key={`${pacote.id}-${currentSlide}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden"
            >
              {/* Image - with border and spacing */}
              <div className="p-4">
                <div className="h-72 relative w-full rounded-2xl overflow-hidden border border-gray-200">
                  <Image
                    src={pacote.image || "/placeholder.svg"}
                    alt={pacote.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Tags */}
                <div className="flex space-x-3 mb-6">
                  <button className="px-3 py-1 border-2 border-gray-900 text-gray-900 text-sm font-medium rounded-full">
                    Basic
                  </button>
                  <button className="px-3 py-1 border border-gray-300 text-gray-600 text-sm font-medium rounded-full">
                    Premium
                  </button>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-black mb-6">{pacote.title}</h3>

                {/* Two Column Details */}
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div>
                    <p className="text-sm font-medium text-black mb-1">Atendimento</p>
                    <p className="text-sm text-gray-600">{pacote.atendimento}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-black mb-1">{pacote.id === 3 ? "Duration" : "Tempo"}</p>
                    <p className="text-sm text-gray-600">{pacote.tempo}</p>
                  </div>
                </div>

                {/* Divider Line */}
                <div className="border-t border-gray-200 pt-6">
                  {/* Price and Button */}
                  <div className="flex justify-between items-end">
                    <div>
                      <p className="text-sm text-gray-500 mb-1">A partir de</p>
                      <p className="text-2xl font-bold text-black">{pacote.preco}</p>
                    </div>
                    <button className="bg-gray-900 text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-gray-800 transition-colors">
                      Contratar
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PacotesSection
