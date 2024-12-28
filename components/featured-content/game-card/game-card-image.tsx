import Image from 'next/image'

interface GameCardImageProps {
  src: string
  alt: string
}

export function GameCardImage({ src, alt }: GameCardImageProps) {
  return (
    <div className="relative aspect-[16/9] overflow-hidden">
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-110"
        sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, (min-width: 640px) 50vw, 100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/0 to-black/0" />
    </div>
  )
}