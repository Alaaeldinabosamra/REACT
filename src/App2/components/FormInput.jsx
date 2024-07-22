import React, { useState } from 'react'
import { Col, Form, Row } from 'react-bootstrap'
import { question } from './Data'

function FormInput({onAdd , notify}) {
    const[qu, setQu] = useState('')
    const[an, setAn] = useState('')
    
    // to take the input data
    const handleQuestion = (e) => {
        setQu(e.target.value)
    }
    // to take the input data
    const handleAnswer = (e) => {
        setAn(e.target.value)
    }

    // to push data on array
    const addNewItem = (e) => {
    e.preventDefault();
    if (qu && an) {
      question.push({ id: Math.random(), q: qu, a: an });
      setQu('');
      setAn('');
      onAdd();
    } else {
      notify("من فضلك اكمل البيانات" ,"Error")
      
    }
  };

  return (
    <Row className='py-4 d-flex justify-content-center'>
        <Col sm="5">
            <Form.Control value={qu} onChange={handleQuestion} type="text" placeholder="ادخل السؤال" />
        </Col>

        <Col sm="5">
            <Form.Control value={an} onChange={handleAnswer} type="text" placeholder="ادخل الإجابة" />
        </Col>

        <Col sm="2">
            <button onClick={addNewItem} className='btn-color w-100' type="submit">
                إضافة
            </button>
        </Col>
    
    </Row>
  )
}

export default FormInput