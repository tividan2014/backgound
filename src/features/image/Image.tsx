import React, { useState, useRef, useEffect } from 'react'
import { useDispatch, useSelector } from '../../redux/hooks'
import { NestedDivs } from './components/NestedDivs'

const Image: React.FC = () => {
  const dispatch = useDispatch()

  const { width: ww, height: hh, backgrounds } = useSelector((state) => state.image)

  const initialWidth = 600
  const initialHeight = 400
  const [width, setWidth] = useState(initialWidth)
  const [height, setHeight] = useState(initialHeight)

  useEffect(() => {
    if (ww) {
      setWidth(ww)
    }
    if (hh) {
      setHeight(hh)
    }
  }, [ww, hh])

  const divRef = useRef<HTMLDivElement>(null)

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleWheel = (event: WheelEvent) => {
    event.preventDefault()
    const scaleFactor = -0.4
    const newWidth = Math.max(10, width + event.deltaY * scaleFactor)
    const newHeight = (newWidth / initialWidth) * initialHeight
    setWidth(newWidth)
    setHeight(newHeight)
  }

  useEffect(() => {
    const divElement = divRef.current

    if (divElement) {
      divElement.addEventListener('wheel', handleWheel)
    }
    return () => {
      if (divElement) {
        divElement.removeEventListener('wheel', handleWheel)
      }
    }
  }, [width, height, handleWheel])

  return (
    <div
      className="flex justify-center items-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 duration-500"
      ref={divRef}
      style={{
        width: `${width}px`,
        height: `${height}px`,
        backgroundImage: `linear-gradient(45deg, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%, #ddd),
          linear-gradient(45deg, #ddd 25%, transparent 25%,  transparent 75%, #ddd 75%, #ddd),
          linear-gradient(45deg, #fff 25%, transparent 25%, transparent 75%, #fff 75%, #fff),
          linear-gradient(45deg, #fff 25%, transparent 25%,  transparent 75%, #fff 75%, #fff)`,
        backgroundPosition: '0 0, 25px 25px, 25px 0, 0 25px',
        backgroundSize: '50px 50px',
      }}
    >
      {/* {ww}--{hh}--- Resize Me */}
      <NestedDivs backgrounds={backgrounds} />
    </div>
  )
}

export default Image
