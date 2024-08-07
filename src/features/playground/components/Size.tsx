import Input from 'common/components/input'
import { HorizontalIcon, VerticalIcon, XMarkIcon } from 'common/icons'
import { useDispatch, useSelector } from '../../../redux/hooks'
import { setImageHeigth, setImageWidth } from 'features/image/store/imageSlice'

const Size = () => {
  const dispatch = useDispatch()

  const { width, height } = useSelector((state) => state.image)

  return (
    <div className="flex items-center">
      <Input
        value={width}
        placeholder="Horizontal"
        icon={<HorizontalIcon />}
        suffix="px"
        min={10}
        max={10000}
        onChange={(value) => dispatch(setImageWidth(value))}
      />
      <XMarkIcon />
      <span className="ml-2">
        <XMarkIcon isDefaultColor={false} />
      </span>
      <Input
        value={height}
        className="ml-2"
        placeholder="Vertical"
        icon={<VerticalIcon />}
        suffix="px"
        min={10}
        max={10000}
        onChange={(value) => dispatch(setImageHeigth(value))}
      />
    </div>
  )
}

export default Size
