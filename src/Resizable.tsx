import React, { useState, useRef, useEffect } from 'react'

const Resizable: React.FC = () => {
  const initialWidth = 600
  const initialHeight = 400
  const [width, setWidth] = useState(initialWidth)
  const [height, setHeight] = useState(initialHeight)

  const divRef = useRef<HTMLDivElement>(null)

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleWheel = (event: WheelEvent) => {
    event.preventDefault()
    const scaleFactor = -0.1
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
        backgroundColor: 'lightblue',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        transition: 'width 0.1s, height 0.1s',
        overflow: 'hidden',
      }}
    >
      Resize Me
    </div>
  )
}

export default Resizable
