import React, { useRef } from 'react'

function TopProducts({item, handleClick}) {
  const { name, quantity, price, photoPath, category } = item;

  return (
    <>
    {
      item.quantity==0 ? <> <div className="col-md mb-4 mb-md-0 mt-3 bg-dark" >
        <div>
      <div className="card shadow">
        <div className="d-flex justify-content-between p-3 sold">
          <p className="lead mb-0">{category}</p> 
            <img classname="avatar rounded-circle img-fluid"  src='https://upload.wikimedia.org/wikipedia/en/thumb/b/ba/Flag_of_Germany.svg/2560px-Flag_of_Germany.svg.png'  style={{width: "40px", height: "25px"}} />
        </div>
        <img src={photoPath}
          className="card-img-top sold" alt="Laptop" />
          <b className="text-danger border border-danger rounded text-center bold">SOLD</b>
        <div className="card-body sold">
          <div className="d-flex justify-content-between">
            <p className="small"><a href="#!" className="text-muted">Laptops</a></p>
            <p className="text-muted mb-0">Available: <span className="fw-bold">{quantity}</span></p>
          </div>
          <div className="d-flex justify-content-between mb-3">
            <h5 className="mb-0">{name}</h5>
            <h5 className="text-danger mb-0">{price} €</h5>
          </div>
          <div className="d-flex justify-content-center">
          </div>
        </div>
      </div>
      </div> 
      </div>
      </>:  <div className="col-md mb-4 mb-md-0 mt-3 bg-dark" >
      <div className="card shadow">
        <div className="d-flex justify-content-between p-3">
          <p className="lead mb-0">{category}</p> 
            <img classname="avatar rounded-circle img-fluid" src='https://upload.wikimedia.org/wikipedia/en/thumb/b/ba/Flag_of_Germany.svg/2560px-Flag_of_Germany.svg.png'  style={{width: "40px", height: "25px"}} />
        </div>
        <img src={photoPath}
          className="card-img-top" alt="Laptop" />
        <div className="card-body">
          <div className="d-flex justify-content-between">
            <p className="small"><a href="#!" className="text-muted">Laptops</a></p>
            <p className="text-muted mb-0">Available: <span className="fw-bold">{quantity}</span></p>
          </div>
          <div className="d-flex justify-content-between mb-3">
            <h5 className="mb-0">{name}</h5>
            <h5 className="text-danger mb-0">{price} €</h5>
          </div>
          <div className="d-flex justify-content-center">
            <i className="mt-2 bi bi-cart4 bg-info rounded-circle d-flex align-items-center justify-content-center shadow-1-strong clickable"  style={{width: "35px", height: "35px"}} onClick={() => handleClick(item)}></i>
          </div>
        </div>
      </div>
      </div>
    }
           
      
    </>
  )
}

export default TopProducts