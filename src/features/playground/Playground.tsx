import Image from 'features/image/Image'
import Collapse from 'features/collapse/Collapse'

import { playgroundFlowItems } from './flowContent'

const Playground = () => {
  return (
    <>
      <Image />
      <Collapse items={playgroundFlowItems} className="mt-10 ml-10 w-80 absolute" />
    </>
  )
}

export default Playground
