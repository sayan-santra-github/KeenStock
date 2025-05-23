import React from 'react'
import Logo from '../../Components'

const Footer = () => {
  return (
    <footer className='h-2/5 w-full grid grid-cols-3'>
        <div className=''>
            <Logo />
            <p>Made with &#9829; by Sayan.</p>
        </div>
        <div className=''>
            <ul>
                <li>PRODUCTS</li>
                <li>FEED</li>
                <li>QUERY</li>
                <li>KEENING</li>
            </ul>
        </div>
        <div className=''>
          <ul>
            <li>TEAM</li>
            <li>About Us</li>
            <li>Suggest Us</li>
          </ul>
        </div>
        <div className='col-span-3 flex justify-center'>
          <span>Copyright &#169; All Rights Reserved.</span>
        </div>
    </footer>
  )
}

export default Footer