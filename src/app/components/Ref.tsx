'use client'

import { useRef } from "react"

export const Ref = () => {

  const ref = useRef(0)

  const handleClick = () => {
    ref.current = ref.current + 1
  }
  return (
    <>
      <button onClick={handleClick}>
        +1
      </button>
      {ref.current}
    </>
  )
}
