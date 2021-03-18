import React from 'react'

function Game() {

  const handleClick = (event) => {
    console.log(event)
    console.log(event.target.scrollHeight)
    console.log(event.target.scrollWidth)
  }

  return (
    <div className="main-box">
      
      {/* <img onClick={handleClick} className="image" src="https://pbs.twimg.com/media/EwiLPxxW8AgScOJ?format=jpg&name=4096x4096" alt="" /> */}
      <img onClick={handleClick} className="image" src="https://64.media.tumblr.com/e29d5f32638580056a9ea0ede72d6632/tumblr_pf0abmmJJh1s6ylubo1_1280.jpg" alt="" />
      <div id="test-box"></div>
    </div>
  )
}

export default Game
