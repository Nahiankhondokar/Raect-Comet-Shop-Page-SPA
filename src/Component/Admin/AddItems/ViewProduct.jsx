import React, { useEffect, useState } from 'react';
import { Card, Table, Button, Container, Row, Col, Form } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

const ViewProduct = ({ allTag, allCat }) => {

      // States 
    const [view, setView] = useState('');
    console.log(view);

    // get id
    const { id } = useParams();


    useEffect(() => {
        axios.get('http://localhost:5050/products/' + id)
        .then(res => {
        setView(res.data);
        });
    });
 
  return (
    <>
    <Container>
        <Link to='/admin/product' className='btn btn-primary btn-sm mb-2' variant='info'>All Product</Link>
        <Row>
          <Col md={ 6 } className='m-auto mt-3'>
            <Card className='shadow p-3'>
              <div className="addCat">
                    <Card>
                        <Card.Header>
                        <h2 className='text-center'>Single Product</h2>
                        </Card.Header>
                        <Card.Body>
                            <Row className='profile-area'> 
                            <Col md={4} className='img-separetor'>
                                <img src="https://i.pinimg.com/originals/cd/9a/1d/cd9a1dde8fcbea8d3b290220615348c1.jpg" alt="" />
                            </Col>
                            <Col md={8}>
                                <div className="user-profile">
                                <ul style={{fontSize : '16px', listStyle : 'none'}} className="profile-info">
                                    <li>Name  <span><b>: </b></span>{view.name }</li>
                                    <li>Price  <span><b>: </b></span> {view.price }</li>
                                    <li>Sale  <span><b>: </b></span> {view.sprice }</li>
                                    <li>Category  <span><b>: </b></span> 
                                    {
                                        allCat.map((data) => 
                                        data.id == view.categoryId ? data.name : ''
                                        )
                                    }
                                    </li>
                                    <li>Tag  <span><b>: </b></span> 
                                    {
                                        allTag.map((data) => 
                                        data.id == view.tagId ? data.name : ''
                                        )
                                    }
                                    </li>
                                </ul>
                                </div>
                            </Col>
                            </Row>
                        </Card.Body>
                    </Card>
              </div>
            </Card>
          </Col>
        </Row>
    </Container>
    </>
  )
};

export default ViewProduct;