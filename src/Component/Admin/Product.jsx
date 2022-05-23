import React, { useEffect, useState } from 'react';
import { Card, Table, Button, Container, Row, Col, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Product = ({ allProduct }) => {

  // product delete
  const handleProductDelete = (id) => {
    axios.delete('http://localhost:5050/products/' + id)
    .then();
  }

  return (
    <>
      <Link to="/admin/add-product" className='btn btn-info btn-sm mb-2' variant='info'>Add Product</Link>
      <Card>
        <Card.Header>
          <h4 className='text-center'>All Product</h4>
        </Card.Header>
        <Card.Body className='student-table shadow'>
            <Table>
              <thead>
                  <tr>
                      <th>#</th>
                      <th>Name</th>
                      <th>Price</th>
                      <th>SPrice</th>
                      <th>Category</th>
                      <th>Tag</th>
                      <th>Action</th>
                  </tr>
              </thead>
              <tbody>


                {
                  allProduct.map( (data, index) => 
                  <tr>
                    <td>{ index + 1 }</td>
                    <td>{ data.name }</td>
                    <td>{ data.price }</td>
                    <td>{ data.sprice }</td>
                    <td>{ data.categoryId }</td>
                    <td>{ data.tagId }</td>
                    <td>
                      <Button className='btn-sm' variant='primary'>view</Button>
                      <Button className='btn-sm' variant='warning'>Edit</Button>
                      <Button onClick={ () => handleProductDelete(data.id) } className='btn-sm' variant='danger'>Delete</Button>
                    </td>
                  </tr>
                  )
                }
              

              </tbody>
          </Table>
        </Card.Body>
      </Card>
    </>
  )
};

export default Product;