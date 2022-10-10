import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';



function Products() {
  return (
    <section style={{backgroundColor: "#eee", width: "900px"}}>
  <div className="container py-5">
    <div className="row">
    <div className="col-md-6 col-lg-4 mb-4 mb-md-0">
        <div className="card">
          <div className="d-flex justify-content-between p-3">
            <p className="lead mb-0">Vegan Products</p> 
              <img classname="avatar rounded-circle img-fluid" src='https://upload.wikimedia.org/wikipedia/en/thumb/b/ba/Flag_of_Germany.svg/2560px-Flag_of_Germany.svg.png'  style={{width: "40px", height: "25px"}} />
          </div>
          <img src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/4.webp"
            className="card-img-top" alt="Laptop" />
          <div className="card-body">
            <div className="d-flex justify-content-between">
              <p className="small"><a href="#!" className="text-muted">Laptops</a></p>
            </div>
            <div className="d-flex justify-content-between mb-3">
              <h5 className="mb-0">HP Envy</h5>
              <h5 className="text-dark mb-0">600 €</h5>
            </div>

            <div className="d-flex justify-content-between mb-2">
              <p className="text-muted mb-0">Available: <span className="fw-bold">7</span></p>
             <div className='border border-dark'>
              <div className="ms-auto ">
              <span className='quantity'>
                <button><i class="bi bi-dash-circle mr-2"></i></button>
               <input id="quantity" min="1" type="number" value="1" max="1" className='text-center' />
               <button><i class="bi bi-plus-circle"></i></button>
               </span>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-6 col-lg-4 mb-4 mb-md-0">
        <div className="card">
          <div className="d-flex justify-content-between p-3">
            <p className="lead mb-0">Vegan Products</p> 
              <img classname="avatar rounded-circle img-fluid" src='https://upload.wikimedia.org/wikipedia/en/thumb/b/ba/Flag_of_Germany.svg/2560px-Flag_of_Germany.svg.png'  style={{width: "40px", height: "25px"}} />
          </div>
          <img src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/7.webp"
            className="card-img-top" alt="Laptop" />
          <div className="card-body">
            <div className="d-flex justify-content-between">
              <p className="small"><a href="#!" className="text-muted">Laptops</a></p>
            </div>
            <div className="d-flex justify-content-between mb-3">
              <h5 className="mb-0">HP Envy</h5>
              <h5 className="text-dark mb-0">600 €</h5>
            </div>

            <div className="d-flex justify-content-between mb-2">
              <p className="text-muted mb-0">Available: <span className="fw-bold">7</span></p>
             <div className='border border-dark'>
              <div className="ms-auto ">
              <span className='quantity'>
                <button><i class="bi bi-dash-circle mr-2"></i></button>
               <input id="quantity" min="1" type="number" value="1" max="1" className='text-center' />
               <button><i class="bi bi-plus-circle"></i></button>
               </span>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-6 col-lg-4 mb-4 mb-md-0">
        <div className="card">
          <div className="d-flex justify-content-between p-3">
            <p className="lead mb-0">Vegan Products</p> 
              <img classname="avatar rounded-circle img-fluid" src='https://upload.wikimedia.org/wikipedia/en/thumb/b/ba/Flag_of_Germany.svg/2560px-Flag_of_Germany.svg.png'  style={{width: "40px", height: "25px"}} />
          </div>
          <img src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/7.webp"
            className="card-img-top" alt="Laptop" />
          <div className="card-body">
            <div className="d-flex justify-content-between">
              <p className="small"><a href="#!" className="text-muted">Laptops</a></p>
            </div>
            <div className="d-flex justify-content-between mb-3">
              <h5 className="mb-0">HP Envy</h5>
              <h5 className="text-dark mb-0">600 €</h5>
            </div>

            <div className="d-flex justify-content-between mb-2">
              <p className="text-muted mb-0">Available: <span className="fw-bold">7</span></p>
             <div className='border border-dark'>
              <div className="ms-auto ">
              <span className='quantity'>
                <button><i class="bi bi-dash-circle mr-2"></i></button>
               <input id="quantity" min="1" type="number" value="1" max="1" className='text-center' />
               <button><i class="bi bi-plus-circle"></i></button>
               </span>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
  )
}

export default Products