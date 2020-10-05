import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import Stroke from 'components/stroke'
import BlockHeading from 'elements/block-heading'
import { theme } from 'theme'
import { baseStyling } from './styles'

const stroke = {
  color: theme.primaryColor,
  yAxis: {
    start: true
  },
  xAxis: true,
  corner: true,
  reverse: false
}

const PostsList = ({ className, posts }) => (
  <div className={className}>
    <BlockHeading title='Projects' />
    <ol style={{ listStyle: 'none' }}>
      {posts.map(post => {
        const title = post.frontmatter.title || post.fields.slug

        return (
          <li key={post.fields.slug}>
            <article
              className='post-list-item'
              itemScope
              itemType='http://schema.org/Article'
            >
              <header>
                <h2>
                  <Link to={post.fields.slug} itemProp='url'>
                    <span itemProp='headline'>{title}</span>
                  </Link>
                </h2>
                <small>{post.frontmatter.date}</small>
              </header>
              <section>
                <p
                  dangerouslySetInnerHTML={{
                    __html: post.frontmatter.description || post.excerpt
                  }}
                  itemProp='description'
                />
              </section>
            </article>
          </li>
        )
      })}
    </ol>
    <Stroke stroke={stroke} />
  </div>
)

export default styled(PostsList)`
  ${baseStyling}
`
