import styled from "styled-components"
import colors from "../styles/colors"

const Content = styled.div`
  display: block;
  margin: 0;
  h1,h2,h3,h4,h5,h6 {
    color: ${props => props.dark ? colors.primary.oneHundred : colors.gray.nineHundred};
    margin-left: 0;
    margin-right: 0;
    margin-top: 0;
    padding-bottom: 0;
    padding-left: 0;
    padding-right: 0;
    padding-top: 0;
    margin-bottom: 1rem;
    color: inherit;
    text-rendering: optimizeLegibility;
    line-height: 1.2;
    text-align: ${props => props.textAlignCenter ? props.textAlignCenter : "left"};
  }
  p {
    color: ${props => props.dark ? colors.primary.threeHundred : colors.gray.eightHundred};
    line-height: 1.5;
    &:not(:last-child) {
      margin-bottom: 1rem;
    }
  }
  small {
    color: ${props => props.dark ? colors.primary.threeHundred : colors.gray.eightHundred};
    display: block;
  }
  &:not(:last-child) {
    margin-bottom: 2rem;
  }
`

const ContentHeader = styled.div`
  margin-bottom: 1rem;
  border-bottom: 1px solid ${colors.yellow};
  p {
    text-transform: uppercase;
    display: inline-block;
    letter-spacing: 1px;
    border-radius: 0.25rem 0.25rem 0 0;
    background-color: ${colors.yellow};
    font-size: 0.75rem;
    font-family: "Josefin Sans";
    text-align: center;
    padding: 0.25rem 0.5rem;
  }
`

const ContentBlock = styled.div`
  display: flex;
  margin-bottom: 1rem;
  p {
    &.heading {
      margin-right: 1rem;
      min-width: 75px;
      font-weight: 700;
      white-space: nowrap;
    }
  }
`

export { Content, ContentHeader,ContentBlock }
