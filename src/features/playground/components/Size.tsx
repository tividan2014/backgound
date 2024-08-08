import Input from 'common/components/input'
import { AddIcon, HorizontalIcon, VerticalIcon, XMarkIcon } from 'common/icons'
import { useDispatch, useSelector } from '../../../redux/hooks'
import { setImageHeigth, setImageWidth } from 'features/image/store/imageSlice'
import RadioGroup from 'common/components/radioGroup'

const options = [
  { label: <AddIcon />, value: 'landscape' },
  { label: <AddIcon />, value: 'portrait' },
]

const options2 = [
  { label: <AddIcon />, value: '11' },
  { label: <AddIcon />, value: '23' },
  { label: <AddIcon />, value: '43' },
  { label: <AddIcon />, value: '169' },
]

const Size = () => {
  const dispatch = useDispatch()

  const { width, height } = useSelector((state) => state.image)

  return (
    <>
      <div className="flex items-center">
        <Input
          value={width}
          placeholder="Horizontal"
          icon={<HorizontalIcon />}
          suffix="px"
          min={0}
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
          min={0}
          max={10000}
          onChange={(value) => dispatch(setImageHeigth(value))}
        />
      </div>
      {/* <div className="mt-4 flex justify-between">
        <RadioGroup items={options} />
        <RadioGroup items={options2} />
      </div> */}
    </>
  )
}

export default Size
