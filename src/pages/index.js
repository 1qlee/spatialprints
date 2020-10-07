import React, { useEffect, useState } from "react"
import { SwitchTransition, CSSTransition } from 'react-transition-group'
import { Link, graphql } from "gatsby"
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

import { Button } from "../components/button"
import { Column, Columns } from "../components/column"
import { Content, ContentSubtitle } from "../components/content"
import FlexBox from "../components/flexbox"
import Icon from "../components/icon"
import Image from "../components/image"
import Layout from "../components/layout"
import SEO from "../components/seo"

import colors from "../styles/colors"

const IndexPage = ({ data }) => {
  const [showImage, setShowImage] = useState(true)
  const [activeImage, setActiveImage] = useState(0)

  useEffect(() => {
    cycleProfiles()
  }, [])

  function cycleProfiles() {
    let counter = 0
    return setInterval(() => {
      if (counter < 2) {
        counter++
        return setActiveImage(counter)
      }
      else {
        counter = 0
        setActiveImage(counter)
        clearInterval()
      }
    }, 2000)
  }

  return (
    <Layout>
      <SEO title="Home" />
      <Columns>
        <Column width="500px">
          <Content>
            <h1>{data.contentfulWebPage.heading}</h1>
            <ContentSubtitle>
              {documentToReactComponents(data.contentfulWebPage.blurb.json)}
            </ContentSubtitle>
            <FlexBox margin="2rem 0">
              <div>
                <div style={{marginBottom: "1rem"}}>
                  <Icon icon="Hand" width="24px" height="24px" background={colors.yellow} color={colors.white} />
                </div>
                <h4>Handcrafted</h4>
                <p>All art is made by in-house artists by hand</p>
              </div>
              <div>
                <div style={{marginBottom: "1rem"}}>
                  <Icon icon="Contrast" width="24px" height="24px" background={colors.yellow} color={colors.white} />
                </div>
                <h4>No Limitations</h4>
                <p>Stretch your creative mind and we'll bring it to life</p>
              </div>
            </FlexBox>
            <Link to="/products/">
              <Button>
                <span>Discover Our Works</span>
                <Icon icon="ArrowRight" height="16px" width="16px" />
              </Button>
            </Link>
          </Content>
        </Column>
        <Column>
          <SwitchTransition>
            <CSSTransition
              key={activeImage}
              addEndListener={(node, done) => node.addEventListener("transitionend", done, false)}
              classNames="images"
              timeout={100}
              unmountOnExit
              >
              <Image className="has-shadow" objectFit="contain" loading="eager" fluid={data.contentfulWebPage.images[activeImage].fluid} />
            </CSSTransition>
          </SwitchTransition>
        </Column>
      </Columns>
    </Layout>
  )
}

export const query = graphql`
  query indexQuery {
    contentfulWebPage(title: { eq: "Home" }) {
      heading
      blurb {
        json
      }
      images {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
    }
  }
`

export default IndexPage
