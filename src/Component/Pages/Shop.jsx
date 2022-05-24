import React from 'react';
import Skeleton from 'react-loading-skeleton';
import { Link } from 'react-router-dom';
import LeftSidebar from '../Partials/LeftSidebar';
import product from "./../../_assets/images/shop/1.jpg";

const Shop = ({ allProduct, setAllProduct, allCat, allTag }) => {

  
  return (
    <>
    
    <section>
      <div className="container">
        <div className="row">
          <div className="col-md-3 hidden-sm hidden-xs">

            <LeftSidebar setAllProduct={ setAllProduct } allCat={allCat} allTag={ allTag } />


          </div>
          <div className="col-md-9">
 
            <div className="container-fluid">
              <div className="row">

                
                {
                  allProduct.length > 0  ? 

                  allProduct.map( (data, index) => 
                  <div className="col-md-4 col-sm-6">
                  <div className="shop-product">
                    <div className="product-thumb">
                      <Link to={ `/shop/${data.slug}` }>
                        <img src={ data.photo } alt="" />
                      </Link>
                      <div className="product-overlay">
                        <a href="#" className="btn btn-color-out btn-sm">Add To Cart<i className="ti-bag"></i></a>
                      </div>
                    </div>
                    <div className="product-info">
                      <h4 className="upper"><a href="#">{ data.name }</a></h4>

                      {
                        (data.sprice === '') ?
                          <span><b>${ data.price }</b></span>
                        :
                        <>
                          <span><b>${ data.sprice } </b></span>
                          <span><del>${ data.price }</del></span>
                        </>

                      }

                      <div className="save-product"><a href="#"><i className="icon-heart"></i></a>
                      </div>
                    </div>
                  </div>
                  </div>
                  )


                  :
                  
                  
                  <>

                  <div className="col-md-4 col-sm-6">
                    <Skeleton width='250px' height='350px' />
                    <Skeleton width='150px' height='18px' />
                    <Skeleton width='100px' height='18px' />
                  </div> 

                  <div className="col-md-4 col-sm-6">
                    <Skeleton width='250px' height='350px' />
                    <Skeleton width='150px' height='18px' />
                    <Skeleton width='100px' height='18px' />
                  </div> 

                  <div className="col-md-4 col-sm-6">
                    <Skeleton width='250px' height='350px' />
                    <Skeleton width='150px' height='18px' />
                    <Skeleton width='100px' height='18px' />
                  </div> 

                  </>
                  
                }




              </div>
            
              <ul className="pagination">
                <li><a href="#" aria-label="Previous"><span aria-hidden="true"><i className="ti-arrow-left"></i></span></a>
                </li>
                <li className="active"><a href="#">1</a>
                </li>
                <li><a href="#">2</a>
                </li>
                <li><a href="#">3</a>
                </li>
                <li><a href="#">4</a>
                </li>
                <li><a href="#">5</a>
                </li>
                <li><a href="#" aria-label="Next"><span aria-hidden="true"><i className="ti-arrow-right"></i></span></a>
                </li>
              </ul>
        
            </div>
          </div>
        </div>
      </div>
  
    </section>



    </>
  )
};

export default Shop;