import { useState } from "react"

const useToggle = (init: boolean) => {
  const [open, setOpen] = useState<boolean>((init = false))

  const toggle = () => setOpen(openState => !openState)

  return [open, toggle, setOpen] as const
}

export default useToggle
