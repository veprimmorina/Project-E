import React from 'react'

function DiscountProducts({item, handleClick}) {
    const { name, quantity, price, photoPath, category, madeInPhoto, discount } = item;
  
    return (
      <>
              { item.quantity==0 ?
                    
                    <div className="mb-4 mb-md-0 mt-3 text item " >
                        
                    <div>
                  <div className="card shadow">
                    <div className="d-flex justify-content-between p-3 sold">
                      <p className="lead mb-0">{category}</p> 
                        <img className="avatar rounded-circle img-fluid"  src={madeInPhoto}  style={{width: "40px", height: "25px"}} />
                    </div>
                    
                    <img src={photoPath}
                      className="card-img-top sold" alt="product" />
                      <b className="text-danger border border-danger rounded text-center bold">SOLD OUT</b>
                     
                    <div className="card-body sold">
                      <div className="d-flex justify-content-between">
                        <h5 className="mb-0">{name}</h5>
                      </div>
                    
                      <div className="d-flex justify-content-between mb-3 mt-4">
                      <p className="text-muted mb-0">Available: <span className="fw-bold">{quantity}</span></p>
                     {discount!=0 ?  <h5 className="text-danger mb-0" style={{textDecoration:"line-through"}}>{price} €</h5> : ""}
                        <h5 className="text-danger mb-0">{discount!=0?price-(discount*price/100).toFixed(2) : price} €</h5>
                      </div>
                      <div className="d-flex justify-content-center">
                      </div>
                    </div>
                  </div>
                  </div> 
                  </div>
                    
         :  <>
          <div className="mb-4 mb-md-0 mt-3 text item" >
        <div className="card shadow">
          
          <div className="d-flex justify-content-between p-3" >
            <p className="lead mb-0">{category}</p> 
              <img className="avatar rounded-circle img-fluid" src={madeInPhoto} style={{width: "40px", height: "25px"}} />
          </div>
          <img src={photoPath}
            className="card-img-top" alt="Laptop" />
            
          <div className="card-body">
            <div className="d-flex justify-content-between">
            <h5 className="mb-0">{name}</h5>
          
            </div>
            <div className="d-flex justify-content-between mb-3 mt-4 text">
            <p className="text-muted mb-0">Available: <span className="fw-bold">{quantity}</span></p>
            {discount!=0 ?  <h5 className="text-danger mb-0" style={{textDecoration:"line-through"}}>{price} €</h5> : ""}
              <h5 className="text-danger mb-0">{discount!=0?(price-(discount*price/100)).toFixed(2) : price} €</h5>
             
            </div>
    
            <div className="d-flex justify-content-center">
              <i className="mt-2 bi bi-cart4 bg-info rounded-circle d-flex align-items-center justify-content-center shadow-1-strong clickable"  style={{width: "35px", height: "35px"}} onClick={() => handleClick(item)}></i>
            </div>
          </div>
        </div>
        </div>
         </>
      }
          </>
    )
}

export default DiscountProducts