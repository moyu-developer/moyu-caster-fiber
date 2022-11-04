import * as React from 'react';
import { Space } from 'antd'
import { useEditor } from '@craftjs/core'

const SetterRender = () => {

  const { actions, selected } = useEditor((state, query) => {
    console.log(state, 'state')
    const [currentNodeId] = state.events.selected;
    let selected;

    console.log(currentNodeId, 'currentNodeId')

    if ( currentNodeId ) {
      selected = {
        id: currentNodeId,
        name: state.nodes[currentNodeId].data.name,
        settings: state.nodes[currentNodeId].related && state.nodes[currentNodeId]?.related?.settings,
        isDeletable: query.node(currentNodeId).isDeletable()
      };
    }

    return {
      selected
    }
  })

  return (
   <Space>{selected ? React.createElement(selected?.settings) : 2}</Space>
  )
}

export default SetterRender