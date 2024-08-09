import Input from 'common/components/input'
import {
  AddIcon,
  CodeIcon,
  EyeIcon,
  EyeSlashIcon,
  HorizontalIcon,
  PhotoIcon,
  VerticalIcon,
  XMarkIcon,
} from 'common/icons'
import { useDispatch, useSelector } from '../../../redux/hooks'
import {
  addBackground,
  deleteBackground,
  hideBackground,
  setImageHeigth,
  setImageWidth,
  showBackground,
  SolidBackground,
} from 'features/image/store/imageSlice'
import Tab from 'common/components/tabs/Tabs'
import { CollapseProps, Slider, TabsProps } from 'antd'
import Button from 'common/components/button'
import Collapse from 'common/components/collapse'
import { CSSProperties } from 'react'
import { backgroundHeaderColor } from 'common/constants'
import ColorPicker from 'common/components/colorPicker'
import ColorBox from 'common/components/colorBox'

const panelStyle: CSSProperties = {
  background: backgroundHeaderColor,
}

const bItems: TabsProps['items'] = [
  {
    key: '11',
    label: '',
    children: (
      <div className="grid grid-cols-2">
        <span>Color</span>
        <ColorPicker placeholder={''} />
        <span>Transparency</span>
        <Slider />
      </div>
    ),
    icon: <CodeIcon isDefaultColor={false} size={5} />,
  },
  {
    key: '22',
    label: '',
    children: <div className="flex justify-end">b</div>,
    icon: <CodeIcon isDefaultColor={false} size={5} />,
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

const Background = () => {
  const dispatch = useDispatch()

  const { backgrounds } = useSelector((state) => state.image)

  const items: CollapseProps['items'] = []

  //const genExtra = () => <AddIcon isDefaultColor={true} />

  backgrounds.forEach((b, index) => {
    const color = (b as SolidBackground).color

    if (!color) return <></>

    items.push({
      key: index.toString(),
      label: (
        <div className="flex justify-between items-center group">
          <ColorBox type="solid" colors={[color]} />

          <span>Solid</span>

          <div>
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
      children: <Tab className="-mt-4" items={bItems} />,
      style: panelStyle,

      //  extra: genExtra(),
    })
  })

  const handleOnClick = () => {
    const newBackground = {
      isVisible: true,
      color: { r: 255, g: 0, b: 0, a: 0.2 },
    }

    dispatch(addBackground(newBackground))
  }

  return (
    <div className="">
      <Collapse items={items} className="w-full" bordered={true} size="small" accordion={true} />
      <div className="flex justify-end">
        <Button className="mt-2" label={'New'} icon={<AddIcon />} onClick={handleOnClick} />
      </div>
    </div>
  )
}

export default Background
