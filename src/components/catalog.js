import styled, { keyframes } from "styled-components"
import colors from "../styles/colors"

const shadowForm = keyframes`
  from {
    opacity: 0;
    background-color: transparent;
  }
  to {
    opacity: 1;
    background-color: ${colors.gray.threeHundred};
    transform: translate(-10px,10px);
  }
`

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`

const Catalog = styled.main`
  display: flex;
  flex-wrap: wrap;
`

const CatalogSection = styled.section`
  padding: 1rem 0;
`

const CatalogItems = styled.div`
  animation: ${fadeIn} 0.2s linear;
  width: 300px;
  .catalog-content {
    padding: 1rem;
    border-radius: 0.5rem;
    border: 2px solid transparent;
    transition: border-color 0.2s;
  }
  figure {
    margin-bottom: 2rem;
    transition: transform 0.2s;
    will-change: transform;
    &::before {
      animation: ${shadowForm} 0.4s cubic-bezier(0.16, 1, 0.3, 1);
      content: "";
      height: 100%;
      width: 100%;
      background: ${colors.gray.threeHundred};
      left: 0;
      top: 0;
      position: absolute;
      border-radius: 0.5rem;
      transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
      transform: translate(-10px,10px);
    }
  }
  h4 {
    margin: 1rem 0;
    text-transform: capitalize;
    text-align: center;
  }
  &:hover {
    .catalog-content {
      box-shadow: 1px 1px 4px ${colors.shadow.float};
      border-color: ${colors.primary.sixHundred};
    }
    figure {
      transform: translate(-5px, 5px);
      &::before {
        transform: translate(-5px, 5px);
        background: ${colors.gray.threeHundred};
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
  a {
    &:focus {
      .gatsby-image-wrapper {
        border: 2px solid ${colors.primary.sixHundred};
      }
    }
  }
  &:not(:last-child) {
    margin-right: 2rem;
    margin-bottom: 2rem;
  }
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
