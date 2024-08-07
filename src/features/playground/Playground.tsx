import Image from 'features/image'
import Collapse from 'features/collapse'
import Button from 'common/components/button'
import Input from 'common/components/input/Input'
import { AddIcon, HorizontalIcon, PhotoIcon, VerticalIcon, XMarkIcon } from 'common/icons'
import Tab from 'common/components/tabs/Tabs'
import { CollapseProps } from 'antd'
import Size from './components/Size'

const panelStyle: React.CSSProperties = {
  background: '#eee',
}

const background = (
  <div className="">
    <Tab placeholder={''} />
    {/* <Slider initialValue={100} placeholder="Transparency" /> */}
    <div className="flex justify-end">
      <Button className="mt-2" label={'New'} icon={<AddIcon />} />
    </div>
  </div>
)

export const playgroundFlowItems: CollapseProps['items'] = [
  {
    key: '1',
    label: 'Image size',
    children: <Size />,
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
    children: <p></p>,
    style: panelStyle,
  },
  {
    key: '4',
    label: 'Export',
    children: (
      <div className="flex justify-end">
        <Button className="mt-2" label={'Export'} icon={<PhotoIcon />} />
      </div>
    ),
    style: panelStyle,
  },
]

const Playground = () => {
  return (
    <>
      <Image />
      <Collapse items={playgroundFlowItems} className="mt-10 ml-10 w-3/12 min-w-64 max-w-96 absolute" />
    </>
  )
}

export default Playground
