import React from 'react'
import styled from 'styled-components'
import Blogpost from 'components/blogpost'
import BlockHeading from 'elements/block-heading'
import { baseStyling } from './styles'

const PostsList = ({ className, posts }) => (
  <div className={className}>
    <BlockHeading title='Projects' />
    <ol style={{ listStyle: 'none' }}>
      {posts.map(post => (
        <Blogpost key={post.fields.slug} post={post} />
      ))}
    </ol>
  </div>
)

export default styled(PostsList)`
  ${baseStyling}
`
