import React, { useState } from "react";
import { Button, Form, Nav, Navbar,NavDropdown, Container, Row } from 'react-bootstrap'
import './navigation.css'

function Navigation({filterBySearch}) {

  const [searchValue, setSearchValue] = useState('')

  const onSearch = (e) => {
    filterBySearch(searchValue)
    setSearchValue('')
    e.preventDefault();
  }

  return (
      <Row>
        <Navbar bg="dark" expand="lg">
          <Container>
            <Navbar.Brand href="#">
              <div className="brand-color" >
              مطعم جديد
              </div>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: "100px" }}
                navbarScroll
              >
              </Nav>
              <Form className="d-flex">
                <Form.Control
                  type="text"
                  placeholder="ابحث..."
                  className="mx-2"
                  aria-label="ابحث"
                  onChange={(e) => setSearchValue(e.target.value)}
                  value={searchValue}
                />
                <button onClick={onSearch} className="btn-search">ابحث</button>
              </Form>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Row>
  );
}

export default Navigation;
