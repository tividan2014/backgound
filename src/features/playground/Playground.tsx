import Image from 'features/image'
import Collapse from 'common/components/collapse'
import Button from 'common/components/button'
import Input from 'common/components/input/Input'
import { AddIcon, HorizontalIcon, PhotoIcon, VerticalIcon, XMarkIcon } from 'common/icons'
import Tab from 'common/components/tabs/Tabs'
import { CollapseProps } from 'antd'
import Size from './components/Size'
import Background from './components/Background'
import Export from './components/Export'
import Child, { ExposedMethods } from 'features/image/Child'
import { useEffect, useRef } from 'react'
import { useDispatch } from '../../redux/hooks'
import { addChild } from 'features/image/store/imageSlice'

const panelStyle: React.CSSProperties = {
  background: '#eee',
}

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
    children: <Background />,
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
    children: <Export />,
    style: panelStyle,
  },
]

const Playground = () => {
  const childRef = useRef<ExposedMethods>(null)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(addChild(childRef.current))
  }, [childRef, dispatch])

  return (
    <>
      <Child ref={childRef} />
      <Image />
      <Collapse items={playgroundFlowItems} className="mt-10 ml-10 w-3/12 min-w-64 max-w-96 absolute" bordered={true} />
    </>
  )
}

export default Playground
