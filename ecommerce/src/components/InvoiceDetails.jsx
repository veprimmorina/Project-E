import React from 'react'

function InvoiceDetails({invoice}) {
  return (
    <p key={invoice} className='border border-top'>{invoice.replace(":"," ")}</p>
  )
}

export default InvoiceDetails