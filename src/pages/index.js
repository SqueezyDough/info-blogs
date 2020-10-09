import React from 'react'
import { graphql } from 'gatsby'
import Layout from 'components/layout'
import SEO from 'components/seo'
import PostsList from 'components/posts-list'
import Stroke from 'components/stroke'
import { theme } from 'theme'

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || 'Title'
  const posts = data.allMarkdownRemark.nodes
  const projects = posts.filter(post => post.fields.slug.includes('projects'))
  const topics = posts.filter(post => post.fields.slug.includes('topics'))

  const stroke = {
    color: theme.primaryColorDark,
    yAxis: {
      start: true
    },
    xAxis: true,
    corner: true,
    reverse: true
  }

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

      <section className='main-content'>
        <PostsList posts={projects} category='Projects' strokePosition='left' />

        <div className='styled-wrapper'>
          <PostsList posts={topics} category='Topics' size='small' strokePosition='top' />
        </div>

        <Stroke className='main-content__stroke' stroke={stroke} />
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
