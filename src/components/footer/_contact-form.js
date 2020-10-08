import React from 'react'
import Heading from 'elements/heading'

const Contact = ({ className }) => {
  return (
    <form className={className}>
      <Heading as='h5'>
        Drop your email address
      </Heading>
      <input type='text' placeholder='bljw@email.com' />
      <input type='submit' value='send' />
    </form>
  )
}

export default Contact
