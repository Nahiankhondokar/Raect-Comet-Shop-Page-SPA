import React, { useEffect, useState } from 'react';
import product from "./../../_assets/images/shop/1.jpg";
import axios from 'axios';

const LeftSidebar = ({ setAllProduct, allCat }) => {

  // product seach 
  const [search, setSearch] = useState([]);


  // Category waise product search 
  const handleCatSearch = (e, id) => {
    
    e.preventDefault();

    axios.get(`http://localhost:5050/categories/${ id }/products`)
    .then(res => {
      setAllProduct(res.data);
    });


  }


  // Get all search product
  useEffect(() => {

    if(search !== ''){
      axios.get(`http://localhost:5050/products?q=${search}`)
      .then(res => {
        setAllProduct(res.data);
      });
  
    }

  });

  return (
    <>
          <div className="sidebar">
              <div className="widget">
                  <h6 className="upper">Search Shop</h6>
                  <form>
                    <input value={ search } onChange={ (e) => setSearch(e.target.value) } type="text" placeholder="Search.." className="form-control"/>
                  </form>
              </div>

              <div className="widget">
                <h6 className="upper">Categories</h6>
                <ul className="nav">

                  {
                    allCat.map((data) =>
                    <li>
                      <a onClick={ (e) => handleCatSearch(e, data.id) } href={ data.id }>{ data.name }</a>
                    </li>
                    )
                  }
                  
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