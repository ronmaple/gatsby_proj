const path = require('path');

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
                        }
                    }
                }
            }

        `).then(res => {
                res.data.allMarkdownRemark.edges.forEach(({ node }) => {
                    createPage({
                        path: `/posts${node.frontmatter.slug}`,
                        component: path.resolve('./src/components/postLayout.js'),
                        context: {
                            slug: node.frontmatter.slug,
                        }
                    })
                })
                resolve();
            })
    })

}