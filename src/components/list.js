import styled from "styled-components"

const List = styled.ul`
  list-style: none;
  padding-right: 1rem;
  max-height: 300px;
  overflow-y: auto;
  &::-webkit-scrollbar {
    height: 1rem;
    width: 0.75rem;
  }
  &::-webkit-scrollbar-thumb {
    background-color: gainsboro;
    outline: 1px solid slategrey;
    border-radius: 0.5rem;
  }
`

const ListItemWrapper = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  &:not(:last-child) {
    margin-bottom: 1rem;
  }
`

const ListItem = styled.p`
  font-size: 0.8rem;
  margin: 0;
  &.is-available {
    color: green;
  }
  &:first-child {
    margin-right: 1rem;
  }
`

export { List, ListItemWrapper, ListItem }
