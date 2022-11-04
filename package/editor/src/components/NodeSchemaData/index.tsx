import { useEditor } from '@craftjs/core'
import { Collapse } from 'antd'
import ReactJsonView from 'react-json-view'

export const NodeSchemaData = () => {

  const { query } = useEditor()

  return (
    <Collapse>
      <Collapse.Panel key="fx" header="Fx" >
        <ReactJsonView displayDataTypes indentWidth={2} iconStyle="square" src={JSON.parse(query.serialize())} />
      </Collapse.Panel>
    </Collapse>
  )
}