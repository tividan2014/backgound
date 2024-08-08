import type { CollapseProps } from 'antd'
import { Collapse as AntCollapse } from 'antd'
import cx from 'classnames'

interface Props {
  className?: string
  items: CollapseProps['items']
  bordered?: boolean
  size?: 'small' | 'middle' | 'large'
  accordion?: boolean
}

const Collapse = ({ className, items, bordered = true, size, accordion }: Props) => {
  const onChange = (key: string | string[]) => {}

  return (
    <AntCollapse
      className={cx(className, ' ')}
      items={items}
      defaultActiveKey={['1']}
      onChange={onChange}
      bordered={bordered}
      ghost={false}
      size={size}
      accordion={accordion}
    />
  )
}

export default Collapse
