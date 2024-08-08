import React, { useRef, useImperativeHandle, forwardRef } from 'react'
import { NestedDivs } from './components/NestedDivs'
import { useSelector } from '../../redux/hooks'

interface ChildProps {}

export interface ExposedMethods {
  getDivRef: () => HTMLDivElement | null
}

const ChildComponent = forwardRef<ExposedMethods, ChildProps>((props, ref) => {
  const divRef = useRef<HTMLDivElement>(null)

  const { width: ww, height: hh, backgrounds } = useSelector((state) => state.image)

  useImperativeHandle(ref, () => ({
    getDivRef: () => divRef.current,
  }))

  return (
    <div
      ref={divRef}
      className="flex justify-center items-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 duration-500"
      style={{
        width: `${500}px`,
        height: `${500}px`,
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
})

export default ChildComponent
