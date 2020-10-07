import React from 'react'
import styled from 'styled-components'
import Stroke from 'components/stroke'
import Blogpost from 'components/blogpost'
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
      {posts.map(post => (
        <Blogpost key={post.fields.slug} post={post} />
      ))}
    </ol>
    <Stroke stroke={stroke} />
  </div>
)

export default styled(PostsList)`
  ${baseStyling}
`
