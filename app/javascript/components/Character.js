import React from 'react'

function Character(props) {

  let image, name, title, foundStyle
  if (props.character){
    let character = props.character.attributes 
    image = props.requestImageFiles('./' + character.imgsrc)
    name = character.name 
    title = character.title
    character.found === "t" ? foundStyle = "found" : foundStyle=""
  } else {
    image = ''
    name = 'Placeholder'
    title = 'Placeholder'
  }

  return (
    <div className={`flex-wrapper ${foundStyle}`}>
      <img src={image} alt="" className="character-icon"/>
      <div className="wrapper">
        <p className="character-name">{name}</p>
        <p className="character-title">{title}</p>  
      </div>
    </div>
  )
}

export default Character
