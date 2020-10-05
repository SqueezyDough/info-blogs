import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Image from 'gatsby-image'

const Social = () => {
  const data = useStaticQuery(graphql`
    query SocialQuery {
      avatar: file(absolutePath: { regex: "/avatar.png/" }) {
        childImageSharp {
          fixed(width: 100, height: 100, quality: 95) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          author {
            name
          }
          social {
            github
          }
        }
      }
    }
  `)

  const author = data.site.siteMetadata?.author
  const social = data.site.siteMetadata?.social
  const avatar = data?.avatar?.childImageSharp?.fixed

  return (
    <div className='social'>
      {avatar && (
        <Image
          fixed={avatar}
          alt={author?.name || ''}
          className='bio-avatar'
        />
      )}
      {author?.name && (
        <p>
          Written by <strong>{author.name}</strong>
          {' '}
          <a href={`https://github.com/${social?.github || ''}`}>
            You should follow them on Github
          </a>
        </p>
      )}
    </div>
  )
}

export default Social
