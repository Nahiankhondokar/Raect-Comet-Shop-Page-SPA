import axios from 'axios';
import React, { useState } from 'react';
import { Form, Button, Row, Col, Container } from 'react-bootstrap';


const AddTag = () => {

    // Get Tag
    const [tag, setTag] = useState('');

    // make slug
    function makeSlug(data){
        let arr = data.split(" ");
        return arr.join('-').toLowerCase();
    }


    // Tag Store
    const handleFormSubmit = (e) => {
        e.preventDefault();

        axios.post('http://localhost:5050/tags', {
            id      : '',
            name    : tag, 
            slug    : makeSlug(tag)
        })
        .then( res => {
            setTag('');
        })
        .catch( (err) => {
            console.log(err);
        });
    }

  return (
    <>
        <section className="add-tag">
        <Container>
            <Row>
                <Col md={ 6 }>
                    <h1>Add New Tag</h1>
                    <hr />
                    <Form onSubmit={ handleFormSubmit } method='POST'>
                
                        <Form.Group>
                            <Form.Label>Tag Name</Form.Label>
                            <Form.Control value={ tag } onChange={ (e) => setTag(e.target.value) }></Form.Control>
                        </Form.Group>

                        <Button type='submit' variant='info' className='btn-sm mt-3 text-center'>Add Tag</Button>

                    </Form>
                </Col>
                <Col md={6}></Col>
            </Row>
        </Container>
        </section>
    </>
  )
};

export default AddTag;