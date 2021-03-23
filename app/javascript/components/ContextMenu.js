import React from 'react'

function ContextMenu(props) {
  let characters

  props.characters ? characters = props.characters : characters = []

  let style = {
    top: `${props.xPos}px`,
    left: `${props.yPos}px`
  }

  let list = characters.filter(char=> char.attributes.found === 'f').map(char => {
    return <li key={char.id} 
               id={char.id} 
               onClick={()=>{props.handleMenuClick(char.id, props.xPer, props.yPer)}}>
                 {char.attributes.name}
            </li>})

  return (
    <div style={style} className="context-menu">
      <ul>
        {list}
      </ul>
    </div>
  )
}

export default ContextMenu
