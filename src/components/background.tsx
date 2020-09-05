import "./background.scss"

import Circle from "../content/icons/circle.inline.svg"
import React from "react"

const Background = () => (
  <>
    <div className="background-circle" id="background-circle-1">
      <Circle />
    </div>
    <div className="background-circle" id="background-circle-2">
      <Circle />
    </div>
  </>
)

export default Background
