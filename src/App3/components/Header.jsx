import React from 'react'
import { Col, Row } from 'react-bootstrap'
import './header.css'
import { Roll } from 'react-reveal'


function Header({filterByCategory, allCategory}) {

    //  to filter by category
    const onFilter = (cat) => { 
        filterByCategory(cat)
    }
  return (
    <>
        <Row>
        <Col sm="12" className='justify-content-center text-center'>
            <div className='title'>
                قائمة الطعام
            </div>
            <div className='d-flex justify-content-center'>
            <p className='underline'></p>
            </div>
        </Col>
        </Row>
        <Row className='my-2 mb-5'>
            <Col sm="12" className='d-flex justify-content-center'>
            <Roll>
                {
                    allCategory.length >= 1 ? (allCategory.map((cat) => {
                        return(
                            <div key={cat}>
                                <button onClick={() => onFilter(cat)} className='btn mx-2'>{cat}</button>
                            </div>
                        )
                    })) : <h4>لا يوجد تصنيفات</h4>
                }
            </Roll>
                
            </Col>
        </Row>
    
    </>
  )
}

export default Header