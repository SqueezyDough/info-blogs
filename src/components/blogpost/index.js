import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import Heading from 'elements/heading'
import Anchor from 'elements/anchor'
import Text from 'elements/text'

import { baseStyling } from './styles'

const Header = ({ className, post }) => {
  if (!post) {
    return null
  }

  const title = post.frontmatter.title || post.fields.slug

  return (
    <li className={className} key={post.fields.slug}>
      <article
        className='post-list-item'
        itemScope
        itemType='http://schema.org/Article'
      >
        <header>
          <Heading as='h2'>
            <Link to={post.fields.slug} itemProp='url'>
              <span itemProp='headline'>{title}</span>
            </Link>
          </Heading>
        </header>
        <section>
          <Text
            size='large'
            dangerouslySetInnerHTML={{
              __html: post.frontmatter.description || post.excerpt
            }}
            itemProp='description'
          />
          <Anchor type='primary' title='Read more' />
        </section>
        {post.frontmatter.tags ? (
          <footer>
            <Heading as='h6'>Tags</Heading>
            <ul>
              {post.frontmatter.tags?.map(tag => (
                <li key={tag}>{tag}</li>
              ))}
            </ul>
          </footer>
        ) : (
          null
        )}
      </article>
    </li>
  )
}

export default styled(Header)`
  ${baseStyling}
`
