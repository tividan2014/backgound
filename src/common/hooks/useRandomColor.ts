import { Color } from 'features/image/store/types'
import { useState, useEffect } from 'react'

const getRandom = (maxValue: number) => {
  return Math.floor(Math.random() * maxValue)
}

const useRandomColor = (ignoreAlpha: boolean = true): Color => {
  const [color, setColor] = useState<Color>({ r: 0, g: 0, b: 0, a: 1 })

  useEffect(() => {
    setColor({
      r: getRandom(255),
      g: getRandom(255),
      b: getRandom(255),
      a: ignoreAlpha ? 1 : getRandom(100),
    })
  }, [ignoreAlpha])

  return color
}

export default useRandomColor
