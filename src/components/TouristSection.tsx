"use client"

import React from "react"
import Image from "next/image"
import { Plus } from 'lucide-react'

export default function TouristSection() {
  const [interviewOpen, setInterviewOpen] = React.useState(false)
  const [documentsOpen, setDocumentsOpen] = React.useState(false)

  return (
    <section className="w-full bg-gray-50 py-12 px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header Button */}
        <div className="mb-8">
          <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-medium py-2 px-6 rounded-full text-sm">
            Veja como funciona
          </button>
        </div>

        {/* First Row - Title and Description */}
        <div className="grid grid-cols-2 gap-16 mb-12">
          {/* Left Column - Title */}
          <div>
            <h1 className="text-5xl font-bold text-black leading-tight">
              Sua tranquilidade
              <br />
              não tem preço!
            </h1>
          </div>

          {/* Right Column - Description */}
          <div className="pt-4">
            <p className="text-gray-500 text-sm leading-relaxed">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </p>
          </div>
        </div>

        {/* Second Row - Image and Process Steps */}
        <div className="grid grid-cols-2 gap-16">
          {/* Left Column - Image */}
          <div>
            <div className="relative w-full h-80 rounded-lg overflow-hidden">
              <Image
                src="/family-airport.png"
                alt="Família feliz no aeroporto com passaportes"
                fill
                className="object-cover"
                sizes="50vw"
                priority
              />
            </div>
          </div>

          {/* Right Column - Process Steps */}
          <div className="pt-4">
            {/* Etapa Inicial */}
            <div className="pb-8">
              <h2 className="text-2xl font-bold text-black mb-3">Etapa Inicial</h2>
              <p className="text-gray-500 text-sm leading-relaxed">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              </p>
            </div>
            
            {/* Divider Line */}
            <hr className="border-t border-gray-200 mb-8" />

            {/* Processo de Entrevista */}
            <div className="pb-8">
              <h2 className="text-2xl font-bold text-black mb-3">Processo de Entrevista</h2>
              <button
                className="flex items-center gap-2 text-gray-500 hover:text-gray-700 transition-colors text-sm"
                onClick={() => setInterviewOpen(!interviewOpen)}
              >
                <Plus className={`h-4 w-4 transition-transform ${interviewOpen ? "rotate-45" : ""}`} />
                <span>Leia mais</span>
              </button>
              {interviewOpen && (
                <div className="mt-3 text-gray-500 text-sm leading-relaxed">
                  <p>
                    Detalhes sobre o processo de entrevista serão exibidos aqui. Este conteúdo inclui informações
                    importantes sobre como preparar-se para a entrevista e quais documentos são necessários.
                  </p>
                </div>
              )}
            </div>
            
            {/* Divider Line */}
            <hr className="border-t border-gray-200 mb-8" />

            {/* Entrega de Documentos */}
            <div>
              <h2 className="text-2xl font-bold text-black mb-3">Entrega de Documentos</h2>
              <button
                className="flex items-center gap-2 text-gray-500 hover:text-gray-700 transition-colors text-sm"
                onClick={() => setDocumentsOpen(!documentsOpen)}
              >
                <Plus className={`h-4 w-4 transition-transform ${documentsOpen ? "rotate-45" : ""}`} />
                <span>Leia mais</span>
              </button>
              {documentsOpen && (
                <div className="mt-3 text-gray-500 text-sm leading-relaxed">
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
