import styled from "styled-components"
import colors from "../styles/colors"

const Content = styled.div`
  display: block;
  margin: 0;
  h1,h2,h3,h4,h5,h6 {
    color: ${props => props.dark ? colors.primary.oneHundred : colors.gray.nineHundred} !important;
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
    margin-bottom: 1rem;
  }
  small {
    color: ${props => props.dark ? colors.primary.threeHundred : colors.gray.eightHundred};
    display: block;
  }
  &:not(:last-child) {
    margin-bottom: 2rem;
  }
`

const ContentHeader = styled.h3`
  color: ${colors.gray.eightHundred};
  letter-spacing: 1px;
  font-size: 0.75rem;
`

const ContentBlock = styled.div`
  display: flex;
  margin-bottom: 1rem;
  p {
    &:first-child {
      margin-right: 1rem;
      min-width: 75px;
      font-weight: 700;
    }
  }
`

export { Content, ContentHeader,ContentBlock }
