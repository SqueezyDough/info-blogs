import React from 'react'
import styled from 'styled-components'
import Anchor from 'elements/anchor'

import { baseStyling } from './styles'

const SiteRef = ({ className, site }) => {
  return (
    <aside className={className}>
      <Anchor type='primary' path={site.url} title='Live Site' external />
      <picture className='site-image'>
        <img
          src={site.thumbnail}
          alt='external site image'
        />
      </picture>
    </aside>
  )
}

export default styled(SiteRef)`
  ${baseStyling}

  ${Anchor} {
    position: absolute;
    bottom: ${({ theme }) => theme.spacingXS}; 
    right: ${({ theme }) => theme.spacingS}; ;
    z-index: 1;
    color: ${({ theme }) => theme.offWhite};

    &:hover {
      ~ .site-image {
        ::after {
          background-color: ${({ theme }) => theme.secondaryColor}20;  
        }
        img {
          filter: blur(2px);
        }
      }
    }
  }
`
