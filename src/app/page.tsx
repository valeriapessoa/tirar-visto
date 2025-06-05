"use client";
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Dialog } from '@headlessui/react';
import { PlayCircle } from 'lucide-react';
import Navbar from '../components/navbar';
import ConsultoriaSection from '../components/ConsultoriaSection';
import TouristSection from '../components/TouristSection';
import DestinosSection from '../components/DestinosSection';
import PacotesSection from '../components/PacotesSection';
import Footer from '../components/Footer';

export default function Hero() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
    <section className="flex flex-col lg:flex-row min-h-screen w-full bg-white text-black">
      {/* Left Side */}
      <div className="w-full lg:w-1/2 pl-12 pr-6 flex flex-col">
        <Navbar />
        <div className="flex-1 flex flex-col justify-start pt-12 pb-16">
          <div className="w-full max-w-5xl">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl lg:text-5xl font-semibold leading-tight"
            >
              Tire seu Visto conosco e<br />
              não tenha nenhuma<br />
              surpresa negativa!
            </motion.h1>
            <motion.div 
              initial={{ opacity: 0, width: 0 }}
              animate={{ opacity: 1, width: '100%' }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="h-px border-t-2 border-gray-200 my-8 w-full"
            />
          </div>

          <div className="flex flex-col md:flex-row gap-8">
            {/* Coluna 1 */}
            <div className="md:w-1/2 flex flex-col">
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="mt-6 text-gray-600 max-w-md"
              >
                Com uma equipe altamente treinada, nós temos todos os procedimentos para que seu processo seja o mais tranquilo e rápido. Uma consultoria completa para você e sua família não ter nenhuma preocupação na sua viagem.
              </motion.p>

              <div className="mt-8">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    href="https://www.facebook.com/"
                    className="bg-[#1B2543] text-white px-6 py-3 rounded-full font-semibold flex items-center gap-2 inline-block"
                  >
                    Saiba mais <span className="text-xl">→</span>
                  </Link>
                </motion.div>
              </div>
            </div>

            {/* Coluna 2 */}
            <div className="md:w-1/2 flex items-center justify-center md:justify-end md:items-start md:pt-32 pr-10">
              <motion.button
                onClick={() => setIsOpen(true)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="rounded-xl overflow-hidden transition-all hover:opacity-90"
              >
                <Image
                  src="/bruna.png"
                  alt="Conheça a Bruna"
                  width={220}
                  height={124}
                  className="object-cover"
                />
                <div className="flex items-center justify-between p-4 w-full">
                  <div className="text-left">
                    <p className="font-bold text-base">Conheça a Bruna</p>
                    <p className="text-gray-500 text-sm">Ver vídeo</p>
                  </div>
                  <div className="ml-8 w-10 h-10 rounded-full bg-[#1B2543] flex items-center justify-center flex-shrink-0 text-white text-xl">
                    →
                  </div>
                </div>
              </motion.button>
            </div>
          </div>

          <div className="mt-10 flex">
            <div className="px-10 border-r-2 border-gray-200">
              <p className="text-3xl font-bold">509</p>
              <p className="text-gray-500">Vistos Tirados</p>
            </div>
            <div className="px-10 border-r-2 border-gray-200">
              <p className="text-3xl font-bold">602</p>
              <p className="text-gray-500">Passaportes Tirados</p>
            </div>
            <div className="px-10">
              <p className="text-3xl font-bold">634</p>
              <p className="text-gray-500">Famílias Felizes</p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side */}
      <div className="w-full lg:w-1/2 relative flex items-center justify-center p-6">
        <div className="relative w-full h-full">
          <Image
            src="/Hero.png"
            alt="Roda gigante e fonte"
            width={900}
            height={900}
            className="rounded-3xl object-cover w-full h-full"
          />
          <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black/70 to-transparent rounded-b-3xl" />
        </div>
        <div className="absolute bottom-16 left-12 max-w-xl text-white z-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-4xl font-bold leading-tight mb-4"
          >
            Realize o seu sonho com <br /> a ajuda da Tirar Visto!
          </motion.h2>
          <p className="text-lg leading-relaxed">
            Com um serviço profissional, você não terá dor de cabeça para todo o processo do visto e entrevistas no consulado.
          </p>
        </div>
        <motion.a
          href="#"
          whileHover={{ scale: 1.05 }}
          className="absolute top-12 right-12 bg-yellow-400 text-black font-semibold px-4 py-2 rounded-full shadow"
        >
          Tirar meu visto agora!
        </motion.a>
      </div>

      {/* Modal de Vídeo */}
      <AnimatePresence>
        {isOpen && (
          <Dialog as={motion.div} static open={isOpen} onClose={() => setIsOpen(false)} className="fixed inset-0 z-50 flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60"
            />

            <motion.div
              initial={{ scale: 0.7, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.7, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative z-50 w-[90%] max-w-3xl bg-black rounded-2xl overflow-hidden"
            >
              <div className="aspect-video w-full">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/mPFakMSvysM?autoplay=1"
                  title="Conheça a Bruna"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-2 right-2 text-white bg-black/60 p-2 rounded-full hover:bg-black/80"
              >
                ✕
              </button>
            </motion.div>
          </Dialog>
        )}
      </AnimatePresence>
      </section>
      <ConsultoriaSection />
      <TouristSection />
      <DestinosSection />
      <PacotesSection />
      <Footer />
    </>
  );
}