import React from 'react'
import { graphql } from 'gatsby'
import Layout from 'components/layout'
import SEO from 'components/seo'
import PostsList from 'components/posts-list'

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || 'Title'
  const posts = data.allMarkdownRemark.nodes
  const projects = posts.filter(post => post.fields.slug.includes('projects'))
  const topics = posts.filter(post => post.fields.slug.includes('topics'))

  if (posts.length === 0) {
    return (
      <Layout location={location} title={siteTitle}>
        <SEO title='All posts' />
        <p>
          No blog posts found. Add markdown posts to "content/blog" (or the
          directory you specified for the "gatsby-source-filesystem" plugin in
          gatsby-config.js).
        </p>
      </Layout>
    )
  }

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title='All posts' />
      <PostsList posts={projects} category='Projects' />

      <section class='styled-wrapper'>
        <PostsList posts={topics} category='Topics' size='small' />
      </section>
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
          tags
          site { 
            url 
            thumbnail
          }
        }
      }
    }
  }
`
