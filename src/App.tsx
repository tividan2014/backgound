import type { CollapseProps } from 'antd'
import Playground from './features/Playground'
import Collapse from 'common/components/collapse/Collapse'
import Input from 'common/components/input/Input'
import { HorizontalIcon, VerticalIcon } from 'common/icons'
import useInitialScreenSize from 'common/hooks/useInitialScreenSize'

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`

const size = (
  <div className="flex items-center">
    <Input initialValue="600" placeholder="Horizontal" icon={<HorizontalIcon />} suffix="px" />
    <span className="ml-2">X</span>
    <Input initialValue="400" className="ml-2" placeholder="Vertical" icon={<VerticalIcon />} suffix="px" />
  </div>
)

const items: CollapseProps['items'] = [
  {
    key: '1',
    label: 'Size',
    children: size,
  },
  {
    key: '2',
    label: 'Background',
    children: <p>{text}</p>,
  },
  {
    key: '3',
    label: 'Elements',
    children: <p>{text}</p>,
  },
  {
    key: '4',
    label: 'Export',
    children: <p>{text}</p>,
  },
]

function App() {
  const { width: w, height: h } = useInitialScreenSize()

  return (
    <div className="h-screen border-1 relative bg-background">
      <Playground />
      <Collapse items={items} className="mt-10 ml-10 w-80 absolute" />
    </div>
  )
}

export default App
