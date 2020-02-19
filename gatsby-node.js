const path = require('path');

const { createFilePath } = require('gatsby-source-filesystem')

exports.createPages = ({ graphql, actions }) => {
    const { createPage } = actions;
    return new Promise((resolve, reject) => {
        graphql(`
            {
                allMarkdownRemark {
                    edges {
                        node {
                            html
                            excerpt
                            frontmatter {
                                slug
                            }
                            fields {
                                slug
                            }
                        }
                    }
                }
            }

        `).then(res => {
                res.data.allMarkdownRemark.edges.forEach(({ node }) => {
                    createPage({
                        path: `/posts${node.fields.slug}`,
                        component: path.resolve('./src/components/postLayout.js'),
                        context: {
                            slug: node.fields.slug,
                        }
                    })
                })
                resolve();
            })
    })

}


exports.onCreateNode = ({ node, boundActionCreators, getNode }) => {
    const { createNodeField } = boundActionCreators

    if (node.internal.type === `MarkdownRemark`) {
        const value = createFilePath({ node, getNode })
        createNodeField({
            name: `slug`,
            node,
            value,
        })
    }
}