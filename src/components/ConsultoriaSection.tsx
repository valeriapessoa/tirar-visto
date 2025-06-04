import Image from 'next/image';

export default function ConsultoriaSection() {
  return (
    <section className="w-full bg-gray-100 py-24 px-6">
      <div className="max-w-5xl">
        {/* Primeira linha */}
        <div className="mb-4">
          <div className="flex items-center">
            <Image 
              src="/clock.png" 
              alt="Relógio" 
              width={60} 
              height={60} 
              className="w-14 h-14 object-contain opacity-70 mr-4"
            />
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
              <div>CONSULTORIA COMPLETA PARA </div>
              <div>TIRAR SEU VISTO</div>
            </h2>
          </div>
        </div>

        {/* Segunda linha */}
        <div className="flex justify-end w-full -mt-4">
          <div className="flex items-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 italic pr-4">
              VOCÊ ESTÁ EM BOAS MÃOS!
            </h2>
            <Image 
              src="/telephone.png" 
              alt="Telefone" 
              width={50} 
              height={50} 
              className="w-12 h-12 object-contain opacity-70"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
