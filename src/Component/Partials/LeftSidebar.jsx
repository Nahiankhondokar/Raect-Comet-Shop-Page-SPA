import React from 'react';
import product from "./../../_assets/images/shop/1.jpg";

const LeftSidebar = () => {
  return (
    <>
    
    <div className="widget">
                <h6 className="upper">Search Shop</h6>
                <form>
                  <input type="text" placeholder="Search.." className="form-control"/>
                </form>
            </div>

            <div className="sidebar">
              <div className="widget">
                <h6 className="upper">Categories</h6>
                <ul className="nav">
                  <li><a href="#">Beauty</a>
                  </li>
                  <li><a href="#">Blazers</a>
                  </li>
                  <li><a href="#">Bags</a>
                  </li>
                  <li><a href="#">Jeans</a>
                  </li>
                  <li><a href="#">Shorts</a>
                  </li>
                  <li><a href="#">Dresses</a>
                  </li>
                </ul>
              </div>
               
              <div className="widget">
                <h6 className="upper">Trending Products</h6>
                <ul className="nav product-list">
                  <li>
                    <div className="product-thumbnail">
                      <img src={ product } alt=""/>
                    </div>
                    <div className="product-summary"><a href="#">Premium Suit Blazer</a><span>$199.99</span>
                    </div>
                  </li>
                  <li>
                    <div className="product-thumbnail">
                      <img src={ product } alt=""/>
                    </div>
                    <div className="product-summary"><a href="#">Vintage Sweatshirt</a><span>$199.99</span>
                    </div>
                  </li>
                  <li>
                    <div className="product-thumbnail">
                      <img src={ product } alt=""/>
                    </div>
                    <div className="product-summary"><a href="#">Reiss Vara Blazer</a><span>$199.99</span>
                    </div>
                  </li>
                </ul>
              </div>
                  
              <div className="widget">
                <h6 className="upper">Popular Tags</h6>
                <div className="tags clearfix"><a href="#">Hipster</a><a href="#">Fashion</a><a href="#">Shirt</a><a href="#">Modern</a><a href="#">Vintage</a>
                </div>
              </div>
              
            </div>
    
    </>
  )
};

export default LeftSidebar;