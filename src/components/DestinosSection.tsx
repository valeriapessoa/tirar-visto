"use client"

import Image from "next/image"
import DestinosHeader from "./DestinosHeader"

export default function DestinosSection() {
  const destinations = [
    {
      id: 1,
      name: "Bali, Indonésia",
      image: "/frame-1.png",
    },
    {
      id: 2,
      name: "Nova York, Estados Unidos",
      image: "/frame-2.png",
    },
    {
      id: 3,
      name: "Santorini, Grécia",
      image: "/frame-3.png",
    },
    {
      id: 4,
      name: "Paris, França",
      image: "/frame-4.png",
    },
    {
      id: 5,
      name: "Cidade do Cabo, África do Sul",
      image: "/frame-5.png",
    },
    {
      id: 6,
      name: "Mumbai, Índia",
      image: "/frame-6.png",
    },
  ]

  return (
    <section className="relative w-full bg-gray-50 py-20">

      {/* Section Header */}
      <DestinosHeader
        badge="Top Destinos"
        title="Destinos mais procurados"
        subtitle="Confira os destinos mais procurados por nossos clientes nos últimos meses, qual seria o seu novo destino?"
        buttonText="Conheça mais"
        buttonHref="#"
      />

      {/* Destinations Grid */}
      <div className="relative mx-auto max-w-7xl px-4 sm:px-8">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {destinations.map((destination) => {
            let aspectRatio = "aspect-[7/6]"
            let alignment = "self-end"

            if (destination.id === 2 || destination.id === 5) {
              aspectRatio = "aspect-[1/1]"
            }

            if (destination.id === 4 || destination.id === 6) {
              alignment = "self-start"
            }

            return (
              <div
                key={destination.id}
                className={`group relative cursor-pointer overflow-hidden rounded-3xl ${alignment}`}
              >
                <div className={`relative w-full ${aspectRatio} overflow-hidden`}>
                  <Image
                    src={destination.image || "/placeholder.svg"}
                    alt={destination.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <div className="absolute inset-0 pointer-events-none">
                  <div className="absolute bottom-6 left-1/2 -translate-x-1/2">
                    <div className="rounded-full bg-white/20 backdrop-blur-md px-4 py-2">
                      <h3 className="text-lg font-semibold text-white whitespace-nowrap">{destination.name}</h3>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
