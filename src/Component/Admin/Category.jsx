import React, { useState } from 'react';
import { Card, Table, Button, Container, Row, Col, Form } from 'react-bootstrap';
import axios from 'axios';

const Category = ({ allCat, makeSlug }) => {

  // // make slug
  // function makeSlug(data){
  //   let arr = data.split(" ");
  //   return arr.join('-').toLowerCase();
  // }

  // Category form All State
  const [catForm, setCatForm ] = useState(false);
  const [catEditForm, setCatEditForm ] = useState(false);
  const [addCat, setAddCat] = useState('');
  const [editCat, setEditCat] = useState({
    id  : '',
    name : '',
    slug  : ''
  });


  // Form show
  const handleFormShow = () => {
    setCatForm(true);
    setCatEditForm(false);
  }


  // Category store
  const handleFormSubmit = (e) => {
    e.preventDefault();

    axios.post('http://localhost:5050/categories', {
      id    : '',
      name  : addCat,
      slug  : makeSlug(addCat)
    })
    .then( res => {
      setCatForm(false);
      setAddCat('');
    })
    .catch( (err) => {
      console.log(err);
    });


  }


  // Cat delete
  let handleCatDelete = (id) => {
    // e.preventDefault();

    axios.delete('http://localhost:5050/categories/' + id)
    .then( res => {
   
    })
    .catch( (err) => {
      console.log(err);
    });

  }


  // Cat edit
  let handleCatEdit = (id) => {

    axios.get('http://localhost:5050/categories/' + id)
    .then( res => {
      setEditCat({
        id   : res.data.id,
        name   : res.data.name,
        slug   : res.data.slug
      });
    })
    .catch( (err) => {
      console.log(err);
    });

    setCatEditForm(true);
    setCatForm(false);


  }


  // cat update
  let handleFormUpdate = (e) => {
    e.preventDefault();

    axios.put('http://localhost:5050/categories/' + editCat.id, {
      id   : '',
      name   : editCat.name,
      slug   : makeSlug(editCat.name)
    })
    .then( res => {
      setCatEditForm(false);
    })
    .catch( (err) => {
      console.log(err);
    });


  }




  return (
    <>
    <Button onClick={ handleFormShow } className='btn-sm mb-2' variant='info'>Add Category</Button>
    <Card>
    <Card.Header>
      <h4 className='text-center'>All Categories</h4>
    </Card.Header>
    <Card.Body className='student-table shadow'>
        <Table>
          <thead>
              <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>Slug</th>
                  <th>Action</th>
              </tr>
          </thead>
          <tbody>

            {
              allCat.map( (data, index) => 
              <tr>
                <td>{ index + 1 }</td>
                <td>{ data.name }</td>
                <td>{ data.slug }</td>
                <td>
                  <Button onClick={ (e) => handleCatEdit(data.id) } className='btn-sm' variant='warning'>Edit</Button>
                  <Button onClick={ (e) => handleCatDelete(data.id) } className='btn-sm' variant='danger'>Delete</Button>
                </td>
              </tr>
              )
            }
          

          </tbody>
      </Table>
    </Card.Body>
    </Card>

    {/* Category Add Form */}

    {
      catForm && 
      <Container>
        <Row>
          <Col md={ 6 } className='m-auto mt-3'>
            <Card className='shadow p-3'>
              <div className="addCat">
                <h2 className='mt-2 text-center'>Add Category</h2>
                  <hr />
                  <Form onSubmit={ handleFormSubmit } method='POST'>
              
                    <Form.Group>
                        <Form.Label>Category Name</Form.Label>
                        <Form.Control value={ addCat } onChange={ (e) => setAddCat(e.target.value) }></Form.Control>
                    </Form.Group>

                    <Button type='submit' variant='info' className='btn-sm mt-3 text-center'>Add Category</Button>

                  </Form>
              </div>
            </Card>
          </Col>
        </Row>
      </Container>

    }


        {/* Category Edit Form */}

        {
      catEditForm && 
      <Container>
        <Row>
          <Col md={ 6 } className='m-auto mt-3'>
            <Card className='shadow p-3'>
              <div className="addCat">
                <h2 className='mt-2 text-center'>Edit Category</h2>
                  <hr />
                  <Form onSubmit={ handleFormUpdate } method='POST'>
              
                    <Form.Group>
                        <Form.Label>Category Name</Form.Label>
                        <Form.Control value={ editCat.name } onChange={ (e) => setEditCat({ ...editCat, name : e.target.value }) }></Form.Control>
                    </Form.Group>

                    <Button type='submit' variant='info' className='btn-sm mt-3 text-center'>Update Category</Button>

                  </Form>
              </div>
            </Card>
          </Col>
        </Row>
      </Container>

    }

    </>
  )
};

export default Category;