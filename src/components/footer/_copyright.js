import React from 'react'
import Text from 'elements/text'
import Avatar from 'svg/icon-bljw.svg'

const Copyright = () => {
  return (
    <div className='footer__copyright'>
      <Text weight='bold' size='extraLarge'>
        &copy; {new Date().getFullYear().toString()}
      </Text>
      {Avatar && (
        <Avatar className='footer__avatar' />
      )}
      <Text weight='bold' size='extraLarge'>
        bljw
      </Text>
    </div>
  )
}

export default Copyright
