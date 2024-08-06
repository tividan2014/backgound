import type { CollapseProps } from 'antd'
import { Collapse as AntCollapse } from 'antd'
import cx from 'classnames'

interface Props {
  className?: string
  items: CollapseProps['items']
}

const Collapse = ({ className, items }: Props) => {
  const onChange = (key: string | string[]) => {
    console.log(key)
  }

  return (
    <AntCollapse
      className={cx(
        className,
        ' overflow-y-auto whitespace-pre-line rounded-lg border-1 border-gray-300 bg-white shadow-md shadow-gray-300'
      )}
      items={items}
      defaultActiveKey={['1']}
      onChange={onChange}
    />
  )
}

export default Collapse
