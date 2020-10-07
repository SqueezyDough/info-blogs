import React from 'react'
import styled from 'styled-components'
import Heading from 'elements/heading'
import Anchor from 'elements/anchor'
import Text from 'elements/text'
import Tag from 'elements/tag'

import {
  baseStyling,
  StyledLarge,
  StyledSmall
} from './styles'

const Header = ({ className, size = 'large', post }) => {
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
            <span itemProp='headline'>&mdash; {title}</span>
          </Heading>
        </header>
        <div className='blogpost__content'>
          <section className='blogpost__body'>
            <Text
              size='large'
              dangerouslySetInnerHTML={{
                __html: post.frontmatter.description || post.excerpt
              }}
              itemProp='description'
            />
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
    </li>
  )
}

export default styled(Header)`
  ${baseStyling}

  ${props => {
    switch (props.size) {
      case 'large':
        return StyledLarge
      case 'small':
        return StyledSmall
      default:
        return StyledLarge
    }
  }}

  h6 {
    margin: ${({ theme }) => `0 0 ${theme.spacingS}`};  
    color: ${({ theme }) => theme.offWhite};  
    text-transform: uppercase;
  }

  .tags-list {
    display: flex;
    justify-content: space-between;
    width: 108%;
    list-style-type: none;

    li {
      flex-grow: 1;

      &:last-child {
        margin-left: ${({ theme }) => theme.spacingS};  
      }

      span {
        width: 100%;
      }
    }
  }
`
