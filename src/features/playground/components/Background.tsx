import { AddIcon, CodeIcon, EyeIcon, EyeSlashIcon, GradientIcon, PhotoIcon, WarningIcon, XMarkIcon } from 'common/icons'
import { useDispatch, useSelector } from '../../../redux/hooks'
import { addBackground, deleteBackground, hideBackground, showBackground } from 'features/image/store/imageSlice'
import Tab from 'common/components/tabs/Tabs'
import { CollapseProps, TabsProps } from 'antd'
import Button from 'common/components/button'
import Collapse from 'common/components/collapse'
import { CSSProperties } from 'react'
import { backgroundHeaderColor } from 'common/constants'
import ColorBox from 'common/components/colorBox'
import BackSolid from './BSolid'
import { Background as BackgroundType } from '../../image/store/types'
import { SolidBackground } from 'features/image/store/types'

const panelStyle: CSSProperties = {
  background: backgroundHeaderColor,
}

const getBItems = (background: BackgroundType, index: number) => {
  const bItems: TabsProps['items'] = [
    {
      key: '11',
      label: '',
      children: <BackSolid background={background as SolidBackground} index={index} />,
      icon: <CodeIcon isDefaultColor={false} size={5} />,
    },
    {
      key: '22',
      label: '',
      children: <div className="flex justify-end">b</div>,
      icon: <GradientIcon isDefaultColor={true} size={5} />,
    },
    {
      key: '33',
      label: '',
      children: <div className="flex justify-end">c</div>,
      icon: <CodeIcon isDefaultColor={false} size={5} />,
    },
    {
      key: '44',
      label: '',
      children: <div className="flex justify-end">d</div>,
      icon: <CodeIcon isDefaultColor={false} size={5} />,
    },
    {
      key: '55',
      label: '',
      children: <div className="flex justify-end">e</div>,
      icon: <PhotoIcon isDefaultColor={false} size={5} />,
    },
  ]

  return bItems
}

const Background = () => {
  const dispatch = useDispatch()

  const { backgrounds } = useSelector((state) => state.image)

  const items: CollapseProps['items'] = []

  //const genExtra = () => <AddIcon isDefaultColor={true} />

  backgrounds.forEach((b, index) => {
    const bs = b as SolidBackground

    if (!bs.color) return <></>

    const isColorCovering = index > 0 && bs.color.a === 1

    items.push({
      key: index.toString(),
      label: (
        <div className="flex justify-between items-center group">
          <ColorBox type="solid" colors={[bs.color]} />

          <span>Solid</span>

          <div>
            {isColorCovering && <WarningIcon isDefaultColor={false} className="text-yellow-500" />}
            <Button
              className="ml-2"
              type="text"
              icon={
                b.isVisible ? (
                  <EyeIcon />
                ) : (
                  <EyeSlashIcon
                    isDefaultColor={false}
                    className="text-red-200 hover:text-red-500 group-hover:text-red-500 duration-500"
                  />
                )
              }
              onClick={() => {
                dispatch(b.isVisible ? hideBackground(index) : showBackground(index))
              }}
            />
            <Button type="text" icon={<XMarkIcon />} onClick={() => dispatch(deleteBackground(index))} />
          </div>
        </div>
      ),
      children: <Tab className="-mt-4" items={getBItems(b, index)} />,
      style: panelStyle,

      //  extra: genExtra(),
    })
  })

  const handleAddBackground = () => {
    const newBackground = {
      isVisible: true,
      color: { r: 0, g: 0, b: 0, a: 0.5 },
    }

    dispatch(addBackground(newBackground))
  }

  return (
    <div className="">
      <Collapse items={items} className="w-full" bordered={true} size="small" accordion={true} />
      <div className="flex justify-end">
        <Button className="mt-2" label={'New'} icon={<AddIcon />} onClick={handleAddBackground} />
      </div>
    </div>
  )
}

export default Background
