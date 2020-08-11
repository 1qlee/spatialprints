import styled from "styled-components"

const Catalog = styled.main`
  display: block;
`

const CatalogSection = styled.section`
  padding: 1rem 0;
`

const CatalogItems = styled.div`
  display: flex;
  flex-wrap: wrap;
`

const CatalogItem = styled.div`
  margin-top: 1rem;
  p {
    margin-top: 1rem;
    text-align: center;
    text-decoration: none;
    color: black;
  }
  &:not(:last-child) {
    margin-right: 1rem;
  }
`

const CatalogHeader = styled.div`
  position: relative;
  margin-bottom: 1rem;
  h4 {
    display: inline-block;
    background: white;
    z-index: 1;
    padding-right: 1rem;
    font-weight: 400;
    text-transform: uppercase;
  }
  &::before {
    content: "";
    position: absolute;
    left: 15px;
    top: calc(50% - 1px);
    height: 1px;
    width: calc(100% - 1rem);
    background-color: gainsboro;
    z-index: -1;
  }
`

export { Catalog, CatalogSection, CatalogHeader, CatalogItems, CatalogItem }
