import cx from 'classnames'

import { TabsProps, Tabs as AntTabs } from 'antd'
import { ReactNode, useState } from 'react'
import ColorPicker from '../colorPicker/ColorPicker'
import { AddIcon } from 'common/icons'

const items: TabsProps['items'] = [
  {
    key: '1',
    label: 'Solid',
    children: <ColorPicker placeholder={''}></ColorPicker>,
    icon: <div className="bg-sky-500 h-4 w-4 inline-block"></div>,
  },
  {
    key: '2',
    label: 'Linear',
    children: 'Content of Tab Pane 2',
    icon: <div className="bg-gradient-to-r from-violet-500 to-fuchsia-500 h-4 w-4 inline-block"></div>,
  },
  {
    key: '3',
    label: 'Radial',
    children: 'Content of Tab Pane 3',
  },
]

interface Props {
  className?: string
  initialValue?: number
  placeholder: string
}

const Tabs = ({ className, initialValue, placeholder }: Props) => {
  const [value, setValue] = useState(initialValue)

  const handleChange = (key: string) => {
    console.log(key)
  }

  return <AntTabs className={cx(className, '')} defaultActiveKey="1" items={items} onChange={handleChange} />
}

export default Tabs
