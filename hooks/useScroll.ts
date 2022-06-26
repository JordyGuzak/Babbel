import { createContext, useState, useEffect } from "react";

export default function useScroll() {
  const [data, setData] = useState({
    x: 0,
    y: 0,
    previousX: 0,
    previousY: 0
  })

  useEffect(() => {
    const handleScroll = () => {
      setData((previous) => {
        return {
          x: window.scrollX,
          y: window.scrollY,
          previousX: previous.x,
          previousY: previous.y
        }
      })
    }

    handleScroll()
    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return data;
}

export const ScrollContext = createContext(null)
