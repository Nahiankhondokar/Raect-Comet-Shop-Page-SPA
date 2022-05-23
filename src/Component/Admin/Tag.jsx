import React, { useState } from 'react';
import { Card, Table, Button, Form, Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Tag = ({ allTag, makeSlug }) => {



  // Edit tag
  const [ tagEdit, setTagEdit ] = useState({
    id    : '',
    name  : '',
    slug  : ''
  });
  const [ tagEditForm, setTagEditForm ] = useState(false);


  // tag delete
  const handleTagDelete = (e, id) => {
    e.preventDefault();

    axios.delete('http://localhost:5050/tags/' + id )
    .then( res => {

    })
    .catch( (err) => {
      console.log(err);
    });

  }

  // TAg edit 
  const handleTagEdit = (id) => {
    
    axios.get('http://localhost:5050/tags/' + id)
    .then( res => {
      setTagEdit({
        id    : res.data.id,
        name   : res.data.name,
        slug   : res.data.slug
      });
      // console.log(res.data);
    })
    .catch( (err) => {
      console.log(err);
    });

    setTagEditForm(true);

  }

  // tag update
  const handleTagUpdate = (e) => {
    e.preventDefault();

    let slug = makeSlug(tagEdit.name);
    axios.patch('http://localhost:5050/tags/' + tagEdit.id, {
      id : '',
      name : tagEdit.name,
      slug : slug
    })
    .then( res => {
      setTagEditForm(false);
    })
    .catch( (err) => {
      console.log(err);
    });

  }


  return (
    <>
    <Link to='/admin/add-tag' className='btn btn-primary btn-sm mb-2' onClick='' variant='info'>Add Tag</Link>
    <Card>
    <Card.Header>
      <h2 className='text-center'>All Tags</h2>
    </Card.Header>
    <Card.Body className='student-table shadow'>
        <Table>
          <thead>
              <tr>
                  <th>#</th>
                  <th>Tag Name</th>
                  <th>Slug</th>
                  <th>Action</th>
              </tr>
          </thead>
          <tbody>

            {
              allTag.map( (data, index) => 
              <tr>
                <td>{ index + 1 }</td>
                <td>{ data.name }</td>
                <td>{ data.slug }</td>
                <td>
                  <Button onClick={ () => handleTagEdit(data.id) } className='btn-sm' variant='warning'>Edit</Button>
                  <Button onClick={ (e) => handleTagDelete(e, data.id ) } className='btn-sm' variant='danger'>Delete</Button>
                </td>
              </tr>
              )
            } 
          

          </tbody>
      </Table>
    </Card.Body>

    
    </Card>




              {/* Tag Edit Form */}

      {
        tagEditForm && 
      <Container>
        <Row>
          <Col md={ 6 } className='m-auto mt-3'>
            <Card className='shadow p-3'>
              <div className="editTag">
                <h2 className='mt-2 text-center'>Edti Tag</h2>
                  <hr />
                  <Form onSubmit={ (e) => handleTagUpdate(e) } method='POST'>
              
                    <Form.Group>
                        <Form.Label>Tag Name</Form.Label>
                        <Form.Control value={ tagEdit.name } onChange={ (e) => setTagEdit({ ...tagEdit, name : e.target.value }) }></Form.Control>
                    </Form.Group>

                    <Form.Group>
                        <Form.Control type='hidden' value={ tagEdit.id }></Form.Control>
                    </Form.Group>

                    <Button type='submit' variant='info' className='btn-sm mt-3 text-center'>Update Tag</Button>

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

export default Tag;