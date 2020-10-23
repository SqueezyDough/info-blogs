import React from 'react'
import styled, { css } from 'styled-components'
import Blogpost from 'components/blogpost'
import BlockHeading from 'elements/block-heading'
import { baseStyling } from './styles'

const PostsList = ({ className, posts, category, strokePosition, size = 'large' }) => {
  if (posts.length === 0) {
    return (
      <div className={className}>
        <BlockHeading title={category} strokePosition={strokePosition} />
        <p>
          No blogs available for {category}.
        </p>
      </div>
    )
  }

  return (
    <div className={className}>
      <BlockHeading title={category} strokePosition={strokePosition} />
      <ol id='container' style={{ listStyle: 'none' }}>
        {posts.map(post => (
          <Blogpost key={post.fields.slug} post={post} size={size} />
        ))}
      </ol>
    </div>
  )
}

export default styled(PostsList)`
  ${baseStyling}

  ${props =>
    props.category === 'Projects' && css`  
      ol {
        &::-webkit-scrollbar-track {
          background: ${({ theme }) => theme.colors.offWhiteLight};
        }
      
        &::-webkit-scrollbar-thumb {
          background-color: ${({ theme }) => theme.colors.altOffWhite};
          background-image: none;
        }
      } 
    `};
  }

  ${props =>
    props.category === 'Topics' && css`  
      ol {
        &::-webkit-scrollbar-track {
          background: ${({ theme }) => theme.colors.offWhiteLight};
        }
      
        &::-webkit-scrollbar-thumb {
          background-color: ${({ theme }) => theme.colors.offWhite};
          background-image: none;
        }
      } 
    `};
  }
`
