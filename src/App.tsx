import type { CollapseProps } from 'antd'
import Resizable from './Resizable'
import Collapse from 'common/components/collapse/Collapse'
import Input from 'common/components/input/Input'
import { HorizontalIcon, VerticalIcon } from 'common/icons'

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`

const items: CollapseProps['items'] = [
  {
    key: '1',
    label: 'Ratio',
    children: (
      <div className="flex">
        <Input initialValue="600" placeholder="Horizontal" icon={<HorizontalIcon />} />
        <div className="ml-2 mt-2">X</div> {/*  TODO: mt it's wrong need align-middle */}
        <Input initialValue="400" className="ml-2" placeholder="Vertical" icon={<VerticalIcon />} />
      </div>
    ),
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
]

function App() {
  return (
    <div className="h-screen border-1 relative bg-background">
      <Resizable />
      <Collapse items={items} className="mt-10 ml-10 w-80 absolute" />
    </div>
  )
}

export default App
