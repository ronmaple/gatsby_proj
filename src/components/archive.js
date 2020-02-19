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
                    fields {
                        slug
                    }
                    frontmatter {
                        title
                        slug
                        }
                    }
                }
        }
    }
`;

const ArchiveAside = styled.aside`
    background-color: white;
    height: auto;
    right: 0;
    padding: 1rem;
    width: 90%;
    border-radius: 5px;
    box-shadow: ${props => props.theme.shadow};
    height: 300px;
`

const ArchiveTitle = styled.div`
    background-color: ${props => props.theme.colors.darkBlue};
    padding: 0.5em 0.5em 0em 0.5em;

    h3 {
        color: white;
    }
`

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
            <ArchiveAside>
                <ArchiveTitle>
                    <h3>Latest Posts</h3>
                </ArchiveTitle>
                <ArchiveList>
                    {allMarkdownRemark.edges.map(edge => (
                        <li
                            key={edge.node.fields.slug}
                        >
                            <Link to={`/posts${edge.node.fields.slug}`}>
                                {edge.node.frontmatter.title}
                            </Link>
                        </li>
                    ))}
                </ArchiveList>

            </ArchiveAside>
        </>
    )
}

export default Archive
