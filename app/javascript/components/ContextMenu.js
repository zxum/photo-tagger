import React from 'react'

function ContextMenu(props) {
  console.log(props)
  let characters

  props.characters ? characters = props.characters : characters = []

  let style = {
    top: `${props.xPos}px`,
    left: `${props.yPos}px`
  }

  return (
    <div style={style} className="context-menu">
      This is a context menu
    </div>
  )
}

export default ContextMenu
