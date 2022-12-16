
import { Layers } from '@craftjs/layers';


const Layer = () => {
  return (
    <div>
      111
    </div>
  )
}

export const LayersManage = () => {
  return (
    <div>
      <Layers 
        renderLayer={Layer}
      />
    </div>
  )
}