import React from 'react'
import styled from 'styled-components'
import Blogpost from 'components/blogpost'
import BlockHeading from 'elements/block-heading'
import { baseStyling } from './styles'

const PostsList = ({ className, posts, category, size = 'large' }) => (
  <div className={className}>
    <BlockHeading title={category} />
    <ol style={{ listStyle: 'none' }}>
      {posts.map(post => (
        <Blogpost key={post.fields.slug} post={post} size={size} />
      ))}
    </ol>
  </div>
)

export default styled(PostsList)`
  ${baseStyling}
`
