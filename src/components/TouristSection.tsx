"use client"

import React from "react"
import Image from "next/image"
import { Plus } from "lucide-react"

export default function TouristSection() {
  const [interviewOpen, setInterviewOpen] = React.useState(false)
  const [documentsOpen, setDocumentsOpen] = React.useState(false)

  return (
    <section className="w-full bg-gray-50 py-8 px-4 sm:py-12 sm:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header Button */}
        <div className="mb-6 sm:mb-8">
          <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-medium py-2 px-6 rounded-full text-sm">
            Veja como funciona
          </button>
        </div>

        {/* First Row - Title (smaller) and Description (larger) */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 md:gap-16 mb-8 md:mb-12">
          {/* Left Column - Title (2/5 of width - smaller) */}
          <div className="md:col-span-2">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black leading-tight">
              Sua tranquilidade
              <br />
              não tem preço!
            </h1>
          </div>

          {/* Right Column - Description (3/5 of width - larger) */}
          <div className="md:col-span-3 flex items-center">
            <p className="text-gray-500 text-sm leading-relaxed">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </p>
          </div>
        </div>

        {/* Second Row - Image and Process Steps (aligned heights) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-start">
          {/* Left Column - Image */}
          <div className="order-1 md:order-none">
            <div className="relative w-full h-64 sm:h-72 md:h-80 rounded-lg overflow-hidden">
              <Image
                src="/family-airport.png"
                alt="Família feliz no aeroporto com passaportes"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
          </div>

          {/* Right Column - Process Steps (with top padding like in layout) */}
          <div className="order-2 md:order-none pt-4 md:pt-6 h-64 sm:h-72 md:h-80 flex flex-col justify-between">
            {/* Etapa Inicial */}
            <div className="flex-1">
              <h2 className="text-xl sm:text-2xl font-bold text-black mb-2 md:mb-3">Etapa Inicial</h2>
              <p className="text-gray-500 text-sm leading-relaxed">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              </p>
            </div>

            {/* Divider Line - Thicker */}
            <hr className="border-t-2 border-gray-200 my-4" />

            {/* Processo de Entrevista */}
            <div className="flex-1">
              <h2 className="text-xl sm:text-2xl font-bold text-black mb-2 md:mb-3">Processo de Entrevista</h2>
              <button
                className="flex items-center gap-2 text-gray-500 hover:text-gray-700 transition-colors text-sm py-1"
                onClick={() => setInterviewOpen(!interviewOpen)}
                aria-expanded={interviewOpen}
                aria-controls="interview-content"
              >
                <Plus className={`h-4 w-4 transition-transform ${interviewOpen ? "rotate-45" : ""}`} />
                <span>Leia mais</span>
              </button>
              {interviewOpen && (
                <div id="interview-content" className="mt-3 text-gray-500 text-sm leading-relaxed">
                  <p>
                    Detalhes sobre o processo de entrevista serão exibidos aqui. Este conteúdo inclui informações
                    importantes sobre como preparar-se para a entrevista e quais documentos são necessários.
                  </p>
                </div>
              )}
            </div>

            {/* Divider Line - Thicker */}
            <hr className="border-t-2 border-gray-200 my-4" />

            {/* Entrega de Documentos */}
            <div className="flex-1">
              <h2 className="text-xl sm:text-2xl font-bold text-black mb-2 md:mb-3">Entrega de Documentos</h2>
              <button
                className="flex items-center gap-2 text-gray-500 hover:text-gray-700 transition-colors text-sm py-1"
                onClick={() => setDocumentsOpen(!documentsOpen)}
                aria-expanded={documentsOpen}
                aria-controls="documents-content"
              >
                <Plus className={`h-4 w-4 transition-transform ${documentsOpen ? "rotate-45" : ""}`} />
                <span>Leia mais</span>
              </button>
              {documentsOpen && (
                <div id="documents-content" className="mt-3 text-gray-500 text-sm leading-relaxed">
                  <p>
                    Informações sobre a entrega de documentos, incluindo prazos, locais de entrega e procedimentos
                    necessários para completar o processo.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
