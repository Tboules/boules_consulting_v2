import { EmblaOptionsType } from "embla-carousel"
import useEmblaCarousel from "embla-carousel-react"
import { useEffect } from "react"

export default function useCustomEmbla(options?: EmblaOptionsType) {
  const [firstRef, embla] = useEmblaCarousel({ ...options })
  // const [secondRef, embla2] = useEmblaCarousel({ ...options })

  // useEffect(() => {
  //   if (!embla || !embla2) return
  //   embla?.on("select", () => {
  //     embla2?.scrollTo(embla.selectedScrollSnap())
  //   })
  // }, [embla])

  // useEffect(() => {
  //   if (!embla || !embla2) return
  //   embla2?.on("select", () => {
  //     embla?.scrollTo(embla2.selectedScrollSnap())
  //   })
  // }, [embla2])

  const next = () => {
    embla?.scrollNext()
  }

  const previous = () => {
    embla?.scrollPrev()
  }

  return {
    refs: {
      firstRef,
      // secondRef,
    },
    next,
    previous,
  } as const
}
