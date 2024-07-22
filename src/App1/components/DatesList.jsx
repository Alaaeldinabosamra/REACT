import React from 'react'
import { Col, Row } from 'react-bootstrap'

export default function DatesList({per}) {
  return (
    <div>
        <Row className='justify-content-center'>
          <Col sm="8" className=''>
            <div className='rectangle p-2'>
              
                {per.length ? (per.map((per) => {
                  return (
                    <div className='d-flex border-bottom mx-3 my-2' key={per.id}>
                    <img className='img-avatar' src={per.img} alt="" />
                    <div className='px-3'>
                      <p className='d-inline fs-5'>{per.name}</p>
                      <p className='fs-6'>{per.date}</p>
                    </div>
                  </div>
                  )
                })): <h2 className='p-5 text-center'>لا يوجد مواعيد اليوم</h2>}
              
            </div>
          </Col>
        </Row>
    </div>
  )
}
