import axios from 'axios';
import React, { useState } from 'react';
import { Card, Table, Button, Container, Row, Col, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const AddProduct = ({ allTag, allCat, makeSlug }) => {

  // form data manage
  const [product, setProduct] = useState({
    id          : '',
    name        : '',
    price       : '',
    sprice      : '',
    rating      : '',
    categoryId  : '',
    tagId       : '',
    desc        : '',
    photo       : ''
    
  });


  // form submit 
  const handleFormSubmit = (e) => {
    e.preventDefault();

    axios.post('http://localhost:5050/products', {
      id              : '',
      name            : product.name,
      slug            : makeSlug(product.name),
      price           : product.price,
      sprice          : product.sprice,
      rating          : product.rating,
      categoryId      : product.categoryId,
      tagId           : product.tagId,
      desc            : product.desc,
      photo           : product.photo
    })
    .then(res => {
      setProduct({
        id      : '',
        name    : '',
        price    : '',
        sprice  : '',
        rating  : '',
        categoryId   : '',
        tagId    : '',
        desc    : '',
        photo     : ''
      });
    })
    .catch();


  }


  return (
    <>
      <Container>
    <Link to='/admin/product' className='btn btn-primary btn-sm mb-2' variant='info'>All Category</Link>
        <Row>
          <Col md={ 6 } className='m-auto mt-3'>
            <Card className='shadow p-3'>
              <div className="addCat">
                <h2 className='mt-2 text-center'>Add Product</h2>
                  <hr />
                  <Form onSubmit={ handleFormSubmit } method='POST'>
              
                    <Form.Group>
                        <Form.Label>Category Name</Form.Label>
                        <Form.Control value={ product.name } onChange={ (e) => setProduct({ ...product, name : e.target.value }) }></Form.Control>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Price</Form.Label>
                        <Form.Control value={ product.price } onChange={ (e) => setProduct({ ...product, price : e.target.value }) }></Form.Control>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>sale Price</Form.Label>
                        <Form.Control value={ product.sprice } onChange={ (e) => setProduct({ ...product, sprice : e.target.value }) }></Form.Control>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Rating</Form.Label>
                        <Form.Control type='number' value={ product.rating } onChange={ (e) => setProduct({ ...product, rating : e.target.value }) }></Form.Control>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Categroy</Form.Label>
                        <select className='form-control' name="" id="" value={ product.categoryId }  onChange={ (e) => setProduct({ ...product, categoryId : e.target.value }) }>
                            <option value="">-select-</option>
                            {
                              allCat.map( (data, index) => 
                                <option value={ data.id }>{ data.name }</option>
                              )
                            }
                        </select>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Tag</Form.Label>
                        <select  className='form-control' name="" id="" value={ product.tagId } onChange={ (e) => setProduct({ ...product, tagId : e.target.value }) }>
                          <option value="">-select-</option>
                            {
                              allTag.map( (data, index) => 
                                <option value={ data.id } >{ data.name }</option>
                              )
                            }
                        </select>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Product Photo</Form.Label>
                        <Form.Control value={ product.photo } onChange={ (e) => setProduct({ ...product, photo : e.target.value }) }></Form.Control>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Product Description</Form.Label>
                        <textarea value={ product.desc } onChange={ (e) => setProduct({ ...product, desc : e.target.value }) } class="form-control" name="" id="" rows="3"></textarea>
                    </Form.Group>

                    <Button type='submit' variant='info' className='btn-sm mt-3 text-center'>Add Product</Button>

                  </Form>
              </div>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  )
};

export default AddProduct;