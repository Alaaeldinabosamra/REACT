import React from 'react'
import { Accordion } from 'react-bootstrap'
import { question } from './Data'

function QAlist({data , deleteOneItem}) {
    const dataLocal = JSON.parse(localStorage.getItem("items"))
    //  delete one item from array
    const onDeleteItem = (id) => {
        if(localStorage.getItem("items") != null){
            const index = question.findIndex((item) => {item.id === id});
            question.splice(index , 1)
            deleteOneItem(question);
        } 
    }

  return (
    <div>
        <Accordion defaultActiveKey="0">
            {
                localStorage.getItem("items") != null ? (dataLocal.map((item ,index) => {
                    return(
                        <Accordion.Item key={index} eventKey={item.id}>
                            <Accordion.Header>
                                <div className='m-auto'>{item.q}</div>
                            </Accordion.Header>
                            <Accordion.Body className='text-end'>
                                <div className="px-3 d-inline">{item.a}</div>
                                <button onClick={ () => {
                                    onDeleteItem(item.id)
                                }} className='btn-color'>مسح</button>
                            </Accordion.Body>
                        </Accordion.Item>
                    )
                })) : <h2 className='fs-4 text-center p-5'>لا يوجد بيانات</h2>
            }
        </Accordion>
    </div>
  )
}

export default QAlist