import styled from "styled-components"

const Columns = styled.div`
  display: flex;
`

const Column = styled.div`
  height: 100%;
  padding: 0 1rem;
  width: ${props => props.width ? props.width : "50%"};
`

export { Columns, Column }
