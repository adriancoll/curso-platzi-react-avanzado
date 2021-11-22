import { useEffect, useState, useRef } from "react";

export const useNearScreen = () => {
  const [show, setShow] = useState(false)
  const ref = useRef(null);

  useEffect(() => {
    Promise.resolve(
      typeof window.IntersectionObserver !== 'undefined'
      ? window.IntersectionObserver
      : import('intersection-observer') // import dinamico con babel para navegadores que no soportan IO
    )
      .then(() => {
        const observer = new window.IntersectionObserver(entries => {
          const { isIntersecting } = entries[0]
          if (isIntersecting) {
            setShow(true)
            observer.disconnect()
          }
        })
        observer.observe(ref.current)
    })
  }, [ref])

  // devolvemos si se debe mostrar y su referencia
  return [ show, ref ]
}