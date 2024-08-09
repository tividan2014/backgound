import { CodeIcon, ExportIcon, PhotoIcon } from 'common/icons'
import { useSelector } from '../../../redux/hooks'
import Tab from 'common/components/tabs/Tabs'
import Button from 'common/components/button'
import { TabsProps } from 'antd'
import html2canvas from 'html2canvas'

const Export = () => {
  const { imageRef } = useSelector((state) => state.image)

  function createDonwloadLink(href: string, extension: string) {
    const link = document.createElement('a')
    link.href = href
    link.download = `background.${extension}`
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const handleExportImage = async () => {
    if (imageRef) {
      const canvas = await html2canvas(imageRef)
      const imgData = canvas.toDataURL('image/png')

      createDonwloadLink(imgData, 'png')
    }
  }

  const handleExportHtml = async () => {
    if (imageRef) {
      const blob = new Blob([imageRef!.outerHTML], { type: 'text/html' })
      const url = URL.createObjectURL(blob)

      createDonwloadLink(url, '.html')
      URL.revokeObjectURL(url)
    }
  }

  const items: TabsProps['items'] = [
    {
      key: '1',
      label: 'Image',
      children: (
        <div className="flex justify-end">
          <Button className="mt-2" label={'Export'} icon={<ExportIcon />} onClick={handleExportImage} />
        </div>
      ),
      icon: <PhotoIcon isDefaultColor={false} size={5} />,
    },
    {
      key: '2',
      label: 'Html',
      children: (
        <div className="flex justify-end">
          <Button className="mt-2" label={'Export'} icon={<ExportIcon />} onClick={handleExportHtml} />
        </div>
      ),
      icon: <CodeIcon isDefaultColor={false} size={5} />,
    },
  ]

  return (
    <>
      <Tab className="-mt-3" items={items} />
    </>
  )
}

export default Export
