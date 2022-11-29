import React from 'react'
import { CDBFooter, CDBFooterLink, CDBBtn, CDBIcon, CDBBox } from 'cdbreact';


function Footer() {
  return (
    <CDBFooter className="shadow bg-primary text-white">
    <CDBBox display="flex" flex="column" className=" mx-auto py-5" style={{ width: '80%' }}>
      <CDBBox display="flex" justifyContent="between" className="flex-wrap">
        <CDBBox>
          <a href="/" className="d-flex align-items-center p-0 text-white">
            <img
              alt="logo"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Nugget_Markets_logo.svg/2560px-Nugget_Markets_logo.svg.png"
              width="60px"
            />
            
          </a>
        </CDBBox>
        <CDBBox display="flex" style={{ width: '50%' }} justifyContent="between">
          <CDBBox>
            <p className="h5 mb-4" style={{ fontWeight: '600' }}>
              Links
            </p>
            <CDBBox flex="column" display="flex" style={{ cursor: 'pointer', padding: '0' }}>
              <CDBFooterLink href="/">Resources</CDBFooterLink>
              <CDBFooterLink href="/">About Us</CDBFooterLink>
              <CDBFooterLink href="/">Contact</CDBFooterLink>
              <CDBFooterLink href="/">Blog</CDBFooterLink>
            </CDBBox>
          </CDBBox>
          <CDBBox>
            <p className="h5 mb-4" style={{ fontWeight: '600' }}>
              Links
            </p>
            <CDBBox display="flex" flex="column" style={{ cursor: 'pointer', padding: '0' }}>
              <CDBFooterLink href="/">Windframe</CDBFooterLink>
              <CDBFooterLink href="/">Loop</CDBFooterLink>
              <CDBFooterLink href="/">Contrast</CDBFooterLink>
            </CDBBox>
          </CDBBox>
        </CDBBox>
      </CDBBox>
      <CDBBox display="flex" className="mt-4" justifyContent="between">
        <small className="ml-2">&copy; Nugget, 2022. All rights reserved.</small>
        <CDBBox display="flex">
          <CDBBtn flat color="dark" className="p-2">
            <CDBIcon fab icon="facebook-f" />
          </CDBBtn>
          <CDBBtn flat color="dark" className="mx-3 p-2">
            <CDBIcon fab icon="twitter" />
          </CDBBtn>
          <CDBBtn flat color="dark" className="p-2">
            <CDBIcon fab icon="instagram" />
          </CDBBtn>
        </CDBBox>
      </CDBBox>
    </CDBBox>
  </CDBFooter>
  )
}

export default Footer