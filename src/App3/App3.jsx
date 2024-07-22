import React, { useState } from 'react'
import  Navigation  from './components/Navigation'
import Header from './components/Header'
import ItemList from './components/ItemList'
import { Container } from 'react-bootstrap'
import { items } from './Data'


function App3() {
  
    const [itemsData,setItemsData] = useState(items)

    // get all cat unique
    const allCategory = ["الكل",...new Set(items.map((i) => {
        return i.category
    }))]

    // filter by category
    const filterByCategory = (cat) => {
        if(cat === "الكل")
        {
            setItemsData(items)
        } else {
            const newArr= items.filter((item) => {
                return item.category === cat
            })
        setItemsData(newArr)
        }
    }

    // filter by search form
    const filterBySearch = (word) => {
        if(word !== "")
        {
            const newArr = items.filter((item) => item.title === word)
            setItemsData(newArr)
            
        } 
    }

    return (        
        <>
            <Navigation filterBySearch={filterBySearch} />
            <Container>
                <Header filterByCategory={filterByCategory} allCategory={allCategory} />
                <ItemList itemsData = {itemsData} />
            </Container>
        </>
  )
}

export default App3