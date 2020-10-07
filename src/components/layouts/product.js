import { CSSTransition } from 'react-transition-group'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { Helmet } from "react-helmet"
import { Link, graphql } from "gatsby"
import axios from "axios"
import colors from "../../styles/colors"
import React, { useEffect, useState } from "react"
import styled from "styled-components"

import { Button, ButtonWrapper, ButtonLink } from "../button"
import { Columns, Column } from "../column"
import { Content, ContentHeader, ContentBlock } from "../content"
import { Details, Form, FieldSet, FieldSetElement, FormWrapper, Input, Label, Select, Textarea } from "../form"
import { ProductContainer, ProductContainerContent, ProductContainerImage, ProductDetails, ProductImage} from "../productComponents"
import FlexBox from "../flexbox"
import Icon from "../icon"
import Layout from "../layout"
import Notification from "../notification"
import SEO from "../seo"
import Tag from "../tag"
import Tray from "../tray"

const Product = ({ data, location }) => {
  const setHashLocation = hash => {
    const formattedHash = hash.slice(1)
    console.log(formattedHash)
    const currentProduct = allProducts.edges.findIndex(product => product.node.slug === formattedHash)
    console.log(currentProduct)
    if (currentProduct === -1) {
      return 0
    }
    else return currentProduct
  }

  const { currentCategory, allProducts } = data
  const [ showDetails, setShowDetails ] = useState(true)
  const [ showForm, setShowForm ] = useState(false)
  const [ currentProduct, setCurrentProduct ] = useState(() => setHashLocation(location.hash))
  const [ currentSize, setCurrentSize ] = useState()
  const [ test, setTest ] = useState()
  const [ serverState, setServerState ] = useState({
    submitting: false,
    status: null,
    notificationColor: colors.gray.eightHundred,
    notificationBackground: colors.blueNotificationBackground,
    notificationBorderColor: colors.primary.sixHundred,
    message: "Please fill out the form below and we will reach out to you with more details."
  })

  const handleServerResponse = (ok, msg, form) => {
    setServerState({
      submitting: false,
      status: ok,
      message: msg
    })
    if (ok) {
      form.reset()
      setServerState({
        submitting: false,
        status: ok,
        notificationColor: colors.gray.eightHundred,
        notificationBackground: colors.greenNotificationBackground,
        notificationBorderColor: colors.green,
        message: msg
      })
    }
    if (!ok) {
      setServerState({
        submitting: false,
        status: ok,
        notificationColor: colors.gray.eightHundred,
        notificationBackground: colors.redNotificationBackground,
        notificationBorderColor: colors.red,
        message: msg
      })
    }
  }

  const handleFormSubmit = e => {
    e.preventDefault()
    const form = e.target
    setServerState({
      submitting: true,
      message: "Sending...",
      notificationColor: colors.gray.eightHundred,
      notificationBackground: colors.yellowNotificationBackground,
      notificationBorderColor: colors.yellow
    })
    axios({
      method: "post",
      url: "https://getform.io/f/26109a6d-35a0-48a5-847d-ec0854a2ad52",
      data: new FormData(form)
    }).then(response => {
      handleServerResponse(true, "Your response has been successfully submitted.", form)
    }).catch(error => {
      handleServerResponse(false, "Something went wrong! Please try submitting your response again.", form)
    })
  }

  return (
    <Layout>
      <SEO title={allProducts.edges[currentProduct].node.title} />
      <ProductContainer>
        <ProductContainerContent>
          <CSSTransition
            in={showDetails}
            classNames="details"
            timeout={200}
            unmountOnExit
            onEnter={() => setShowForm(false)}
            onExit={() => setShowForm(true)}
            >
            <Details>
            {showDetails && (
              <>
                <Content>
                  <h1>{test}</h1>
                  <ProductDetails productTitle={allProducts.edges[currentProduct].node.title} categoryTitle={currentCategory.title} price={allProducts.edges[currentProduct].node.price} />
                  <div>
                    <ContentBlock>
                      <p className="heading">Material</p>
                      <div>
                        {documentToReactComponents(allProducts.edges[currentProduct].node.description.json)}
                      </div>
                    </ContentBlock>
                    <ContentBlock>
                      <p className="heading">Sizes</p>
                      <ButtonWrapper>
                        <Button
                          className={`is-small is-outlined ${currentSize === "S" ? `is-selected` : ""}`}
                          onClick={e => setCurrentSize(e.target.textContent)}>
                          S
                        </Button>
                        <Button
                          className={`is-small is-outlined ${currentSize === "M" ? `is-selected` : ""}`}
                          onClick={e => setCurrentSize(e.target.textContent)}>
                          M
                        </Button>
                        <Button
                          className={`is-small is-outlined ${currentSize === "L" ? `is-selected` : ""}`}
                          onClick={e => setCurrentSize(e.target.textContent)}>
                          L
                        </Button>
                      </ButtonWrapper>
                    </ContentBlock>
                  </div>
                </Content>
                <Button onClick={() => setShowForm(true)} className="is-fullwidth">Create Your Own</Button>
              </>
            )}
            </Details>
          </CSSTransition>
          <CSSTransition
            in={showForm}
            classNames="form"
            timeout={200}
            unmountOnExit
            onEnter={() => setShowDetails(false)}
            onExit={() => setShowDetails(true)}
            >
            <FormWrapper>
              <Content>
                <h1>Make an Inquiry</h1>
                <Notification className={serverState.submitting ? "is-submitting" : ""} color={serverState.notificationColor} background={serverState.notificationBackground} borderColor={serverState.notificationBorderColor}>
                  <p>{serverState.message}</p>
                </Notification>
              </Content>
              <Form id="inquiry" method="post" action="https://getform.io/f/26109a6d-35a0-48a5-847d-ec0854a2ad52" onSubmit={handleFormSubmit}>
                <FieldSet>
                  <FieldSetElement>
                    <Label htmlFor="name">Name</Label>
                    <Input type="text" name="name" placeholder="Full name" id="name" required></Input>
                  </FieldSetElement>
                  <FieldSetElement>
                    <Label htmlFor="email">Email</Label>
                    <Input type="email" name="email" placeholder="name@email.com" id="email" required></Input>
                  </FieldSetElement>
                </FieldSet>
                <FieldSet>
                  <FieldSetElement>
                    <Label htmlFor="material">Material</Label>
                    <Select>
                      <select id="material" name="material" id="material">
                        {allProducts.edges.map(({ node: product }, index) => {
                          if (index === currentProduct) {
                            return (
                              <option key={product.productId} value={product.title} defaultValue selected>{product.title}</option>
                            )
                          }
                          else {
                            return (
                              <option key={product.productId} value={product.title}>{product.title}</option>
                            )
                          }
                        })}
                      </select>
                    </Select>
                  </FieldSetElement>
                  <FieldSetElement>
                    <Label htmlFor="size">Size</Label>
                    <Select>
                      <select id="size" name="size" id="size">
                        <option value="Small">Small</option>
                        <option value="Medium">Medium</option>
                        <option value="Large">Large</option>
                      </select>
                    </Select>
                  </FieldSetElement>
                </FieldSet>
                <div style={{marginTop: `1rem`}}>
                  <Label htmlFor="message">Message</Label>
                  <Textarea name="message" id="message" rows="5" placeholder="Please describe what kind of artwork you want to create." required></Textarea>
                </div>
              </Form>
              <FlexBox alignItems="center" justifyContent="space-between">
                <ButtonLink onClick={() => setShowForm(false)}>
                  <Icon icon="ArrowLeft" height="1rem" width="1rem" />
                  <span>Go Back</span>
                </ButtonLink>
                <Button form="inquiry" type="submit" disabled={serverState.submitting}>Submit</Button>
              </FlexBox>
            </FormWrapper>
          </CSSTransition>
        </ProductContainerContent>
        <ProductContainerImage>
          <ProductImage allProducts={allProducts} currentProduct={currentProduct} />
        </ProductContainerImage>
      </ProductContainer>
      <Tray setCurrentProduct={setCurrentProduct} allProducts={allProducts} currentProduct={currentProduct}></Tray>
    </Layout>
  )
}

export const query = graphql`
  query ProductQuery($category: String!) {
    currentCategory: contentfulCategory(
      title: { eq: $category }
    ) {
      title
      tagline
      description {
        json
      }
    }
    allProducts: allContentfulSpatialPrint(
      filter: { category: { eq: $category }},
      sort: { fields: [title], order: ASC }
    ) {
      edges {
        node {
          availability
          price
          productId
          slug
          title
          thumbnail {
            fluid {
              ...GatsbyContentfulFluid_withWebp
            }
          }
          images {
            title
            fluid {
              ...GatsbyContentfulFluid_withWebp
            }
            fixed(width: 840) {
              ...GatsbyContentfulFixed_withWebp
            }
          }
          description {
            json
          }
        }
      }
    }
  }
`

export default Product
