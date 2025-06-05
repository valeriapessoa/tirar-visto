import Image from "next/image"

export default function ConsultoriaSection() {
  return (
    <section className="w-full bg-[#F7F7F7] py-24 px-6 relative min-h-[400px]">
      <div className="w-full relative h-full">
        {/* Row 1 - Texto principal esquerdo no canto da tela */}
        <div className="absolute left-0 top-8">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-thin text-[#232323] leading-tight">
            <div>CONSULTORIA COMPLETA PARA</div>
            <div>TIRAR SEU VISTO</div>
          </h2>
        </div>

        {/* Row 2 - Texto secundário direito no canto da tela (mais abaixo) */}
        <div className="absolute right-0 top-32 md:top-40">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-thin text-[#232323] italic leading-tight text-right">
            <div>VOCÊ ESTÁ EM BOAS MÃOS!</div>
          </h2>
        </div>

        {/* Ícone do relógio - ao lado do título principal */}
        <div className="absolute right-[calc(100%-429px)] top-39">
          <Image
            src="/clock.png"
            alt="Relógio"
            width={140}
            height={140}
            className="object-contain"
          />
        </div>

        {/* Ícone do telefone - ao lado do subtítulo */}
        <div className="absolute left-[calc(100%-505px)] top-0">
          <Image
            src="/telephone.png"
            alt="Telefone"
            width={140}
            height={140}
            className="object-contain"
          />
        </div>
      </div>
    </section>
  )
}
