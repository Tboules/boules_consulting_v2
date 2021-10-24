import { EmblaOptionsType } from "embla-carousel"
import useEmblaCarousel from "embla-carousel-react"
import { useEffect } from "react"

export default function useCustomEmbla(
  options?: EmblaOptionsType,
  auto?: boolean
) {
  const [firstRef, embla] = useEmblaCarousel({ ...options })

  useEffect(() => {
    setInterval(() => {
      if (auto) {
        if (embla?.canScrollNext()) {
          embla?.scrollNext()
        }
      }
    }, 4000)
  }, [embla])

  const next = () => {
    embla?.scrollNext()
  }

  const previous = () => {
    embla?.scrollPrev()
  }

  return {
    refs: {
      firstRef,
    },
    next,
    previous,
  } as const
}
