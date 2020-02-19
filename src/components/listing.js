import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import styled from 'styled-components'

const LISTING_QUERY = graphql`
    query BlogPostListing {
        allMarkdownRemark(limit:5, sort:{
            order:DESC
            fields:[frontmatter___date]
        }) {
            edges {
                node {
                    excerpt
                    frontmatter {
                        date(formatString: "MMMM DD, YYYY")
                        title
                        slug
                        }
                    fields {
                        slug
                    }
                }
            }
        }
    }
`

const Post = styled.article`
    box-shadow: ${props => props.theme.shadow};
    padding: 1rem;
    border-radius: 4px;
    margin-bottom: 1rem;
    background-color: white;
    align-self: center;
    width: 100%;
    height: 250px;
    
    a {
        color: #000;
        text-decoration: none;
    }
    h2 {
        margin-bottom: 0;
    }
    p {
        font-size: 0.8rem;
    }
    .read-more {
        font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto Mono, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
        font-size: 0.8rem;
        text-decoration: underline;
        color: #524763;
    }
`
const Listing = () => {
    const { allMarkdownRemark } = useStaticQuery(LISTING_QUERY);
    return (
        allMarkdownRemark.edges.map(({ node }) => (
            <Post key={node.frontmatter.slug}>
                <Link to={`posts${node.fields.slug}`}>
                    <h2>{node.frontmatter.title}</h2>
                </Link>
                <p>{node.frontmatter.date}</p>
                <p>{node.excerpt}</p>
                <Link className="read-more" to={`posts${node.fields.slug}`}>Read More</Link>
            </Post>
        ))
    )
}



export default Listing;
