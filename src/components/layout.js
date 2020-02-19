
import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { Spring } from 'react-spring/renderprops';
import styled from 'styled-components';
import Header from "./header"
import Archive from "./archive"
import "./layout.css"
import Img from "gatsby-image"
import Theme from './Theme';

const MainLayout = styled.main`
  max-width: 100%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 4fr 1fr;
  grid-gap: 40px;
  padding-left: 50px;
  margin-top: 25px;
`

const ListGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1em;
  > article {
    /* border: solid 2px red; */
  }
`

const ImgWrapper = styled.div`
  picture {
    /* img {
      max-height: 400px;
      overflow: hidden;
    } */

  }
`

const Layout = ({ children, location }) => {
  console.log('location in layout', location)
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          description
        }
      }

      file(relativePath:{regex:"/bg/"}){
        childImageSharp {
          fluid(maxWidth: 2000) {
              ...GatsbyImageSharpFluid_noBase64
            }
          }
        }
    }
  `)

  return (
    <Theme>
      <Header
        siteTitle={data.site.siteMetadata.title}

      />

      <Spring
        from={{ height: location.pathname === '/' ? 0 : 400 }}
        to={{ height: location.pathname === '/' ? 400 : 0 }}
      >
        {props => (
          <div style={{ overflow: 'hidden', ...props }}>
            <Img style={{ maxHeight: 500 }} imgStyle={{ maxHeight: 500 }} fluid={data.file.childImageSharp.fluid} />
          </div>
        )}

      </Spring>

      <MainLayout>
        <ListGrid>{children}</ListGrid>
        <Archive />
      </MainLayout>

      <footer>
        © {new Date().getFullYear()}, Built with
          {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>

      </footer>

    </Theme>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

Layout.defaultProps = {
  location: {}
}

export default Layout
