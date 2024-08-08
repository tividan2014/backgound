import React, { useRef, useEffect } from 'react'
import { useDispatch, useSelector } from '../../redux/hooks'
import { NestedDivs } from './components/NestedDivs'
import { addImageRef, setImageSize } from './store/imageSlice'
import { minWheelSize, whellScaleFactor } from 'common/constants'

const Image: React.FC = () => {
  const dispatch = useDispatch()

  const { width, height, backgrounds } = useSelector((state) => state.image)

  const divRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    dispatch(addImageRef(divRef.current))
  }, [divRef, dispatch])

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleWheel = (event: WheelEvent) => {
    event.preventDefault()
    const newWidth = Math.max(minWheelSize, width + event.deltaY * whellScaleFactor)
    const newHeight = Math.max(minWheelSize, height + event.deltaY * whellScaleFactor)
    dispatch(setImageSize({ width: newWidth, height: newHeight }))
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
      <NestedDivs backgrounds={backgrounds} />
    </div>
  )
}

export default Image
