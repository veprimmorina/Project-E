import React from 'react'

function InvoiceDetails({invoice}) {
  return (
    <p key={invoice} className='border'>{invoice.replace(":"," ")}</p>
  )
}

export default InvoiceDetails