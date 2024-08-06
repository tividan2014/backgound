import Image from 'features/image'
import Collapse from 'features/collapse'

import { playgroundFlowItems } from './flowContent'

const Playground = () => {
  return (
    <>
      <Image />
      <Collapse items={playgroundFlowItems} className="mt-10 ml-10 w-3/12 min-w-64 max-w-96 absolute" />
    </>
  )
}

export default Playground
