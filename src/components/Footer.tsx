import Link from "next/link"
import Image from "next/image"

export default function Footer() {
  return (
    <footer className="bg-white px-4 sm:px-6 lg:px-4 py-8 sm:py-12 lg:py-16">
      <div className="max-w-[95%] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-12 lg:mb-16">
          <div className="space-y-4 lg:space-y-6">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Está com alguma
              <br />
              dúvida?
            </h2>
            <p className="text-gray-600 text-base lg:text-lg">
              Entre em contato através do nosso canal direto ao cliente
              <br className="hidden sm:block" />
              através do botão abaixo
            </p>
            <button className="bg-[#1B2543] text-white px-6 lg:px-8 py-3 lg:py-4 rounded-full font-medium hover:bg-opacity-90 transition-colors text-sm lg:text-base">
              Central de Atendimento
            </button>
          </div>

          <div className="space-y-1 lg:pt-24 mt-8 lg:mt-0">
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-normal text-gray-900">Receba novidades</h3>
            <div className="relative border-b border-gray-400 pb-1">
              <Image
                src="/arrow-up.png"
                alt="Seta para cima"
                width={100}
                height={100}
                className="absolute right-0 bottom-0 w-11 h-11 lg:w-12 lg:h-12"
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-12 lg:mb-16">
          <div className="lg:pt-16 xl:pt-20 order-2 lg:order-1">
            <p className="text-gray-900 font-medium mb-4 lg:mb-6 text-sm lg:text-base">Siga em nossa redes:</p>
            <div className="flex flex-wrap gap-3 lg:gap-4">
              <Link
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-gray-300 px-4 lg:px-6 py-2 lg:py-3 rounded-full text-gray-700 hover:bg-gray-100 transition-colors text-sm lg:text-base font-medium"
              >
                Instagram
              </Link>
              <Link
                href="https://www.x.com"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-gray-300 px-4 lg:px-6 py-2 lg:py-3 rounded-full text-gray-700 hover:bg-gray-100 transition-colors text-sm lg:text-base font-medium"
              >
                X
              </Link>
              <Link
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-gray-300 px-4 lg:px-6 py-2 lg:py-3 rounded-full text-gray-700 hover:bg-gray-100 transition-colors text-sm lg:text-base font-medium"
              >
                Facebook
              </Link>
              <Link
                href="https://www.youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-gray-300 px-4 lg:px-6 py-2 lg:py-3 rounded-full text-gray-700 hover:bg-gray-100 transition-colors text-sm lg:text-base font-medium"
              >
                Youtube
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 lg:gap-8 order-1 lg:order-2">
            {/* Empresa Column */}
            <div>
              <h4 className="font-bold text-gray-900 mb-4 lg:mb-6 text-sm lg:text-base">Empresa</h4>
              <div className="space-y-3 lg:space-y-4">
                <Link
                  href="#"
                  className="block text-gray-600 hover:text-gray-900 hover:font-medium transition-all text-sm lg:text-base"
                >
                  Home
                </Link>
                <Link
                  href="#"
                  className="block text-gray-600 hover:text-gray-900 hover:font-medium transition-all text-sm lg:text-base"
                >
                  Quem somos
                </Link>
                <Link
                  href="#"
                  className="block text-gray-600 hover:text-gray-900 hover:font-medium transition-all text-sm lg:text-base"
                >
                  Serviços
                </Link>
                <Link
                  href="#"
                  className="block text-gray-600 hover:text-gray-900 hover:font-medium transition-all text-sm lg:text-base"
                >
                  Contato
                </Link>
              </div>
            </div>

            <div>
              <h4 className="font-bold text-gray-900 mb-4 lg:mb-6 text-sm lg:text-base">Novidades</h4>
              <div className="space-y-3 lg:space-y-4">
                <Link
                  href="#"
                  className="block text-gray-600 hover:text-gray-900 hover:font-medium transition-all text-sm lg:text-base"
                >
                  Passaporte
                </Link>
                <Link
                  href="#"
                  className="block text-gray-600 hover:text-gray-900 hover:font-medium transition-all text-sm lg:text-base"
                >
                  Visto
                </Link>
                <Link
                  href="#"
                  className="block text-gray-600 hover:text-gray-900 hover:font-medium transition-all text-sm lg:text-base"
                >
                  Entrevista
                </Link>
                <Link
                  href="#"
                  className="block text-gray-600 hover:text-gray-900 hover:font-medium transition-all text-sm lg:text-base"
                >
                  Polícia Federal
                </Link>
              </div>
            </div>

            <div>
              <h4 className="font-bold text-gray-900 mb-4 lg:mb-6 text-sm lg:text-base">Suporte</h4>
              <div className="space-y-3 lg:space-y-4">
                <Link
                  href="#"
                  className="block text-gray-600 hover:text-gray-900 hover:font-medium transition-all text-sm lg:text-base"
                >
                  FAQ
                </Link>
                <Link
                  href="#"
                  className="block text-gray-600 hover:text-gray-900 hover:font-medium transition-all text-sm lg:text-base"
                >
                  Contato
                </Link>
                <Link
                  href="#"
                  className="block text-gray-600 hover:text-gray-900 hover:font-medium transition-all text-sm lg:text-base"
                >
                  Dúvidas Frequentes
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center pt-6 lg:pt-8 border-t border-gray-300">
          <p className="text-gray-600 text-sm lg:text-base">© 2025 Tirar Visto - Todos os Direitos Reservados</p>
        </div>
      </div>
    </footer>
  )
}
