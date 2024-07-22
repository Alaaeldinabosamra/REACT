import React, { useState } from 'react'
import './app2.css'
import { Col, Container, Row } from 'react-bootstrap'
import FormInput from './components/FormInput'
import QAlist from './components/QAlist'
import { question } from './components/Data'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App2() {

  const[data,setData] = useState(question)

  // Adding new item
  const addItem = () => {
    localStorage.setItem("items",JSON.stringify([...question]))
    setData([...question])
    notify("تم الإضافة بنجاح" , "Success")
  }

  // Delete All
  const deleteAllItems = () => {
    localStorage.removeItem("items")
    question.splice(0, question.length)
    setData([])
    notify("تم حذف الكل بنجاح" , "Success")
  }

  // Delete One item in array
  const deleteOneItem = (items) => {
    localStorage.setItem('items', JSON.stringify([...items]))
    setData([...items])
    notify("تم حذف السؤال بنجاح" , "Success")
    if(items.length <= 0)
    {
      deleteAllItems()
    }
  }

  const notify = (message, type) => {
    if(type ==="Error")
      toast.error(message)
    else if(type ==="Success")
      toast.success(message)
    else
    toast(message);
  }

  return (
    <div className='font text-center color-body'>
        <Container>
            <Row className='justify-content-center'>
              <Col sm='4'>
                <div className='fs-3 text-center py-3'>اسئله واجوابه شائعة</div>
              </Col>
              <Col sm='8'>
                <FormInput onAdd = {addItem} notify={notify} />
                <QAlist data={data} deleteOneItem={deleteOneItem} />
                {
                  localStorage.getItem("items") != null ? (<button onClick={deleteAllItems} className='btn-color w-100 my-3'>مسح الكل</button>) : null
                }
              </Col>
            </Row>
            <ToastContainer />
        </Container>
    </div>
  )
}

export default App2