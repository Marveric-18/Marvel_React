import React, { useState, useEffect } from 'react';

function HorizontalSidebar(){
    return(
        <React.Fragment>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#">Navbar w/ text</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarText">
                <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                    <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Features</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Pricing</a>
                </li>
                </ul>
                <span className="navbar-text">
                Navbar text with an inline element
                </span>
            </div>
        </nav>
      
        <footer className="bg-dark text-center text-white">
         
          <div className="container p-4">
           
            <section className="mb-4">
  
              <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                >
                <i class="fab fa-facebook-f"></i>     
              </a>
        
              <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                ><i className="fab fa-twitter"></i
              ></a>
        
              <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                ><i className="fab fa-google"></i
              ></a>
        
              <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                ><i className="fab fa-instagram"></i
              ></a>
        
              <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                ><i className="fab fa-linkedin-in"></i
              ></a>
            <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                ><i className="fab fa-github"></i
              ></a>
            </section>
        
        
         
            <section className="">
              <form action="">
               
                <div className="row d-flex justify-content-center">
                
                  <div className="col-auto">
                    <p className="pt-2">
                      <strong>Sign up for our newsletter</strong>
                    </p>
                  </div>
                 
                  <div className="col-md-5 col-12">
                    
                    <div className="form-outline form-white mb-4">
                      <input type="email" id="form5Example2" className="form-control" />
                      <label className="form-label" for="form5Example2">Email address</label>
                    </div>
                  </div>
                 
                  <div className="col-auto">
                    
                    <button type="submit" className="btn btn-outline-light mb-4">
                      Subscribe
                    </button>
                  </div>
                  
                </div>
               
              </form>
            </section>
           
            
              
            
      
          </div>
         
        
         
          <div className="text-center p-3">
            © 2020 Copyright:
            <a className="text-white" href="https://mdbootstrap.com/">MDBootstrap.com</a>
          </div>
          
        </footer>
        </React.Fragment>
    );
}

export {HorizontalSidebar};

