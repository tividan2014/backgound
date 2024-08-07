import cx from 'classnames'

import { TabsProps, Tabs as AntTabs } from 'antd'
import { ReactNode, useState } from 'react'
import ColorPicker from '../colorPicker/ColorPicker'
import { AddIcon, UploadIcon } from 'common/icons'
import Button from '../button/Button'

// const items: TabsProps['items'] = [
//   {
//     key: '1',
//     label: 'Solid',
//     children: (
//       <div className="flex">
//         <ColorPicker placeholder={''}></ColorPicker>
//         {/* <Button className="ml-2" label={'Add'} /> */}
//       </div>
//     ),
//     icon: <div className="bg-sky-500 h-4 w-4 inline-block"></div>,
//   },
//   {
//     key: '2',
//     label: 'Linear',
//     children: 'Content of Tab Pane 2',
//     icon: <div className="bg-gradient-to-r from-violet-500 to-fuchsia-500 h-4 w-4 inline-block"></div>,
//   },
//   {
//     key: '3',
//     label: 'Radial',
//     children: 'Content of Tab Pane 3',
//   },
//   {
//     key: '4',
//     label: 'Image',
//     children: <Button label={'Upload'} icon={<UploadIcon />} onClick={() => {}} />,
//   },
// ]

interface Props {
  className?: string
  initialValue?: number
  items: TabsProps['items']
  isVertical?: boolean
}

const Tabs = ({ className, initialValue, items, isVertical }: Props) => {
  const [value, setValue] = useState(initialValue)

  const handleChange = (key: string) => {
    console.log(key)
  }

  return (
    <AntTabs
      className={cx(className, '')}
      defaultActiveKey="1"
      items={items}
      onChange={handleChange}
      tabPosition={isVertical ? 'left' : 'top'}
    />
  )
}

export default Tabs
