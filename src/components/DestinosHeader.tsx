import Link from "next/link"
import Image from "next/image"

interface DestinosHeaderProps {
  badge: string
  title: string
  subtitle: string
  buttonText?: string
  buttonHref?: string
  showButton?: boolean
}

export default function DestinosHeader({
  badge,
  title,
  subtitle,
  buttonText = "Conheça mais",
  buttonHref = "#",
  showButton = true,
}: DestinosHeaderProps) {
  return (
    <div className="relative bg-white pt-16 pb-8 sm:pt-20 sm:pb-12 md:pt-24 md:pb-16 lg:pt-[110px]">
      {/* Background Vectors */}
      <div className="absolute left-0 top-0">
        <Image
          src="/vector-1.png"
          alt=""
          width={450}
          height={200}
          className="h-auto w-auto max-w-[120px] sm:max-w-[200px] md:max-w-[300px] lg:max-w-[400px] xl:max-w-[450px]"
          priority={false}
        />
      </div>
      <div className="absolute right-0 top-0">
        <Image
          src="/vector-2.png"
          alt=""
          width={450}
          height={200}
          className="h-auto w-auto max-w-[120px] sm:max-w-[200px] md:max-w-[300px] lg:max-w-[400px] xl:max-w-[450px]"
          priority={false}
        />
      </div>
      <div className="absolute bottom-0 left-0">
        <Image
          src="/vector-3.png"
          alt=""
          width={300}
          height={200}
          className="h-auto w-auto max-w-[80px] sm:max-w-[120px] md:max-w-[180px] lg:max-w-[250px] xl:max-w-[300px]"
          priority={false}
        />
      </div>
      <div className="absolute bottom-0 right-0">
        <Image
          src="/vector-4.png"
          alt=""
          width={300}
          height={200}
          className="h-auto w-auto max-w-[80px] sm:max-w-[120px] md:max-w-[180px] lg:max-w-[250px] xl:max-w-[300px]"
          priority={false}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Top Label */}
        <div className="mb-4 flex justify-center sm:mb-6">
          <span className="rounded-full bg-yellow-400 px-4 py-1.5 text-xs font-semibold text-black sm:px-6 sm:py-2 sm:text-sm">
            {badge}
          </span>
        </div>

        {/* Title */}
        <h2 className="mb-4 text-center text-2xl font-bold leading-tight text-gray-900 sm:mb-6 sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
          {title}
        </h2>

        {/* Subtitle */}
        <p className="mx-auto mb-6 max-w-3xl text-center text-base leading-relaxed text-gray-600 sm:mb-8 sm:text-lg md:mb-10">
          {subtitle}
        </p>

        {/* Button */}
        {showButton && (
          <div className="flex justify-center">
            <Link
              href={buttonHref}
              className="rounded-full bg-slate-800 px-6 py-3 text-base font-semibold text-white transition-colors hover:bg-slate-700 sm:px-8 sm:py-3.5 sm:text-lg md:px-10 md:py-4"
            >
              {buttonText}
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}
