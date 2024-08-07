import { CodeIcon, DownloadIcon, ExportIcon, PhotoIcon } from 'common/icons'
import { useDispatch, useSelector } from '../../../redux/hooks'
import Tab from 'common/components/tabs/Tabs'
import Button from 'common/components/button'
import { TabsProps } from 'antd'
import { useRef } from 'react'
import html2canvas from 'html2canvas'

const items: TabsProps['items'] = [
  {
    key: '1',
    label: 'Image',
    children: 'Content of Tab Pane 2',
    icon: <PhotoIcon isDefaultColor={false} size={5} />,
  },
  {
    key: '2',
    label: 'Html',
    children: 'Content of Tab Pane 2',
    icon: <CodeIcon isDefaultColor={false} size={5} />,
  },
]

const Export = () => {
  const { width, height } = useSelector((state) => state.image)

  const divRef = useRef<HTMLDivElement>(null)

  const handleExport = async () => {
    if (divRef.current) {
      const canvas = await html2canvas(divRef.current)
      const imgData = canvas.toDataURL('image/png')

      const link = document.createElement('a')
      link.href = imgData
      link.download = 'background.png'
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
    }
  }

  const handleExport2 = () => {
    if (divRef.current) {
      const htmlContent = divRef.current.innerHTML
      const blob = new Blob([htmlContent], { type: 'text/html' })
      const url = URL.createObjectURL(blob)

      // Create a link element and trigger a download
      const link = document.createElement('a')
      link.href = url
      link.download = 'exported-div.html'
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)

      // Release the object URL after the download
      URL.revokeObjectURL(url)
    }
  }

  const childRef = useSelector((state) => state.image.childRef)

  const handleAction = async () => {
    if (childRef) {
      const divRef = childRef.getDivRef()
      if (divRef) {
        // const htmlContent = divRef.innerHTML
        // const blob = new Blob([htmlContent], { type: 'text/html' })
        // const url = URL.createObjectURL(blob)
        // // Create a link element and trigger a download
        // const link = document.createElement('a')
        // link.href = url
        // link.download = 'exported-div.html'
        // document.body.appendChild(link)
        // link.click()
        // document.body.removeChild(link)
        // // Release the object URL after the download
        // URL.revokeObjectURL(url)
        const canvas = await html2canvas(divRef)
        const imgData = canvas.toDataURL('image/png')

        const link = document.createElement('a')
        link.href = imgData
        link.download = 'background.png'
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
      }
    }
  }

  return (
    <>
      <Tab className="-mt-4" items={items} />
      <div ref={divRef} style={{ padding: '20px', backgroundColor: 'lightgray' }}>
        <h1>Hello, world!</h1>
        <p>This is the content of the div to be exported as an image.</p>
      </div>
      <div className="flex justify-end">
        <Button className="mt-2" label={'Export'} icon={<ExportIcon />} onClick={handleExport} />
      </div>
      <div className="flex justify-end">
        <Button className="mt-2" label={'Export'} icon={<ExportIcon />} onClick={handleExport2} />
      </div>
      <div className="flex justify-end">
        <Button className="mt-2" label={'Export'} icon={<ExportIcon />} onClick={handleAction} />
      </div>
    </>
  )
}

export default Export
