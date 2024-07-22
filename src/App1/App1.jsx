import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import './app1.css'
import {per} from './Data1'
import DatesCount from './components/DatesCount'
import DatesList from './components/DatesList'
import DatesAction from './components/DatesAction'

export default function App() {

  const[personData,setPersonData] = useState(per)

  const onDelete = () => {
    setPersonData([])
  }
  const onViewData = () => {
    setPersonData(per)
  }

  useEffect(() => {
    setPersonData([])
  },[])

  return (
    <div className='font color-body'>
      <Container className='py-5'>
        
        <DatesCount person={personData} />
        
        <DatesList per={personData} />
        
        <DatesAction deleteData={onDelete} viewData={onViewData} />
        
      </Container>
    </div>
  )
}
