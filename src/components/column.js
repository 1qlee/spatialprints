import styled from "styled-components"

const Columns = styled.div`
  display: flex;
`

const Column = styled.div`
  height: 100%;
  width: ${props => props.width ? props.width : "50%"};
  &:first-child {
    margin-right: 2rem;
  }
`

export { Columns, Column }
