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
    <div className="relative pt-[110px] pb-16">
        {/* Background Vectors */}
        <div className="absolute left-0 top-0">
            <Image
                src="/vector-1.png"
                alt=""
                width={450}
                height={200}
                className="h-auto w-auto "
                priority={false}
            />
        </div>
        <div className="absolute right-0 top-0">
            <Image
                src="/vector-2.png"
                alt=""
                width={450}
                height={200}
                className="h-auto w-auto "
                priority={false}
            />
        </div>
        <div className="absolute bottom-0 left-0">
            <Image
                src="/vector-3.png"
                alt=""
                width={300}
                height={200}
                className="h-auto w-auto "
                priority={false}
            />
        </div>
        <div className="absolute bottom-0 right-0">
            <Image
                src="/vector-4.png"
                alt=""
                width={300}
                height={200}
                className="h-auto w-auto "
                priority={false}
            />
        </div>
        <div className="relative mx-auto max-w-7xl">
        {/* Top Label */}
            <div className="mb-6 flex justify-center">
                <span className="rounded-full bg-yellow-400 px-6 py-2 text-sm font-semibold text-black">{badge}</span>
            </div>
            {/* Title */}
            <h2 className="mb-6 text-center text-4xl font-bold leading-tight text-gray-900 md:text-5xl lg:text-6xl">
                {title}
            </h2>

            {/* Subtitle */}
            <p className="mx-auto mb-10 max-w-3xl text-center text-lg leading-relaxed text-gray-600">{subtitle}</p>

            {/* Button */}
            {showButton && (
                <div className="flex justify-center">
                <Link
                    href={buttonHref}
                    className="rounded-full bg-slate-800 px-10 py-4 text-lg font-semibold text-white transition-colors hover:bg-slate-700"
                >
                    {buttonText}
                </Link>
                </div>
            )}
        </div>

    </div>
  )
}
