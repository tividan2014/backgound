import cx from 'classnames'

import { TabsProps, Tabs as AntTabs } from 'antd'

interface Props {
  className?: string
  initialValue?: number
  items: TabsProps['items']
  isVertical?: boolean
}

const Tabs = ({ className, initialValue, items, isVertical }: Props) => {
  const handleChange = (key: string) => {}

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
