import { useEffect, useState } from 'react';
import Footer from './Component/Footer/Footer';
import Header from './Component/Header/Header';
import Shop from './Component/Pages/Shop';
import SingleProduct from './Component/Pages/SingleProduct';
import { Route, Routes } from 'react-router-dom';
import Home from './Component/Pages/Home';
import Dashboard from './Component/Admin/Dashboard';
import Category from './Component/Admin/Category';
import Tag from './Component/Admin/Tag';
import Product from './Component/Admin/Product';
import AddTag from './Component/Admin/AddItems/AddTag';
import AddProduct from './Component/Admin/AddItems/AddProduct';
import axios from 'axios';
import ViewProduct from './Component/Admin/AddItems/ViewProduct';
import EditProduct from './Component/Admin/AddItems/EditProduct';
import Student from './Component/ClassComponent/Student';
import './_assets/css/bundle.css';
import './_assets/css/style.css';
import './App.css';



function App() {

  // category state
  const [allCat, setAllCat] = useState([]);
    // all tags
  const [allTag, setAllTag ] = useState([]);
  // all product
  const [allProduct, setAllProduct ] = useState([]);


  // make slug
  function makeSlug(data){
    let arr = data.split(" ");
    return arr.join('-').toLowerCase();
  }




  // Get all data 
  useEffect( () => {

    // Category
    axios.get('http://localhost:5050/categories')
    .then( res => {
      setAllCat(res.data);
    });

    // tag
    axios.get('http://localhost:5050/tags')
    .then( res => {
      setAllTag(res.data);
    });

    // product
    let cler = setInterval(() => {
      axios.get('http://localhost:5050/products')
      .then( res => {
        setAllProduct(res.data);
      });

      clearInterval(cler);
  
    }, 2000);



  }, []);


  return (
    <>
    

    
      <Header />

      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/shop" element={ <Shop allTag={ allTag } allCat={ allCat } allProduct={ allProduct } setAllProduct={ setAllProduct } /> } />
        <Route path="/shop/:slug" element={ <SingleProduct allCat={ allCat } /> } />

        {/* Nested Routing */}
        <Route path="/admin" element={ <Dashboard /> }>
          <Route path="/admin/category" element={ <Category allCat={ allCat } makeSlug={ makeSlug } /> } />
          <Route path="/admin/tag" element={ <Tag allTag={ allTag } makeSlug={ makeSlug } /> } />
          <Route path="/admin/add-tag" element={ <AddTag /> } />
          <Route path="/admin/product" element={ <Product allProduct={ allProduct } allTag={ allTag } allCat={ allCat } /> } />
          <Route path="/admin/add-product" element={ <AddProduct allTag={ allTag } allCat={ allCat } makeSlug={ makeSlug } /> } />
          <Route path="/admin/product-view/:id" element={ <ViewProduct allTag={ allTag } allCat={ allCat } /> } />
          <Route path="/admin/product-edit/:id" element={ <EditProduct allTag={ allTag } allCat={ allCat } /> } />
          <Route path="/admin/student" element={ <Student /> } />
        </Route>

      </Routes>
    
      <Footer />



  
  
    
    </>
  );
}

export default App;
