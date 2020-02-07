import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import styled from 'styled-components'

const POST_ARCHIVE_QUERY = graphql`
query BlogPostArchive {
        allMarkdownRemark(limit:5, sort:{
            order:DESC
            fields:[frontmatter___date]
        }) {
            edges {
                node {
                    frontmatter {
                        title
                        slug
                        }
                    }
                }
        }
    }
`;

const ArchiveList = styled.ul`
    padding: 0;
    margin: 0;
    list-style: none;
    a {
        font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto Mono, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
        font-size: 0.8rem;
        text-decoration: underline;
        color: #524763;
    }
`

const Archive = () => {
    const { allMarkdownRemark } = useStaticQuery(POST_ARCHIVE_QUERY);

    return (
        <>
            <aside>
                <h3>Archive</h3>
                <ArchiveList>
                    {allMarkdownRemark.edges.map(edge => (
                        <li
                            key={edge.node.frontmatter.slug}
                        >
                            <Link to={`/posts${edge.node.frontmatter.slug}`}>
                                {edge.node.frontmatter.title}
                            </Link>
                        </li>
                    ))}
                </ArchiveList>

            </aside>
        </>
    )
}

export default Archive
