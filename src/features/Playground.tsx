import React, { useState, useRef, useEffect } from 'react'
import useInitialScreenSize from 'common/hooks/useInitialScreenSize'

const Playground: React.FC = () => {
  const { width: w, height: h } = useInitialScreenSize()

  const initialWidth = 600
  const initialHeight = 400
  const [width, setWidth] = useState(initialWidth)
  const [height, setHeight] = useState(initialHeight)

  const divRef = useRef<HTMLDivElement>(null)

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleWheel = (event: WheelEvent) => {
    event.preventDefault()
    const scaleFactor = -0.4
    const newWidth = Math.max(300, width + event.deltaY * scaleFactor)
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
      className="border-1 border-gray-600"
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
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        transition: 'width 0.5s, height 0.5s',
        overflow: 'hidden',
      }}
    >
      Resize Me
    </div>
  )
}

export default Playground
