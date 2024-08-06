import { theme, type CollapseProps } from 'antd'
import Image from './features/image/Image'
import Collapse from 'features/collapse/Collapse'
import Input from 'common/components/input/Input'
import { HorizontalIcon, VerticalIcon } from 'common/icons'
import useInitialScreenSize from 'common/hooks/useInitialScreenSize'
import Slider from 'common/components/slider/Slider'
import Tab from 'common/components/tabs/Tabs'
import Playground from 'features/playground/Playground'

function App() {
  const { width: w, height: h } = useInitialScreenSize()

  return (
    <div className="h-screen border-1 relative bg-background">
      <Playground />
    </div>
  )
}

export default App
