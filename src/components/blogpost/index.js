import React from 'react'
import styled, { css } from 'styled-components'
import SiteRef from 'components/site-ref'
import Heading from 'elements/heading'
import Anchor from 'elements/anchor'
import Text from 'elements/text'
import Tag from 'elements/tag'

import {
  baseStyling,
  StyledLarge,
  StyledSmall,
  StyledHighlight
} from './styles'

const Blogpost = ({ className, post, size = 'large' }) => {
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
          {size === 'highlight' ? (
            <Heading as='h2'>
              <span itemProp='headline'>&mdash; Highlight</span>
            </Heading>
          ) : (
            <Heading as='h2'>
              <span itemProp='headline'>&mdash; {title}</span>
            </Heading>
          )}

        </header>
        <div className='blogpost__content'>
          {size === 'highlight' ? (
            <Heading as='h3'>
              <span itemProp='headline'>{title}</span>
            </Heading>
          ) : (
            null
          )}

          <section className='blogpost__body'>
            {/* {size === 'highlight' ? (
              <Image />
            ) : (
              null
            )} */}

            {size === 'large' ? (
              <Text
                size='large'
                dangerouslySetInnerHTML={{
                  __html: post.frontmatter.description || post.excerpt
                }}
                itemProp='description'
              />
            ) : (
              null
            )}
            <Anchor type='primary' path={post.fields.slug} title='Read more' />
          </section>
          {post.frontmatter.tags ? (
            <footer className='blogpost__footer'>
              <Heading as='h6'>Tags</Heading>
              <ul className='tags-list'>
                {post.frontmatter.tags?.map(tag => (
                  <li key={tag}>
                    <Tag title={tag} />
                  </li>
                ))}
              </ul>
            </footer>
          ) : (
            null
          )}
        </div>
      </article>

      {post.frontmatter.site ? (
        <SiteRef className='site-ref' site={post.frontmatter.site} />
      ) : (
        null
      )}
    </li>
  )
}

export default styled(Blogpost)`
  ${baseStyling}

  ${props => {
    switch (props.size) {
      case 'large':
        return StyledLarge
      case 'small':
        return StyledSmall
      case 'highlight':
        return StyledHighlight
      default:
        return StyledLarge
    }
  }}

  ${props =>
    props.size === 'small' && css`
      ${SiteRef} {
        height: 14.5rem;
      }
    `};
  }

  &:hover {
    ${SiteRef} {
      margin-left: -3.6rem;
    }
  }

  ${SiteRef} {
    position: relative;
  }
`
