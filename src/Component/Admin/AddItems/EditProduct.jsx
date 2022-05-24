import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Card, Button, Container, Row, Col, Form } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';

const EditProduct = ({ allTag, allCat }) => {

    // get id 
    const { id } = useParams();

    //states
    const [updateProduct, setUpdateProduct] = useState({
        id          : '',
        name        : '',
        price       : '',
        sprice      : '',
        rating      : '',
        categoryId  : '',
        tagId       : '',
        desc        : '',
        photo       : '',
        updateId    : ''
    });

    // product update
    const handleUpdateForm = (e) => {
      e.preventDefault();

      axios.put('http://localhost:5050/products/' + updateProduct.updateId, updateProduct)
        .then(res => {

        });

    }


    // get data
    useEffect(() => {
        axios.get('http://localhost:5050/products/' + id)
        .then(res => {
          setUpdateProduct({
            id          : '',
            name        : res.data.name,
            price       : res.data.price,
            sprice      : res.data.sprice,
            rating      : res.data.rating,
            categoryId  : res.data.categoryId,
            tagId       : res.data.tagId,
            desc        : res.data.desc,
            photo       : res.data.photo,
            updateId    : res.data.id
          });
        });
    }, []);


  return (
    <>
    <Container>
        <Link to='/admin/product' className='btn btn-primary btn-sm mb-2' variant='info'>All Product</Link>
        <Row>
          <Col md={ 6 } className='m-auto mt-3'>
            <Card className='shadow p-3'>
              <div className="addCat">
                <h2 className='mt-2 text-center'>Edit Product</h2>
                  <hr />
                  <Form onSubmit={ handleUpdateForm } method='POST'>
              
                    <Form.Group>
                        <Form.Label>Category Name</Form.Label>
                        <Form.Control value={ updateProduct.name } onChange={ (e) => setUpdateProduct({ ...updateProduct, name : e.target.value }) }></Form.Control>
                    </Form.Group>
                    <Form.Group>
                        <Form.Control type='hidden' value={ updateProduct.updateId }></Form.Control>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Price</Form.Label>
                        <Form.Control value={ updateProduct.price } onChange={ (e) => setUpdateProduct({ ...updateProduct, price : e.target.value }) }></Form.Control>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>sale Price</Form.Label>
                        <Form.Control value={ updateProduct.sprice } onChange={ (e) => setUpdateProduct({ ...updateProduct, sprice : e.target.value }) }></Form.Control>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Rating</Form.Label>
                        <Form.Control type='number' value={ updateProduct.rating } onChange={ (e) => setUpdateProduct({ ...updateProduct, rating : e.target.value }) }></Form.Control>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Categroy</Form.Label>
                        <select className='form-control' name="" id="" value={ updateProduct.categoryId }  onChange={ (e) => setUpdateProduct({ ...updateProduct, categoryId : e.target.value }) }>
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
                        <select  className='form-control' name="" id="" value={ updateProduct.tagId } onChange={ (e) => setUpdateProduct({ ...updateProduct, tagId : e.target.value }) }>
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
                        <Form.Control value={ updateProduct.photo } onChange={ (e) => setUpdateProduct({ ...updateProduct, photo : e.target.value }) }></Form.Control>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Product Description</Form.Label>
                        <textarea value={ updateProduct.desc } onChange={ (e) => setUpdateProduct({ ...updateProduct, desc : e.target.value }) } class="form-control" name="" id="" rows="3"></textarea>
                    </Form.Group>

                    <Button type='submit' variant='info' className='btn-sm mt-3 text-center'>Update Product</Button>

                  </Form>
              </div>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  )
};

export default EditProduct;