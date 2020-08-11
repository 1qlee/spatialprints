import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import colors from "../styles/colors"

const ThumbnailRow = styled.div`
  display: flex;
  align-items: center;
  overflow-x: auto;
  padding-bottom: 1rem;
  width: 100%;
  &::-webkit-scrollbar {
    height: 0.75rem;
    width: 1rem;
  }
  &::-webkit-scrollbar-thumb {
    background-color: gainsboro;
    outline: 1px solid slategrey;
    border-radius: 0.5rem;
  }
`

const Thumbnail = styled.figure`
  margin-top: 1rem;
  transition: transform 0.2s;
  will-change: transform;
  .gatsby-image-wrapper {
    border-radius: 0.5rem;
    height: 75px;
    width: 100px;
  }
  &.is-active {
    transform: scale(0.95);
    .gatsby-image-wrapper {
      border: 5px solid ${colors.primary.sixHundred};
    }
  }
  &:not(:last-child) {
    margin-right: 1rem;
  }
  &:hover {
    cursor: pointer;
    &:not(.is-active) {
      transform: scale(1.05);
    }
  }
`

const MainProductImage = styled.figure`
  width: 100%;
  .gatsby-image-wrapper {
    height: 600px;
    border-radius: 0.5rem;
  }
`

class ProductImages extends React.Component {
  state = {
    activeImage: 0,
    allImages: this.props.images,
    currentImage: this.props.images[0]
  }

  handleClick = (index) => {
    this.setState({
      activeImage: index,
      currentImage: this.props.images[index]
    })
  }

  render() {
    return (
      <div style={{marginBottom:"1rem"}}>
        <MainProductImage>
          <Img fluid={this.state.currentImage.fluid} alt={this.state.currentImage.alt} imgStyle={{objectFit:"cover"}} />
        </MainProductImage>
        <ThumbnailRow>
          {this.state.allImages.map((image, index) => (
            <Thumbnail key={index} className={this.state.activeImage === index ? "is-active" : null} onClick={() => this.handleClick(index)}>
              <Img fluid={image.fluid} alt={image.alt} imgStyle={{objectFit:"cover"}} />
            </Thumbnail>
          ))}
        </ThumbnailRow>
      </div>
    )
  }
}

export default ProductImages
