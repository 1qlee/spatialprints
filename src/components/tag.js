import styled from "styled-components"
import colors from "../styles/colors"

const Tag = styled.span`
  font-size: ${props => props.fontSize ? props.fontSize : "0.7rem"};
  background-color: ${props => props.background ? props.background : colors.primary.sixHundred};
  color: white;
  display: inline-flex;
  border-radius: 1rem;
  align-items: center;
  justify-content: center;
  letter-spacing: 1px;
  line-height: 1;
  padding: 0.25rem 0.5rem;
  height: 1.5rem;
  text-align: center;
  &:not(:last-child) {
    margin-bottom: 1rem;
  }
`

export default Tag
