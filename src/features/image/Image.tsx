import React, { useRef, useEffect, useCallback } from 'react'
import { useDispatch, useSelector } from '../../redux/hooks'
import { NestedDivs } from './components/NestedDivs'
import { exportContent, setImageSize } from './store/imageSlice'
import { minWheelSize, whellScaleFactor } from 'common/constants'
import html2canvas from 'html2canvas'
import { ExportAs } from './store/types'

const Image: React.FC = () => {
  const dispatch = useDispatch()

  const { width, height, exporting, backgrounds } = useSelector((state) => state.image)

  const divRef = useRef<HTMLDivElement>(null)

  const createDonwloadLink = (href: string, extension: string) => {
    const link = document.createElement('a')
    link.href = href
    link.download = `background.${extension}`
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const handleExportImage = useCallback(async () => {
    if (divRef.current) {
      const canvas = await html2canvas(divRef.current)
      const imgData = canvas.toDataURL('image/png')
      createDonwloadLink(imgData, 'png')
    }
  }, [])

  const handleExportHtml = useCallback(async () => {
    if (divRef.current) {
      const blob = new Blob([divRef.current!.outerHTML], { type: 'text/html' })
      const url = URL.createObjectURL(blob)
      createDonwloadLink(url, '.html')
      URL.revokeObjectURL(url)
    }
  }, [])

  useEffect(() => {
    switch (exporting) {
      case ExportAs.image:
        handleExportImage()
        break
      case ExportAs.html:
        handleExportHtml()
        break
    }

    if (exporting) {
      dispatch(exportContent(null))
    }
  }, [dispatch, exporting, handleExportHtml, handleExportImage])

  const handleWheel = useCallback(
    (event: WheelEvent) => {
      event.preventDefault()
      const newWidth = Math.max(minWheelSize, width + event.deltaY * whellScaleFactor)
      const newHeight = Math.max(minWheelSize, height + event.deltaY * whellScaleFactor)
      dispatch(setImageSize({ width: newWidth, height: newHeight }))
    },
    [dispatch, height, width]
  )

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
      style={{
        backgroundImage: `linear-gradient(45deg, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%, #ddd),
          linear-gradient(45deg, #ddd 25%, transparent 25%,  transparent 75%, #ddd 75%, #ddd),
          linear-gradient(45deg, #fff 25%, transparent 25%, transparent 75%, #fff 75%, #fff),
          linear-gradient(45deg, #fff 25%, transparent 25%,  transparent 75%, #fff 75%, #fff)`,
        backgroundPosition: '0 0, 25px 25px, 25px 0, 0 25px',
        backgroundSize: '50px 50px',
      }}
    >
      <div
        ref={divRef}
        style={{
          width: `${width}px`,
          height: `${height}px`,
        }}
      >
        <NestedDivs backgrounds={backgrounds} />
      </div>
    </div>
  )
}

export default Image
