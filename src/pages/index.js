import React from "react"
import Layout from "../components/layout"
import Listing from '../components/listing'
import SEO from "../components/seo"

// import Theme from '../components/Theme'
import styled from 'styled-components'

const Container = styled.main`
  background-color: ${props => props.theme.backgroundGray};
`
const IndexPage = (props) => (
  <Container>

    <Layout location={props.location}>
      <SEO title="Home" />
      <Listing />
    </Layout>

  </Container>
)

export default IndexPage
