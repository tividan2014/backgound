import Image from 'features/image'
import Collapse from 'common/components/collapse'
import { CollapseProps } from 'antd'
import Size from './components/Size'
import Background from './components/Background'
import Export from './components/Export'
import { mainHeaderColor } from 'common/constants'
import useScreenSize from 'common/hooks/useScreenSize'
import { setImageSize } from 'features/image/store/imageSlice'
import { ReactNode, useEffect } from 'react'
import { useDispatch } from '../../redux/hooks'
import { ArrowsOutIcon, ExportIcon, SquaresIcon, StackIcon } from 'common/icons'
import { Label } from './components/Label'

const headerStyle: React.CSSProperties = {
  background: mainHeaderColor,
}

export const playgroundFlowItems: CollapseProps['items'] = [
  {
    key: '1',
    label: Label({ icon: <ArrowsOutIcon isDefaultColor={false} />, label: 'Image size' }),
    children: <Size />,
    style: headerStyle,
  },
  {
    key: '2',
    label: Label({ icon: <StackIcon isDefaultColor={false} />, label: 'Backgrounds' }),
    children: <Background />,
    style: headerStyle,
  },
  {
    key: '3',
    label: Label({ icon: <SquaresIcon isDefaultColor={false} />, label: 'Elements' }),
    children: <p></p>,
    style: headerStyle,
  },
  {
    key: '4',
    label: Label({ icon: <ExportIcon isDefaultColor={false} />, label: 'Export' }),
    children: <Export />,
    style: headerStyle,
  },
]

const Playground = () => {
  const dispatch = useDispatch()
  const { width, height } = useScreenSize()

  useEffect(() => {
    if (width && height) {
      dispatch(setImageSize({ width, height }))
    }
  }, [width, height, dispatch])

  return (
    <div className="h-screen relative bg-body">
      <Image />
      <Collapse
        items={playgroundFlowItems}
        active={2}
        className="mt-10 ml-10 w-4/12 min-w-64 max-w-96 absolute"
        bordered={true}
        accordion
      />
    </div>
  )
}

export default Playground
