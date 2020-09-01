import React from "react"
import styled from "styled-components"
import colors from "../styles/colors"

const StyledNotification = styled.div`
  background-color: ${props => props.background};
  box-shadow: 0 2px 8px ${colors.shadow.float}, 0 -2px 8px ${colors.shadow.float};
  color: ${props => props.color};
  padding: 1rem;
  border-radius: 0.25rem;
  margin-bottom: 1rem;
  p {
    line-height: 1.25;
    color: ${props => props.color};
    margin: 0;
  }
`

function Notification(props) {
  return (
    <StyledNotification color={props.color} background={props.background}>
      {props.children}
    </StyledNotification>
  )
}

export default Notification
