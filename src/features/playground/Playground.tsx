import { theme, type CollapseProps } from 'antd'
import Image from 'features/image/Image'
import Collapse from 'features/collapse/Collapse'
import Input from 'common/components/input/Input'
import { HorizontalIcon, VerticalIcon } from 'common/icons'
import useInitialScreenSize from 'common/hooks/useInitialScreenSize'
import Slider from 'common/components/slider/Slider'
import Tab from 'common/components/tabs/Tabs'

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`

const panelStyle: React.CSSProperties = {
  background: '#eee',
}

const size = (
  <div className="flex items-center">
    <Input initialValue="600" placeholder="Horizontal" icon={<HorizontalIcon />} suffix="px" />
    <span className="ml-2">X</span>
    <Input initialValue="400" className="ml-2" placeholder="Vertical" icon={<VerticalIcon />} suffix="px" />
  </div>
)

const background = (
  <div className="">
    <Tab placeholder={''} />
    {/* <Slider initialValue={100} placeholder="Transparency" /> */}
  </div>
)

const items: CollapseProps['items'] = [
  {
    key: '1',
    label: 'Size',
    children: size,
    style: panelStyle,
  },
  {
    key: '2',
    label: 'Background',
    children: background,
    style: panelStyle,
  },
  {
    key: '3',
    label: 'Elements',
    children: <p>{text}</p>,
    style: panelStyle,
  },
  {
    key: '4',
    label: 'Export',
    children: <p>{text}</p>,
    style: panelStyle,
  },
]

const Playground = () => {
  return (
    <>
      <Image />
      <Collapse items={items} className="mt-10 ml-10 w-80 absolute" />
    </>
  )
}

export default Playground
