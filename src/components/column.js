import styled from "styled-components"

const Columns = styled.div`
  display: flex;
  align-items: center;
  height: calc(100vh - 169px);
  padding: 1rem 0;
  @media only screen and (max-width: 1533px) {
    padding: 1rem;
  }
  @media only screen and (max-width: 1100px) {
    flex-direction: column-reverse;
    height: 100%;
  }
`

const Column = styled.div`
  width: ${props => props.width ? props.width : "50%"};
  &:first-child {
    margin-right: 2rem;
  }
  &:nth-child(2) {
    position: absolute;
    right: 0;
  }
  @media only screen and (max-width: 1100px) {
    &:nth-child(2) {
      position: relative;
      margin-bottom: 2rem;
      width: 80%;
    }
  }
  @media only screen and (max-width: 700px) {
    &:first-child {
      width: 100%;
      padding: 0 1rem;
    }
    &:nth-child(2) {
      width: 100%;
    }
  }
`

export { Columns, Column }
