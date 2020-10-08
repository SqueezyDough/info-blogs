import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import Heading from 'elements/heading'

import Avatar from 'svg/icon-bljw.svg'
import Github from 'svg/icon-github.svg'
import Linkedin from 'svg/icon-linkedin.svg'

import { baseStyling } from './styles'

const Social = ({ className, showAvatar }) => {
  const data = useStaticQuery(graphql`
    query SocialQuery {
      site {
        siteMetadata {
          author {
            name
          }
          social {
            github
            linkedin
          }
        }
      }
    }
  `)

  const author = data.site.siteMetadata?.author
  const social = data.site.siteMetadata?.social

  return (
    <div className={className}>
      {Avatar && showAvatar && (
        <Avatar className='social__avatar' />
      )}
      {author?.name && (
        <div>
          <Heading as='h5'>Find me on</Heading>
          <ul>
            <li>
              <a
                className='social__anchor'
                href={`https://www.github.com/${social?.github || ''}`}
                target='_blank'
                rel='noopener noreferrer'
              >
                <Github className='social__anchor__github' />
              </a>
            </li>
            <li>
              <a
                className='social__anchor'
                href={`https://www.linkedin.com/in/${social?.linkedin || ''}`}
                target='_blank'
                rel='noopener noreferrer'
              >
                <Linkedin className='social__anchor__linkedin' />
              </a>
            </li>
          </ul>
        </div>
      )}
    </div>
  )
}

export default styled(Social)`
  ${baseStyling}

  .social__avatar {
    width: 3rem;
  }

  .social__anchor {
    display: flex;
    box-sizing: content-box;
    max-width: ${({ theme }) => theme.spacingM};
    padding: ${({ theme }) => theme.spacingXS};
    background-color: ${({ theme }) => theme.offWhiteLight};
    border-radius:  ${({ theme }) => `0 ${theme.spacingS} ${theme.spacingS}`};
    transition:  ${({ theme }) => theme.transition};

    &:hover {
      background-color: ${({ theme }) => theme.tertiaryColor};
      box-shadow: 0 6px 0 0 ${({ theme }) => theme.tertiaryColor};    
    }

    svg {
      width: 2rem;
      height: 2rem;
    }
  }
`
