import React, { useState } from "react"
import styled from "styled-components"
import colors from "../styles/colors"

import { Button } from "./button"
import Tag from "./tag"
import Image from "./image"

const StyledTray = styled.div`
  display: flex;
  background-color: ${colors.primary.sixHundred};
  color: ${colors.white};
  padding: 1rem;
  width: 100%;
`

function Tray({ images }) {


  return (
    <StyledTray>
      <div>
        <Button>Previous</Button>
        <Button>Next</Button>
      </div>
      <div style={{display:'flex'}}>
        {images.map(image => (
          <Image fluid={image.fluid} height="50px" width="50px" />
        ))}
      </div>
    </StyledTray>
  )
}


export default Tray
