import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import Listing from '../components/listing'
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = (props) => (
  <Layout location={props.location}>
    <SEO title="Home" />
    <Listing />
  </Layout>
)

export default IndexPage
