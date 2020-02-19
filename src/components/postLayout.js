import React, { Component } from 'react'
import { graphql } from 'gatsby';
import Layout from './layout';

// Static query ==> used anywhere; does not accept variables; can't use context
// Page query ==> must be used on pages

export default class postLayout extends Component {
    render() {
        const { markdownRemark } = this.props.data;
        const { location } = this.props;

        console.log('postLayout this.props', this.props)
        return (
            <Layout location={location}>
                <h1>{markdownRemark.frontmatter.title}</h1>
                <div dangerouslySetInnerHTML={{
                    __html: markdownRemark.html
                }} />
            </Layout>
        )
    }
}

export const query = graphql`
    query PostQuery($slug: String!) {
    markdownRemark(fields:{
            slug: {
                eq: $slug   
            }
        }) {
            html
            frontmatter {
            title
            date
            slug
            }
        }
    }
`
