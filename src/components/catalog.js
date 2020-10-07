import styled from "styled-components"
import colors from "../styles/colors"

const Catalog = styled.main`
  display: grid;
  grid-gap: 1rem 2rem;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-template-rows: auto;
  grid-auto-rows: 1rem;
  margin-top: 2rem;
  @media only screen and (max-width: 1533px) {
    padding: 1rem;
  }
  @media only screen and (max-width: 1025px) {
    grid-template-columns: repeat(auto-fit, minmax(30%, 1fr));
  }
  @media only screen and (max-width: 590px) {
    grid-template-columns: repeat(auto-fit, minmax(40%, 1fr));
  }
`

const CatalogItems = styled.div`
  max-width: 300px;
  figure {
    margin-bottom: 2rem;
    transition: transform 0.2s;
    will-change: transform;
  }
  &:hover {
    figure {
      transform: translate(-5px, 5px);
      &::before {
        transform: translate(-5px, 5px);
      }
    }
  }
  &:active {
    figure {
      transform: translate(-5px, 7px);
      &::before {
        top: 1px;
        left: 0;
        transform: translate(0,0);
      }
    }
  }
`

const CatalogContent = styled.div`
  max-width: 300px;
  h4 {
    color: ${colors.gray.eightHundred};
    margin-bottom: 0.25rem;
    text-transform: capitalize;
  }
  p {
    color: ${colors.gray.sixHundred};
    line-height: 1.5;
  }
`

export { Catalog, CatalogItems, CatalogContent }
