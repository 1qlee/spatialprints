import { CSSTransition } from 'react-transition-group'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { Helmet } from "react-helmet"
import { Link, graphql } from "gatsby"
import colors from "../../styles/colors"
import React, { useState } from "react"
import styled from "styled-components"

import { Button, ButtonWrapper, ButtonLink } from "../button"
import { Columns, Column } from "../column"
import { Content, ContentHeader, ContentBlock } from "../content"
import { Details, Form, FormWrapper, Input, Label, Select, Textarea } from "../form"
import FlexBox from "../flexbox"
import Icon from "../icon"
import Layout from "../layout"
import Notification from "../notification"
import ProductImage from "../productimage"
import SEO from "../seo"
import Tag from "../tag"
import Tray from "../tray"

const Product = ({ data }) => {
  const { currentCategory, allProducts } = data
  const [ showDetails, setShowDetails ] = useState(true)
  const [ showForm, setShowForm ] = useState(false)
  const [ currentProduct, setCurrentProduct ] = useState(0)
  const [ currentSize, setCurrentSize ] = useState()

  return (
    <Layout>
      <SEO title={allProducts.edges[currentProduct].node.title} />
      <Columns>
        <Column width="30%">
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
                  <h1 style={{marginBottom: `1rem`, textTransform: `capitalize`}}>{currentCategory.title}</h1>
                  <p>{currentCategory.tagline}</p>
                  <div>
                    <ContentHeader>
                      <p>{allProducts.edges[currentProduct].node.title}</p>
                    </ContentHeader>
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
                  <Notification color={colors.gray.eightHundred} background={colors.yellow}>
                    <p>Reach out to us by filling out the form below and we'll send you a quote as soon as possible!</p>
                  </Notification>
                </Content>
                <Form>
                  <FlexBox>
                    <div>
                      <Label htmlFor="name">Name</Label>
                      <Input placeholder="Full name" id="name"></Input>
                    </div>
                    <div>
                      <Label htmlFor="email">Email</Label>
                      <Input placeholder="name@email.com" id="email"></Input>
                    </div>
                  </FlexBox>
                  <FlexBox>
                    <div style={{width:"100%"}}>
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
                    </div>
                    <div style={{width:"100%"}}>
                      <Label htmlFor="size">Size</Label>
                      <Select>
                        <select id="size" name="size" id="size">
                          <option value="Small">Small</option>
                          <option value="Medium">Medium</option>
                          <option value="Large">Large</option>
                        </select>
                      </Select>
                    </div>
                  </FlexBox>
                  <div style={{marginTop: `1rem`}}>
                    <Label htmlFor="message">Message</Label>
                    <Textarea id="message" rows="5" placeholder="What kind of project is it?"></Textarea>
                  </div>
                </Form>
                <FlexBox alignItems="center" justifyContent="space-between">
                  <ButtonLink onClick={() => setShowForm(false)}>
                    <Icon icon="ArrowLeft" height="1rem" width="1rem" />
                    <span>Go Back</span>
                  </ButtonLink>
                  <Button>Submit</Button>
                </FlexBox>
            </FormWrapper>
          </CSSTransition>
        </Column>
        <Column width="70%">
          <ProductImage allProducts={allProducts} currentProduct={currentProduct} />
        </Column>
      </Columns>
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
          productId
          slug
          tagline
          title
          thumbnail {
            fluid {
              ...GatsbyContentfulFluid
            }
          }
          images {
            title
            fluid {
              ...GatsbyContentfulFluid
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
