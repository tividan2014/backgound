import Input from 'common/components/input'
import { AddIcon, EyeIcon, EyeSlashIcon, HorizontalIcon, VerticalIcon, XMarkIcon } from 'common/icons'
import { useDispatch, useSelector } from '../../../redux/hooks'
import { addBackground, setImageHeigth, setImageWidth } from 'features/image/store/imageSlice'
import Tab from 'common/components/tabs/Tabs'
import { CollapseProps } from 'antd'
import Button from 'common/components/button'
import Collapse from 'common/components/collapse'
import { CSSProperties } from 'react'
import { SolidBackground } from 'features/image/components/NestedDivs'

const panelStyle: React.CSSProperties = {
  background: '#f8f8f8',
}

const Background = () => {
  const dispatch = useDispatch()

  const { backgrounds } = useSelector((state) => state.image)

  const items: CollapseProps['items'] = []

  //const genExtra = () => <AddIcon isDefaultColor={true} />

  backgrounds.map((b, index) => {
    const color = (b as SolidBackground).color

    if (!color) return //TODO

    const style: CSSProperties = {
      backgroundColor: `rgba(${color.r}, ${color.g}, ${color.b}, ${color.a})`,
    }

    items.push({
      key: index.toString(),
      label: (
        <div className="flex justify-between items-center group">
          <span className="w-5 h-5" style={style}></span>
          <span>Solid</span>

          <div>
            {b.isVisible ? (
              <EyeIcon isDefaultColor={false} className="text-blue-400" />
            ) : (
              <EyeSlashIcon isDefaultColor={false} className="text-red-400" />
            )}

            <XMarkIcon className="ml-2" />
          </div>
        </div>
      ),
      children: <div>a</div>,
      style: panelStyle,

      //  extra: genExtra(),
    })
  })

  function handleOnClick(): void {
    const newBackground = {
      id: 1,
      isVisible: true,
      color: { r: 255, g: 0, b: 0, a: 0.2 },
    }
  }

  //dispatch(addBackground(newBackground))

  return (
    <div className="">
      <Collapse items={items} className="w-full" bordered={true} size="small" accordion={true} />
      {/* <div>
        <Tab placeholder={''} />
    
      </div> */}
      <div className="flex justify-end">
        <Button className="mt-2" label={'New'} icon={<AddIcon />} onClick={handleOnClick} />
      </div>
    </div>
  )
}

export default Background
